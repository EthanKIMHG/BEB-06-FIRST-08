
const {conn}=require('../DB_Connect/db.js');

const nftload=(req,res)=>{
    // res.send('성공성공');

    conn.query("select * from nft",(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({"data":result});
    })
}

module.exports={
    nftload,
}