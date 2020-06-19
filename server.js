const express = require("express")
const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(express.json())
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./public/data.json'));
let extraData = { ...data}

app.get("/extra/:year", (req, res) => {
    
   let year = req.params.year;

    res.send(extraData.extraRunsPerTeam2016[year])

    // if (!req.query.season) {
    //     return res.send(
    //         {
    //             error: "this is not the season"
    //         })
    // }

    //  res.send(
    //     res.json(extraData.extraRunsPerTeam2016)
    // )

})

app.get("/economy", (req, res) => {
   if (!req.query.season1) {
        return res.send(
            {
                error: "this is not the season"
            })
    }

console.log(extraData.economicalBowler2015)
    res.send(
        res.json(extraData.economicalBowler2015)
    )
})


app.listen(PORT, () => {
    console.log("server is up and running !! please check http://localhost:3000/")
})
