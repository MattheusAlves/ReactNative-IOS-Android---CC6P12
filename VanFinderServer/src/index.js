const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controllers/index.js')(app)

app.get('/', (rep, res) => {
    res.send('OK')
})
app.listen(3000)