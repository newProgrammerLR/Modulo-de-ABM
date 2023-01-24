//aca colocamos express y router//
const express = require("express")
const router = express.Router()

//aca traemos el controlador//
const mainController = require("../controllers/mainController")

//aca definimos las rutas//
router.get("/", mainController.home);
router.get("/agregar", mainController.agregar);

//aca exportamos el resultado//
module.exports = router;