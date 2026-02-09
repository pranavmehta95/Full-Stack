// map, filter, arrow fns



// All of these are writing the function:-


// function sum(a, b){
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// app.get("/", (req, res) => {

// })


// app.get("/", function(req, res) {
    
// })

// const ans = sum(1,2);
// console.log(ans);

//given an array, give me back a new array in which value is multiplied by 2 


// const input = [1, 2, 4, 5, 6];

// const newarr = [];

// for(let i=0;i<input.length;i++){
//     newarr.push(input[i]*2);
// }

// console.log(newarr);

// #2 Other solution

// const input = [1, 2, 4, 5, 7];

// // function transform(i){
// //     return i * 2;
// // }
// // const ans = input.map(transform);

// // or


// const ans = input.map(function (i){
//     return i*2;
// });

// console.log(ans);


// Filtering 

// What i tell you, given an input array, give me back all the even value from it.

// const arr = [1, 3, 4, 5, 6, 7, 8, 10];

// const newarr = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr);

// by the filter function. 

// function filterlogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const ans = arr.filter(filterlogic);

// Same thing we can write in other way:-

// const ans = arr.filter(function(n){
//    if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     } 
// });
// console.log(ans);








const a = [{
    x: "hello",
    b: "hii",
    c: 5,
    d: 8,
    e: 10,
}]

let sum = 0;
for(let key in a[0]){
    if(typeof a[0][key] === 'number'){
        sum += a[0][key];
    }
}
const result = sum;
// const result = Object.values(a[0]).filter(val => typeof val === 'number').reduce((sum, num) => sum + num, 0);
console.log(result); 



