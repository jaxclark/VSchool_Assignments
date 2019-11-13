// given a string representing a day of the week (Tue), and a number of days after that day (2), 
    // return the day of the week that results from the number of days after the given day.

    //Rob's solution 
// const sun = 1
// const mon = 2
// const tue = 3
// const wed = 4
// const thurs = 5
// const fri = 6
// const sat = 7

// function whatDay(startingDay, numOfDays) {
//     let dayNum = startingDay + numOfDays % 7
//     if(dayNum = 1){
//         return 'sun'
//     } else if(dayNum = 2){
//         return 'mon'
//     } else if(dayNum = 3){
//         return 'tue'
//     } else if(dayNum = 4){
//         return 'wed'
//     } else if(dayNum = 5){
//         return 'thurs'
//     } else if(dayNum = 6){
//         return 'fri'
//     } else{
//         return 'sat'
//     }
// }

// whatDay('tue', 4)  // => ‘Sat’
// whatDay('sun', 10) // => ‘Wed’


const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

function whatDay2(startingDay, numOfDays) {
    const index = days.indexOf(startingDay)
    const finalIndex = index + numOfDays % 7
    return days[finalIndex]
}

console.log(whatDay2('tues', 4))  // => ‘Sat’
console.log(whatDay2('sun', 10)) // => ‘Wed’