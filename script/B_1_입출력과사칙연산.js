// Hello World!를 출력하시오.
console.log("Hello World!")

// 우선 node.js로 콘솔창 입력 받는 법을 알아보자
// https://lakelouise.tistory.com/140
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
})

rl.on("line", (line) => {
    //입력이 끝난 후 실행할 코드
    process.exit();
})

let input = []

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); //1 2 3 4
    rl.close();
});

rl.on('close', () => {
    input.forEach(el => {
        console.log(el);
    })
    process.exit();
})
