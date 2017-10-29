const express= require('express');
const path=require('path');
const config=require('config.js');
const app=express();
app.use('/',express.static(path.join(__dirname,"public_static")));
app.get('/hello',(r,s)=>s.send('hello'));
app.listen(config.PORT,()=> {console.log(`server started at http://localhost: ${config.PORT}`)});