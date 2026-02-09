//01

// const a = [
//     {food: [10,20,30]},
//     {trvel: [5,15]},
//     {bills: [40,60]}
// ]


// const a = {
//   food: [10, 20, 30],
//   travel: [5, 15],
//   bills: [40, 60]
// };

// const result = {};
// for (let key in a) {
//   result[key] = a[key].reduce((a, b) => a + b, 0);
// }
// console.log(result);


// 02

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = {};
// for(let i of fruits){
//     result[i] = (result[i] || 0) + 1;
// }
// console.log(result);


// 03.  Swap keys and values of object

// var a = {
//     x: "m",
//     y: "n",
//     z: "o"
// }
// const swapped={};
// for(let key in a){
//     swapped[a[key]] = key;
// }
// console.log(swapped);


//04. Find the largest value key

// const a = {
//     a: 3,
//     b: 5,
//     c: 89,
//     d: 1
// }
// let maxKey = null;
// let maxvalue = -Infinity;
// for (let key in a){
//     if(a[key] > maxvalue) {
//         maxvalue = a[key];
//         maxKey = key;
//     }
// }
// console.log(maxKey);



//05. Flatten object of arrays into one array

// const x = {
//     fruits: ["apple", "banana"],
//     vegies: ["carrot", "pea"]
// }
// const result = Object.values(x).flat();
// console.log(result);



//06. Group People by city

// const a = [
//     {name: "A", city: "Patna"},
//     {name: "B", city: "Jalandhar"},
//     {name: "C", city: "Patna"}
// ]
// const result = a.reduce((acc, curr) => {
//   if (!acc[curr.city]) {
//     acc[curr.city] = [];
//   }
//   acc[curr.city].push(curr.name);
//   return acc;
// }, {});
// console.log(result);


//07. filter object by values > 50

// const a = {
//     a: 20, 
//     b: 60, 
//     c: 40, 
//     d: 90
// }
// const result = {};
// for(let key in a){
//     if(a[key]>50){
//         result[key] = a[key];
//     }
// }
// console.log(result);


//08. Find the student with the heighest avg mmarks

// const a = {
//     A: [80,90],
//     B: [70,75,85]
// }
// const result = Object.entries(a).reduce((best, [name, marks]) => {
//   const avg = marks.reduce((s, m) => s + m, 0) / marks.length;
//   return avg > best.avg ? { name, avg } : best;
// }, { name: null, avg: -Infinity });
// console.log(result.name);


//09. Unique values across all object arrays

const a = {
    x: [1,2,3],
    y: [2,3,4],
    z: [4,5]
}


