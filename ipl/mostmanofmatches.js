function mostmanOfmatches(matches){
    let res={}
    for(var i in matches){
        if(res.hasOwnProperty(matches[i].player_of_match)){
            res[matches[i].player_of_match]+=1
        }
        else{
            res[matches[i].player_of_match]=1;
        }
    }
    
   
    return res
}
module.exports=mostmanOfmatches;