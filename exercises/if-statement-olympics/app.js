//PRELIMINARIES

if (5 > 3) {
    console.log("5 is greater than 3")
} else {
    console.log("that number is not greater than 3")
}

if ("cat".length === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log ("is the same")
} else {
    console.log ("not the same")
}

"cat" == "dog" ? console.log("is the same") : console.log("not the same")

// BRONZE MEDAL

var person = {
    name: "Bobby",
    age: 12
  }

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0] === "B" && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is not allowed to go to the movie")
}

// SILVER MEDAL

var stricly = 1

if (stricly === 1) {
    console.log("strict");
} else if (striclty == 1) {
    console.log("loosely");
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log("yes")
} else {
    console.log("no")
}

// GOLD MEDAL

 if (typeof "dog" === 'string') {
     console.log("true")
 } else {
     console.log("false")
 }

 if (typeof "true" === 'boolean') {
     console.log("true")
 } else {
     console.log("false")
 }

var variable = 2

 if (typeof variable != 'undefined') {
     console.log("THISONE " + typeof variable)
 } else {
    console.log("THISONE " + typeof variable)
 }

 if ("s" > 2) {
     console.log("true")
 } else {
     console.log("false")
 }

  var num = 5
 if (num % 2 === 0) {
     console.log("even")
 } else {
     console.log("odd")
 }


//IN CLASS LECTURE PRACTICE

num % 2 === 0 ? console.log("even") : console.log("odd")

console.log(Math.random())
console.log(Math.random() * 2)
console.log(Math.floor(Math.random())) 
console.log(Math.round(Math.random())) 
//Floor rounds it to a whole number

//using let because want a primitive data type we can change later
for (let i = 0; i < 100; i++) {
    console.log(i)
}

let countTrue = 0
let countFalse = 0

for (let  i= 0; i < 100; i++) {
    if (Math.random() > .5) {
        countTrue++
    } else {
        countFalse
    }
}

const favThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woolen mitten"]
//you can use const on any complex data type like array and object
for(let i = 0; i < favThings.length; i++) {
    console.log(favThings[i])
}