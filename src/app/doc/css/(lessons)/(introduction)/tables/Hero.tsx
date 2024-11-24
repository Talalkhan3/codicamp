import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Code } from "@nextui-org/code";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-3 max-sm:px-0">
      {/* BREADCRUMBS  */}

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/doc/html">CSS</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Tables
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Tables */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Tables</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The look of an HTML table can be greatly improved with CSS
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Table Borders */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Table Borders
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To specify table borders in CSS, use the border property.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"table, th, td {"}
          <p className="pl-3">{"border: 1px solid;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Full-Width Table */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Full-Width Table
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The table above might seem small in some cases. If you need a table
          that should span the entire screen (full-width), add width: 100% to
          the {"<table>"} element
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"table {"}
          <p className="pl-3">{" width: 100%;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Collapse Table Borders */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Collapse Table Borders
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">border-collapse</Code> property sets whether
          the table borders should be collapsed into a single border:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"table {"}
          <p className="pl-3">{"border-collapse: collapse;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you only want a border around the table, only specify the border
          property for <Code color="success">{"<table>"}</Code>:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"table {"}
          <p className="pl-3">{" border: 1px solid;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/lists"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Lists
          </Button>
        </Link>
        <Link href={"/doc/css/display"}>
          <Button variant={"outline"} className="flex gap-3">
            Display <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
