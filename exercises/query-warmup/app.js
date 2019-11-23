const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const filterDatabase = (query, data) => {
    const filtered = data.filter(items => {
        for(key in query){
            if(query[key] !== items[key]){
                return false
            }
        }
        return true
    })
    return filtered
}

// console.log(filterDatabase({}, database))
// ----------------------------
// returns entire database array

// console.log(filterDatabase({dolphin: "squeak!"}, database))
// ------------------
// returns empty array

console.log(filterDatabase({firstName: "Jack", age: 2}, database))
// -------------------------
/* 
returns the following array:
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]
*/