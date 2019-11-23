const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8000

app.use(express.json())

app.use('/bounty', require('./routes/bountyRouter'))

mongoose.connect('mongodb://localhost:27017/bountiesList', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`MongoDB is connected`)
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})