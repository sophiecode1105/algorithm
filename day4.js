function solution(n) {
    let result =''
   for(let i=1; i<=n ; i++){
       if(i%2 === 1){
           result = result + '수'
       }else if(i%2 === 0){
           result = result + '박'
       }
   }
   return result;
}