const express=require("express")
const app=express()

app.use("/",(req,res,next)=>{
    console.log("welcome to middleware")
    next()
})
app.get("/",(req,res,next)=>{
    console.log("welcome to habba")
    next()
})

app.listen(process.env.port||"5000")




//see in github for clarity ragavedra m j