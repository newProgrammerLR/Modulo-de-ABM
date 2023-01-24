const express = require ("express")
const controlador = require("../controllers/mainControllers.js")

const router = express.Router()
router.get ("/", controlador.index)

module.exports = router