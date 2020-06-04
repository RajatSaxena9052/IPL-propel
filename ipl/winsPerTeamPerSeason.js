function winsPerTeamPerSeason(matches){
//first collecting all season
    let ses=[];
    for(var i in matches){
        if(ses.indexOf(matches[i].season)==-1){
            ses.push(matches[i].season)
        }
    }
//now team wins per season
let res={},alt
for(var i=0;i<ses.length;i++){
    alt={}
    for(var j in matches){
        if(ses[i] == matches[j].season){
            if(alt.hasOwnProperty(matches[j].winner)){
                alt[matches[j].winner]+=1;
            }
            else{
                alt[matches[j].winner]=1;
            }
        }
    }
   res[ses[i]]=alt;  
}
return res ;

}
module.exports=winsPerTeamPerSeason;