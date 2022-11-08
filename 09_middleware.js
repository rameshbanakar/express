const express=require("express")
const app=express()

app.use("/",(req,res,next)=>{
    console.log("welcome to middleware")
    next()
})
app.get("/",(req,res)=>{res.send("welcome to habba")})

app.listen(process.env.port||"5000")