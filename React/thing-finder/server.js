const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.use('/plants', require('./plantsRouter'))
app.use('/plants/price', require('./priceRouter'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})