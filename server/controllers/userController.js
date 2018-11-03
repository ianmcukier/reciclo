const User = require('../models/userModel');

const _USER = {

    getUser: function(req, res) {
        const cpf = req.params.cpf;
        queryUser(cpf)
        .then((user)=>{
            res.send(user)
        }).catch((err)=>{
            if(err.status)
                res.status(err.status);

            res.send({
                message:err.message
            });
        })
    },

    putPoints:function(req,res){
        const cpf = req.params.cpf;

        const points = req.body.value;
        queryUser(cpf)
        .then((user)=>{
            console.log(user.points+points)
            user.points = user.points+points;
            user.save((err)=>{
                if(err){
                    res.status(500);
                    res.send(err);
                }else{
                    res.send({
                        message:"Pontos atualizados"
                    })
                }
            })
        }).catch((err)=>{
            if(err.status)
                res.status(err.status);
            res.send({
                message:err.message
            });
        })
    }

    
};

function queryUser(cpf){
    return new Promise((resolve,reject)=>{
        User.findOne({cpf:cpf},function(err,docs){
            if(!docs){
                reject({
                    message:"CPF não cadastrado",
                    status:404
                })
            }else{
                resolve(docs)
    
            }
        })
    })
}


module.exports = _USER;