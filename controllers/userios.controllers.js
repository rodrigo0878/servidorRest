const {  response , request} = require('express');



const usuariosGet = (req = request, res = response) => {

    const { q, nombre ='no name', apikey, page = 1 , limit} = req.query;

    res.status(200).json({
        ok: true,
        msg : "get desde la api-controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut =  (req, res= response) => {

    const id = req.params.id;
    console.log(id)

    res.json({
        ok: true,
        msg : "put desde la api",
        id
    })
}


const usuariosPost =  (req = request , res = response) => {
    const body = req.params.body;
    
    res.json({
        
        msg : "post  api",
        body
    })
   

}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg : "delete desde la api"
    })
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
};
