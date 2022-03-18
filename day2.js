function solution(a, b) {
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b + 4; // day = 5
  let total = 0;
  for (let i = 0; i < a - 1; i++) {
    total = total + month[i];
  }
  return week[(total + day) % 7];
}

function solution(price, money, count) {
  const sumTo = (count) => {
    if (count === 0) {
      return 0;
    }
    return count + sumTo(count - 1);
  };
  let difference = sumTo(count) * price - money;
  if (difference > 0) {
    return difference;
  } else {
    return 0;
  }
}
