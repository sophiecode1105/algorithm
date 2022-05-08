function solution(n) {
    let result =[2];
      for(let i=3; i<=n; i++){
      let isPrime = true;
      for(let j=2; j<=i;j++){
        if(i%j ===0){
          if(i !==j){
            isPrime =false;
            break;
          }
        }
      }
      if(isPrime){
        result.push(i)
      }
    }
    return result.length;
  }

  //위의 소수구하기 문제는 시간복잡도에서 fail. 
  // 제곱근 풀이를 사용해야한다.

  function solution(n) {
    let result = [2];
   for (let candi = 3; candi <= n; candi += 2) { //짝수는 볼 필요없이 홀수만 보면되니까 +2
     let isPrime = true;
     let sqrt = parseInt(Math.sqrt(candi)); //제곱근을 확인해준다.
     for (let divider = 3; divider <= sqrt; divider += 2) { //제곱끈까지만 확인해주면된다.
       if (candi % divider === 0) { //나눠떨어진다면 약수에 해당하므로
         isPrime = false; //false가 된다.
         break;
       }
     }
 
     if (isPrime) {
       result.push(candi)
     }
   }
 
   return result.length;