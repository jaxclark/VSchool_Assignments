// const axios = require("axios")
const list = document.getElementById('list')
const form = document.form
const title = document.getElementById('title')
const price = document.getElementById('price')
const description = document.getElementById('description')
const imgAddress = document.getElementById('url')
const box = document.getElementsByClassName('checkbox')

// const add = form.add

// // How Laura did it: 
// axios.get("https://api.vschool.io/jax_clark/todo/").then((response) => {
//     for(let i = 0; i < response.data.length; i++) {
//         let newItem = document.createElement('h3');
//         newItem.textContent = response.data[i].title;
//         document.getElementById('list').appendChild(newItem)
//         if(response.data[i].completed === true) {
//             newItem.innerHTML = `<s>${response.data[i].title}</s>`
//         } 
//     }
// })

// // How Eric did it:
axios.get("https://api.vschool.io/jax_clark/todo/").then((response) => {
    const todos = response.data
    for(let i = 0; i < todos.length; i++) {
        makeTodo(todos[i]);
        // checkBox(todos)
    }
})

form.addEventListener('submit', (e) => { //the even is the submission, the target of the even is the form
    e.preventDefault();  //we only use this on forms on submit
    const newTodo = {
        title: `${title.value}`, //value from input
        price: `${e.target.price.value}`, //could also write it like this
        description: `${description.value}`,
        imgUrl: `${imgAddress.value}`
    }
    axios.post("https://api.vschool.io/jax_clark/todo/", newTodo).then(response => {
        makeTodo(response.data)
    })
})

function makeTodo(todo) {   //Eric likes this function because it separates dom logic from axios logic
//create or select Dom Element
    const container = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const checkbox = document.createElement('input')
    checkbox.className += 'checkbox'
    const deleteBut = document.createElement('button')
    const editBut = document.createElement('button')
//edit element
    h3.textContent = todo.title
    if(todo.completed) {
        h3.style.textDecoration = 'line-through'}

    p.textContent = todo.description
    img.src = todo.imgUrl
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    deleteBut.type = 'button'
    deleteBut.textContent = 'X'
    editBut.type = 'button'
    editBut.textContent = 'edit'

//append
    container.appendChild(h3)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    container.appendChild(deleteBut)
    container.appendChild(editBut)

    list.appendChild(container)

    checkbox.addEventListener('change', e => {
        axios.put(`https://api.vschool.io/jax_clark/todo/${todo._id}`, {completed: e.target.checked}).then(response => {
            // response.data.completed ? console.log('true') : console.log('false')
            h3.style.textDecoration = response.data.completed ? 'line-through' : 'none'
        }) 
    })
    
    deleteBut.addEventListener('click', ()=>{
        axios.delete(`https://api.vschool.io/jax_clark/todo/${todo._id}`).then(response => {
            console.log(response)
            container.remove()
        }) 
    })
    
    //Clint's code
    // checkbox.addEventListener('change', function(event){
    //     todo.completed = checkbox.checked
    //     updateToDo(todo)
    //     console.log(event.target.checked)
    // })

    //Clint's code
    // deleteBut.addEventListener('click', function(event) {
    //     deleteToDo(todo)
    //     console.log(event.target)
    // }) 

    editBut.addEventListener('click', e => {
        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.value = h3.textContent
        container.replaceChild(titleInput, h3)

        const descInput = document.createElement('input')
        descInput.type = 'text'
        descInput.value = p.textContent
        container.replaceChild(descInput, p)

        const imgInput = document.createElement('input')
        imgInput.type = 'text'
        imgInput.value = img.src
        container.replaceChild(imgInput, img)

        const saveBut = document.createElement('button')
        saveBut.type = 'button'
        saveBut.textContent = 'save'
        container.replaceChild(saveBut, editBut)

        saveBut.addEventListener('click', e => {
            const editedTodo = {
                title: `${titleInput.value}`,
                description: `${descInput.value}`,
                imgUrl: `${imgInput.value}`
            }
            axios.put(`https://api.vschool.io/jax_clark/todo/${todo._id}`, editedTodo).then(response => console.log(response.data))
        })
    })


}

    

//Clint's code
// function updateToDo(todo) {
//     axios.put(`https://api.vschool.io/jax_clark/todo/${todo._id}`, todo).then(response => console.log(response.data))
// }

//Clint's code
// function deleteToDo(todo) {
//     axios.delete(`https://api.vschool.io/jax_clark/todo/${todo._id}`, todo).then(response => container.remove())
// }

// function editToDo(todo) {
//     axios.put(`https://api.vschool.io/jax_clark/todo/${todo._id}`, todo).then(response => console.log(response.data))
// }


// //Eric's code for the put, would go in the makeToDo
// checkbox.addEventListener('change', e => {
//     axios.put(`https://api.vschool.io/jax_clark/todo/${todo._id}`, {completed: e.target.checked}).then(response => {
//         response.data.completed ? console.log('true') : console.log('false')
//         h3.style.textDecoration = response.data.completed ? 'line-through' : 'none'
//     }) 
// })

// //Eric's doe for the delete, would go in the makeToDo
// deleteBut.addEventListener('click', ()=>{   //delete doesn't need a second argument
//     axios.delete(`https://api.vschool.io/jax_clark/todo/${todo._id}`).then(response => {
//         console.log(response)
//         container.remove()
//     }) 
// })