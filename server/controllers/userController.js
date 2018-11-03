const User = require('../models/userModel');

const _USER = {

    getUser: function(req, res) {
        const cpf = req.params.cpf;
        User.findOne({cpf:cpf},function(err,docs){
            if(!docs){
                res.status(404).send({
                    message:"CPF não cadastrado"
                })
            }else{
                res.send(docs)

            }
        })


    }
}



module.exports = _USER;