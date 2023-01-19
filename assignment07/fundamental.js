//  Write a function mapBy to convert an array of objects into an object mapped by the specified key:
// Example: 




let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}];

console.log(mapBy(users, "first_name"))


function mapBy(users,key){
    return users.reduce((prev,obj)=>{
        prev[obj.first_name] = obj
        return prev
    },{})
}

// //This should return
// //{
// // "Nicki”:{id:1, first_name:”Nicki”, ...},
// // "Raychel”:{id:2, first_name:”Raychell”, ...},
// //}




// ● Write a function groupBy to convert an array of objects into groups based on the specified key:
users = [{
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender":"Male",
    }, {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender":"Female"
    }, {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender":"Male"
    }, {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender":"Female"
    }];


console.log(groupBy(users, "gender"))

// //This should return 
// //{
// //"Male”:[
// // {id:1, first_name:”Nicki”, ...}, 
// // {id:3, first_name:”Demetris”, ...}
// //]
// //"Female”:[
// // {id: 2, first_name:”Raychel”, ...},
// // {id: 4, first_name:”Amata”, ...}
// //]
// //}

function groupBy(users,key){
    
    return users.reduce((prev,obj)=>{
        if(typeof(prev[obj.gender])!=='undefined'){
            prev[obj.gender].push(obj)
        } 
        else {
            prev[obj.gender] = [obj]
        }

        return prev
    },{});
} 



// ● Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment.
//     Example:
users = [{
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender":"Male",
    }, {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender":"Female"
    }, {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender":"Male"
    }, {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender":"Female"
    }]


console.log(sort(users, "id", "desc")) //Should return users sorted by id in descending order
console.log(sort(users, "first_name" ,"asc")) //Should return users sorted by first_name in ascending order

function sort(arr,key,order){

    return arr.sort((a,b)=>{
        if(order=='desc'){
            return a[key]<b[key]?1:-1
        }
        else {
            return a[key]>b[key]?1:-1
        }
    })
}

// ● Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged.Try to achieve it with a complexity - O(n).
//     Example:

let userNames = [{
        "id": 1,
        "first_name": "Nicki",
    }, {
        "id": 2,
        "first_name": "Raychel",
    }, {
        "id": 3,
        "first_name": "Demetris",
    }, {
        "id": 4,
        "first_name": "Amata",
    }]

let userEmails = [{
        "id": 2,
        "email": "rmcgrady1@cpanel.net",
    }, {
        "id": 1,
        "email": "ncrozier0@squarespace.com",
    }, {
        "id": 4,
        "email": "abraiden3@canalblog.com",
    }, {
        "id": 3,
        "email": "dkilshall2@elpais.com",
    }]

let mappedData = mergeById(userNames, userEmails)

let result = []
Object.keys(mappedData).forEach((key)=>{
    result.push(mappedData[key])
})

console.log(result)

function mergeById(userNames,userEmails){
    let output = {}

    // Method 1: sort both the arrays with ids and compare the id and merge

    // Method 2 : use map of objects using id as key

    userNames.forEach((ele)=>{
        output[ele.id] = ele
    })

    userEmails.forEach((Element)=>{
        if(typeof(output[Element.id])==='undefined'){
            output[Element.id] = Element
        }
        else {
            output[Element.id] = {...output[Element.id],
                                    ...Element}
        }
    })
    
    return output

}
// //This should return an array of users in the format: 
// [{
//     "id": 1,
//     "first_name": "Nicki",
//     "email": "ncrozier0@squarespace.com",
// }, {
//     "id": 2,
//     "first_name": "Raychel",
//     "email": "rmcgrady1@cpanel.net",
// }, {
//     "id": 3,
//     "first_name": "Demetris",
//     "email": "dkilshall2@elpais.com",
// }, {
//         "id": 4,
//         "first_name": "Amata",
//         "email": "abraiden3@canalblog.com",
//     }]




// ● Write a function to filter an array of strings to hold only unique values

var stringArray = ["daj", 'adjau', "jiauhc", "iahcu", 'adjau', "jiauhc",]

console.log(filterToUnique(stringArray))
function filterToUnique(stringArray){
    stringArray = stringArray.sort((a,b)=>{
        return a<b?1:-1
    })
    let newStringArray = []
    for(let i = 0;i<stringArray.length-1;i++){
        if(stringArray[i]!=stringArray[i+1]){
            newStringArray.push(stringArray[i])
        }
    }
    newStringArray.push(stringArray.pop())

    return newStringArray
}