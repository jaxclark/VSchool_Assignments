// //1
// function sum(num1, num2) {
//     return num1 + num2
// }
// var result = sum(5, 9)
// console.log(result)

// //2
// function largestNum(num1, num2, num3) {
//     if (num1>num2 && num1>num3) {
//         console.log(num1);
//     }else if (num2>num1 &&  num2>num3) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }

// }

// largestNum(100, 70, 240)

// //3
// function numType(num) {
//     if(num % 2 === 0) {
//         return num + " even"
//     } else {
//         return num + " odd"
//     }
// }
// console.log(numType(Math.round(Math.random() * 10)))

// //4
// function strings(string) {
//     if(string.length <= 20) {
//         return string.concat(string)
//     } else {
//         return string.slice(0, string.length / 2);
//     }
// }
// var stringName = "Hello world"
// console.log(strings(stringName))

// //BONUS 1
// var total = 0
// const fibNums = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
// function fibSeq(n) {
//     for(let i = 0; i < n; i++) {
//         total += fibNums[i]
//         console.log(total)
//     }
// }
// fibSeq(6)

// //BONUS 2

// const charObject = {

// }
// function stringLetters(string) {
//     for(let i = 0; i < string.length; i++) {
//         if (charObject.hasOwnProperty(string.indexOf(i))) {
//             charObject.string.indexOf(i) += 1
//         } else {
//             charObject.string.indexOf(i) 
//         }
//     }
// }
// stringLetters("Hello world")
// console.log(charObject)

//Can you use a splice to remove the smaller of two items in an array? 
//if [i] < [whatever], array.splice(i)
// .splice(startingIndex, numberToRemove[, itemsToInsert])
// or since array will be filled with letters, compare if the letters are the same, and if they are keep them?



const mostFreq = (string) => {
    var expCounts = {};
    var maxKey = '';
    for(var i = 0; i < string.length; i++) {
        var key = string[i];
        if(!expCounts[key]){
        expCounts[key] = 0;
        }
        expCounts[key]++;
        console.log(expCounts)
        console.log(key)
        console.log(expCounts[key])
        if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
            maxKey = key;
        }
    }
    return(`Most frequent character ${maxKey}: ${expCounts[maxKey]}`)
}

console.log(mostFreq('hello world'))






//STRING LECTURE PRACTICE

// .toUpperCase()
// .toLowerCase()
// .slice()
// + (add two strings together)
//

// let country = "usa"
// country = country.toUpperCase()
// console.log(country)

// .split()  (splits each letter of a string into an index in an array)
// if you have split("") it splits by letter 
// if you have split(" ") with a space it splits where there are spaces, so by word
// if you have split("a") it splits where that letter is and erases the letter
// same for characters like ","

// const animal = "frogs,are,really,cute,and,small"
// const animalGroupArrays = animal.split(",")
// console.log(animalGroupArrays)

// .indexOf()
// .lastIndexOf()
// console.log("cat".indexOf("t"))
// const index = animal.indexOf("g")
// const slice = animal.slice(index, index + 5)
// console.log(slice)

// const index = animal.lastIndexOf("g")
