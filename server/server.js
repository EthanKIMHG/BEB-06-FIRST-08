const express = require("express");
const cors = require("cors");
const path =require("path");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.static(path.join("../client/","build")));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: false}));

app.listen(port,()=>{
    console.log("서버가 정상적으로 실행 되었습니다.");
});

app.get("*",(req,rep)=>{
    rep.sendFile("/Users/gimhyeongu/Desktop/project/BEB-06-FIRST-08/client/build/index.html");
});
//path.join("../client/","build/index.html")
//라우터
require("./routes/routes.js")(app);