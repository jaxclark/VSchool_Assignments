let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// // #1
// vegetables.pop()
// console.log("vegetables: ", vegetables);

// // #2
// fruit.shift()

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// // #3
// console.log(fruit.indexOf("orange"));

// // #4
// fruit.push(fruit.indexOf("orange"));
// console.log("fruit: ", fruit);

// // #5
// console.log(vegetables.length)

// // #6
// vegetables.push(vegetables.length)
// console.log("vegetables: ", vegetables);

// // #7
// let food = fruit.concat(vegetables)
// console.log(food)

// // #8
// food.splice(4, 2)
// console.log(food)

// // #9 
// food.reverse()
// console.log(food)

// // #10
// let vegStr = food.join()
// console.log(vegStr)


// Function
// function alterArr() {
//     vegetables.pop()
//     fruit.shift()
//     // console.log(fruit.indexOf("orange"))
//     fruit.push(fruit.indexOf("orange"));
//     vegetables.push(vegetables.length)
//     let food = fruit.concat(vegetables)
//     // console.log(food)
//     food.splice(4, 2)
//     food.reverse()
//     let vegStr = food.join()
//     console.log(vegStr)
// }

// alterArr()

const food1 = []
food1.push(vegetables.concat(fruit))
console.log(food1)

