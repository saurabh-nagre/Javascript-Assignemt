// 1. Promise and other functions


var arr = [384, 2424, -524, 23, -52, 314, -5, 23, 5, 23, -134424, 23, 423, 5, 24]

function find(val) {
    return new Promise((resolve, reject) => {

        let index = arr.findIndex(ele => val == ele)

        if (index != -1) {

            if (val >= 0) {
                resolve({
                    status: "Success",
                    type: "Positive"
                })
            }
            else {
                resolve({
                    status: "Success",
                    type: "Negative"
                })
            }
        }
        else {
            reject({ status: "Failed" })
        }
    });
}

find(-524).then((result) => {
    if (result.status == "Success") {
        console.log("Success: " + result.type)
    }
    else {
        console.log("Failed");
    }
}).catch((reason) => {
    console.log(reason.sta, "from catch")
})

// result  = Success: Negative

// Promise.all -> combines all provided promises, returns fulfillment values if all promises resolved,
                //  rejects when any promise reject
// Promise.allSettled -> returns promise fulfilles when all promises settled
// Promise.any -> returns one of the promise resolved, rejects if all promises rejects
// Promise.race -> returns promise fulfill that first resolves

// syntax => 
    // array_promise = []
    // Promise.X(array_promise).then((results)=>{

    //     results.forEach(ele => {

    //     });
    // })




// 2. settimeout

    setTimeout((arg1, arg2, arg3) => {
        console.log(arg1, arg2, arg3)
        console.log("hi")
    }, 1000, "arg1", "arg2", "arg3")
// after 1 sec
    // arg1, arg2, arg3
    // hi




// 3. Set immediate (difference between settimeout 0 and set immediate)

    // setImmediate execute faster than setTimeout(0) as setTimeout looks for the timer

    // setImmediate is not supported by most of the browsers and it's no longer a standard



// 4. which event renders before dom

// i can't able to find it's answer, 
// we can use onload function in javascript to execute statements after the DOM tree is created


// 5. Modern way of getting and setting prototype 

var proto = new Object({ name: "helen" })
var obj = { age: 30 };
Object.setPrototypeOf(obj,proto) 
console.log(obj)

// 6. Try to find different ways to block the event loop

// 1. infinite loop
// 2. time consuming work like reading file sync, stringify JSON, etc. 
const content = fs.readFileSync('myFile', 'utf8')  // blocks the event loop for a while
// 3. Syntax error