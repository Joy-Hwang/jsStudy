const input = require('fs').readFileSync('jitosong/backjoon/test.txt').toString().trim().split(" ")

// 검정색 피스는 모두 있으나 흰색 피스 개수는 올바르지 않다. 총 16개 피스로 1,1,2,2,2,8로 구성되어 있다.
// 발견한 흰색 피스의 개수가 주어졌을 때 몇 개를 더하거나 빼야지 올바른 세트가 되는지 구하는 프로그램을 작성하시오.
// 입력: 첫째 줄에 동혁이가 찾은 흰색 킹, 퀸, 룩, 비숍, 나이트, 폰의 개수가 주어진다. 이 값은 0보다 크거나 같고 10보다 작거나 같은 정수이다.
// 0 1 2 2 2 7
// 2 1 2 1 2 1
// 출력: 첫째 줄에 입력에서 주어진 순서대로 몇 개의 피스를 더하거나 빼야 되는지를 출력한다. 만약 수가 양수라면 동혁이는 그 개수 만큼 피스를 더해야 하는 것이고, 음수라면 제거해야 하는 것이다.
const blackNum = [1,1,2,2,2,8] //검정색 피스
let result = ''

for(i = 0; i < 6; i++){ //검정색 피스의 배열의 길이만큼 반복한다.
    allPiece = (+blackNum[i] - +input[i]) //가지고 있는 검정색 피스에서 입력된 흰색 피스의 개수를 뺀다.
    result += allPiece +' '
}

console.log(result)