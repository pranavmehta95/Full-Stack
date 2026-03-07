// import chalk from "chalk";     // Modern Import Syntax.    
// console.log(chalk.red.bold("This is an error message."));
// console.log(chalk.green.underline("This is the sucess message.")); 

/*.mjs is a file extension for ECMAScript modules (ESM) in JavaScript, allowing developers to use
import/export syntax natively in Node.js and modern browsers. It specifically tells environments 
to treat the code as a module rather than a traditional script, which is crucial for modern 
JavaScript development. */

// const path = require("path");

// console.log(__dirname);
// console.log(__dirname, "..index.js", "/pranav.html");
// console.log(path.join(__dirname, "..index.js", "/pranav.html"))

const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based task')
    .version('0.8.0')

// 

program.command('count_sentences')
   .description('Count the number of lines in the files')
   .argument('<file>', 'file to count number of lines')
   .action((file) => {
     fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            const lines = data.split('\n').length;
            console.log(`There are ${lines} lines in ${file}`)
        }
     });
   });

program.parse();