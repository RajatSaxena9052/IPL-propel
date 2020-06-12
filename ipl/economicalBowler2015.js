function economicalBowler2015(deliveries,matches){
    //checking all year 
    var S=[ '2017','2008','2009','2010','2011','2012','2013','2014','2015','2016','2018','2019' ]

//check the year season's = [team id]
let team={},a;
for(let s in S){
    a=[]
    for(let match of matches){
        if(match.season == S[s]){
            a.push(match.id)
    }
}
team[S[s]]=a
}
//console.log(team)
//check the year season's = [bowler names]
var x,X={};
for(var i in team){
    x=[]
   // console.log(i,team[i])
    for(var k of team[i]){
        //console.log(k)
        for(var del of deliveries){
                if(del.match_id == k){
                    x.push(del.bowler)
                }
            }
        }
    x=Array.from(new Set(x))
    X[i]=x
}
//console.log(X)

let res={},ball=0,runs=0,overs=0,econ=0,p;

for(let i in X){
    p={}
    for(let player of X[i]){
        runs=0;
        ball=0;
        for(let del of deliveries){
            if(del.bowler == player){
            if(Object.values(team[i]).indexOf(del.match_id)!=-1){
                    if( del.wide_runs==0 && del.noball_runs == 0){    
                        runs += parseInt(del.total_runs)
                        ball +=1
                    }
                }
            }
        }
        overs=ball/6;
        econ=(runs/overs).toFixed(2);
        if(econ <=7){
            p[player]=econ
        }
    }
res[i]=p
}


return res;

}
module.exports= economicalBowler2015;