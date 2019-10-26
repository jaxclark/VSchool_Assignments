// // #1

// function total(arr) {
//     const sum  = arr.reduce(function(a, b){
//         return a + b
//     })
//     return sum
// }
 
// console.log(total([1,2,3])); // 6

 
//  // #2

// function stringConcat(arr) {
//     const concatArr = arr.reduce(function(a, b) {
//         return(`${a}${b}`)
//         // return a.toString() + b.toString() //can also do this way
//     })
//     return concatArr
// }
// console.log(stringConcat([1,2,3])); // "123"


// // #3

// // function totalVotes(arr) {   //NOT WORKING
// //     var votes = 0
// //     arr.reduce(function(){
// //         if(arr.voted === true){
// //             // console.log(arr[i])
// //             // votes.push(arr[i])
// //             votes += 1
// //             // return
// //         }
// //     })
// //     return votes
// // }
// function totalVotes(voters) {
//     const total = voters.reduce(function(a, voter) {
//         return a + voter.voted
//     },0);
//     return total
// }

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters)); // 7


// // #4

// function shoppingSpree(arr) {
//     const total4 = arr.reduce(function(a, b) {
//         return a + b.price;
//     }, 0);
//     return total4
// }

// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005


// // #5

// function flatten(arr) {
//     const newArr = arr.reduce(function(a, b) {
//         return a.concat(b);
//     })
//     return newArr
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// // #6

function voterResults(voters) {
    const total = voters.reduce(function(a, voter) {
        if(voter.age <= 26){
            a.youth++
            if(voter.voted){
                a.youthVotes++
            }
        } else if(voter.age > 26 && voter.age < 33){
            a.mids++
            if(voter.voted){
                a.midVotes++
            }
        } else if(voter.age >= 33){
            a.olds++
            if(voter.voted){
                a.oldVotes++
            }
        }
        return a
    }, {
        youthVotes:0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    });
    return total
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
