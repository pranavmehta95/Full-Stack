const fs = require("fs");

const file = "todos.json";


function getTodos() {
    const data = fs.readFileSync(file);
    return JSON.parse(data);
}


function saveTodos(todos) {
    fs.writeFileSync(file, JSON.stringify(todos, null, 2));
}


function addTodo(task) {
    const todos = getTodos();
    todos.push(task);
    saveTodos(todos);
    console.log("Todo Added");
}

function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    console.log("Todo Deleted");
}


function showTodos() {
    const todos = getTodos();
    todos.forEach((todo, i) => {
        console.log(`${i + 1}. ${todo}`);
    });
}