const userService = require("../services/signup");

async function createUserS(req,res) {

    try{
        const usersData = req.body;
        const users = await userService.createUserS(usersData);
        res.status(201).json({users:users,message:"User Created Successfully"});
    }catch(error){
        console.log(error);
        res.status(400).json({message:error.message});
    }
   
}

module.exports = {createUserS};