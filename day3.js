function solution(sizes) {
  //max를 구한다.
  // 가로길이
  // 가로길이 세로길이 긴것 작은것으로 재정렬한다.
  // 작은 쪽 길이에서 max를 구한다.
  // max와 작은쪽 max두개를 곱한다.
  let max = 0;
  sizes.forEach((size) => {
    Math.max(...size) > max ? (max = Math.max(...size)) : null;
  });
  let copySizes = [...sizes];

  let secondMax = 0;
  for (let i = 0; i < copySizes.length; i++) {
    if (copySizes[i][0] < copySizes[i][1]) {
      let temp = copySizes[i][0];
      copySizes[i][0] = copySizes[i][1];
      copySizes[i][1] = temp;
    }
    copySizes[i][1] > secondMax ? (secondMax = copySizes[i][1]) : null;
  }
  result = max * secondMax;
  return result;
}
