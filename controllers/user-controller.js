const User = require("../models/user")
const bcrypt = require("bcryptjs")

  const getAllUsers = async (req, res,next) => {

    let users;
try {
    users = await User.find();

}
catch (err) {
    console.log(err);
}

if(!users){
    return res.status(404).json({message:"No users Found"})
}
return res.status(200).json({users})

}

 const signup = async (req,res,next)=>{
    const {name,email,password} = req.body;

    let existingUser;
    try {
            existingUser = await User.findOne({email})
    }
    catch(err){
       return console.log(err)
    }

    if (existingUser){
        return res.status(400).json({message:"User Already Exist! Login instead"})
    }
    const hashPassword= bcrypt.hashSync(password)

    const user= new User({
        name,
        email,
        password :hashPassword
        
    })
try {
 await user.save();
}
catch(err){
  return   console.log(err)
}
return res.status(201).json({user})

}


module.exports= {
    signup,
    getAllUsers
}


