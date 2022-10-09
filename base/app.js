const express = require("express");
const app = express();
const data = {numbers:[1,2,3,4,5,6,7,8,9]};
app.use(express.json());

app.get("/",(request,response)=>{
    response.send(data);
});

app.listen(5500,()=>{console.log("app listening on port",5500)});