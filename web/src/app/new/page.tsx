"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import useScreenWidth from "@/hooks/use-screen-width";
import {
  Edit,
  Edit2Icon,
  EllipsisVerticalIcon,
  KanbanIcon,
  MessageCircle,
  SettingsIcon,
  UserIcon,
  ViewIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { title } from "process";
import { useState } from "react";

export default function NewProjectPage(props: any) {
  return (
    <div className="flex-1 w-full box-border">
      <Navbar />
      <Body />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex items-center px-4 gap-5 border-b">
      <SidebarTrigger />
      <div className="flex gap-5 items-center mx-auto">
        <div>{"Untitled Project"}</div>
        <div className="hover:bg-gray-200 p-2 rounded-md active:scale-90">
          <Edit2Icon size={15} />
        </div>
      </div>
      <div className="min-w-[30px] min-h-[30px] my-[5px] rounded hover:bg-gray-200 active:scale-90 flex justify-center items-center">
        <SettingsIcon size={20} />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="max-w-full overflow-auto p-3">
        <KanbanBoard />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex items-center gap-2 p-3 w-full">
      <Button className="active:scale-95">
        <KanbanIcon size={20} /> New Board
      </Button>
      <div className="flex flex-col ml-auto gap-1">
        <div className="text-xs text-gray-500">Mode</div>
        <ModeSelect />
      </div>
    </div>
  );
}

function ModeSelect() {
  const [value, setValue] = useState("Edit");
  return (
    <Select onValueChange={(e) => setValue(e)}>
      <SelectTrigger className="w-[120px]">
        <SelectValue
          placeholder={
            <div className="flex gap-2 items-center">
              <Edit2Icon size={15} /> {value}
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"Edit"} defaultChecked>
          <div className="flex gap-2 items-center">
            <Edit2Icon size={15} /> Edit
          </div>
        </SelectItem>
        <SelectItem value={"View"}>
          <div className="flex gap-2 items-center">
            <ViewIcon size={15} /> View
          </div>
        </SelectItem>
        <SelectItem value={"Comment"}>
          <div className="flex gap-2 items-center">
            <MessageCircle size={15} /> Comment
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

function KanbanBoard() {
  const [columns, setColumns] = useState([
    {
      title: "Todo",
      list: [
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
      ],
    },
    {
      title: "Todo",
      list: [
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
      ],
    },
    {
      title: "Todo",
      list: [
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
      ],
    },
    {
      title: "Todo",
      list: [
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
        {
          title: "Update Signup UI",
          user: "Abhay",
          status: "🟢",
        },
      ],
    },
  ].slice(2));

  return (
    <div className="min-w-full border-2 border-dashed border-gray-400 rounded-lg overflow-hidden flex flex-col ">
      {/* Toolbar */}
      <div className="flex px-5 p-3 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold">Board Name</div>
          <Edit2Icon size={15} className=" cursor-pointer active:scale-75" />
        </div>
      </div>
      {/* Columns Container */}
      <div className="flex gap-5 p-3 overflow-auto flex-wrap justify-center">
        {/* Column */}
        {columns.map(({ title, list }: { title: string; list: any }) => (
          <div
            key={title}
            className="min-w-[400px] px-4 p-3 rounded-lg shadow-md  border border-gray-300 bg-white"
          >
            {/* Title */}
            <div className="text-lg mb-3 flex">
              <div className="">TaskList Title</div>
              <div className="ml-auto flex justify-center items-center min-h-[30px] min-w-[30px] hover:bg-gray-100 rounded-full active:scale-90">
                <EllipsisVerticalIcon size={20} />
              </div>
            </div>
            {/* List */}
            <div className=" flex flex-col gap-2">
              {list.map((item: any) => (
                <div
                  key={item.title}
                  className=" cursor-pointer flex min-w-full gap-3 px-3 py-1 border border-gray-300 transition-all rounded-lg hover:shadow-lg"
                >
                  <div className="flex-1">{item.title}</div>
                  <div className="h-[30px] w-[30px] flex items-center justify-center rounded-full hover:bg-gray-100">
                    <UserIcon size={20} />
                  </div>
                  <div>{item.status}</div>
                </div>
              ))}

              {/* New Task */}
              <Button className="mt-3 block active:scale-95 w-32">
                New Task
              </Button>
            </div>
          </div>
        ))}
        {/* New List Button */}
        <Button
          variant={"outline"}
          className="min-w-[400px] border-dashed border-gray-400 w-56 active:scale-95"
          onClick={()=>setColumns([...columns, columns[0]])}
        >
          Create new List
        </Button>
      </div>
    </div>
  );
}
