const express=require('express');
const app=express();

//connect databs with atlas 
const DB = 'mongodb+srv://22dit012:hetvi@cluster0.0izy5px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>
{
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));


 //middelware
 const middelware=(req,res,next)=>{
        console.log("bhargav dungarani1323");
        next();
 }



app.get('/',(req,res)=>{
       res.send("hello world");
});


app.get('/login',(req,res)=>{
    res.send("login page ");
});
app.get('/signup',(req,res)=>{
    res.send("sign up");
});
app.get('/aboutus',middelware,(req,res)=>{
    res.send("ABOUT PAGE    ");
});

 app.listen(3000,()=>{
    console.log("running at port number 3000");
 })