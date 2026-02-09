// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area;
//     }

//     perimeter(){
//         return 2 * (this.width+this.height);
//     }
// }

// const rect = new Rectangle(2, 4, "Red");
// const area = rect.perimeter();
// console.log(area);

// const d = new Date();
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());



// let p1 = new Promise();

// const { resolve } = require("dns");
// const fs = require("fs");



// function afterFileIsRead(err, contents){
//     if(err){
//         console.log("Error while reading the file.")
//     }
//     else{
//         console.log(contents);
//     }
// }

// fs.readFile("a2.txt", "utf-8", afterFileIsRead);

// for(let i=0;i<1000;i++){

// }




const fs = require("fs");

function fsReadFilePromisified(filepath, encoding){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, data) => {
            if(err){
                reject(err)
            }
            else {
                resolve(data);
            }
        })
    })
}

function callback(data){
    console.log(data);
}

function callbackErr(){
    console.log("Error while reading the file.")
}

let p = fsReadFilePromisified("a111.txt", "utf-8")

p.then(callback).catch(callbackErr);

setInterval(function(){
    console.log(p);
}, 500)


// fsReadFilePromisified("a2.txt", "utf-8")
//     .then(callback)
//     .catch(callbackErr);