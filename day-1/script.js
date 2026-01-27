//HOISTING 


//x = 10;
//console.log("value of x is ", x);
//var x = 10;
//myFunc1();
//function myFunc = () => {
//    console.log("HELLO WORLD");
//}
//const myFunc2 = ()=> {
//    console.log("HELLO WORLD 1");
//}
//myFunc2();


//DEBOUNCING


// function debounce(func, delay){
//     let timer;
//     return function(...args){
//         console.log(args);
//         clearTimeout(timer); // clear previous timers
//         timer = setTimeout(()=>{ // start a new timer
//             func(...args);
//         }, delay);
//     }
// }
// const searchAPI = (query) =>{
//     console.log(`searching for ${query}`);
// }
// const debounceSearch = debounce(searchAPI, 1000);
// debounceSearch("M");
// debounceSearch("ME");
// debounceSearch("MER");
// debounceSearch("MERN S");
// debounceSearch("MERN ST");
// debounceSearch("MERN STA");
// debounceSearch("MERN STAC");
// debounceSearch("MERN STACK");


//THROTTLING


function throttle(func, delay){
    let lastTime = 0;
    return function(...args){
        const presentTime = Date.now();
        if(presentTime - lastTime < delay){
            return
        }
        lastTime = presentTime;
        return func(...args);
    }
}
function chat(message){
    console.log(`message is ${message}`);
}
const throttleMessage = throttle(chat, 3000);
throttleMessage("Hi");
throttleMessage("Hello");
throttleMessage("Hi again");
throttleMessage("Hello there");

