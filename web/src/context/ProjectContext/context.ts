import { createContext } from "react";
import { Board, Column, ProjectContextType, Task } from "./types";

export const ProjectContext = createContext<{
  project: ProjectContextType;
  setProject: (_project: any) => void;
  loading:boolean,
  error:any,
  fetchProjects:()=>Promise<void>
} | null>(null);
