// #1

function countCode(arr) {  
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "code") {
            count++
        }
    }
    return count
}

//can also be written like this : 
const filterCount = (arr) => arr.filter(string => string === "code").length

//Output: 
// countCode(["code", "code", "cool"]) returns 2
// countCode(["code", "code", "cool", "code"]) returns 3
// // countCode(["coe", "ode", "cool", "pool"]) returns 0
// console.log(countCode(["code", "code", "cool"]))
// console.log(countCode(["code", "code", "cool", "code"]))
// console.log(countCode(["coe", "ode", "cool", "pool"]))


//#2 

function countCode2(string) {  
    const newArr = []
    for(let i = 0; i < string.length; i++) {
        if(string[i+1] === "c" || string[i+2] === "o" || string[i+3] === "e") {
            newArr.push(string[i])
        }
    }
    let count = Math.floor(newArr.length / 3)
    return count
}

console.log(countCode2("aaacodebbb"))
console.log(countCode2("codexxcode"))
console.log(countCode2("cozexxcope"))

//Extra thing Marcus teaching which we haven't learned before :
//Usng regex
//there are several methods you can use which are geared toward regex specifically, one of those is .match
// const countCode = str => str.match(/co.e/gi) //the slash makes it so it matches everyone of those things, the g means global, so it matches every c
//the . means get anything that has co, followed by any character rep by period, then an e after any char
//if you want it to be case insensitive, so it matches any case, put i after g
//the write up is Demystifying REGEX


// EXTRA CREDIT

// function countCode3(string) {
//     newArr = string.split("")
//     for(let i = 0; i < newArr.length; i++) {
//         if(newArr[i] === newArr[i].toUpperCase()) {
//             newArr.splice(newArr[i], 1, "c") = "c"
//     }
//     return newArr
// }
// }

// console.log(countCode3("aaaCodebbb"))
// console.log(countCode3("codexxCode"))
// console.log(countCode3("cozexxcopeCC"))

//Marcus's Solution

// const countCode4 = str => str.match(/.o.e/gi).filter(word => word[0].charCodeAt(0) < 91 || word[0] === 'c').length

// console.log(countCode4("aaaFodebbb"))
// console.log(countCode4("aaaGosEbbb"))
// console.log(countCode4("aaaLOdebcocebbRole"))