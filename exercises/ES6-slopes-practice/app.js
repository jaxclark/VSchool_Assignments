// GREEN CIRCLE

// #1.1

// function collectAnimals(...animals) {  
//     let animalList = []
//     animalList.push(animals)
//     console.log(animalList)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// #1.2

// function combineFruit(fruit, sweets, vegetables){
//     return {
//         allFruit:[...fruit], 
//         allSweets:[...sweets],
//         allVegetables:[...vegetables]
//     }
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// )

// #1.3

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence(){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   let {location, duration} = vacation

//   console.log(location, duration)

// #1.4

// returnFirst = (items) => {
//     const [ firstIndex ] = items /*change this line to be es6*/
//    return firstIndex
// }

// console.log(returnFirst(["phone"]))

// #1.5

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [ firstFav, secondFav, thirdFav ] = arr
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// BLUE SQUARE

// #1.1

function combineAnimals(...arrays) {  
    const allAnimals = [...arrays]
    return allAnimals
    // const allAnimals = [...realAnimals,...magicalAnimals,...mysteriousAnimals]
    // return allAnimals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


