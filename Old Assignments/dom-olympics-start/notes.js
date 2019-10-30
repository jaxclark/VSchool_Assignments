// //you're either creatinig or selecting an element
const title = document.createElement("h1")
const subHeaderContainer = document.createElement("div")
// const name = document.createElement("span")
// const theRest = document.createElement('span')
const header = document.getElementById("header")


document.getElementById("id")

// //Editing/giving content

subHeaderContainer.innerHTML = "<h2><span class ='name'> October cohort</span> made this</h2>"

title.textContent = "Javascript made this"
// title.className = "header"

// name.textContent = "Octobor cohort "
// name.className = "name"

// theRest.textContent = "made this"
// theRest.className = "title"

// //Apppend to existing DOM element
subHeaderContainer.appendChild(name)
subHeaderContainer.appendChild(theRest)

header.appendChild(title)
header.appendChild(subHeaderContainer)

const header = document.getElementById("header")
header.appendChild(title)

// //If you want to investigate an object in the dev tools, do console.log and that will log and object you can open
// //and look at the properties of, rather than the console.log which just prints something noninteractive