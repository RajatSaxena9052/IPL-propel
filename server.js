const express = require("express")
const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./public/data.json', 'utf-8'));
let extraData = { ...data }

app.get("/extra", async (req, res) => {
    if (!req.query.season) {
        return res.send(
            {
                error: "this is not the season"
            })
    }
    return res.status(200).send(data.extraRunsPerTeam2016)
})

app.get("/economy", async (req, res) => {
    if (!req.query.season1) {
        return res.send(
            {
                error: "this is not the season"
            })
    }

    return res.send(
        res.json(data.economicalBowler2015)
    )
})


app.listen(PORT, () => {
    console.log("server is up and running !! please check http://localhost:3000/")
})
