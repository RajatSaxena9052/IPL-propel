function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  fetchAndVisualizeData();
  
  function visualizeData(data){
    const div=document.getElementById("matches-won-per-team")
    div.addEventListener("mouseover",function(){
        div.style.backgroundColor="blue"})
    div.addEventListener("mouseout",function(){
        div.style.backgroundColor="white"})

     let Team=[],o=Object.values(data.matchesWonPerTeam),k=Object.keys(data.matchesWonPerTeam)

     //collecting all team names 
     for(let i in o){
          for(let j of Object.keys(o[i])){
              if(Team.indexOf(j)==-1){
                  Team.push(j)
              }
          }
      }
      Team=Team.filter(s=>s!="")
//preparing chart visualization
    var score,name,data,ser=[]
    for(let i in Team){
        score=[]
        for(let j in o){
            if(o[j][Team[i]] == undefined){
                 score.push(0)
                }
            else{
                    score.push(o[j][Team[i]])
                    }
        }
        name=Team[i]
        data=score
        ser.push({"name":Team[i],"data":score})
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
        categories:k,
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
        footerFormat:'</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series:ser,
});
}