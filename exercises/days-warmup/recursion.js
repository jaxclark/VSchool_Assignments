//Recursion is usually bad, but there are a few times you need it, like if you're dealing with a tree of info and 
//  need to search through that tree

// Given a selected cell, your program will fill it's room
const house = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', '#', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
]
// checkCell will check left, right, down, and up of cell. 
// if the cell in that direction is empty, fill cell with an X
// and call checkCell on cell
function fillAndCheckSurrounding(x, y){
    house[x][y] = 'X'
    //check left
    //check right
    //check top
    //check bottom
    if(house[x-1][y] === ' '){
        fillAndCheckSurrounding(x-1, y)
    } 
    if(house[x+1][y] === ' '){
        fillAndCheckSurrounding(x+1, y)
    } 
    if(house[x][y-1] === ' '){
        fillAndCheckSurrounding(x, y-1)
    } 
    if(house[x][y+1] === ' '){
        fillAndCheckSurrounding(x, y+1)
    } 
    return house
}

// console.log(fillAndCheckSurrounding(7, 1))


//Rob's Code
function checkCell(x, y){
    if (house[y][x] === ' ' && x >= 0 && x <= house[y].length && y >= 0 && y <= house.length) {
      house[y][x] = 'X';
      checkCell(x+1,y);
      checkCell(x-1,y);
      checkCell(x,y+1);
      checkCell(x,y-1);
    }
    return house
  }
  console.log(checkCell(8,3))



// // Given a selected cell, your program will fill it's room
// const house = [
//     ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
//     ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', '#', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', '#', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
//     ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
//     ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
//     ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
// ]
// // checkCell will check left, right, down, and up of cell. 
// // if the cell in that direction is empty, fill cell with an X
// // and call checkCell on cell
// function checkCell(x, y){
// }