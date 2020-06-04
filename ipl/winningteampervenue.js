function winningTeamPerVenue(matches){
//collecting all venues first
    let ven=[]
for(var i in matches){
    if(ven.indexOf(matches[i].venue)==-1){
        ven.push(matches[i].venue)
    }
}

//mathes won per team per stadiums
let res,ult={};
for(let i in ven){
    res={}
    for(var j in matches){
        if(ven[i]== matches[j].venue){
            if(matches[j].winner in res){
                res[matches[j].winner]+=1;
            }
            else{
                res[matches[j].winner]=1;
            }
        }
    }
ult[ven[i]]=res
}
return ult
}

module.exports=winningTeamPerVenue;