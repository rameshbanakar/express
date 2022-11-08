// const express=require("express")

// const app=express()
// app.get("/",(req,res)=>{
//     res.send("Express js hello everyone! Good Morning")
// })

// const port =process.env.PORT ||"5000"
// app.listen(port,()=>console.log(port))



const express=require("express")
const app=express()
app.use("/",(req,res)=>{
    res.send("hello simplilearn")
})
app.listen("5000",()=>{console.log("server started")})