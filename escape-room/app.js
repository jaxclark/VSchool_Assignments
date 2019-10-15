const readlineSync = require("readline-sync")
const options = ["Put hand in hole", "Open the door", "Look around"]
let selection = 0
let key = false
let isAlive = true

console.log("You wake up inside a dungeon. There is a door to your cell, and a small hole in one of the walls.")
while (isAlive) {
    selection = readlineSync.keyInSelect(options, "What do you do?")
    if(selection === 0) {
        console.log("You put your hand in the hole and die instantly")
        isAlive = false

    } else if(selection === 2) {
        key = true
        console.log("You look around and find a key.") 

    } else if (selection === 1 && !key) {
        console.log("The door is locked.")

    } else if (selection === 1 && key) {
        console.log("You use the key to open the door and escape the dungeon")
        return
    }

}

// const action = readlineSync.keyInSelect(options)