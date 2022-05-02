const express = require('express');
const {signup,getAllUsers} = require('../controllers/user-controller');
const router = express.Router()



router.get("/",getAllUsers)
router.post("/signup",signup) 


module.exports=router