const express=require("express")

const app=express()
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/02_welcome.html")
})
app.get("/process",(req,res)=>{
    let formValue={
        username:req.query.username,
        lastname:req.query.lastname
    }
    
    // res.send(`Data has been processed....`+JSON.stringify(formValue))
    res.send(req.query)
    


})

const port =process.env.PORT ||"5000"
app.listen(port,()=>console.log(port))