async function show() {
    const div = document.getElementById("extra-Runs")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })

    let year = document.getElementById("season").value;

   /* if (year == "") {
        alert("please select SEASON from the drop down list ")
    }
*/
    const promise1 = new Promise((resolve, reject) => {
        if(year!=""){
            resolve(fetch(`/extra/${year}`)/*.then(res => res.json())*/
            .then(res => {            
             visualizeData(res)}))
            }
        else{
            reject(alert("please select SEASON from the drop down list "));
        }

      });

    // fetch('/extra?season=' + year)
    /*fetch(`/extra/${year}`).then(resp => resp.json())
        .then(resp => {            
         visualizeData(resp);*/
        //setTimeout(function(){ return visualizeData(resp); }, 3000);

 function visualizeData(data) {
                let a = [];
                for (let i in data) {
                    a.push([i, data[i]])
                }

      Highcharts.chart("extra-Runs", {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: `3. Extra runs conceded by each team in ${year}`
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
                            text: 'Extra Runs'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'Extra Runs: <b>{point.y:.0f}</b>'
                    },
                    series: [{
                        name: 'Extra Runs',
                        data: a,
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.0f}', // one decimal
                            y: 10, // 10 pixels down from the top
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]
                });

            }
        }/*)
    }*/