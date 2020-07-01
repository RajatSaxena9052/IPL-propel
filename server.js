const express = require("express")
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(express.json())
const fs = require('fs');
let Data = JSON.parse(fs.readFileSync('./public/data.json','utf-8'));
//let extraData = { ...data }

app.get("/extra/:year", (req, res) => {
    
   let year = req.params.year;
    Data=Data.extraRunsPerTeam2016[year]
    res.json(Data)

})
/*
app.get("/economy", (req, res) => {
   if (!req.query.season1) {
        return res.send(
            {
                error: "this is not the season"
            })
    }

console.log(data.economicalBowler2015)
    res.send(
        res.json(data.economicalBowler2015)
    )
})
*/
app.listen(PORT, () => {
    console.log("server is up and running !! please check http://localhost:3000/")
})
