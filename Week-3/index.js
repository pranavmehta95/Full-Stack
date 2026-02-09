// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// function sum(a,b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }


// function doArithmetic(a, b, fn){
//     return fn(a,b);
// }
// const ans1 = doArithmetic(1,1,sum);
// const ans2 = doArithmetic(1,1,sub);
// console.log(ans1);
// console.log(ans2);


// const fs = require("fs");

// function fileReadCallback(err, contents){
//     console.log(contents);
//     console.log(contents);
//     console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", fileReadCallback);

// let s = 0;
// for(let i=0;i<100000;i++){
//     s += i;
// }

// console.log(s);


// const a = 1;
// const b = 2;

// console.log(a);
// console.log(b);

// // wait 1 sec
// let beforeTime = Date.now();
// for(let i=0;i<1000000000;i++){
//     let currentTime = Date.now();
//     if(currentTime - beforeTime >= 100){
//         break;
//     }
// }

// function callback(){
//     console.log(a+b);
// }

// setTimeout(callback, 1000);


// let ctr = 0;
// function callback() {
//     console.log(ctr);
//     ctr = ctr + 1;
// }
// setInterval(callback, 1000);