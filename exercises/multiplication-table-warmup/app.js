let n = 10
const matrix1 = []
for(let i = 0; i < n; i++){
    let matrix2 = [];
    for(j = 0; j < n; j++) {
        matrix2[j] = (j + 1) * (i + 1)
    }
    matrix1[i] = matrix2;
}
console.log(matrix1)

// let k = 10
// const matrix1 = []
// for(let i = 1; i <= k; i++){
//     let matrix2 = [];
//     for(j = 1; j <= k; j++) {
//         matrix2[j-1] = j * i
//     }
//     matrix1[i-1] = matrix2;
// }
// console.log(matrix1)

let k = 10
const matrix = []
for(let i = 1; i <= k; i++){
    let matrix2 = [];
    for(j = 1; j <= k; j++) {
        matrix2.push(i*j)
    }
    matrix.push(matrix2)
}
console.log(matrix)


array = []
array[5] = 5
console.log(array)