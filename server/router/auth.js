//auth.js
const express = require('express');
const router = express.Router();
const User = require('../userschema');
const Userprofile=require('../userprofile');
const Service = require('../userService');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
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

router.post('/edit', async (req, res) => {
    const { firstName, lastName, email, qualification, passout_from, country, city, domain, address, about_mentee, link } = req.body;
    console.log(req.body);
    try {
        const userprofile = new Userprofile({ firstName, lastName, email, qualification, passout_from, country, city, domain, address, about_mentee, link });
        const userRegister = await userprofile.save();

        if (userRegister) {
            return res.status(201).json({ message: "User profile updated" });
        } else {
            return res.status(500).json({ error: "Edit failed" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
});
router.get('/profile', async (req, res) => {
    try {
      
        const userProfile = await Userprofile.find(); 
      
        if (userProfile.length === 0) {
            return res.status(404).json({ error: "No user profiles found" });
        }
        
        
        res.status(200).json(userProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.post('/create-service', async (req, res) => {
    const { domain, title, date, time, duration, amount } = req.body;

    try {
        const service = new Service({ domain, title, date, time, duration, amount });
        const serviceCreated = await service.save();

        if (serviceCreated) {
            return res.status(201).json({ message: "Service created successfully" });
        } else {
            return res.status(500).json({ error: "Failed to create service" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
});

router.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.delete('/services/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedService = await Service.findByIdAndDelete(id);
      if (!deletedService) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
router.post('/save-settings', async (req, res) => {
  // Implement saving settings to the database here
  res.status(200).send("Settings saved successfully");
});

module.exports = router;


module.exports = router;





