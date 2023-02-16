//aca colocamos express y router//
const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')
//aca traemos el controlador//
const productsController = require("../controllers/productController")

//aca debemos colocar el multer para almacenar localmente los datos//
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, path.join(__dirname, '../../public/images/groups'));
    },
    filename:(req,file,cb) => {
        console.log(file)
        const newFilename = "Bovino" + Date.now() + path.extname(file.originalname)
        cb(null,newFilename);
    }
});
const upload = multer({storage});

//aca definimos las rutas//
// Todos los grupos
router.get("/", productsController.home);
router.get("/informe", productsController.informe);


// Formulario de creación
router.get("/agregar", productsController.agregar);

// Procesamiento del formulario de creación
router.post("/agregar",upload.single('userImage'),productsController.guardar)

// Detalle de un grupo
router.get("/:id", productsController.mostrar);




//aca exportamos el resultado//
module.exports = router;