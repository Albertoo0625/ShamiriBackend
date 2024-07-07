const express= require('express');
const router= express.Router();
const refreshTokenController=require('../Controllers/refreshTokenController');
const verifyJWT = require('../Middleware/verifyJWT');

router.get('/',verifyJWT,refreshTokenController.handleRefreshToken);

module.exports=router;