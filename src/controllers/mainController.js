//Fuente de datos//
const listadevacas=[{

}
]

//objeto literal con acciones para cada ruta//
const mainController = {
    home:(req,res) => {
        res.render("home")
    },

    agregar:(req,res) => {
        res.render("agregar")
    }
};

//Exportamos el Resultado//
module.exports = mainController;