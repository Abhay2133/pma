import prismaClient from "../lib/db";
import { Request, Response } from "express";

async function createListHandler(req: Request, res: Response): Promise<any> {
  const { title, position } = req.body;
  const boardId: string = "e9c76928-ae8b-4285-a762-e186dc03b2a3";

  try {
    /* Creating a user */
    const list = await prismaClient.list.create({
      data: {
        title,
        position,
        boardId,
      },
    });

    return res.status(200).json({ msg: "List created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function getListHandler(req: Request, res: Response): Promise<any> {
  const boardId: string = "e9c76928-ae8b-4285-a762-e186dc03b2a3"; //to be taken from baords-id

  try {
    const lists = await prismaClient.list.findMany({
      where: {
        boardId,
      },
      orderBy: {
        position: "asc",
      },
      include: {
        tasks: true,
      },
    });
    return res.status(200).json({ lists });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export { createListHandler, getListHandler };
