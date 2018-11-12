 const express = require("express");
 const router = express.Router();
 const passport = require("passport");

 const Profile = require("../../models/Profile");

//  $router /api/profile/

//$router /api/profile/test
module.exports = router; 

router.get('/test',(req,res)=>{
	res.json({msg:"Profile Works"});
});




