// import { createServer } from 'http';
// const port = 3000;
// const hostname = '127.0.0.1';
// const server = createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/text' }); 
// // Content-Type tells the client what kind of data the server is sending or recieving.

// // Content-Type can be: 
// // text/html - HTML pages,
// //  text/plain - plain text, 
// // text/json / application/json - json, API's,
// // image/* (png, jpeg, gif, webp) - images, 
// // application/x-www-form-urlencoded - form submits, 
// // multipart/form-data - file uploads, 
// // application/oclet-stream - Binary Data

// res.end('Hello World!\n');
// // res.end('<h1>Hello world form day 8</h1>');
// // res.end(JSON.stringify(({name: "John Doe", age: 45, occupation: "Agent"})));
// });

// server.listen(port, hostname, () => {
//     console.log('Listening on 127.0.0.1:3000');
// });


// Express

import express from 'express';
import {fileURLToPath} from 'url';
import { join, dirname } from 'path';
// const express = require('express');
// const {join} = require('path');
const app = express();
const PORT = 3000;
import { appendFile } from 'fs';

// using ES6 module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.get('/', (req, res) => {
//     res.send("Hello from GET Method");
// }) // get the data from server to client
// app.get('/contact', (req, res) => {
//     res.send("Hello from GET Method Contact");
// }) // get the data from server to client
// app.get('/about', (req, res) => {
//     res.send("Hello from GET Method ABOUT Page");
// }) // get the data from server to client

// Worst way to create API endpoints
// app.get('/blog/java', (req, res) => {
//   res.send("This is Java Blogs");
// })
// app.get('/blog/cpp', (req, res) => {
//   res.send("This is cpp Blogs");
// })
// app.get('/blog/python', (req, res) => {
//   res.send("This is Python Blogs");
// })

// Chain of REST API requests
// app.get('/', (req, res) => {
//     res.send("Hello world get");
// }).post('/', (req, res) => {
//     res.send("Hello world post");
// }).put('/', (req, res) => {
//     res.send("Hello world put");
// }).delete('/', (req, res) => {
//     res.send("Hello world delete");
// })

// app.get('/blog', (req, res) => {
//     res.send("Hello world blog get");
// }).post('/blog', (req, res) => {
//     res.send("Hello world blog post");
// }).put('/blog', (req, res) => {
//     res.send("Hello world blog put");
// }).delete('/blog', (req, res) => {
//     res.send("Hello world blog delete");
// })

app.use(express.static('public')); // Built-in middleware

// app.get('/:hero', (req, res) => {
//     const {hero} = req.params;
//     const cHero = hero.charAt(0).toUpperCase() + hero.slice(1);
//     res.send(`This blog is about ${cHero}`);
// })

// Best way to create API Endpoints using dynamic Routing
// app.get('/blog/:hero', (req, res) => {
//     console.log(req.params); // saves the parameters from the url.
//     console.log(req.query); // saves the queries from the url.
//     console.log(`The Theme is ${req.query.theme}`);
//     // console.log(req); // request body
//     res.send(`This Blog is about ${req.params.hero}`);
// })

// app.post('/', (req, res) => {
//   res.send("Hello from POST Method");
// }) // post the data from client to 

// app.put('/', (req, res) => {
//   res.send("Hello from PUT Method");
// }) // update the whole data

// app.patch('/', (req, res) => {
//   res.send("Hello from PATCH Method");
// }) // update part of the data

// app.delete('/', (req, res) => {
//   res.send("Hello from DELETE Method");
// }) // delete the data

app.get('/', (req, res) => {
    appendFile('logs.txt', `${req.method} Method is Hit at ${Date(Date.now)}\n`)
  res.send("GET Method Initiated");
}).post('/', (req, res) => {
    appendFile('logs.txt', `${req.method} Method is Hit at ${Date(Date.now)}\n`)
  res.send("POST Method Initiated");
}).put('/', (req, res) => {
    appendFile('logs.txt', `${req.method} Method is Hit at ${Date(Date.now)}\n`)
  res.send("PUT Method Initiated");
}).patch('/', (req, res) => {
    appendFile('logs.txt', `${req.method} Method is Hit at ${Date(Date.now)}\n`)
  res.send("PATCH Method Initiated");
}).delete('/', (req, res) => {
    appendFile('logs.txt', `${req.method} Method is Hit at ${Date(Date.now)}\n`)
  res.send("DELETE Method Initiated");
})
// app.get('/:name', (req, res)=>{
//     res.status(202).json({name: req.params.name})
// })

// app.get('/page', (req, res) => {
//     // Work only on CommonJs module

// //   res.sendFile('templates/page.html', 
// //     {root : join(__dirname)} // Specifying Root
// //   );
//     // res.status(200).json({message: "The data is saved successfully"})
//     // res.sendFile(join(__dirname, 'templates/page.html')) // specifying absolute path
// })

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
})












