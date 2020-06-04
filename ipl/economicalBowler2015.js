function economicalBowler2015(deliveries,matches){
    //checking all season
    var S=[]
   for(let s of matches){
       if(S.indexOf(s.season)==-1){
        S.push(s.season) 
            }
       }
//check the season's = [team id]
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
console.log(team)

var y=2017,player=0,x=[];
for(var i of team[2015]){
   
    for(var j of deliveries){
        if(j.match_id==i){
            x.push(j.bowler)
        }
    }
}
x=Array.from(new Set(x))
//console.log(x)

    //gathering the match id  for every year 
    /*let seson=[]
    for (var ses of matches){
        if(ses.season == 2015){
            seson.push(ses.id)
        }
    }*/

 let ball=0,bow=[],runs=0,overs=0,econ=0;
for (var s of team[2015]){    
    for(var del of deliveries){
        if(del.match_id == s){
                if(del.bowler == "M Vijay"){
                    if( del.wide_runs==0 && del.noball_runs == 0){    
                    runs += parseInt(del.total_runs)
                    ball +=1
                    }
                }
        }
    }
}
overs=ball/6;
econ=runs/overs
bow.push(runs,overs,econ.toFixed(2))


console.log(bow)
}
module.exports= economicalBowler2015;