// #1 

// const num = [2, 5, 100]
// function doubleNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] * 2
//     }
// }
// const doubledArray = num.map(doubleNumbers(num))
// console.log(doubledArray)
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  

const nums = [2, 5, 100]
const newArray = nums.map(n => {
        return n * 2})

console.log(newArray) // [4, 10, 200]

// #2



// function stringItUp(arr){
//     for (var key in arr) {
//         arr.push(String(key))
//     }
//     // return arr.join(" ")
// }
// const strings = nums.map(stringItUp)

// const strings = []

// nums.map(function() {
//     for (let i = 0; i < nums.length; i++) {
//         strings.push(String(nums[i]))
//     }
// })

// console.log(strings); // ["2", "5", "100"]


// #3

// function capitalizeNames(arr){
    // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]