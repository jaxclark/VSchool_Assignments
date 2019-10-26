// node package manager
//  npm init creates a json file, and makes the folder a node module, gives it a package.json

// ls -a shows us all the hidden stuff, like .git 

//another file called .gitignore is where your git repo is

//don't want them taking up code on github

//npm install, is the code to install a package
//or npm i 

//readline sync helps us take input from users in the terminal

//keyInYN asks for user input and returns a boolean 
//keyInSelect 

//  Escape room lecture

//game leading up to the rpg assignment
//when they open the door, allow them to keep opening the door if it's locked
//  to mimic that behaviour you need to use a while loop

const readlineSync = require('readline-sync')
const options = ["red pill", "blue pill"]
let selection = 1
while (selection === 1) {
    // journey isn't over
    selection = readlineSync.keyInSelect(options, " enter the rabbit hole?", {cancel: false})
}
console.log("You know the truth and are free, but the journey isn't over")