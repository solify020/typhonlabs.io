import React, { useState } from "react";
import { SideNav } from "./side-nav";
import { NavItems } from "../constants/side-nav";
import { cn } from "../../lib/utils";
import { useSidebar } from "../hooks/useSidebar";
import { BsArrowLeftShort } from "react-icons/bs";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  return (
    <nav
      className={cn(
        "hidden h-screen border-r md:block bg-[#121111]",
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]",
        className
      )}
    >
      <div className="relative h-full overflow-hidden">
        <div className="h-full w-full overflow-y-auto flex items-start scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500">
          <div className="w-full py-4">
            <div className="px-3">
              <div className="mt-3 space-y">
                <SideNav
                  className={cn(
                    "text-background transition-all duration-300",
                    isOpen
                      ? "opacity-100"
                      : "opacity-0 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
                  )}
                  items={NavItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}