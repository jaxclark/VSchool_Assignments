// const readlineSync = require("readline-sync")

// // E6 uses import readlineSync from readline-synce

// const answer = readlineSync.question('What is the land speed of an unladen swallow? ')
// console.log("string: ", answer)

var readlineSync = require('readline-sync'),
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');