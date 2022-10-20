require("dotenv").config();

const mysql = require("mysql");
const conn= mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:process.env.PASSWORD,
    database:'nft'
});
// conn.connect((err)=>{
//     if(err) throw err;
// })

module.exports={conn};

