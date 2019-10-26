// // 1

// function stringCase(string) {
//     console.log(string.toUpperCase())
//     console.log(string.toLowerCase())
// }

// stringCase("Hello World")

// // 2.0

// function halfNumber(num) {
//     return Math.floor(num / 2)
// }
// console.log(halfNumber(5))

// // 2.1

// function findMiddleIndex(string) {
//     return Math.floor(string.length / 2)
// }
// console.log(findMiddleIndex("Hello World"))

// // 3

// function returnFirstHalf(string) {
//     // let start = 0
//     // let end = string.length / 2
//     // return string.slice(start, end)
//     return string.slice(0, string.length / 2)
// }
// console.log(returnFirstHalf("Hello World"))

// // 4

// function capitilizeAndLowercase(string) {
//     let firstHalf = string.slice(0, string.length / 2)
//     let secondHalf = string.slice(string.length / 2)
//     return firstHalf.toUpperCase() + secondHalf.toLowerCase()
// }
// console.log(capitilizeAndLowercase("Hellos"))

// // BONUS

function capitilize(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    return str.join(" ");
}
console.log(capitilize("hello world i love plants"))