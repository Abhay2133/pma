import prismaClient from "../lib/db";
import { Request, Response } from "express";

async function createBoardHandler(req: Request, res: Response): Promise<any> {
  const { title, description } = req.body;
  const ownerId: string = "c908f279-945a-429f-8ea3-dbee44d71329";

  try {
    /* Creating a user */
    const board = await prismaClient.board.create({
      data: {
        title,
        ownerId,
        description,
      },
    });

    return res.status(200).json({ msg: "Board created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function getBoardHandler(req: Request, res: Response): Promise<any> {
  const ownerId: string = "c908f279-945a-429f-8ea3-dbee44d71329"; //to be taken from req.token

  try {
    const boards = await prismaClient.board.findMany({
      where: {
        ownerId: ownerId,
      },
      include: {
        lists: true,
      },
    });
    return res.status(200).json({ boards });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export { createBoardHandler, getBoardHandler };
