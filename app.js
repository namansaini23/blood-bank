//web server.
const express = require('express');

// 
const app = express()
const port = 3000

//controllers
app.get('/',(req,res)=>{
    res.send("server is running");
    res.end;
})
app.get('/hello',(req,res)=>{
    res.send("hello world");
    res.end;
})
app.listen(port,()=>{
    console.log("server running at :"+port);
})
