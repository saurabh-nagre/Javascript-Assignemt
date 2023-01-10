// Q.  Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.  


let myvar

console.log("Value before assignment : ", myvar)

myvar = 100

console.log("Value After Assignment : ", myvar)


const count = 50

console.log(count)


// ##############################
// Q. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. 
const myArray = ["cat","dog","tiger","lion","monkey","apple"]

console.log('Before changing properties of Array')
console.log(myArray)

function checkApple(ele){
    return ele==='apple'
}

let i = myArray.findIndex(checkApple)

if (i)
    myArray[i] = "elephant"

function checkCat(animal){
    return animal==='cat'
}

myArray.splice(myArray.findIndex(checkCat),1)

console.log('After changing properties of Array')

console.log(myArray)

myArray.push("cheetahh")

console.log(myArray)
// What do you expect to happen in both cases? What actually happens in both cases.

//->We can modify contents of array or object element, add or remove element,
//->but for the const array or object, we can't reassign it.

myArray = []

// Q. What is the difference between an object declared as a let or a const variable?

// ->We can reassign new value to the let variable, also it has a bloack scope
// ->on the other hand, we can't reassign const variable, and it has a global scope (memory is assign gloablly)