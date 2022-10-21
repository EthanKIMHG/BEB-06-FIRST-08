const {nftupload} =require("./api/nftupload.js")
const express = require("express");
const path =require("path");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static(path.join("../client/","build")));
app.listen(port,()=>{
    console.log("서버가 정상적으로 실행 되었습니다.");
});
app.get("*",(req,rep)=>{
    rep.sendFile(path.join("../client/","build/index.html"));
    
});

nftupload();
//라우터
require("./routes/routes.js")(app);