const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//const DB = "mongodb+srv://22dit013:bharg@cluster0.klo8sdv.mongodb.net/mentor?retryWrites=true&w=majority&appName=Cluster0";
dotenv.config({ path: './config.env' });
require('./conn');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows cookies to be sent from the frontend
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./router/auth'));


// app.use(cors({
//     credentials:true,
//     origin: 'http://localhost:3000', // Allow requests from all origins (not recommended for production)
//     methods: ['GET', 'POST'], // Allow these HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
//   }));
const PORT = process.env.PORT || 5000;
//const user=require(`./userschema`);
//middelware
// const middelware = (req, res, next) => {
//     console.log("bhargav dungarani1323");
//     next();
// }
app.get('/Home', (req, res) => {
    res.send("hello world server");
});

app.listen(5000, () => {
    console.log(`running at port number ${PORT}`);
})

