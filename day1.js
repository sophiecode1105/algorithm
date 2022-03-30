function solution(id_list, report, k) {
    let obj = {};
    let mailCount = {};
    for (let element of report){
      const [sender, receiver] = element.split(" ")
      if(obj[receiver] && obj[receiver].includes(sender)){
        continue;
      }
      obj[receiver] = [...(obj[receiver] || []),sender]
    }
        
     for(let id of id_list){ 
         if(obj[id] && obj[id].length >= k){ //정지된사람
             for(let el of obj[id]){ //신고한사람의카운트를 올려야된다.
                mailCount[el] = mailCount[el]? mailCount[el]+1 : 1
             }
         }
     }
        const answer = id_list.map((id)=>mailCount[id] || 0)
        return answer
        
     }