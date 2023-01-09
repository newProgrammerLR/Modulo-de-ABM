const path = require('path')
const express = require('express');
const app = express()



app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/anadir', (req, res) => {
    res.sendFile(path.join(__dirname, './views/anadir.html'))
})


app.listen(3005, ()=> { 
    console.log('Servidor Corriendo en Puerto 3005')
})