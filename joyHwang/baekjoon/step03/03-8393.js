let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('joyHwang/baekjoon/step03/test.txt').toString();
let sum = 0;
for (var i = 1; i <= Number(input); i++) {
    console.log(typeof Number(input))
    sum += i;
} 
console.log(sum);
