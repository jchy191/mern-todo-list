import mongoose from 'mongoose';
const { Schema } = mongoose;

const ToDoSchema = new Schema({
    userID: String,
    todos: [
        {
            name: String,
            dueDate: String,
            priority: String
        } 
    ],
});

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
})

export const User = mongoose.model("User", UserSchema);
export const Todo = mongoose.model("Todo", ToDoSchema);