import { Metadata } from "next";
import Sidebar from "../ui/sidebar";


export const metadata: Metadata = {
  title: "Settings",
  description: "Settings for Projects",
};

export default function Dashboard(props: any) {
  return (
    <div className="flex">
      <Sidebar activeID="settings" className="max-w-[300px]" />
      <div className="flex-1 flex items-center justify-center text-3xl`">
        Settings
      </div>
    </div>
  );
}
