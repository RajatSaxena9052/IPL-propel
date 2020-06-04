function matchesWonPerTeam(matches){
    var result={},c=[],ch={}
    for(var i in matches){
      var s=matches[i].season
      if(c.indexOf(s) != -1){
        continue
      }
      else{
        c.push(s)
        }
    }
  for(var i in c){
    ch={}
      for(var j in matches){
        if(c[i]==matches[j].season){
            if(ch[matches[j].winner]){
              ch[matches[j].winner]+=1
            }
            else{
              ch[matches[j].winner]=1
            }
        }
    
      }
  result[c[i]]=ch;
  }
 return result;
}

module.exports=matchesWonPerTeam;