import = require("express");

const Login = (request,response)=>{
response.send("welcome to the login page")
}


const Register = (request,response)=>{
response.send("welcome to the register page")
}

module.exports={Login,Register};
