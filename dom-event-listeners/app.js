// const tagBox = document.getElementsByTagName("div")
const classBoxes = document.getElementsByClassName("boxes")

// console.log(myBox)
// console.log(tagBox[0])
// console.log(classBox[0])

const myBox = document.getElementById("box")
const text = document.getElementById("textBox")
myBox.addEventListener("click", function(){    //takes two arguements, first is type of event, second is what you want it to do after it's clicked
    this.style.backgroundColor = 'blue'      //for right now don't write these as arrow functions
    console.log('it worked')
}) 

text.addEventListener("change", function() {
    myBox.style.backgroundColor = "red"
})

document.addEventListener("keypress", function(e) {
    if(e.key === "y") {
        myBox.style.backgroundColor = "yellow"
    } else if(e.key === "g") {
        myBox.style.backgroundColor = "green"
    } else {
        myBox.style.backgroundColor = "black"
    }
    
})

window.addEventListener('scroll', function() {
    for (let i = 0; i < classBoxes.length; i++) {  //the reason you put let before i is so that i only works here, keeps it local and doesn't use it globally
        classBoxes[i].style.backgroundColor = "purple"
    }
})