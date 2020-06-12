const express=require("express")
const app=express();

app.use(express.static("./public"));

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'));

app.get("/extra-runs",(req,res)=>{
    if(!req.query.season){
        return res.send(
            {
                error:"this is not the season"
            })  
    }
    console.log(req.query.season)
    console.log(res.json(data.extraRunsPerTeam2016))
    res.send(
        res.json(data.extraRunsPerTeam2016)
    )
})

/*
app.get("/economy",(req,res)=>{
    if(!req.query.year){
        return res.send("chal bhsdk ")
    }
    console.log(req.query)
    res.send(
        {
            day:"sunny",
            temp:24,
            moisture:20,
            place:req.query.place
            
        }
)
})

*/

app.listen(3000,()=>{
    console.log("server is up and running !! hello")
})
