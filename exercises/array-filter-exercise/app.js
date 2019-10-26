// #1 

const nums = [3, 6, 8, 2]

function fiveAndGreaterOnly(arr) {
    return arr >= 5;
}
function filterFive() {
    return nums.filter(fiveAndGreaterOnly)
}
console.log(filterFive(nums))


// #2

function evensOnly(arr) {
    return arr % 2 === 0;
}
const evens = nums.filter(evensOnly)
console.log(evens); /// [6, 8, 2]
  

// #3 

animals = ["dog", "wolf", "by", "family", "eaten", "camping"]
  
const fiveLetters = animals.filter((animal) => {
    return animal.split("").length <= 5
})
console.log(fiveLetters)


// #4

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

function peopleWhoBelongToTheIlluminati(arr){
    return arr.member === true
}

const illuminati = [
    people.filter(peopleWhoBelongToTheIlluminati)
]
console.log(illuminati);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// #5 

const peopleAges = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function ofAge(arr){
    return arr.age >= 18;
}
const oldEnough = peopleAges.filter(ofAge)
console.log(oldEnough); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]