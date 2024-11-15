"use client";

import { useProject } from "@/context/ProjectContext/hook";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Edit2Icon,
  EllipsisVerticalIcon,
  KanbanIcon,
  MessageCircle,
  SettingsIcon,
  Trash,
  UserIcon,
  ViewIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Column, Task } from "@/context/ProjectContext/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import idx from "@/lib/utils";

export default function NewProjectPage() {
  return (
    <div className="flex-1 w-full box-border">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  const { project } = useProject();
  return (
    <div className="flex items-center px-4 gap-5 border-b py-2">
      <SidebarTrigger />
      {/* Project Name */}
      <div className="flex gap-5 items-center mr-auto">
        <div>{project.name}</div>
        <div className="hover:bg-secondary p-2 rounded-md active:scale-90">
          <Edit2Icon size={15} />
        </div>
      </div>
      <Toolbar />
      <div className="min-w-[30px] min-h-[30px] my-[5px] rounded hover:bg-secondary active:scale-90 flex justify-center items-center">
        <EllipsisVerticalIcon size={20} />
      </div>
    </div>
  );
}

function Body() {
  const { project } = useProject();
  return (
    <div className="max-w-full overflow-auto p-3 flex flex-col gap-3 ">
      {project.boards.map((board, i) => (
        <KanbanBoard key={board.id} boardIndex={i} />
      ))}
    </div>
  );
}

function Toolbar() {
  const { project, setProject } = useProject();

  const createNewBoard = () => {
    project?.boards?.push({
      id: "" + idx(),
      name: "Unnamed Board - " + project?.boards?.length,
      columns: [],
    });
    setProject({ ...project });
  };

  return (
    <div className="flex items-center gap-2">
      <Button className="active:scale-95" onClick={createNewBoard}>
        <KanbanIcon size={20} /> New Board
      </Button>
      <div className="flex flex-col ml-auto gap-1">
        {/* <div className="text-xs text-gray-500">Mode</div> */}
        <ModeSelect />
      </div>
    </div>
  );
}

function ModeSelect() {
  const { project, setProject } = useProject();

  return (
    <Select
      onValueChange={(mode) => setProject({ ...project, mode })}
      defaultValue={project.mode}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue
        // placeholder={
        //   <div className="flex hover:bg-secondary gap-2 items-center">
        //     <Edit2Icon size={15} /> {project.mode}
        //   </div>
        // }
        />
      </SelectTrigger>
      <SelectContent defaultValue={project.mode}>
        <SelectItem value={"EDIT"} defaultChecked>
          <div className="flex gap-2 items-center">
            <Edit2Icon size={15} /> Edit
          </div>
        </SelectItem>
        <SelectItem value={"VIEW"}>
          <div className="flex gap-2 items-center">
            <ViewIcon size={15} /> View
          </div>
        </SelectItem>
        {/* <SelectItem value={"Comment"}>
          <div className="flex gap-2 items-center">
            <MessageCircle size={15} /> Comment
          </div>
        </SelectItem> */}
      </SelectContent>
    </Select>
  );
}

function KanbanBoard({ boardIndex }: { boardIndex: number }) {
  const { setProject, project } = useProject();
  const board = project.boards[boardIndex];

  const addColumn = (boardIndex: number, newColumn: Column) => {
    project.boards?.at(boardIndex)?.columns?.push(newColumn);
    setProject({ ...project });
  };

  return (
    <div className="min-w-full border-2 border-dashed border-gray-400 rounded-lg overflow-hidden flex flex-col ">
      {/* Toolbar */}
      <div className="flex px-5 p-3 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold">{board.name}</div>
          <Edit2Icon size={15} className=" cursor-pointer active:scale-75" />
        </div>
      </div>
      {/* Columns Container */}
      <div className="flex gap-5 p-3 overflow-auto flex-wrap justify-center items-start">
        {/* Column */}
        {board.columns.map((column, columnIndex) => (
          <ColumnUI
            key={columnIndex}
            columnIndex={columnIndex}
            boardIndex={boardIndex}
          />
        ))}
        {/* New List Button */}
        {project.mode == "EDIT" && (
          <Button
            variant={"outline"}
            className="min-w-[400px] border-dashed border-gray-400 w-56 active:scale-95"
            // onClick={() => setProject({...project, boards: [...project.boards, {...defaultNewBoard}]})}
            onClick={() =>
              addColumn(boardIndex, {
                id: board.columns.length.toString(),
                name: "New Column",
                tasks: [],
              })
            }
          >
            Create new List
          </Button>
        )}
      </div>
    </div>
  );
}

function ColumnUI({
  boardIndex,
  columnIndex,
}: {
  boardIndex: number;
  columnIndex: number;
}) {
  const { project, setProject } = useProject();
  const column = project.boards?.at(boardIndex)?.columns?.at(columnIndex);

  const addTask = (boardIndex: number, columnIndex: number, newTask: Task) => {
    project.boards
      ?.at(boardIndex)
      ?.columns?.at(columnIndex)
      ?.tasks?.push(newTask);
    setProject({ ...project });
  };

  const deleteColumn = () => {
    project.boards?.at(boardIndex)?.columns?.splice(columnIndex, 1);
    setProject({ ...project });
  };

  return (
    <div className="min-w-[400px] px-4 p-3 rounded-lg shadow-md  border bg-primary-foreground">
      {/* Title */}
      <div className="text-lg mb-3 flex">
        <div className="">{column?.name}</div>
        {/* Options */}
        {project.mode == "EDIT" && (
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className=" flex justify-center items-center min-h-[30px] min-w-[30px] hover:bg-secondary rounded-full active:scale-90">
                  <EllipsisVerticalIcon size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={deleteColumn}>
                  <Trash size={20} className="mr-1" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
      {/* List */}
      <div className=" flex flex-col gap-2">
        {column?.tasks?.map((task, i) => (
          <div
            key={i}
            className=" cursor-pointer flex min-w-full gap-3 px-3 py-1 border transition-all rounded-lg hover:bg-secondary"
          >
            <div className="flex-1">{task.name}</div>
            <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-primary-foreground">
              <UserIcon size={20} />
            </div>
            <div>{task.status}</div>
          </div>
        ))}

        {/* New Task */}
        {project.mode == "EDIT" && (
          <Button
            className="mt-3 block active:scale-95 w-32"
            onClick={() =>
              addTask(boardIndex, columnIndex, {
                id: (column as Column).tasks.length.toString(),
                name: (column as Column).tasks.length.toString(),
                assignedUser: "",
                status: "🟡",
              })
            }
            // onClick={()=>setProject({...project, boards: project.boards.map(_board=>_board.id == board.id ? {..._board, columns: _board.}: _board)})}
          >
            New Task
          </Button>
        )}
      </div>
    </div>
  );
}
