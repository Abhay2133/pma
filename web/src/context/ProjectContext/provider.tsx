"use client";

import { ReactNode, useState } from "react";
import { ProjectContext } from "./context";
import { Board, Column, defaultNewProject, Task } from "./types";

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState(defaultNewProject);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    // load projects form api
  };

  return (
    <ProjectContext.Provider
      value={{ project, setProject, loading, error, fetchProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
