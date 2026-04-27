const mongoose = require("mongoose");

mongoose.connect("...");

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