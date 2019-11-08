function parentheses(str){
    let opening = 0;
    let closing = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) == 40){
            opening += 1
        } else if(str.charCodeAt(i) == 41) {
            closing += 1
        } else {
            return console.log('false')
        }
    }
    if(opening != closing){
        return console.log('false')
    } else {
        console.log('true')
    }
    console.log(opening, closing)
}

// parentheses('(())')

    // for(let j = i + 1; j < str.length; j++){
    //     if(str.charCodeAt(j) == 41){
    //         return console.log('match found')
    //     } else {
    //         console.log('false')
    //     }
    // }

//Solution :
//Make a count that when there is a closing parantheses, add -1, if it's opening, add 1, 
    //if count is ever negative, return false

//Code Signal is good for practicing these kinds of coding questions 
//There are questions from like Tesla that are timed and if you can do them in a certain amount of time,
    //it gets you in front of Tesla hiring managers


function balance(str){
    let count = 0
    for(let i = 0; i < str.length; i ++){
        if(str[i] === '('){
            count += 1
        } if(str[i] === ')') {
            count -= 1
        } if(count < 0){
            return false
    }
    return count === 0
    console.log(count)
    // if(count < 0){
    //     return console.log('false')
    // } else if(count === 0){
    //     return console.log('true')
    // } else {
    //     return console.log('false')
    // }
}
}

console.log(balance(')()()'))