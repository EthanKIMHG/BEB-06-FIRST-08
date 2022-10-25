require("dotenv").config();

const mysql = require("mysql");
const conn= mysql.createConnection({
    host:process.env.IP,
    port:'3306',
    user:'nft_user',
    password:process.env.PASSWORD,
    database:'nft'
});

module.exports={conn};

