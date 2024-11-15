import { PropsWithChildren } from "react";
import { ProjectProvider } from "@/context/ProjectContext/provider";

export default function Layout({children}:PropsWithChildren){
  return <ProjectProvider>{children}</ProjectProvider>
}