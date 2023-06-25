let d = new Array(100);
var arr = []; 
function input(){
    while (true){
        /* 입력값 받기 */
        var inputNum = prompt('피보나치 수열의 처음 항의 개수를 입력해주세요', '숫자로 입력해주세요');
        arr.push(inputNum * 1);  /* 문자열로 입련된 값을 숫자 1을 곱하여 숫자형으로 변환 */
        break;
        }
}

input();
function fibonacci(n) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}

let output = '';
    for (let i = 0; i < arr; i++) {
      output += fibonacci(i) + ' ';
    }

document.write(output)