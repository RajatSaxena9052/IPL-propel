function mostMatchesWon(matches){
let res={};
for(var i in matches){
if(res.hasOwnProperty(matches[i].winner))
{
    if(matches[i].dl_applied == 1){
        res[matches[i].winner]+=1;
    }
}else{
    if(matches[i].dl_applied == 1){
        res[matches[i].winner]=1;
    }
}
}
return res;

}

module.exports=mostMatchesWon;