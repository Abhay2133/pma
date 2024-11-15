import { useContext } from "react";
import { ProjectContext } from "./context";

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
};
