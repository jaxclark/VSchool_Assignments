const submit = document.addItem
const list = document.getElementById('list')
const button = document.getElementsByClassName('button')
// const button = document.getElementsByTagName('button')

submit.addEventListener('submit', function () {
    event.preventDefault();

    let newTitle = document.getElementById('title').value;
    let newList = document.createElement("li");
    // newList.setAttribute("name", "li")

    let newDiv = document.createElement('div');
    let listName = document.createTextNode(newTitle)
    newDiv.appendChild(listName)
    newList.appendChild(newDiv)

    let newEdit = document.createElement('button')
    let editName = document.createTextNode('edit')
    // newEdit.setAttribute("name", "edit")
    newEdit.appendChild(editName)
    newList.appendChild(newEdit)

    let newX = document.createElement('button')
    let xName = document.createTextNode('X')
    newX.className += "button"
    newX.appendChild(xName)
    newList.appendChild(newX)

    list.appendChild(newList)
    crossOffList()
})

// list.addEventListener('click', function (e) {
//     let tgt = e.target.parentNode;
//     let removeLi = document.getElementById('li')
//     let removeDiv = document.getElementsByTagName('div')
//     let removeButton = document.getElementById('button')

//     // list.removeChild(document.getElementById('button'))
//     tgt.parentNode.removeChild(tgt)

// })

// Object.entries(button).map((object) => { console.log(object)} )

// button.addEventListener('click', function() {
//     for (let i = 0; i < 3; i++) {
//         button[i].onclick = function () {
//             const div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// })

// const button = document.getElementsByClassName('button')
function crossOffList() {
    for(let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            const parent = this.parentElement;
            parent.style.display = "none";
            // button[i].parentNode.removeParent(button[i])
        })
    }
}
crossOffList()