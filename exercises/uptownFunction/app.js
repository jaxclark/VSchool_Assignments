var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// #1
// function makeStr(array) {
//     return array.join(" ")
// }
// console.log(makeStr(lyrics))

// #2
// function reverseArr(array) {
//     return array.reverse().join(" ")
// }
// console.log(reverseArr(lyrics))


// #3
// function evOtherWord(array) {
//     for(let i = 0; i < array.length; i++) {
//         if (i / 2 !== 0) {
//             array.splice(i, 1)
//         }
//     return array.join(" ")
//     }
// }

// console.log(evOtherWord(lyrics))

// Bonus 1
// function switchWords(array) {
//     for(let i = 0; i < array.length; i++) {
//         var a = 

var switchWords = function(array) {
    for (let i = 0; i < array.length; i++) {
        var temp = array[i / 2 === 0];
        array[i / 2 === 0] = array[i +1];
        array[i +1] = temp;
    }

//     var i,j,temparray,chunk = 10;
//     for (i=0,j=array.length; i<j; i+=chunk) {
//         temparray = array.slice(i,i+chunk);
//     // do whatever
// }

        // [array[i / 2 === 0], array[i +1]] = [array[i + 1], array[i / 2 ===0]]
        
        // if (i / 2 === 0) {
        //     array.splice(i, 1, i+1)
        // } else {
        //     array.splice(i, 1, i-1)
        
    return array
    }


console.log(switchWords(lyrics))