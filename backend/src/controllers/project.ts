import { Request, Response } from "express";
import prismaClient from "../lib/db.js";
import { UserPayload } from "../services/auth.js";

async function createProjectHandler(req: Request, res: Response): Promise<any> {
  const { priority } = req.body;
  const user = req.user as UserPayload;
  const userId: string = user.id;

  try {
    const project = await prismaClient.project.create({
      data: {
        userId,
        priority,
      },
    });
    return res.status(201).json({ project });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
}

async function listProjectsHandler(req: Request, res: Response): Promise<any> {
  const user = req.user as UserPayload;
  const userId: string = user.id;

  const projectUser = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      projects: true,
    },
  });

  const projects = projectUser?.projects;
  return res.json({ projects });
}

async function updateProjectHandler(req: Request, res: Response): Promise<any> {
  const { projectId, title } = req.body;

  const project = await prismaClient.project.update({
    where: {
      id: projectId,
    },
    data: {
      title,
    },
  });

  return res.json({ project });
}

export { listProjectsHandler, createProjectHandler, updateProjectHandler };
