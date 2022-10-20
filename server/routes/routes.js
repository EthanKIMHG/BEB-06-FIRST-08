const router = require("express").Router();
const api = require("../api/nft.js");
module.exports = app =>{
    router.post('/nftload',api.nftload);
    app.use('/call',router);
}