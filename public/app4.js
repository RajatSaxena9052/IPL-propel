 function show1(){
    const div=document.getElementById("economical-bowler")
    div.addEventListener("mouseover",function(){
        div.style.backgroundColor="blue"})
    div.addEventListener("mouseout",function(){
        div.style.backgroundColor="white"})
          
        let year1 = document.getElementById("season1").value;
    
        if(year1 ==""){
        alert("please select SEASON from the drop down list ")
        }
    
    fetch('/economy?season1='+year1)

        .then((resp)=>resp.json())

        .then((resp)=>{
           //visualizeEconomicalPlayer(resp[year1]);
            setTimeout(function(){ return visualizeEconomicalPlayer(resp[year1]); }, 3000);

    function visualizeEconomicalPlayer(data){
        let ar=[];
        for(let i in data){
            ar.push([i,parseFloat(data[i])])
        }

        ar = ar.sort((a, b) => a[1] - b[1])

Highcharts.chart("economical-bowler", {
    chart: {
        type: 'column'
    },
    title: {
        text: `4. Top Economical bowlers in Year ${year1}`
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
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Economy: <b>{point.y:.2f}</b>'
    },
    series: [{
        name: 'Economy',
        data:ar,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.2f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
    }
        }).catch(err => {
            console.error('Error: ', err);});
    }