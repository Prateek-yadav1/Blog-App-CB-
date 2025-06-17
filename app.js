const path=require('path');
const express=require('express');
const mongoose=require('mongoose');
const Blogs = require('./models/blogs');
const app=express();
const PORT=4444;



app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');

app.get('/blogs',(req,res)=>{
    res.render('blogs');
})
app.use(express.json());


app.post('/blogs',(req,res)=>{
    const {title,content}=req.body;

    console.log(title);
    console.log(content);
    res.send('Blog created successfully!');
})

mongoose.connect('mongodb://127.0.0.1:27017/myblog')
.then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
})
.catch((err)=>{
    console.error('Database connection Mongoose could not connect:', err);
});

