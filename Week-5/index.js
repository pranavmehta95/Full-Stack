// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function(err, data) {
//     if(err){
//         console.log("Error while reading the file.")
//     } else {
//         console.log(data);
//     }
// })


// const p = new Promise();

// console.log(p);


// const p = new Promise((resolve, reject) => resolve);
// console.log(p);

// const fs = require("fs");



// function fsReadFilePromise(FileName, encoding){
//     return new Promise(function(resolve, reject){
//         fs.readFile(FileName, encoding, function(err, data){
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     });
// }

// fsReadFilePromise("a.txt", "utf-8")
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(e) {
//         console.log("Error while reading the file.")
//     })




// function setTimeoutPromisified(delay){
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             resolve()
//         }, delay)
//     })
// }


// setTimeoutPromisified(1000)
//     .then(function(){
//         console.log("1 sec has passed.")
//     })
//     .finally(function() {
//         console.log("finally after either than or catch ran.")
//     })


const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, encoding, function(err, data) {
            if(err){
                reject("File was not read.")
            }
            else {
                resolve(data)
            }
        })
    })
}

async function main() {
    let file1Content = await fsReadFilePromisified("a.txt", "utf-8")
    let file2Content = await fsReadFilePromisified("b.txt", "utf-8")
    let file3Content = await fsReadFilePromisified("c.txt", "utf-8")

    console.log(file1Content);
    console.log(file2Content);
    console.log(file3Content);
}

main();

console.log("Hii");
console.log("Hello");