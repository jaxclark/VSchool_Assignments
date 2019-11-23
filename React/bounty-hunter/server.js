const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.use('/bounty', require('./routes/bountyRouter'))

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})