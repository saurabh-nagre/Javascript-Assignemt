// 1.
//  How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
// {
//     name:”Harry Potter”,
//     age: 12,
//         address: {
//         details: [“4”, “Privet Drive”],
//             area:”Little Whinging”,
//         city: “Surrey”,
//         state: “England”
//     }
// }

    // -> first approach using nested spread operator and assign

        var obj1 = {
            name:"Harry Potter",
            age: 12,
            address: {
                details: ["4", "Privet Drive"],
                area:"Little Whinging",
                city: "Surrey",
                state: "England"    
            }  
        }   
        
        var obj2  = {...obj1,
            address:{...obj1.address, 
                    details:[...obj1.address.details]
                }
        }

        console.log(obj1)
        console.log(obj2)
        
        if(JSON.stringify(obj1)===JSON.stringify(obj2)){
            console.log("obj1 is same as obj2")
        }
        else {
            // still giving this, why?
            console.log("obj1 is not same as obj2")
        }

        obj2.address.details[0] = "5"

        console.log(obj1.address.details[0])
        // 4
        console.log(obj2.address.details[0])
        // 5

    // -> second approach  = structuredClone(obj) available in latest browsers and node v.17

        // var obj3 = structuredClone(obj1)
            
        // obj3.address.details[0] = "5";

        // console.log(obj1.address.details[0])
        // // 4
        // console.log(obj3.address.details[0])
        // // 5



    // -> third approach
        
        var obj4 = JSON.parse(JSON.stringify(obj1))
        console.log(obj4)

        if (obj4===obj1){
            console.log("shallow copy")
        }
        else console.log("deep copy") //both obj1 and obj4 are point to different memory addresses

// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.Example:
let obj = {
    a:"Apple",
    b: ["Basketball","Baseball"],
    c: {
        call: "cellphone"
    },
    d: "Dog"
}


let output = filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
console.log(output)
// { a: 'Apple', d: 'Dog' }
function filterObject(obj){
    
    return Object.keys(obj).reduce((prev,key)=>{
        // console.log(prev)
        if (typeof (obj[key]) != 'object'){
            prev[key] = obj[key]
        }

        return prev
    },{})

    // or

    // return Object.keys(obj).filter((key)=>{
    //     if (typeof (obj[key]) != 'object'){
    //         output[key] = obj[key] 
    //         return true
    //     }
    //     return false
    // })
}


output = filterObjectByEntries(obj) //This should return {a:”Apple”, d:”Dog”}



console.log(output)
// { a: 'Apple', d: 'Dog' }

function filterObjectByEntries(obj){
    
    return Object.entries(obj).reduce((prev,arr)=>{
        if (typeof (arr[1]) != 'object'){
            prev[arr[0]] = arr[1]
        }

        return prev
        
        },{})
}
