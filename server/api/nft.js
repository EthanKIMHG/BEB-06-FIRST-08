const {conn}=require('../Connect/db.js');

const nftload=(req,res)=>{
    conn.query("select * from nft",(err,result)=>{
        if(err) throw err;
        console.log("nftload");
        res.send({"data":result});
    });
};
const mint=(req,res)=>{
    const {name,account,price,url,description,attribute,image} = req.body;
    const sql="insert into nft(name,creator,holder,price,url,description,attribute,image) values (?)";
    const values =[name,account,account,price,url,description,attribute,image];
    conn.query(sql,[values],(err,result)=>{
        if(err) console.log(err);
        console.log('데이터 저장 성공');
        res.send("성공입니다.");
    });
   
}

module.exports={
    nftload,
    mint,
}