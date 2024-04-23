const authService = require("../services/login");

async function login(req,res){
    try{
        const {semail,spassword} = req.body;
        const token = await authService.login(semail,spassword);
        res.json({token:token});
    }catch (error){
        res.status(401).json({message:"Invalid Credentials"});
    }
}


module.exports = {
    login
}