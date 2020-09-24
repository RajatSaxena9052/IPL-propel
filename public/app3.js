function show() {
    
    const div = document.getElementById("extra-Runs")
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "blue"
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"
    })
    //to hide
    const Z=document.getElementById("extra-Runs")
    //console.log(Z.style.display)
    if(Z.style.display === "none"){
        Z.style.display = "block"
    }
    

    let year = document.getElementById("season").value;
    if (year == "") {
        alert("please select SEASON from the drop down list ")
    }

  // fetch('/extra?season=' + year)
    fetch(`/extra/${year}`)
        .then((resp) => resp.json())
        .then((respo) => { visualizeData(respo);
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
                    series: [{
                        name: 'Extra Runs',
                        data: a,
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                        
                            y: 10, // 10 pixels down from the top
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]
                });

            }
        });
    }