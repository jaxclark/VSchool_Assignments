const readlineSync = require("readline-sync")

function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2)
    return result
}
function sub(num1, num2) {
    result = parseInt(num1) - parseInt(num2)
    return result
}
function mult(num1, num2) {
    result = parseInt(num1) * parseInt(num2)
    return result
}
function div(num1, num2) {
    result = parseInt(num1) / parseInt(num2)
    return result
}

const firstNum = readlineSync.question("Please enter first number: ", {
    hideEchoBack: false
});
const secondNum = readlineSync.question("Please enter second number: ", {
    hideEchoBack: false
});

const operation = readlineSync.question("Please enter the operation desired (add, sub, mult, div): ", {
    hideEchoBack: false
});

if(operation === "add") {
    console.log("Answer: ", add(firstNum, secondNum))
} else if(operation === "sub") {
    console.log("Answer: ", sub(firstNum, secondNum))
} else if(operation === "mult") {
    console.log("Answer: ", mult(firstNum, secondNum))
} else if(operation === "div") {
    console.log("Answer: ", div(firstNum, secondNum))
} else {
    console.log("Incorrect input")
}

//we have to create everything
//which means
//need four functions to perform the math
//functions take two parameters
//terminal promps user to input one number
//promps user for second number
//promps what operation to perform
//stores the numbers
//call which function based on operation
//print result to console 
//