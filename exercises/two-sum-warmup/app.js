// const twoSum = (array, target) => {
//     for(let i = 0; i < array.length; i++){
//         let num = array[i]
//         for(let j = 1; j < array.length; j++){
//             if(i !== j){
//                 const result = array[j] + num
//                 if(result === target){
//                     return console.log(`index of ${i} + index of ${j} = ${target} \nYou found the correct answer`)
//                 } else {
//                     console.log(`${num} + ${array[j]} =/= ${target}`)
//                 }
//             }
//         }
//     }
// }
// twoSum([1, 2, 2], 4)
//breaks on certain ways, like if the array is [1, 2, 2], 4

const twoSum = (array, target) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){ //setting j to i + 1 means that j won't keep adding together the numbers in the beginning which have already been added together and checked
            if(array[i] + array[j] === target){
                return [i, j]
            }
        }
    }
}
console.log(twoSum([1, 2, 3], 5))