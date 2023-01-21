const express=require("express");
const { registerUser ,loginUser, generateOtp, verifyOtp, saveChangePassword, generateOtpforForgetPass, saveChangePasswordForForgetPass} = require("../controller/auth");
const { verifyUser, localVariables } = require("../middleware/authenticate");
const authRouter=express.Router();


authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);
// url work when change pass button clicked
authRouter.get("/generateOtp/:userId",verifyUser,localVariables,generateOtp);
// url work when verify otp button clicked
authRouter.get("/verifyOtp/:userId",verifyUser,verifyOtp);
// url work when save password button clicked
authRouter.post("/saveChangePassword/:userId",verifyUser,saveChangePassword);

// forget password//************* */
authRouter.get("/generateOtp",localVariables,generateOtpforForgetPass);
// url work when verify otp button clicked
authRouter.get("/verifyOtp",verifyOtp);
// url work when save password button clicked
authRouter.post("/saveChangePassword",saveChangePasswordForForgetPass);



module.exports=authRouter