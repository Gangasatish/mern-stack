// Node.Js is a runtime environment that let us run Javascript outside the browser. Majorly on the Server.
// It is built on Chrome's V8 Engine.
// Node.Js is:
// Single Threaded - the program has only one thread to execute code one task at a time.
//  Event-driven - program waits for events and reacts when those events happens.
// non-blocking I/O - asyncronous, does not wait for slow operations.

// import { createServer } from 'node:http';
// const {createServer} = require('http');
// const server = createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Server is running!!!\n');
// });
// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//     console.log('App is Listening on 127.0.0.1:3000');
// });



// OS - The OS module provides system level information like CPU, memory, OS type, OS versin, uptime, etc.
// const os = require('os'); // commonjs module
// import {platform, arch, type} from 'os'; EcmaScript/ES6 module
// console.log("Platform:", os.platform()); // returns the OS platform
// console.log("Type:", os.type()); // returns the OS name
// console.log("Architecture:", os.arch()); // returns CPU architecture
// const osType = os.type();
// if (osType === 'Windows_NT') {
//     console.log("Download for Windows");
    
// }
// else if (osType === 'Linux') {
//     console.log("Download for Linux");
// }
// else if (osType === 'MacOS') {
//     console.log("Download for Darvin");
// }
// console.log("CPU:", os.cpus()); //  returns details about CPU cores.
// console.log("CPU Cores:", os.cpus().length); //  returns details about CPU cores.
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
// console.log("Uptime:", os.uptime());
// console.log("User Information:", os.userInfo());
// console.log("Hostname:", os.hostname());
// console.log("Network:", os.networkInterfaces())

// import { name, occupation, greeting } from './math.js';
// console.log(name);
// console.log(occupation);
// console.log(greeting());
// const { log, error, warn } = require('console');
// log("Hello world");
// error("Hello world error");
// warn("Hello world warn");

// import data from './math.js'
// console.log(data);
// (function(exports, require, module, __filename, __dirname){
//     console.log(exports, require, module, __filename, __dirname);
//     // CommonJs module Wrapper
// })
// (function(){
    // IIFE -  Immediately Involked Function Expression
// })

import fs from 'fs';
// console.log("Writing in progress")
// const text = "Some text";
// fs.writeFile('text.txt', text, ()=>{
//     console.log("Text has been appended.");
// });

// print buffer as output
// const data = fs.readFileSync("text.txt");
// console.log(data);

// prints the data correctly as encoding is passed
// const data = fs.readFileSync("text.txt", 'utf-8');
// console.log(data);

//prints the data correctly as it the buffer is getting changed to string using toString()
// const data = fs.readFileSync("text.txt");
// console.log(data.toString());

// console.log(fs.readFileSync("text.txt", 'utf-8'));
// fs.readFile('text.txt', 'utf-8', (err, data)=>{
//     console.log(`Data: ${data}`);   
//     console.log(`Error: ${err}`);   
// })

/*
    Types of Encodings: 
    utf-8 - for normal text files
    ascii - for legacy english only
    latin1 - for legacy systems
    hex - for debugging bytes
    base64 - for images/binary transfer
    utf6le - for windows text
*/

// fs.appendFile('text.txt', 'This is another line from appendFile\n', ()=>{
//     console.log("File is appended successfully");
// })
// fs.appendFileSync('logs.txt.txt', `You logged in at ${Date(Date.now())}`);
// fs.appendFile('logs.txt', `You logged in at ${Date(Date.now())}\n`, () => {
//   console.log("Logged in Successfully!");
// }
// );

// console.log("Writing completed")