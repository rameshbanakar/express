const express=require("express")
const app=express()

let movies=[
    {id:1,name:"kgf",genre:"action"},
    {id:2,name:"thiru",genre:"emotional"},
    {id:3,name:"don",genre:"comedy"}
]

app.get("/api/movies",(req,res)=>{
    
    res.send(movies)
})

//node middleware
app.use(express.json())

app.post("/api/movies",(req,res)=>{
    console.log("data at body:-",req.body)
    const {name,genre}=req.body
    if(!name ||name.length<2){
        res.send("movie name is too short cannot add the movie")
        return;
    }
    let movie={
        id:movies.length+1,
        name:name,
        genre:genre
    }
    movies.push(movie)
    res.send(movie)

    
   
    res.send(req.body)
})


app.listen(process.env.PORT||"5000")