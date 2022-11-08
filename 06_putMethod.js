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
app.put("/api/movies/:id",(req,res)=>{
    console.log("put method")
    const idvalidate=joi.object({id:joi.number().integer()})
    const result=idvalidate.validate(req.params)
    if(result.error){
        
        res.status(400).send(result.error.details[0].message)
        return
    }
    const movie=movies.find(m=>m.id===parseInt(req.params.id))
    if(!movie){

        res.send("No movies found")
    }
    const schema=joi.object({name:joi.string().min(3).required(),genre:joi.string().min(3).required()})
    console.log("request body:-",req.body)
    const result1=schema.validate(req.body)
    if(result1.error){

        res.status(400).send(result1.error.details[0].message)
        return;
    }
    movie.name=req.body.name

    
    res.send(movies)

})
app.listen(process.env.port||"5000")