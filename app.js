const express=require("express")
const app=express()
const port=8000
app.get("/",(req,res)=>{
    res.send("first deploy in EC2")
})
app.get("/get",(req,res)=>{
    res.json({name:"kumarjit das"})
})
app.listen(port,(err)=>{
    if(err){
       console.error("error found",err)
    }
    else{
        console.log(`server start on port ${port} ....`)
    }
})
