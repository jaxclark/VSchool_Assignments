
// function randPassword(passLength) {
    //     const password = [];
    //     let randChar = ""; //can also just be let randChar without the =, just to initialize the variable
    //     for (let i = 0; i < passLength; i++) {
        //         randChar = String.fromCharCode(Math.floor((Math.random() * 94 ) + 32));
        //         password.push(randChar)
        //     }
        //     return password.join("");
        // }
        // console.log(`Your random password is ${randPassword(passL)} \nIt is ${passL} characters long.`)
        
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
                
let passL = 12
const passString = "HOWDY"

function addString(passLength, string) {
    const password = [];
    let randChar = ""; //can also just be let randChar without the =, just to initialize the variable
    for (let i = 0; i < passLength - passString.length; i++) {
        randChar = String.fromCharCode(Math.floor((Math.random() * 94 ) + 32));
        password.push(randChar)
    }
    password.push(string)
    for(let k = passLength - string.length; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = string[k];
        string[k] = string[j];
        string[j] = temp;
    }
    
return password.join("");
}

console.log(`Your random password is ${addString(passL, passString)}`)

//marcus

// const randomPassword = (num, str) => {
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?><,./\|}{][;:~'
//     let password = ''
//     if(str) str = str.split('')
//     for(let i =0; i < num; i++){
//       if(str.length){
//         let strIndex = Math.floor(Math.random()*str.length)
//         password += str[strIndex]
//         str.splice(strIndex, 1)
//       }else {
//         password += chars[Math.floor(Math.random()*chars.length)]
//       }
//     }
//     return password
// }