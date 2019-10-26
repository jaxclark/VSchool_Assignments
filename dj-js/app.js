const myBox = document.getElementById("box")

myBox.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'blue'
})

myBox.addEventListener("mousedown", function() {
    this.style.backgroundColor = 'red'
})

myBox.addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow"
})

myBox.addEventListener("dblclick", function() {
    this.style.backgroundColor = "green"
})

window.addEventListener("scroll", function() {
    myBox.style.backgroundColor = "orange"
})

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 82){
        myBox.style.backgroundColor = "red"
    } else if(event.keyCode === 66) {
        myBox.style.backgroundColor = "blue"
    } else if(event.keyCode === 89) {
        myBox.style.backgroundColor = "yellow"
    } else if(event.keyCode === 71) {
        myBox.style.backgroundColor = "green"
    } else if(event.keyCode === 79) {
        myBox.style.backgroundColor = "orange"
    } else {
        myBox.style.backgroundColor = "purple"
    }
    // console.log(event.which); // to tell which key has which keyCode
})