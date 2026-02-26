import express from 'express'
import 'dotenv/config';
import jwt from 'jsonwebtoken';

// RBAC (Role-Based Access Control) - is a method to control which type of user can access what functinos in an application based on their role.
/* Instead of giving permissions to individual users, we can:
1. Create some roles
2. Assign permissions to the roles
3. Assign roles to the users
*/

// import crypto from 'crypto';
// function generateJWT_SECRET(length = 64) {
//         return crypto.randomBytes(length).toString('hex')
// }
// const jwtSecret = generateJWT_SECRET()
// console.log(jwtSecret)


const app = express()
const port = 3000
app.use(express.json());

// simuating database
const users = [
    { id: 1, username: "bruce wayne", password: 'abcd1234', role: 'admin' },
    { id: 1, username: "damian wayne", password: 'efgh5678', role: 'user' },
]


// authentication middleware for JWT
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided!" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is invalid!" })
    }
}
// authorize middleware for RBAC
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({ message: "Access Denied" })
        }
        next()
    }
}

// Routes

// login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid Credentials!" })
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
    res.json({ token })
})
// public route
app.get('/', (req, res) => {
    res.send('<h1>This is Home Page</h1>')
})

// only available to user role
app.get('/dashboard', authenticate, (req, res) => {
    res.send('<h1>This is the Dashboard Page</h1>')
})
// only availbale to admin role
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
    res.send('<h1>This is the Admin Page</h1>')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// enum (enumeration) - A fixed set of allowed values

// new Schema({
//     username: String,
//     password: String,
//     role: {
//         enum: ['admin', 'user'],
//         default: 'user'
//     }
// })