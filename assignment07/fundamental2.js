// ● Write a function to check deep equality of two nested objects / arrays


function deepEquality(obj1,obj2){
    
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)


    if(keys1.length!=keys2.length){
        return false
    }
    else{
        let flag = true
        for(let key of keys1){
            if(key in obj2 && flag){
                if(typeof(obj1[key])=='object' && typeof(obj1[key])==typeof(obj2[key])){
                    flag = flag && deepEquality(obj1[key],obj2[key])
                }
                else {
                    flag = flag && (obj1[key]===obj2[key])
                }
            }
            else {
                return false
            }
        }

        return flag
    }
    
    
}

let obj1 = {
    name:"Harry Potter",
    age: 12,
    address: {
        area:"Little Whinging",
        details: ["4","Privet Drive"],
        city: "Surrey",
        state:"England"
    }
}

let obj2 = 
{
    name: "Harry Potter",
    age: 12,
    address: {
        area: "Little Whinging",
        details: ["4", "Privet Drive"],
        city: "Surrey",
        state: "England"
    }
}

console.log(deepEquality(obj1,obj2))


// ● Write a recursive function to create a deep clone of a nested object



let obj =
{
    name: "Harry Potter",
    age: 12,
    address: {
        area: "Little Whinging",
        details: ["4", "Privet Drive"],
        city: "Surrey",
        state: "England"
    }
}


function deepClone(obj){

    var res;
    if(Array.isArray(obj)){
        res = [...obj]
        
        for(let i in obj){
            if(typeof(res[i])=='object'){
                res[i] = deepClone(res[i])
            }
        }
    }
    else if(typeof(obj)==='object'){

        res = {...obj}

        for (let key in obj) {
            if (typeof (obj[key]) === 'object') {
                res[key] = deepClone(res[key])
            }
        }
    }
    else {
        res = obj
    }

    return res;
    
}

console.log(deepClone(obj))




// ● Write a function that returns a nested key within an object:
// Example:

// {
//     name:”Harry Potter”,
//     age: 12,
//         address: {
//         details: [“4”, “Privet Drive”],
//             area:”Little Whinging”,
//         city: “Surrey”,
//         state: “England”
//     }
// // }

console.log(getNestedKey(obj, "address.details.1"))
//This should return “Privet Drive”

function getNestedKey(Obj,stringOfKeys){
    
    let end = stringOfKeys.indexOf('.')

    if(end!=-1)
        return getNestedKey(Obj[stringOfKeys.slice(0, end)], stringOfKeys.slice(end+1))
    else 
        return Obj[stringOfKeys]
}