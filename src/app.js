//Modulos//
const express = require('express');
const { dirname } = require('path');
const app = express()
const path = require('path')
const mainRouter = require("../src/routers/mainRouter")

//Configuracion//
app.use(express.static(path.join(__dirname, '../public')))

//template engine//
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))

//Rutas//
app.use ("/", mainRouter);


//archivo de rutas y las vistas ejs//
app.get('/', (req, res) => {
    res.send('me toca a mi')
})

app.listen(3005, ()=> { 
    console.log('Servidor Corriendo en Puerto 3005')
})