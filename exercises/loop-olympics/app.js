////PRELIMINIARIES 
////1
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

////2 
// for (let i = 9; i > -1; i--) {
//     console.log(i)
// }

////3
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// //BRONZE
// //1
// const array = []
// for(let i = 0; i < 10; i++) {
//     array.push(i);
//     console.log(array[i])
// }

////2
// for(let i = 0; i < 100; i++) {
//     if(i % 2 ===0)
//     console.log(i)
// }

////3
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(let i = 0; i < fruit.length; i++){
//     if(i % 2 == 0) {
//         console.log(fruit[i])
//     }
// }


////SILVER
////1
const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    }, {
        name: "Justin Bieber",
        occupation: "Singer"
    }, {
        name: "Vladimir Putin",
        occupation: "Politician"
    }, {
        name: "Oprah",
        occupation: "Entertainer"
    }, {
        name: "Katy Perry",
        occupation: "Singer"
    }, {
        name: "Hugh Jackman",
        occupation: "Actor"
    }
]

// for(let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }

////2
// const peopleNames = []
// const peopleOccs = []
// for(let i = 0; i < peopleArray.length; i++) {
//     peopleNames.push(peopleArray[i].name);
//     peopleOccs.push(peopleArray[i].occupation)
//     console.log(peopleNames[i])
//     console.log(peopleOccs[i])
// }

////3
// const evOthNames = []
// const evOthOccs = []
// for(let i = 0; i < peopleArray.length; i++) {
//     if(i % 2 === 0) {
//         evOthNames.push(peopleArray[i].name)
//     }
//     if (i % 2 !== 0) {
//         evOthOccs.push(peopleArray[i].occupation)

//     }
// }
// console.log(evOthNames)
// console.log(evOthOccs)


// const namesArr = peopleArray.slice(3)



////GOLD
////1
// const matrix1 = []
// for(let i = 0; i < 3; i++){
//     let matrix2 = [];
//     for(j = 0; j < 3; j++) {
//         matrix2[j] = 0;
//     }
//     matrix1[i] = matrix2;
// }
// console.log(matrix1)


////2
// const matrix1 = []
// for(let i = 0; i < 3; i++){
//     let matrix2 = [];
//     for(j = 0; j < 3; j++) {
//         matrix2[j] = i;
//     }
//     matrix1[i] = matrix2;
// }
// console.log(matrix1)


//Eric did this stuff:
// const matrix = [
//     [0, 0, 0],
//     [1, 5, 1],
//     [2, 2, 2]
// ]
// console.log(matrix[0][1])

// for(let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])
//     for(let j = 0; j < matrix[i].length; j++){
//         console.log(matrix[i][j])
//     }
// }
//End of Eric's stuff

//3
// const matrix1 = []
// for(let i = 0; i < 3; i++){
//     let matrix2 = [];
//     for(j = 0; j < 3; j++) {
//         matrix2[j] = j;
//     }
//     matrix1[i] = matrix2;
// }
// console.log(matrix1)

// //4
// const matrix1 = []
// for(let i = 0; i < 3; i++){
//     let matrix2 = [];
//     for(j = 0; j < 3; j++) {
//         matrix2[j] = "x";
//     }
//     matrix1[i] = matrix2;
// }
// console.log(matrix1)


//EVEN/ODD LOOPING EXERCISE
// for(let i = 0; i < 101; i++) {
//     if(i % 2 === 0) {
//         console.log(i, "even")
//     } else {
//         console.log(i, "odd")
//     }
// }