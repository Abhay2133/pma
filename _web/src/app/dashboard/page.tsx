import { Metadata } from "next";
import Sidebar from "../ui/sidebar";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for project management app",
};

export default function Dashboard(props: any) {
  return (
    <div className="flex">
      <Sidebar className="max-w-[300px]" />
      <div className="flex-1 flex items-center justify-center text-3xl`">
        Dashboard
      </div>
    </div>
  );
}
