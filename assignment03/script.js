// 1. Declare a variable let age = 25;. Write a series of if else statements that will:
//     Print child to the console if age is less than equal to 12.
//     Print teen to the console if age is between 13 and 18(inclusive).
//     Print adult to the console if age is above 18

let age = 25

// if-else statements

if(age<=12) {
    console.log("child")
}
else if(age<=18){
    console.log("teen");
}
else 
    console.log('adult');

// 2.  Do the same using switch case.
// Switch statements
age = 14
switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("child")
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log("teen")
        break
    default:
        console.log("adult")
}
// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
// for loop

let arraySize = 25

const myArray = []

for (let i = 1;i<=arraySize;i++){
    myArray.push(i)
}

console.log(myArray)

// 4. Accomplish the same using a while loop.
// while loop
let i = 1
const arr = []
while(i<=arraySize){
    arr.push(i);
    i++
}

console.log(arr)

// 5. Can you use return instead of break in loops?
// ->When we have loop at the end of the function, we can use return instead of break
// ->return statement moves the control from where function is called and returns the undefined or value;