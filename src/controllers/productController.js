//Fuente de datos//

//objeto literal con acciones para cada ruta//
const producController = {
    home:(req,res) => {
        res.render("home")
    },

    agregar:(req,res) => {
        res.render("agregar")
    },

    guardar:(req,res)=>{
        let vacas = {
            categoria: req.body.clasificacionVacuna,
            nombre: req.body.nombreDelVacuno,
            fechadenacimiento: req.body.fechaDeNacimiento,
            dueño: req.body.dueño,
            hijade: req.body.hijaDe,
            imagen: req.body.userImage,
            comentario: req.body.comentarioInput,
        }
        res.redirect('/informe');
    },

    

    //modificar:(req,res)=>{
    //let idVacas = req.params.idVacas;
    //res.send(idVacas);
    //},

    //actualizar:(req,res)=>{
        //let id = req.params.id;
        //res.send(id);
    //},

};

//Exportamos el Resultado//
module.exports = producController;