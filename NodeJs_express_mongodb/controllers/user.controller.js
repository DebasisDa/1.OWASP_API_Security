var UserService = require('../services/user.service')
var mongoose = require('mongoose');
const UserModel = require('../models/user.model')

let login =  (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);

    if (!email || !password) {
        res.status(401).send('login failed');    
      }

    // UserModel.getOneUser({'email' : {'$eq' : email}, 'password' : { '$eq' : password}},{})
    UserModel.getOneUser({'email' :  email, 'password' : password},{})
    .then((user) => {
        res.status(200).send({'Message' : 'Login successfull'});
    })
    .catch((err) => {
        res.status(400).send({'Message' : 'Something went wrong.'})
    })
}

let getUsers = async function (req, res) {
        UserService.getManyUsers({},{})
    .then((result)=>{
        res.status(200).json({data : result });
    })
    .catch((err)=>{
        res.status(400).json({message: "Try again.." });
    })
}

let getOneUser = async function (req, res) {
    console.log('user id', req.params.id);
try{
    UserService.getOneUser({"_id":  mongoose.Types.ObjectId(req.params.id)},{})
.then((result)=>{
    res.status(200).json({data : result });
})
.catch((err)=>{
    res.status(400).json({message: "Try again.." });
})
}catch(err){
    res.status(400).json({message: "Try again.." });
}
}

let setOneUser = async function (req, res) {

    UserService.setOneUser(req.body)
    .then((result)=>{
        res.status(201).json({message: result });
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json({message: "Try again.." });
    })
}

module.exports = {
getUsers: getUsers,
setOneUser : setOneUser ,
getOneUser: getOneUser,
login : login
};


