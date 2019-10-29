const inscriptions  = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const mostFreq = (string) => {
    const words = string.split(' ')
    // console.log(words)
    var expCounts = {};
    const newArr = []
    for(var i = 0; i < words.length; i++) {
        var key = words[i];
        if(!expCounts[key]){
        expCounts[key] = 0;
        }
        expCounts[key]++;
        // console.log(expCounts)
        // for(var j = 0; j < 20; j++) {
        //     var key2 = words[j];
        //     if(expCounts[key2] > 1){
        //         newArr.push(obj.expCounts)
        //         console.log(obj.expCounts)
        //     }
        // }
    }
    return expCounts
}

console.log(mostFreq(inscriptions))

// for(let i = 0; i < 5; i++){
//     const obj = {
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5
//     }
// }
// console.log(obj.i)


//Laura's method: 

function noDupes(str){
    const newArr = []
    let oldArr = str.toLowerCase().split(' ')
    str = str.replace(/[.,]/ g, ' ')
    for(let i = 0; i < oldArr.length; i++){
        let total = 0;
        for(let j = 0; j < oldArr.length; j++){
            if(oldArr[j] === oldArr[i]){
                total++
                if(total > 1 && !newArr.includes(oldArr[i])){
                    newArr.push(oldArr[i])
                }
            }
        }
    } return newArr
}

console.log(noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))


// if you have an issue with commas and such, do this:
