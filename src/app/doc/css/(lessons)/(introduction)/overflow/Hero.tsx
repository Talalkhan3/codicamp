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
                Overflow
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - Overflow */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - Overflow
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS <Code color="success">overflow </Code> property controls what
          happens to content that is too big to fit into an area.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Overflow */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Overflow
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">overflow</Code> property specifies whether
          to clip the content or to add scrollbars when the content of an
          element is too big to fit in the specified area.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">overflow</Code> property has the following
          values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">visible </Code> - Default. The overflow is
              not clipped. The content renders outside the element's box
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">hidden </Code> - The overflow is clipped,
              and the rest of the content will be invisible
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">scroll </Code> - The overflow is clipped,
              and a scrollbar is added to see the rest of the content
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">auto </Code> - Similar to{" "}
              <Code color="success">scroll</Code> but it adds scrollbars only
              when necessary
            </p>
          </li>
        </ul>
      </div>

      {/* overflow: visible */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          overflow: visible
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, the overflow is <Code color="success">visible</Code>,
          meaning that it is not clipped and it renders outside the element's
          box:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 65px;"}</p>
          <p className="pl-3"> {"background-color: coral;"}</p>
          <p className="pl-3">{"overflow: visible;"}</p>
          {"}"}
        </Code>
      </div>

      {/* overflow: hidden */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          overflow: hidden
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          With the <Code color="success">hidden </Code>, value, the overflow is
          clipped, and the rest of the content is hidden:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"overflow: hidden;"}</p>
          {"}"}
        </Code>
      </div>

      {/* overflow: scroll */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          overflow: scroll
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Setting the value to <Code color="success">scroll </Code>the overflow
          is clipped and a scrollbar is added to scroll inside the box. Note
          that this will add a scrollbar both horizontally and vertically (even
          if you do not need it):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"overflow: scroll;"}</p>
          {"}"}
        </Code>
      </div>

      {/* overflow: auto */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          overflow: auto
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">auto </Code> value is similar to{" "}
          <Code color="success">scroll </Code>, but it adds scrollbars only when
          necessary:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"overflow: auto;"}</p>
          {"}"}
        </Code>
      </div>

      {/* overflow-x and overflow-y */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          overflow-x and overflow-y
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">overflow-x</Code> and{" "}
          <Code color="success">overflow-y</Code> properties specifies whether
          to change the overflow of content just horizontally or vertically (or
          both):
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">overflow-x</Code> specifies what to do with the
          left/right edges of the content.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">overflow-y</Code> specifies what to do with the
          top/bottom edges of the content.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{" overflow-x: hidden;"}</p>
          <p className="pl-3">{" overflow-y: scroll;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/z-index"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Z-index
          </Button>
        </Link>
        <Link href={"/doc/css/float"}>
          <Button variant={"outline"} className="flex gap-3">
            Float <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
