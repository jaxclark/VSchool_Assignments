let passL = 8

function randPassword(passLength) {
    const password = [];
    let randChar = ""; //can also just be let randChar without the =, just to initialize the variable
    for (let i = 0; i < passLength; i++) {
        randChar = String.fromCharCode(Math.floor((Math.random() * 94 ) + 32));
        password.push(randChar)
    }
    return password.join("");
}
console.log(`Your random password is ${randPassword(passL)} \nIt is ${passL} characters long.`)

// //could also look like this :

// function randPassword(passLength) {
//     const password = [];
//     let randChar; 
//     for (let i = 0; i < passLength; i++) {
//         randChar = String.fromCharCode(Math.floor((Math.random() * 94 ) + 32));
//         password.push(randChar)
//     }
//     return password.join(""); //if you don't do = "" on the randChar, then you need to join it here into a string
// }
// console.log(`Your random password is ${randPassword(7)}`)

//BONUS

//take a atring as a parameter for the function
//randomly generate the password you want with it's length - the length of the string so the string can fit into
//     the total length you want the pass to be
//concat the rand pass and the string
//shuffle the characters by randomizing the index before joining them into a string to return

// passString = "HOWDY"

// function addString(passLength, string) {
//     const password = [];
//     let randChar = ""; //can also just be let randChar without the =, just to initialize the variable
//     for (let i = 0; i < passLength - passString.length; i++) {
//         randChar = String.fromCharCode(Math.floor((Math.random() * 94 ) + 32));
//         password.push(randChar)
//     }
//     password.push(string)
//     for(let i = passLength - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }

//     return password;
// }

// console.log(`Your random password is ${addString(12, passString)}`)