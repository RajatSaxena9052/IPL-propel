const fs=require("fs")
const matchesplayedperyear=require("./ipl/matchesplayedperyear");
const matchesWonPerTeam=require("./ipl/matchesWonPerTeam");
const extraRunsPerTeam2016=require("./ipl/extraRunsPerTeam2016");
const economicalBowler2015=require("./ipl/economicalBowler2015");
const winningTeamPerVenue=require("./ipl/winningteampervenue");
const winsPerTeamPerSeason=require("./ipl/winsPerTeamPerSeason");
const mostMatchesWon=require("./ipl/mostMatchesWon");
const mostManOfMatches=require("./ipl/mostmanofmatches")
const csv=require('csvtojson');
const csvMatchesFilePath="./csv_data/matches.csv";
const csvDeliveriesFilePath="./csv_data/deliveries.csv"
const JSON_OUTPUT_FILE_PATH ="./public/data.json";

function main(){
    csv()
    .fromFile(csvMatchesFilePath)
    .then(matches=>{
          csv()
            .fromFile(csvDeliveriesFilePath)
            .then(deliveries => {
                let result_7=mostManOfMatches(matches);
                let result_6=mostMatchesWon(matches);
                let result_5=winsPerTeamPerSeason(matches);
                let result_4=winningTeamPerVenue(matches);
                let result_3=economicalBowler2015(deliveries,matches);
                let result_2 =extraRunsPerTeam2016(matches,deliveries);
                let result = matchesplayedperyear(matches);
                let result_1=matchesWonPerTeam(matches);
        saveData(result,result_1,result_2,result_3,result_4,result_5,result_6,result_7);
            })    
    })
    }

function saveData(result,result_1,result_2,result_3,result_4,result_5,result_6,result_7){
    const jsonData={
        matchesplayedperyear:result,
        matchesWonPerTeam:result_1,
        extraRunsPerTeam2016:result_2,
        economicalBowler2015:result_3,
        winningTeamPerVenue:result_4,
        winsPerTeamPerSeason:result_5,
        mostMatchesWon:result_6,
        mostManOfMatches:result_7
    };
    const jsonString =JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString,"utf8",err=>{
        if(err){
            console.log(err)
        }
    });    
}



main();