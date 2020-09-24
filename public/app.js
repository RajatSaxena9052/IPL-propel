function fetchAndVisualizeData() {
    fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesplayedperyear);
    visualizeMatchesWonPerTeam(data.matchesWonPerTeam);
    visualizeWinningTeamPerVenue(data.winningTeamPerVenue);
    visualizeWinningTeamPerTeamPerSeason(data.winsPerTeamPerSeason);
    visualizeMostMatchesWon(data.mostMatchesWon);
    visualizeMostManOfMatches(data.mostManOfMatches);
    return;
}

function visualizeMatchesPlayedPerYear(MatchesPlayedPerYear) {
    const div = document.getElementById("matches-played-per-year")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })
    
    /*var chart =*/ Highcharts.chart("matches-played-per-year", {

        title: {
            text:'1. Matches Played per season'
        },
    
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
        },
    
        xAxis: {
            categories: Object.keys(MatchesPlayedPerYear)
        },
    
        series: [{
            type: 'column',
            colorByPoint: true,
            data:  Object.values(MatchesPlayedPerYear),
            showInLegend: false
        }]
    
    });
}

function visualizeMatchesWonPerTeam(matchesWonPerTeam) {
    const div = document.getElementById("matches-won-per-team")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })
    let Team = [], o = Object.values(matchesWonPerTeam), k = Object.keys(matchesWonPerTeam)

    //collecting all team names 
    for (let i in o) {
        for (let j of Object.keys(o[i])) {
            if (Team.indexOf(j) == -1) {
                Team.push(j)
            }
        }
    }
   // console.log(Team)
    Team = Team.filter(s => s != "")
    //preparing chart visualization
    let score, ser = []
    for (let i in Team) {
        score = []
        for (let j in o) {
            if (o[j][Team[i]] == undefined) {
                score.push(0)
            }
            else {
                score.push(o[j][Team[i]])
            }
        }

        ser.push({ "name": Team[i], "data": score })
    }

    Highcharts.chart("matches-won-per-team", {
        chart: {
            type: 'column'
        },
        title: {
            text: '2. Number of matches won by each team over all the years of IPL'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
        },
        xAxis: {
            categories: k,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Won'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: ser,
    })
    
}




function visualizeWinningTeamPerVenue(winningTeamPerVenue) {
    const div = document.getElementById("winning-team-per-venue")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })

    let team = [], o = Object.values(winningTeamPerVenue), k = Object.keys(winningTeamPerVenue)

    //collecting all team names 
    for (let i in o) {
        for (let j of Object.keys(o[i])) {
            if (team.indexOf(j) == -1) {
                team.push(j)
            }
        }
    }
    team = team.filter(s => s != "")

    //preparing chart visualization
    let wins, ser = []
    for (let i in team) {
        wins = []
        for (let j in o) {
            if (o[j][team[i]] == undefined) {
                wins.push(0)
            }
            else {
                wins.push(o[j][team[i]])
            }
        }

        ser.push({ "name": team[i], "data": wins })
    }

    Highcharts.chart('winning-team-per-venue', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '5. Matches Won by each team per venue'
        },
        xAxis: {
            categories: k
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches won vs stadium'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: ser
    });
}

function visualizeWinningTeamPerTeamPerSeason(winsPerTeamPerSeason) {
    const div = document.getElementById("wins-per-team-per-season")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })


    let team = [], o = Object.values(winsPerTeamPerSeason), k = Object.keys(winsPerTeamPerSeason)

    //collecting all team names 
    for (let i in o) {
        for (let j of Object.keys(o[i])) {
            if (team.indexOf(j) == -1) {
                team.push(j)
            }
        }
    }
    team = team.filter(s => s != "")

    //preparing chart visualization
    let wins, name, data, ser = []
    for (let i in team) {
        wins = []
        for (let j in o) {
            if (o[j][team[i]] == undefined) {
                wins.push(0)
            }
            else {
                wins.push(o[j][team[i]])
            }
        }
        name = team[i]
        data = wins
        ser.push({ "name": team[i], "data": wins })
    }

    Highcharts.chart("wins-per-team-per-season", {
        chart: {
            type: 'column'
        },
        title: {
            text: '6. Matches Won By Each Team per Season'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
        },
        xAxis: {
            categories: k,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Wins'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: ser
    });

}

function visualizeMostMatchesWon(mostMatchesWon){
    const div=document.getElementById("most-matches-won-dl")
    div.addEventListener("mouseover",function(){
        div.style.backgroundColor="blue"})
    div.addEventListener("mouseout",function(){
        div.style.backgroundColor="white"})

    var chart = Highcharts.chart("most-matches-won-dl", {

    title: {
        text: '7. Most Matches Won By Teams (DL method)'
    },

    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
    },

    xAxis: {
        categories:Object.keys(mostMatchesWon) 
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: Object.values(mostMatchesWon),
        showInLegend: false
    }]

});
}

function visualizeMostManOfMatches(mostManOfMatches) {
    const div = document.getElementById("most_man_of_matches")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })

    let res = [], d = mostManOfMatches;
    for (var i in d) {
        if (d[i] > 9) {
            res.push([i, d[i]])
        }
    }

    res = res.sort((a, b) => b[1] - a[1]).filter(s => s[1] >= 11)

    Highcharts.chart("most_man_of_matches", {
        chart: {
            type: 'column'
        },
        title: {
            text: '8. Most Man Of Matches'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data?select=matches.csv" target="_blank">IPL Dataset</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches Won'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Matches Won: <b>{point.y:.0f}</b>'
        },
        series: [{
            name: 'Population',
            data: res,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.0f}', // one decimal
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });

}