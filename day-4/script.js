//prototype topic
//everything in javascript is object
const hero = {
    alias: "Batman",
    name: "Hemanth",
    herocall: function(){
        return `${this.name} is ${this.alias}`;
    }
}
console.log(hero);

let uname='Clark Kent';
let number= 10;
//object
const obj1= {
    fname: "Diana",
    lname: "Prince"
}
console.log(obj1)
//prototypical inherit with proto
//const obj2 = Object.create(obj1)   ->method 1 it is recomanded then __proto__
const obj2= {
    __proto__: obj1,
}
console.log(obj2.fname);     //-->method2 not recommanded
//to get the prototype of the said object
console.log(Object.getPrototypeOf(uname));
console.log(Object.getPrototypeOf(number));
// console.log(Object.setPrototypeOf(number,proto));
//prototype -> this is like a blueprint that is sitting on the constructor