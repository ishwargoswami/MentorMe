//app.js
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Userprofile = require('./userprofile');
dotenv.config({ path: './config.env' });
require('./conn');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows cookies to be sent from the frontend
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

app.get('/Home', (req, res) => {
    res.send("hello world server");
});

app.get('/profile',(req,res)=>{
  Userprofile.find()
  .then(userprofile =>res.json(userprofile))
  .catch(err => res.json(err))
})



app.listen(5000, () => {
    console.log(`running at port number ${PORT}`);
})

