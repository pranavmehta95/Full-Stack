// Number, Boolean, String

// function add(a: number, b: number){
//     return a + b;
// }
// console.log(add(43,45));


//Write a function first_element that takes an array as input
// returns the first element if it exits, if it doesn't exits
//then return null

// function first_element(arr: number[]): number | null {  // this is the composite type where two things have decleared
//     if(arr.length > 0){
//         return arr[0] ?? null;
//     }
//     return null;
// }

// let x = first_element([]);


// import express from "express";

// const app = express();
// app.use(express.json());

// interface SignupInput{
//     username: string,
//     password: string
// }

// app.post("/signup", (req, res) => {
//     const body: SignupInput = req.body;

//     res.json({
//         message: "Signup has been done"
//     })
// })



// app.listen(3000);



// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function isLegal(user: User): boolean {
//     if(user.age > 18){
//         return true
//     }
//     return false
// }


// let user1: User = {
//     firstName: "Pranav",
//     lastName: "Mehta",
//     age: 23
// }



// enum direction {
//     up,
//     down,
//     left,
//     right
// }




// function doSomething(keyPressed: direction) {
// 	if(keyPressed == direction.left){

//     }
// }

// doSomething(direction.right);
// doSomething(direction.left);
// console.log(direction.up);
// console.log(direction.down);




//Generics
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("mystring")
// let output2 = identity<number>(100);

// output1.toUpperCase();



function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

interface User {
    name: string;
}

const el = getFirstElement<User>([{ name: "harkirat" }]);
el.name;

const el2 = getFirstElement([1, 2]);

const el3 = getFirstElement([true, false]);

