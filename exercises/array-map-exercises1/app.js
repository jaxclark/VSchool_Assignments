// #1 

// const num = [2, 5, 100]
// function doubleNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] * 2
//     }
// // }
// const doubledArray = num.map(doubleNumbers(num))
// console.log(doubledArray)
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  

const nums = [2, 5, 100]
const newArray = nums.map(n => {
        return n * 2})

// console.log(newArray) // [4, 10, 200]

// #2



// function stringItUp(arr){
//     for (var key in arr) {
//         arr.push(String(key))
//     }
//     // return arr.join(" ")
// }
// const strings = nums.map(stringItUp)

const stringItUp = nums.map(number => number + "")

// console.log(stringItUp); // ["2", "5", "100"]



// #3

// function capitalizeNames(arr){
    // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]


const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const namesStr = names.join(' ').toLowerCase()

// const capitalizeNames = namesStr.split(' ').map(letter => letter.substring(0,1).toUpperCase() + letter.substring(1))

// console.log(capitalizeNames)   //works, just written differently

const capNames = names.map((name) => {
    let newName = name.toLowerCase();
    let upper = newName.charAt(0).toUpperCase() + newName.slice(1)
    return upper
})

// console.log(capNames)


// #4

// function namesOnly1(arr){
//     // your code here
//   }
  
people = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]; 

const namesOnly = people.map((nam) => {
    const newArr = nam.name;
    return newArr
})
// console.log(namesOnly)

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// #5 

const oldEnough = people.map((arr) => {
    if(arr.age >= 18) {
        return (arr.name + " can go to the Matrix")
    } else {
        return (arr.name + " is under age!!")
    }
})
// console.log(oldEnough)


// #6

const headers = people.map(vars => `<h1>${vars.name}</h1><h2>${vars.age}</h2>`)
console.log(headers)