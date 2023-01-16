var arr = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
}, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
}, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
}, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
}, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
}, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
}, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
}, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
}]


// 1. Take the above array of objects.Accomplish the following tasks:

    // Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.

    function filterByName(argStr){
        
        return arr.filter((val)=>{

            return val.first_name.includes(argStr)

        })
    }

    var result  = filterByName("e")

    console.log(result)

    // Use Array.map to return an array of all the email fields.

    var emailFields = arr.map((val)=>val.email)

    console.log(emailFields)

        //  [
        //     'ncrozier0@squarespace.com',
        //     'rmcgrady1@cpanel.net',
        //     'dkilshall2@elpais.com',
        //     'abraiden3@canalblog.com',
        //     'vheap4@clickbank.net',
        //     'fcrichton5@merriam-webster.com',
        //     'kvasyukhnov6@devhub.com',
        //     'scorck7@sitemeter.com',
        //     'vferandez8@e-recht24.de',
        //     'tpetyt9@upenn.edu'
        // ]

    // Use Array.sort to return the array sorted in descending order by date_of_birth.

    arr.sort((a,b)=>{
        return new Date(a.date_of_birth) > new Date(b.date_of_birth)? -1 : 1;
    })

    console.log(arr)
    // [
    //     {
    //         id: 5,
    //         first_name: 'Venita',
    //         email: 'vheap4@clickbank.net',
    //         date_of_birth: '2020/10/04'
    //     },
    //     {
    //         id: 8,
    //         first_name: 'Sam',
    //         email: 'scorck7@sitemeter.com',
    //         date_of_birth: '2020/08/30'
    //     },
    //     {
    //         id: 3,
    //         first_name: 'Demetris',
    //         email: 'dkilshall2@elpais.com',
    //         date_of_birth: '2018/12/31'
    //     },
    //     {
    //         id: 10,
    //         first_name: 'Townie',
    //         email: 'tpetyt9@upenn.edu',
    //         date_of_birth: '2018/09/01'
    //     },
    //     {
    //         id: 4,
    //         first_name: 'Amata',
    //         email: 'abraiden3@canalblog.com',
    //         date_of_birth: '2012/05/23'
    //     },
    //     {
    //         id: 7,
    //         first_name: 'Kathleen',
    //         email: 'kvasyukhnov6@devhub.com',
    //         date_of_birth: '2010/12/20'
    //     },
    //     {
    //         id: 6,
    //         first_name: 'Fairfax',
    //         email: 'fcrichton5@merriam-webster.com',
    //         date_of_birth: '2009/12/23'
    //     },
    //     {
    //         id: 1,
    //         first_name: 'Nicki',
    //         email: 'ncrozier0@squarespace.com',
    //         date_of_birth: '2009/05/09'
    //     },
    //     {
    //         id: 9,
    //         first_name: 'Virgilio',
    //         email: 'vferandez8@e-recht24.de',
    //         date_of_birth: '2000/09/07'
    //     },
    //     {
    //         id: 2,
    //         first_name: 'Raychel',
    //         email: 'rmcgrady1@cpanel.net',
    //         date_of_birth: '1996/11/05'
    //     }
    // ]



    // Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.


function getById(index){

    return arr.find((val)=>{
        return val.id==index
    })
}


console.log(getById(9))
// {
// id: 9,
//     first_name: 'Virgilio',
//         email: 'vferandez8@e-recht24.de',
//             date_of_birth: '2000/09/07'
// }

console.log(getById(0))
// undefined


// 2. What makes a method mutating or non mutating in Javascript ? 
    // Mutable means source element may change it's values. 
    // Objects and arrays are mutable while Number, Boolean ,string are immutable

// Find out whether each of the following methods are mutating or non - mutating.How can you verify this ?:

    // By applying below functions, if any how the array changes, then the function is called mutating.
    // we should not assign value to original array


    
// push = mutating , array get updated as we push some object into it.

// pop = same as above

// filter = non mutating, filter returns the array based on the condition provided 

// find = non mutating, does not alter the original array, returns the element

// sort = mutating, alter the original array, elements might change their position in array

// map = non mutating, it returns the mapped array 


