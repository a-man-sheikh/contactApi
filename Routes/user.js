const express = require('express');
const user = require('../Controllers/user');
const router = express.Router();
const{register,login} = user;

//user Routes
//@api name : user register
//@api method : post
//@api endpoint : /api/user/register
router.post("/register",register)

//user Routes
//@api name : user login
//@api method : post
//@api endpoint : /api/user/login
router.post("/login",login)

module.exports = router