//Modulos//
const express = require('express');
const app = express()
const path = require('path')
const usersRouter = require("./routers/groups")
const methodOverride = require('method-override')

//Configuracion//
app.use(express.static(path.join(__dirname, '../public')))



//template engine//
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))


//Esto es para capturar informacion de los formularios(.JSON -- si asi lo quiero)//
app.use(express.urlencoded({extended:false}));
app.use(express.json());



//Rutas//
app.use ("/", usersRouter);
app.use(methodOverride("_method"));



//archivo de rutas y las vistas ejs//
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/agregar', (req, res) => {
    res.render('agregar')
})

//[ACA VAN A IR LAS OTRAS RUTAS UTILIZANDO DE EJEMPLO LAS RUTAS DE ARRIBA CON EL RENDER RUTAS]//
app.get('/informe', (req, res) => {
    res.render('informe')
})

app.get('/modificar', (req, res) => {
    res.render('modificar')
})




app.listen(3005, ()=> { 
    console.log('Servidor Corriendo en Puerto 3005')
})