const path = require('path')
const express = require('express');
const app = express()
const rutasMain = require("./routers/main.js")

app.use ("/",rutasMain)
app.use ("/anadir", rutasMain)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/añadir', (req, res) => {
    res.sendFile(path.join(__dirname, './views/añadir.html'))
})


app.listen(3005, ()=> { 
    console.log('Servidor Corriendo en Puerto 3005')
})