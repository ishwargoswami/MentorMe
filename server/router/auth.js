const express = require('express');
const router = express.Router();
const User = require('../userschema');
require('../conn');
//this will work first beacuse of its first called 
router.get('/Home', (req, res) => {

    res.send(`hello from router server`);
});

//reguster button
//login route 
router.post('/signin', async(req,res) => {


    console.log(req.body);
    //go to postman make new post request

    try{

        const {email,password} = req.body

        if(!email || !password)
        {
            return res.status(400).json({error:"Please enter data"});
        }

        const userLogin = await User.findOne({email: email});

        console.log(userLogin);

        
        if (userLogin.password  !== password) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        res.json({ message: "User login successful" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

 });
// router.post('/register', async (req, res) => {

//     const {email, username, password , conPassword} = req.body;
    
//     if(!email || !username || !password ||  !conPassword)
//     {
//         return res.json({ error: "please fill the fields"});
    
//     }
//     try 
//     {
//       const userExist = await User.findOne({email:email});
    
//       if(userExist) 
//             {
//                 return res.json({ error: "email already exists"});
//             }

//             else 
//             {
//                 const user = new User({email, username, password});
//                 const userRegister = await user.save()
    
    
//                 if(userRegister)
            
//                 {
//                     res.json({message : "User saved successfully"});
//                 }
            
//                 else 
//                 {
//                     res.json({ error: "failed to register user"});
//                 }
                    
//             }
//             }
//     catch(err)
//     {
//         console.log(err);
//         res.json({ error: "Internal server error" })
//     }
//     });




router.post('/register', async (req, res) => {
    const { email, username, password, conPassword } = req.body;

    console.log("Received registration request:", { email, username }); // Add this line to log the request data

    // Rest of your registration logic...
    if (!email || !username || !password || !conPassword) {
        return res.status(400).json({ error: "Please fill all fields" });
    }

    if (password !== conPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        // Your registration logic...
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const user = new User({ email, username, password ,conPassword});
        const userRegister = await user.save();

        if (userRegister) {
            return res.status(201).json({ message: "User registered successfully" });
        } else {
            return res.status(500).json({ error: "Failed to register user" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// to postman videoc 11.36 video 8
module.exports = router;




