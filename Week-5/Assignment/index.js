// The task is remove the extra space and rewrite the whatever in the a.txt


// CallBack Based Async fn calls
// const fs = require("fs");

// let contents = fs.readFileSync("a.txt", "utf-8");
// const trimmedcontent = contents.trim();
// fs.writeFileSync("a.txt", trimmedcontent);



// CallBack Based Sync fn calls
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, contents) {
//     const trimmedcontent = contents.trim();
//     fs.writeFile("a.txt", trimmedcontent, function() {
//         console.log("done.")
//     });
// });



// Promise Based but not async await.
// const fs = require("fs");

// function cleanFile(filepath){
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filepath, "utf-8", function (err, contents) {
//             if(err){
//                 reject();
//             }
//             else {
//                 const trimmedcontent = contents.trim();
//                 fs.writeFile("a.txt", trimmedcontent, function(err) {
//                     if(err){
//                         reject()
//                     }
//                     else {
//                         resolve();
//                     }
//                 });
//             }
//         });
//     })
// }

// cleanFile("a.txt")
//     .then(function() {
//         console.log("file has been cleaned.")
//     })
//     .catch(function() {
//         console.log("Error while cleaning file.")
//     })






// Promise Based does used async await.
// const fs = require("fs");

// function cleanFile(filepath){
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filepath, "utf-8", function (err, contents) {
//             if(err){
//                 reject();
//             }
//             else {
//                 const trimmedcontent = contents.trim();
//                 fs.writeFile("a.txt", trimmedcontent, function(err) {
//                     if(err){
//                         reject()
//                     }
//                     else {
//                         resolve();
//                     }
//                 });
//             }
//         });
//     })
// }

// async function main() {
//     try{
//         await cleanFile("a.txt");
//         console.log("Done cleaning te file.");
//     } catch(e) {
//         console.log("Error while cleaning the file.");
//     }
// }

// main();




// Write a promisified function that takes a file prefix as an input(a) and clean ({prefix}1.txt), {prefix}2.txt, {prefix}3.txt

const fs = require("fs");

function cleanFile(filepath){
    return new Promise(function(resolve, reject) {
        fs.readFile(filepath, "utf-8", function (err, contents) {
            if(err){
                reject();
            }
            else {
                const trimmedcontent = contents.trim();
                fs.writeFile(filepath, trimmedcontent, function(err) {
                    if(err){
                        reject()
                    }
                    else {
                        resolve();
                    }
                });
            }
        });
    })
}


function cleanManyFiles(Prefix) {
    return new Promise(async function(resolve, reject) {
        try{
            await cleanFile(Prefix + "1.txt");
            await cleanFile(Prefix + "2.txt");
            await cleanFile(Prefix + "3.txt");
            resolve();
        } catch(e) {
            reject();
        }
    })
}

// Either upper part or lower part.

async function cleanManyFiles(Prefix) {
            await cleanFile(Prefix + "1.txt");
            await cleanFile(Prefix + "2.txt");
            await cleanFile(Prefix + "3.txt");
}

cleanManyFiles("a")
    .then(function() {
        console.log("All three files have been cleaned.");
    })
    .catch(function() {
        console.log("Error while cleaning the files.")
    })