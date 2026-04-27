const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pranavmehta192_db_user:Pranavmehta9508597872@pranav.sw7fpxq.mongodb.net/todo");

// mongoose schema and model object

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
});



const userModel = mongoose.model("users", UserSchema);
const todoModel = mongoose.model("todo", TodoSchema);


module.exports = {
    userModel: userModel,
    todoModel: todoModel
}