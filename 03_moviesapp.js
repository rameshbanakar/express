const express=require("express")

const app=express()

let movies=[
    {id:1,name:"kgf"},
    {id:2,name:"thiru"},
    {id:3,name:"don"}
]
app.get("/api/movies",(req,res)=>{
    res.send(movies)
})
app.get("/api/movies/:id",(req,res)=>{
    let findPred=(mov)=>mov.id===parseInt(req.params.id)
    let movie=movies.find(findPred)
    if(movie){
        res.send(movie)
    }else{
        res.send(`No movie find in id:-${req.params.id}`)
    }
    
})
app.listen(process.env.PORT||"5000")