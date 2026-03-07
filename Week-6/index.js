// let todoIndex = 1;


// function addTodo() {
//     //Write the code that reads the contents of the input box
//     //create a new to do on the html dom
//         //step 1 - create a new div element in js (as variable)
//         //step 2 - insert that div element to a parent div
//     //clears the input box

//     const element = document.getElementById("todoInput");
//     const todo = element.value;
//     if(todo === ""){
//         return;
//     }
//     element.value = "";
    
//     const todoDiv = document.createElement("div");
//     todoDiv.setAttribute("id", "todo" + todoIndex);

//     const todoSpan = document.createElement("span");
//     todoSpan.innerHTML = todo;

//     todoDiv.appendChild(todoSpan);



//     todoSpan.innerHTML = todo;

//     todoDiv.appendChild(todoSpan);

//     const todoButton = document.createElement("button");
//     todoButton.innerHTML = "Delete todo";
//     todoButton.setAttribute("onclick", "deleteToDo(" + todoIndex +")");

//     todoDiv.appendChild(todoButton);

//     document.getElementById("todos").appendChild(todoDiv)
//     todoIndex = todoIndex + 1;

// }

// function deleteToDo(index) {
//     // alert("delete todo called with" + index);

//     const divElement = document.getElementById("todo" + index);
//     document.getElementById("todos").removeChild(divElement);
// }



// Below code is the CLI version of the todo app which i can commmand in the terminal itself obviously.
const fs = require("fs");
const { Command } = require("commander");

const program = new Command();
const FILE = "todos.json";

function readTodos() {
    if (!fs.existsSync(FILE)) {
        return [];
    }
    const data = fs.readFileSync(FILE, "utf-8");
    return JSON.parse(data);
}

function saveTodos(todos) {
    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

program
  .name("todo")
  .description("Simple CLI Todo App")
  .version("1.0.0");


// ADD TODO
program
  .command("add")
  .description("Add a new todo")
  .argument("<task>")
  .action((task) => {
      const todos = readTodos();
      todos.push(task);
      saveTodos(todos);
      console.log("✅ Todo added:", task);
  });

program
  .command("list")
  .description("Show all todos")
  .action(() => {
      const todos = readTodos();

      if (todos.length === 0) {
          console.log("No todos found");
          return;
      }

      todos.forEach((todo, index) => {
          console.log(`${index + 1}. ${todo}`);
      });
  });


// DELETE TODO
program
  .command("delete")
  .description("Delete a todo")
  .argument("<index>")
  .action((index) => {
      const todos = readTodos();
      const i = index - 1;

      if (!todos[i]) {
          console.log("Todo not found");
          return;
      }

      const removed = todos.splice(i, 1);
      saveTodos(todos);

      console.log("Deleted:", removed[0]);
  });


program.parse();