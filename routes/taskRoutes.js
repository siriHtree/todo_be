import express from 'express';
import { createTask, deleteTask, fetchTasks, updateTask } from '../controllers/taskControllers.js';

const router=express();
router.get("/list",fetchTasks);
router.post("/add",createTask);
router.post("/edit",updateTask);
router.post("/delete",deleteTask);


export default router;