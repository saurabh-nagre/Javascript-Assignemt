// 1. garbage collector in js
// -> Garbage collector removes the memory to which no variable is referencing;

function garbage(){
    let first_obj = {name:'saurabh'}
    // here {name:'saurabh'} holding some memory, to which first_obj is referencing.
    
    let second_obj = first_obj;
    // here second_obj is now also referencing to the same memory address pointed by first_obj

    first_obj = null;
    // still second_obj is pointing to {name:'saurabh'}
    second_obj = null

    // -> thus now no variable is referencing to memory address of {name:'saurabh'}, 
    // -> so garbage collector removes the memory assign. 
}


// 2. Difference between arrow func and traditional func. (binding)


// argment binding

// traditional function has 'arguments' as a variable

function traditional(){
    console.log(arguments)
}

traditional([1,3,4,5])

// arrow functions don't have arguments as a variable

var arrow = ()=>{
    console.log(arguments)
    // gives error
}

arrow(4,23,4)



// Arrow function don't have explicit this
// traditional function 

var person = {
    age: 50,

    outerFunc: function (){
        console.log(this.age)
        console.log("Outer function :", this)
        // logs person object

        function innerFunc(){
            console.log("innner traditional Function :",this)
            // logs window object
        }
        innerFunc();
    }
 }

 person.outerFunc();

//  arrow function

var person = {
    age: 50,

    outerFunc: function () {
        console.log(this.age)
        console.log("Outer function :", this)
        // logs person object

        var innerFunc = ()=> {
            
            console.log("innner traditional Function :", this)
            // logs person object
        }
        innerFunc();
    }
}

person.outerFunc();



// 3. hoisting
    
// var hoisting

a = 10

console.log(a)
//prints 10
var a;


// function hoisting

fun()

function fun(){
    console.log('hello world')
}

// error for let, const

b = 5
console.log(b)
// gives error
let b;

// 4. tdz(temporal dead zone)

    // let and const are also hoisted,
    // but are put in tdz
    // Variables put in tdz from beginning of function to the variable declaration
    // We can't access variables in tdz

// 5.  script tag attributes 
    // crossorigin
            // anonymous - A cross - origin request is performed.No credentials are sent
            // use - credentials - A cross - origin request is performed.Credentials are sent(e.g.a cookie, a certificate, a HTTP Basic authentication)
    // integrity = uses hash
    // referrerpolicy

    //script tag async and defer
        //async = boolean value indicate that browser should download the script asynchronously.
        //defer = boolean value shows that browser should load the js after the document is parsed, i.e.prevent the DOMContentLoaded event to fire


// 6. sort function with strings 

let arr = ["acd", "dcd", "fde", "rfs", "Acrd"]
arr = arr.map((val) => val.toLowerCase())

arr.sort((a, b) => a == b ? 0 : (a < b ? -1 : 1))


var myArray = [
    { "id": "5001", "type": "None", "price": 0 },
    { "id": "5002", "type": "Glazed", "price": 50 },
    { "id": "5005", "type": "Sugar", "price": 10 },
    { "id": "5007", "type": "Powdered Sugar", "price": 20 },
    { "id": "5006", "type": "Chocolate with Sprinkles", "price": 60 },
    { "id": "5003", "type": "Chocolate", "price": 30 },
    { "id": "5004", "type": "Maple", "price": 25 }
]


arr.sort((a, b) => a.type > b.type ? 1 : -1)

// -> result
// { id: "5003", type: "Chocolate", price: 30 }

// { id: "5006", type: "Chocolate with Sprinkles", price: 60 }

// { id: "5002", type: "Glazed", price: 50 }

// { id: "5004", type: "Maple", price: 25 }

// { id: "5001", type: "None", price: 0 }

// { id: "5007", type: "Powdered Sugar", price: 20 }

// { id: "5005", type: "Sugar", price: 10 }

// 7. reduce function

var myArray = [10, 11, 14, 15, 17, 9, 2, 4, 5, 9, 18]

var sum = myArray.reduce((acc, val) => {
    return acc += val;
}, 0)


var myArray = [
    { "id": "5001", "type": "None", "price": 0 },
    { "id": "5002", "type": "Glazed", "price": 50 },
    { "id": "5005", "type": "Sugar", "price": 10 },
    { "id": "5007", "type": "Powdered Sugar", "price": 20 },
    { "id": "5006", "type": "Chocolate with Sprinkles", "price": 60 },
    { "id": "5003", "type": "Chocolate", "price": 30 },
    { "id": "5004", "type": "Maple", "price": 25 }
]

sum = myArray.reduce((acc, val) => {
    return acc += val.type + " "
}, "")

console.log(sum)

// -> result = None Glazed Sugar Powdered Sugar Chocolate with Sprinkles Chocolate Maple 