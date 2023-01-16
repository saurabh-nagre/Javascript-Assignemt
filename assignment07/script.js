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

    // -> first approach using nested spread operator

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
        
        if(obj1==obj2){
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

        var obj3 = structuredClone(obj1)
            
        obj3.address.details[0] = "5";

        console.log(obj1.address.details[0])
        // 4
        console.log(obj3.address.details[0])
        // 5


// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.Example:
let obj = {
    a:"Apple",
    b: ["Basketball","Baseball"],
    c: {
        call: "cellphone"
    },
    d: "Dog"
}


let keys = filterObject(obj) //This should return {a:”Apple”, d:”Dog”}

let output = {}

keys.forEach((key)=>{
    output[key] = obj[key]
})

console.log(output)
// { a: 'Apple', d: 'Dog' }
function filterObject(obj){
    
    return Object.keys(obj).filter((key)=>{
        return typeof(obj[key])!='object'
    })
}


let entries = filterObjectByEntries(obj) //This should return {a:”Apple”, d:”Dog”}

output = {}

entries.forEach((entry) => {
    output[entry[0]] = entry[1]
})

console.log(output)
// { a: 'Apple', d: 'Dog' }

function filterObjectByEntries(obj){
    
    return Object.entries(obj).filter((arr)=>{

        return typeof(arr[1])!='object'
        
        })
}
