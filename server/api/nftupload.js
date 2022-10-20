const {conn}=require('../Connect/db.js');
const {web3}=require('../Connect/web3');
const nftupload=async()=>{
    // res.send('성공성공');
    try{
        const accounts=await web3.eth.getAccounts();
        console.log("d",accounts);
    }catch (e){
        console.log(e);
    }
    conn.query("select * from nft",(err,result)=>{
        if(err) throw err;
        result.forEach(el=>console.log("ㅋㅋㅋㅋ",el));
    })
};

module.exports={
    nftupload,
}