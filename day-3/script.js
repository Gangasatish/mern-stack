//problem in redeclaring variable using var
console.log("Script loaded successfully.");
var a = 10;
var b = 20;
console.log("Sum of a and b is: " + (a + b)); 
var a = "Hello, ";
var b = "World!";
console.log(a + b);

//solution using let
let x = 5;
let y = 15;
console.log("Sum of x and y is: " + (x + y));

//problem in function scope using var
function varTest() {
    var i = 1;
    if (true) {
        var i = 2;  // same variable!
        console.log("Inside if block, i = " + i); // Outputs 2
    }
}
varTest();
console.log("Outside function, i is not defined: " + (typeof i)); // Outputs undefined
//solution using let
function letTest() {
    let j = 1;
    if (true) {
        let j = 2;  // different variable
        console.log("Inside if block, j = " + j); // Outputs 2
    }
    console.log("Outside if block, j = " + j); // Outputs 1
}
letTest();
console.log("Outside function, j is not defined: " + (typeof j)); // Outputs undefined
//problem in loops using var
for (var k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log("Using var in loop: " + k); // Outputs 3 three times
    }, 100);
}
//solution using let
for (let m = 0; m < 3; m++) {
    setTimeout(function() {
        console.log("Using let in loop: " + m); // Outputs 0, 1, 2
    }, 100);
}

//const example
const PI = 3.14;
console.log("Value of PI: " + PI);
//PI = 3.14159; // This will cause an error
//console.log("New value of PI: " + PI);
const colors = ["red", "green", "blue"];
colors.push("yellow"); // This is allowed
console.log("Colors array: " + colors);
//colors = ["cyan", "magenta"]; // This will cause an error
//console.log("New colors array: " + colors);
const person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed
console.log("Person object: " + JSON.stringify(person));
//person = { name: "Bob", age: 30 }; // This will cause an error
//console.log("New person object: " + JSON.stringify(person));


let hero = {
    name: "Clark Kent",
    alias: "Superman",
    age: "43",
    power: ["HeatVision", "Super Strength", "Flight", "Intelligent"],
    allies: {
        ally1: "Diana Prince",
        ally2: "Batman",
        ally3: "Aquaman"
    },
    job: function(){
        console.log("My job is in daily Planet")
    }
}
console.log("Name:",hero.allies);


const name = function(name){
    console.log("the name is:",name);
}
name("Diana Prince");
const name2=(name) => {
    console.log(`the name is${name}`);
}
name2("john hemanth");


document.getElementById('id1').innerText = "This is the new text";
document.getElementById('id2').innerHTML = "<h1>This is the new another text</h1>";
//getElementByClass
const classElements = document.getElementsByClassName("myClass");
classElements[0].style.color = "red";
classElements[1].style.color = "blue";

// getElementsByTagName
const headings = document.getElementsByTagName("h3");
headings[0].style.backgroundColor = "yellow";
headings[1].style.backgroundColor = "lightgreen";
const btn1=document.getElementById("btn1");
btn1.addEventListener('click',function(){
    alert("your computer is now destroyed!");
})



