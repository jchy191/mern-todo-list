import mongoose from 'mongoose';
const { Schema } = mongoose;

const TasksSchema = new Schema({
    userID: String,
    tasks: [
        {
            name: String,
            dueDate: Date,
            priority: String,
            id: String,
        } 
    ],
});

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
})

export const User = mongoose.model("User", UserSchema);
export const Task = mongoose.model("Task", TasksSchema);