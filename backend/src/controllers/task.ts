import { Request, Response } from "express";
import prismaClient from "../lib/db";

/* need to change the listId stuff to be taken from req.body */

async function createTaskHandler(req: Request, res: Response): Promise<any> {
  const { title, description, status } = req.body;
  const listId: string = "c94819bf-caa1-4b10-adcf-dac1133c9687";
  const assignedToId: string = "c908f279-945a-429f-8ea3-dbee44d71329";

  try {
    const task = await prismaClient.task.create({
      data: {
        title,
        description,
        listId,
        assignedToId,
        status
      },
    });
    return res.status(200).json({ msg: "Task created successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function getTasksHandler(req:Request,res:Response):Promise<any>{
    const listId:string="c94819bf-caa1-4b10-adcf-dac1133c9687";

    try {
        const tasks=await prismaClient.task.findMany({
            where:{
                listId
            }
        })
    
        return res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Internal Server error"});
    }
}

export { createTaskHandler,getTasksHandler };
