// 1. What is the difference between++i and i++ ?
    //  ++i => pre increment i.e. increment then assign/return
    //  i++ => post increment i.e. assign/return then increment

// 2. What do you think would happen if you pass an index beyond the range of the string ? Or if you pass a negative index ? Try it out.

// -> Browser doesn't give any error in assigning or accessing index beyond the range of the string

    var str = "Happy"
    str[-1] = 'h';
    str[10] = 'g'
    // No error

    console.log(str[-1]) // No error
    // undefined

    console.log(str[10]) 
    // undefined

    // string doesn't create any map but array creates map

    
    

// 3. Do you think JSON.stringify would work for arrays as well ?
        // yes, it converts the array into string

//    What about nested objects ? 
        // yes, it also converts nested objects into string form,
        // also it converts keys into string

//    What happens if we pass numbers, strings, undefined, null to JSON.stringify ?
        // JSON.stringify() converts passed values to string form



// 4. What happens if you pass a regular / invalid JSON string to JSON.parse ?
        // it throws an error, if the passed json is not completely stringified 

//  What will happen if such an invalid function runs in the program ? 
        //  program may interrupt, and gives error

// Will other parts of the code execute correctly after that ?
        // No
        // But if we put try-catch block around it, the other part of program runs fine

        function fun() {

            console.log(JSON.parse({ "hello": "hi" }))
            // no code executes after above line

            console.log('hello')
        }


    function fun() {
        try {
            console.log(JSON.parse({ "hello": "hi" }))
        } catch (error) {
            console.log(error) 
        }

        console.log('hello')
    }

    // console the error
    // hello