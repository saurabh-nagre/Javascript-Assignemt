//Q. Use the typeof operator to find the types of different variables. Specially note what the typeof operator returns for arrays, null values and NaN. 
// How can you find if a variable is an array or NaN besides typeof?

// Number 

let a = 100

console.log(typeof(a))

// string

let str = "I am string"

console.log(typeof(str))

// boolean

let condition = 10>20

console.log(typeof(condition))

// array

let arr = [10,20,30,40,50]

console.log(typeof(arr))

// null

let value = null

console.log(typeof(null))

// NaN

let nano = parseInt("saurabh")

console.log(nano) //prints NaN
console.log(typeof(nano)) // prints number

// object 
let obj = {
    id:101,
    name : 'saurabh',
    age : 21
}

console.log(typeof(obj))


// #########################################

// Using isNaN, isArray

let num = NaN + 3

console.log(isNaN(num))

let myArray = { a: [1, 3, 4], b: [3, 5, 6], c: [5, 6, 7] }
console.log(Array.isArray(myArray)) 

console.log(Object.prototype.toString.call(myArray))