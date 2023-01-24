let path = require("path")

const controlador = {
    index:(req,res) => {
        let ruta =  path.resolve(__dirname,"../views/home.html")
        res.sendFile(ruta)
    }

}
module.exports = controlador