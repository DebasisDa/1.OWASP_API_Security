var UserModel = require('../models/user.model')
var promise = require('es6-promise').Promise;

let getManyUsers = async function (query, projection) {
  return new promise((resolve, reject)=>{
    try {
      UserModel.getManyUsers(query, projection)
      .then((result)=>{
        resolve(result);
      }) 
    } catch (e) {
        reject(e);
    }
  })
}

let getOneUser = async function (query, projection) {
  return new promise((resolve, reject)=>{
    try {
      UserModel.getOneUser(query, projection)
      .then((result)=>{
        resolve(result);
      }) 
    } catch (e) {
        reject(e);
    }
  })
}



let setOneUser = async function (body) {
  return new promise((resolve, reject)=>{
      UserModel.saveOneData(body)
      .then((result)=>{
        resolve(result);
      })
     .catch ((e) => {
        console.log('Error=>',e)
        reject(e);
    })
  })
}


module.exports = {
    setOneUser : setOneUser,
    getManyUsers : getManyUsers,
    getOneUser : getOneUser,
}