// console.log("The value of x is", x);
// // function add(){
// //     return 2+2;
// // }
// var x = 10;
// console.log("The value of x is", x);

// const add = function(){
//     const a = 10;
//     const b = 20
//     function addAgain(){
//         function AddAgainRetruns(){

//         }
//     }
//     return a+b;
// }
// const add2 = ()=>{
//     return 2+2;
// }

// Callback function - A function that is passed into another function that is to be executed later when certain task has been completed.

// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data is cleaned succesfully")
//     }, 2000);
// }
// fetchData((data)=>{
//     console.log(data);
// });


// Callback Hell or Pyramid of Doom

// Disadvantages:
// Hard to Read
// Hard to Dubug
// Hard to implement error handling
// Hard to maintain

// login(user, () => {
//     getProfile(() => {
//         getOrder(() => {
//             proceedPayment(() => {
//                 sendOTP(() => {
//                     console.log("Order has been placed successfully!");
//                 })
//             })
//         })
//     })
// })

// State in Promises:
// 1. Pending
// 2. Fullfulled
// 3. Rejected

// Simple Promise
// const fetchData = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve("Data has been cleaned successfully!");
//     }, 2000);
// });

// fetchData.then((data)=>{
//     console.log(data);
// }).catch((error) => {
//   console.log(error);
// })

// Solving pyramid of Doom using Promises
// login()
// .then(getProfile)
// .then(getOrder)
// .then(proceedPayment)
// .then(sendOTP(console.log("Order has been placed successfully!")))
// .catch((error) => {
//   console.log(`Error is ${error}`);
// })

// Advantages of using Promises instead of Callback Hell:
// Code is clean
// Code easy to read
// Central error handling

// Async/Await
// async function loginProcess(){
//     try{
//         await login()
//         await getProfile()
//         await getOrder()
//         await proceedPayment()
//         await sendOTP()
//         console.log("Order has been placed cussessfully")

//     } catch(error) {
//         console.log(`Error is ${error}`);
//     }
// }

// console.log("start")
// setTimeout(() => {
//   console.log("setTimeOUt is completed")
// }, 6000);
// console.log("Finished")
