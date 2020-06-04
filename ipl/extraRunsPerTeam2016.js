function extraRunsPerTeam2016(matches,deliveries){
   var S=[]
   for(let s of matches){
       if(S.indexOf(s.season)==-1){
        S.push(s.season) 
            }
       }
//check the season's = [team id]
    var team={},a
    for(let s in S){
        a=[]
        for(let match of matches){
            if(match.season == S[s]){
                a.push(match.id)
        }
    }
    team[S[s]]=a
}

let res={},T,re;
for(var t in team){
    T=team[t]
    re={}
    for(let id in T){
        for(let delivery of deliveries){
            if(delivery.match_id == T[id]){
                if(re.hasOwnProperty(delivery.batting_team)){
                    re[delivery.batting_team]+=parseInt(delivery.extra_runs);
                }  
               else{
                re[delivery.batting_team]=parseInt(delivery.extra_runs);
                }
            }
        }
    }
res[t]=re
}
return res
}

module.exports=extraRunsPerTeam2016;