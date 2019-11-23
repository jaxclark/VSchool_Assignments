// const express = require('express')
// const uuid = require('uuid/v4')

// const app = express()

// app.use(express.json())

// const PORT = 8080

// const todos = []

// app.get('/todo', (req, res) => {
//     res.send(todos)
// })

// app.post('/todo', (req, res) => {
//     todos.push({...req.body, _id: uuid()})
//     res.send(todos)
// })

// app.put('/todo/:id', (req, res) => {
//     const indexOfThing = todos.findIndex((todo) => {
//         return todo._id === req.params._id
//     })

//     for(key in todos[indexOfThing]){
//         if(key !== req.body[key]) {
//             todos[indexOfThing][key] = req.body[key]
//         }
//     }

//     res.send(todos)
// })

// app.delete('/todo/:id', (req, res) => {
//     todos.splice(todos[req.params], 1)
//     res.send(todos)
// })


// app.listen(PORT, () => {
//     console.log('app is running out of ' + PORT)
// })



const express = require('express')
const app = express()