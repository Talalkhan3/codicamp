"use client";

import React from "react";
import csssidebar from "@/app/shared/csssidebar";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

function SideNav() {
  return (
    <ScrollArea className="h-[92vh] min-w-64 fixed max-lg:hidden">
      {/* Introduction Part */}
      <div className="py-10 px-4">
        <h4 className="mb-4 text-[14px] font-bold leading-none text-[#09090b]">
          Getting Started
        </h4>
        {csssidebar.cssIntroductionNav.map((tag, index) => (
          <div key={index}>
            <Link
              key={index}
              href={tag.href}
              className="text-sm  text-[14px] text-[#71717a] hover:underline"
            >
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Advanced Part */}
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Advanced</h4>
        {csssidebar.cssAdvancedNav.map((tag, index) => (
          <div key={index}>
            <Link
              key={index}
              href={tag.href}
              className="text-sm  text-[14px] text-[#71717a] hover:underline"
            >
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Responsive Part */}

      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Responsive</h4>
        {csssidebar.cssResponsiveNav.map((tag, index) => (
          <div key={index}>
            <Link
              key={index}
              href={tag.href}
              className="text-sm  text-[14px] text-[#71717a] hover:underline"
            >
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default SideNav;
