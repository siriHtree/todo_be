import Tasks from "../models/task.js";

export const fetchTasks=async(req,res)=>{
    try{
        const tasks=await Tasks.find();
        return res.status(200).json({
            status:"success",
            data:tasks
        })

    }catch(err){
        return res.status(400).json({
            status:'fail',
            message:err.message
        })

    }
}


export const createTask=async(req,res)=>{
    try{
        // console.log(req.body);
        let tData=await Tasks.create(req.body);
        // console.log(tData)
        return res.status(200).json({
            status:'created'
        })

    }catch(err){
        return res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

export const updateTask=async(req,res)=>{
    try{

    }catch(err){

    }
}
export const deleteTask=async(req,res)=>{
    try{

    }catch(err){

    }
}