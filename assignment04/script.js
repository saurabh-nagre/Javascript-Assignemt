    // 1. What happens when you add a for loop /while loop /switch case block inside a function and use return instead of break? 
        // -> 'return' keyword will stop the function execution completely & return directly to the point where function was called
    // Do statements after the loop run ?
        // -> NO
    //  What is the return value ?
        // -> 'undefined' is return if no value is return 

    // Can we pass a return value from within a loop ? Can you return from inside an if block ?
        // -> Yes,
    // What impact does that have ?
        // ->the statements after return statement will not execute.

    // 2. Take a function that accepts a function as a parameter(also known as callback function).
    function test(callback) {
        callback();
    }

    function callbackFunc() {
        console.log("Calling the callback function")
        return 5;
    }
    // Explore the following cases - what is printed in the console, and what gets returned:

    // test(callbackFunc)
        // -> "Calling the callback function"

    // test(callbackFunc())
        // -> "Calling the callback function"
        // -> "TypeError: callback is not a function"

    // test(() => callbackFunc())
        // -> "Calling the callback function"
        // -> "undefined"

    // What happens when you return callback() from the test function?
        // ->first it will print "Calling the callback function", as the function is called. 
        // -> then I will print 5 on the browser console, as it returns the value return by the callbackFunc

    // What happens when you return callback from the test function?
        // ->  return callbackFunc function in the console. 

