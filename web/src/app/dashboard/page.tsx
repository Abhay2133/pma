"use client";
import { SearchForm } from "@/components/search-form";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAppContext } from "@/context/AppContext";
import { Metadata } from "next";
import { SyntheticEvent, useEffect, useRef } from "react";
import { projects, ProjectType } from "./data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
// import Sidebar from "../ui/sidebar";

export default function Dashboard(props: any) {
  const {value,setValue} = useAppContext();
  useEffect(()=>{
    setValue({...value, activeTitle:"Dashboard"})
  },[])
  return (
    <div className="flex-1 flex flex-col ">
      <Header />
      <Projects />
    </div>
  );
}

function Header() {
  return (
    <div className="flex p-2 items-center gap-3">
      <SidebarTrigger />
      <div className="text-xl">Projects</div>
      <Button className="active:scale-95 transition-transform ml-auto mr-10"><Plus/> New Project</Button>
    </div>
  );
}

function Projects() {
  return (
    <div>
      {/* Search Form */}
      <SearchProject />
      {/* Projects container */}
      <div
        id="projects"
        className="flex gap-4 flex-wrap m-5 p-3 justify-items-center "
      >
        {projects.map((item: ProjectType) => (
          <ProjectCard key={item.projectName} {...item} />
        ))}
      </div>
    </div>
  );
}

function SearchProject() {
  const filterOptions = [
    "Name",
    "Team-Size",
    "Due-Date",
    "Status",
    "Tasks",
    "Priority",
  ];

  const inputRef = useRef<HTMLInputElement|null>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log((inputRef.current as HTMLInputElement).value);
  };

  return (
    <form className="m-4 flex gap-3 justify-center" onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        placeholder="Search the Projects"
        className="border-gray-300 max-w-[600px]"
      />
      <Select>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.map((item: string) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
          {/* <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem> */}
        </SelectContent>
      </Select>

      <Button>Search</Button>
    </form>
  );
}

function ProjectCard({
  projectName,
  status,
  membersCount,
  dueDate,
  priority,
  tasksDone: { completed, total },
}: ProjectType) {
  const statusIcons = {
    "In Progress": "🟢",
    Completed: "🔵",
    "On Hold": "🟡",
  };

  const priorityIcons = {
    High: "🔴",
    Medium: "🔵",
    Low: "🟢",
  };
  return (
    <div className="text-sm flex flex-col gap-3 min-w-full md:min-w-[350px] px-8 p-5 rounded-lg hover:bg-[#efefff] border border-gray-300 shadow hover:shadow-md transition-all">
      {/* Description */}
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-[80px] h-[80px] bg-gray-700 rounded-lg"></div>
        <div className=" text-sm">
          <div className="text-lg mb-2">{projectName}</div>
          <div className="mb-1">
            {statusIcons[status]} {status}
          </div>
          <div>👤 {membersCount} members</div>
        </div>
      </div>
      {/* Row */}
      <div className="flex justify-between text-gray-800">
        <div className=" cursor-pointer">
          <div className="text-gray-700 text-sm">Due Date</div>
          <div>📆 {dueDate}</div>
        </div>
        <div className=" cursor-pointer">
          <div className="text-gray-700 text-sm">Priority</div>
          <div>
            {priorityIcons[priority]} {priority}
          </div>
        </div>
        <div className=" cursor-pointer">
          <div className="text-gray-700 text-sm">Tasks Done</div>
          <div>
            📋 {completed} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
