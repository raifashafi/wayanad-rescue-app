const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const loginModel = require("./models/admin")
const app=express()
app.use(cors())
app.use(express.json())

app.post("/adminSignup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
    
})
// app.post("/adminSignin",(req,res)=>{
//     let input=req.body
//     let result=loginModel.find({username:input.username}).then(
//         (response)=>{
//             if (response.length>0) {
//                 const validator=bcrypt.compareSync(input)
                
//             } else {
                
//             }
//         }
//     )
// })
app.listen(3030,()=>{
    console.log("server started")
})