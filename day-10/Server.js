import express from 'express'
import blog from './Routes/blog.js'
import student from './Routes/student.js'
import teacher from './Routes/teacher.js'
import home from './Routes/home.js'

const app = express();
const port = 3000;
// middleware is a function that runs in between request and response body and which is responsible for manipulating the request body.
//middleware to get the routes.

// Types of Middlewares
// 1. Application-level middleware - Runs on every request
        // A. Logging
        // B. Authentication
        // C. Body parsing
// 2. Router-level Middleware - Same as Application-level middleware, but applies to a specific route.
        // A. Runs only for routes

// 3. Built-in Middleware - Provided by Express itself
    // A. Read request body
    // B. Serving css, js, or images.

// 4. Error-handling Middleware - captures errors and has four parameters.
    // A. API get crashed
    // DB fails
    // Custom error

// 5. Third-party middleware - Installed using node package manager (npm)
    // Example - cors, body-parser, helmet, etc.

// 6. Route-specific Middleware - Runs only for a specific route.
    // A. Role-based access
    // B. Protected routes

// const errorMiddleware = (error, req, res, next) => {
//   console.log(`The error is ${error}`);
// //   next();
//     res.status(500).json({message: "Something went wrong!"})
// }

// app.use(errorMiddleware)

// not a good practice
// app.use((req, res, next) => {
//     console.log('This is middleware 1');
// })

// Built-in middleware
// app.use(express.static('Public'));
// app.use(express.json());
// app.use(express.urlencoded());

// Demo authentication for / route 
function isAuth(req, res, next){
    const isLoggedIn = false;
    if(isLoggedIn)
        next();
    else
        res.status(401).json({message: "Unauthorized Access!"});
}

//localStorage in JS - Store some data locally in your device
// Whenever a data is saved into localStorage, it gets converted to string.

//Methods:
// localStorage.setItem("isAuth", "false"); // Set item
// localStorage.getItem("isAuth"); // get item
// localStorage.removeItem("isAuth"); // remove item
// localStorage.clear(); // clear all items


// Application-level Middleware
const m1 = (req, res, next)=>{

    console.log("This is middleware 1");
    // res.json({message: "Middleware 1 was invoked"})
    next(); // passes the control to the next middleware of api route.
}
const m2 = (req, res, next)=>{
    console.log("This is middleware 2");
    next();
}

app.use(m1);
app.use(m2);

// third-party middleware
// app.use(cors())
// app.use(bodyParser())

app.use('/blog', blog);
app.use('/student', student);
app.use('/teacher', teacher);
app.use('/home', home);
app.get('/', isAuth, (req, res) => {
  res.send(`<h1>This is Index Page and the method is ${req.method}</h1>`)
})
// import {dirname} from 'path';
// import { fileURLToPath } from 'url';

// recover filename and directory name using path and url built-in modules.
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


app.listen(port, () =>{ 
    console.log(`Example app listening on port ${port}!`)
    // console.log(`URL: ${import.meta.url}`)
})