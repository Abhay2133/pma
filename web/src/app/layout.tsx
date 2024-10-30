import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppProvider } from "@/context/AppContext";
import { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full min-h-screen relative">{children}</main>
          </SidebarProvider>
        </AppProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of Projects",
};
