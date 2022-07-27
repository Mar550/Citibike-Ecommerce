const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// REGISTER route
router.post("/register", async (req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES
        .encrypt(req.body.password, process.env.PASS_SEC)
        .toString()
    });
    // Add error message in case informations are uncomplete
    try {
        const savedUser = await user.save();
        console.log(savedUser);
        res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err);
        console.log(err);
    }

});

//LOGIN route'
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Username");
        
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        ); 
        const mainPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        mainPassword !== req.body.password && 
        res.status(401).json("Wrong Password");
        
        const {password, ...others} = user._doc;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;