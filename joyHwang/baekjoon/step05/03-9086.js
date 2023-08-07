//문자열

/* 
3
ACDKJFOWIEGHE
O
AB
*/

/* 
AE
OO
AB
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let input = fs.readFileSync('joyHwang/baekjoon/step05/test.txt').toString().trim().split('\n'); 
//console.log(input) [ '3', 'ACDKJFOWIEGHE', 'O', 'AB' ]

const num = parseInt(input[0]); //3

for(let i = 1; i <= num; i++) { //1번째 인덱스부터 3번 반복
    let first = input[i].trim(); //ACDKJFOWIEGHE O AB
    let last = first.length - 1; // 12 0 1
    console.log(
        input[i].substring(0, 1) + input[i].substring(last, input[i].length)
    )
}

//각 입력값의 0~1번째 index, 즉 첫번째 문자와  


//substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다. 