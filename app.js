const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost/SalesDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function () {
    console.log('connected..')
})

app.use(express.json())

const salesRouter = require('./routes/sales')

app.use('/api/sales/items', salesRouter)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log('Server started on port ${PORT}')
})
