"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { useAppContext } from "@/context/AppContext";

export default function Navbar(props: any) {
  const { value, setValue } = useAppContext();

  return (
    <nav className="flex gap-3 p-3 items-center">
      <SidebarTrigger />
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={"#"}>{value.mainTitle}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
}
