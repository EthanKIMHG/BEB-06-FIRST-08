const router = require("express").Router();
const api = require("../api/nft.js");
module.exports = app =>{
    router.post('/nftload',api.nftload);
    router.post('/mint',api.mint);
    app.use('/call',router);
}