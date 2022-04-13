//하샤드  수
function solution(x) {
  let str = x.toString();
  let arr = str.split("");

  let sum = arr.reduce((acc, cur) => acc + Number(cur), 0);

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

//이상한 문잠 만들기

function solution(s) {
  let arr = s.split(" "); //[try,hello,world]
  let result = arr.map((el) => {
    let str = "";
    for (let i = 0; i < el.length; i++) {
      if (i % 2 === 0) {
        str = str + el[i].toUpperCase();
      } else {
        str = str + el[i].toLowerCase();
      }
    }
    return str;
  });
  return result.join(" ");
}
