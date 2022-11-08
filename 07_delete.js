const express=require("express")
const joi=require("@hapi/joi")
const app=express()
let movies=[
    {id:1,name:"kgf",genre:"action"},
    {id:2,name:"thiru",genre:"emotional"},
    {id:3,name:"don",genre:"comedy"}
]
app.use(express.json())
app.get("/api/movies",(req,res)=>{
    res.send(movies)
})
app.delete("/api/movies/:id",(req,res)=>{
    console.log("delete method")
    const idvalidate=joi.object({id:joi.number().integer()})
    const result=idvalidate.validate(req.params)
    if(result.error){
        console.log("error 1")
        res.status(400).send(result.error.details[0].message)
        return ;
    }
    const movie=movies.find(m=>m.id===parseInt(req.params.id))
    if(!movie){
        console.log("error 2")

        res.send("No movie found")
        return
    }
    let index=movies.indexOf(movie)
    movies.splice(index,1)
    res.send(movie)
})
app.listen(process.env.port||"5000")