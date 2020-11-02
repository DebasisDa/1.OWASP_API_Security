
const URLs = {
    mongoose :process.env.MONGO_URL||"mongodb://localhost:27017/demo"
};

let sendURL=(name)=> {
   return URLs[name];
}

module.exports = {
   getURL : sendURL,
}
