Array.prototype.myFilter = function(cb){
    const result = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            result.push(this[i])
        }
    }
    return result
}

//Nate's lecture from 12/11/19

// forEach is just an abreviated for loop that always returns undefined
// map returns a new array
//in a for loop you can't say stop at 12, for loops always go through the length, forEach can be told to stop