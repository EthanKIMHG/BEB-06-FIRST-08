const {conn}=require('../Connect/db.js');
const Web3=require('../Connect/web3.js');
const nftupload=async()=>{
    // res.send('성공성공');
    const name=await Web3.nft_contract.methods.name().call();
    console.log(name);
    // conn.query("select * from nft",(err,result)=>{
    //     if(err) throw err;
    //     result.forEach(el=>console.log("ㅋㅋㅋㅋ",el));
    // })
};

module.exports={
    nftupload,
}