


//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
count = 0
for(let i = 0; i < officeItems.length; i++) {
    if(officeItems[i] == "computer")
        count++ && console.log(count)
}


//#2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
//has bonuses 1 & 2 for #2 exercise
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
    } else {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " can watch the movie." )
    }
}


//#Bonus
const array = [2, 3, 2, 1]
var toggles = 0
for (let i = 0; i < array.length; i++) {
    toggles += array[i]
    console.log(toggles)
    if (toggles % 2 === 0) {
        lightOn = false
        console.log(lightOn)
    } else {
        lightOn = true
        console.log(lightOn)
    }
}