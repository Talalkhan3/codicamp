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
                Inline-Block
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - display: inline-block */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Inline-block</h1>
        <Separator />
      </div>

      {/* The display: inline-block Value */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The display: inline-block Value
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Compared to <Code color="success">display: inline</Code> the major
          difference is that <Code color="success">display: inline-block</Code>{" "}
          allows to set a width and height on the element.
        </p>{" "}
        <p className="text-[16px] text-[#71717a] mt-3">
          Also, with <Code color="success">display: inline-block</Code>, the top
          and bottom margins/paddings are respected, but with{" "}
          <Code color="success">display: inline</Code> they are not.
        </p>{" "}
        <p className="text-[16px] text-[#71717a] mt-3">
          Compared to <Code color="success">display: block</Code>, the major
          difference is that <Code color="success">display: inline-block</Code>{" "}
          does not add a line-break after the element, so the element can sit
          next to other elements.
        </p>{" "}
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example shows the different behavior of{" "}
          <Code color="success">display: inline</Code>,{" "}
          <Code color="success">display: inline-block</Code> and{" "}
          <Code color="success">display: block:</Code>
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"span.a {"}
          <p className="pl-3">{"display: inline;"}</p>
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid blue;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"} <br /> <br />
          {"span.b {"}
          <p className="pl-3">{"display: inline-block;"}</p>
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid blue;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"} <br /> <br />
          {"span.c {"}
          <p className="pl-3">{"display: block;"}</p>
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid blue;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Using inline-block to Create Navigation Links */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Using inline-block to Create Navigation Links
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          One common use for <Code color="success">display: inline-block</Code>{" "}
          is to display list items horizontally instead of vertically. The
          following example creates horizontal navigation links:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".nav {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          <p className="pl-3">{"list-style-type: none;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"padding: 0;"}</p>
          <p className="pl-3">{"margin: 0;"}</p>
          {"}"} <br /> <br />
          {".nav li {"}
          <p className="pl-3">{"display: inline-block;"}</p>
          <p className="pl-3">{"font-size: 20px;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/float"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Float
          </Button>
        </Link>
        <Link href={"/doc/css/align"}>
          <Button variant={"outline"} className="flex gap-3">
            Align <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
