const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5500

const app = express()

// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openApiRoutes'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

module.exports = app