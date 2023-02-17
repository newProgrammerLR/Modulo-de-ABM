//Fuente de datos//
const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');

const groupsModel = jsonTable('groups');

//objeto literal con acciones para cada ruta//
const producController = {
    home:(req,res) => {
        res.render('./groups/home');
    },

    informe:(req,res) => {

        let groups = groupsModel.all()

        res.render('./groups/informe',  { groups });
    },

    agregar: (req, res) => {
        res.render('./groups/agregar');
    },

    guardar: (req, res) => {
        if(req.file){ 
        let group = req.body;
        group.image = req.file.filename

        groupId = groupsModel.agregar(group);

        res.redirect('./groups/' + groupId);
    } else {
        res.render('./groups/agregar');
    }
    },
    
    mostrar: (req, res) =>{
        let group = groupsModel.find(req.params.id);

        res.render('./groups/detail', { group });
    },

    modificar: (req, res) => {
        let group = groupsModel.find(req.params.id)
        let categories = categoriesModel.all();

        res.render('./groups/edit', { group, categories });
    },

    actualizar: (req, res) => {
        let group = req.body;

        group.id = req.params.id;

        groupId = groupsModel.actualizar(group);

        res.redirect('./groups/' + groupId)
    },

    destroy: (req, res) => {

        let group = groupsModel.find(req.params.id);
        let imagePath = path.join(__dirname, '../public/img/groups/' + group.img);
        
        groupsModel.eliminar(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

        res.redirect('/groups')
    },
    search: (req, res) => {
        
        // Traigo todos los grupos

        // Filtro los grupos

        // Envío los grupos y lo que busco el usuario a la vista

        res.render('groups/search', {});
    },


};

//Exportamos el Resultado//
module.exports = producController;