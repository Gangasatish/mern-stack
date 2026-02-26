import express from 'express'
import 'dotenv/config';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;
// const data = {
//     userId: 1001,
//     name: "Bruce Wayne",
//     alias: "Batman",
//     powers: "Filthy Rich"
// }

// iat - IssuedAt
// exp - expires in
// const token = jwt.sign(data, secret, {expiresIn: "1h", algorithm: "HS512", issuer: "FortressKey.com", subject: 'user12345', audience: 'mobile-app', notBefore: '0s', jwtid: "jwt12345"});
//Alogirthm - defines which hashing algorithm to use : HS256 (Default)
//Issuer - Identifies who issued the token
//Subject - Usually the user Id.
//Audience - Defines who the token is intended for
//notBefore - Token becomes valid only after a certain time.
//ExpiresIn - Expries the token after a certain period of time
//jwtid - Unique identifier for the token
//header - Custom JWT header
// const decoded = jwt.verify(token, secret)
// console.log(`Decoded: ${JSON.stringify(decoded, null, 2)}`);

// console.log(`Token: ${token}`);


// import crypto from 'crypto';


// function generateJWT_SECRET(length=64){
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/`~'
//     let secret = "";
//     const randomBytes = crypto.randomBytes(length);
//     for (let i = 0; i < length; i++) {
//         secret += chars[randomBytes[i] % chars.length];
//     }
//     return secret;
//     // return crypto.randomBytes(length).toString('hex')
// }
// const jwtSecret = generateJWT_SECRET()
// console.log("Secret: ", jwtSecret);
const app = express()
app.use(express.json());
const port = process.env.PORT || 3000
// import dotenv from 'dotenv';
// dotenv.config()

// dummy data for user login
// const user = {
//     id: 1,
//     email: "admin@example.com",
//     password: "abcd1234"
// }

//dummy login credentials
const User = {
    id: 1,
    email: "bruce@wayneenterprice.com",
    name: "Bruce Wayne",
    password: "abcd1234"
}
// Sign-in operation
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (name !== User.name || password !== User.password) {
        return res.status(404).json("User not found")
    };
    const token = jwt.sign(
        { id: User.id, name: User.name, email: User.email },
        secret,
        { expiresIn: '1h' }
    )
    res.json({token})

})

const tokenVerify = (req, res, next) => {
    const auth = req.headers.authorization;
    console.log("Auth:", auth)
    if (!auth) {
        return res.status(404).json({ Message: "Token Not found" })
    }
    const token = auth.split(" ")[1];
    const decoded_data = jwt.verify(token, secret)
    req.user = decoded_data;
    next()
}

app.get('/dash', tokenVerify, (req, res) => {
    res.json({message: "You are in Dashboard page", user: req.user})
})
app.get('/', (req, res) => {
  res.send("Home page");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))