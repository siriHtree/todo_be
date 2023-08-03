import mongoose from 'mongoose';
const taskSchema=new mongoose.Schema({
    taskName:String,
    taskDescription:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Task=mongoose.model('tasks',taskSchema);
export default Task;