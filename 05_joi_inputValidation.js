const express=require("express")
const joi=require("@hapi/joi")
const app=express()

let movies=[
    {id:1,name:"kgf",genre:"action"},
    {id:2,name:"thiru",genre:"emotional"},
    {id:3,name:"don",genre:"comedy"}
]
app.use(express.json())

app.post("/api/movie",(req,res)=>{
    const schema=joi.object({name:joi.string().min(3).required(),genre:joi.string().min(3).required()})
    console.log("request body:-",req.body)
    const result=schema.validate(req.body)
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }
    res.send(movies)
})


app.listen(process.env.port||"5000")
