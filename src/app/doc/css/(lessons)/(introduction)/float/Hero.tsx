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
                Float
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - float and clear */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - float and clear
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS <Code color="success">float </Code> property specifies how an
          element should float. <br /> <br />
          The CSS <Code color="success">clear </Code> property specifies what
          elements can float beside the cleared element and on which side.{" "}
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The float Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The float Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">float</Code> property is used for
          positioning and formatting content e.g. let an image float left to the
          text in a container.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">float</Code> property can have one of the
          following values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">left</Code> - The element floats to the left
              of its container
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">right</Code> - The element floats to the
              right of its container
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">none</Code> - The element does not float
              (will be displayed just where it occurs in the text). This is
              default
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">inherit</Code> - The element inherits the
              float value of its parent
            </p>
          </li>
        </ul>
        <p>
          In its simplest use, the <Code color="success">float</Code> property
          can be used to wrap text around images.
        </p>
      </div>

      {/* float: right; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          float: right;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          specifies that an image should float to the right in a text
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"float: right;"}</p>
          {"}"}
        </Code>
      </div>

      {/* float: left; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          float: left;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          specifies that an image should float to the left in a text
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"float: left;"}</p>
          {"}"}
        </Code>
      </div>

      {/* No float */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          No float
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          the image will be displayed just where it occurs in the text (float:
          none;):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"float: none;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Float Next To Each Other */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Float Next To Each Other
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Normally div elements will be displayed on top of each other. However,
          if we use <Code color="success">float: left</Code> we can let elements
          float next to each other:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"float: left;"}</p>
          <p className="pl-3">{"padding: 15px;"}</p>
          {"}"} <br /> <br />
          {".div1 {"}
          <p className="pl-3">{"background: red;"}</p>
          {"}"} <br /> <br />
          {".div2 {"}
          <p className="pl-3">{"background: yellow;"}</p>
          {"}"} <br /> <br />
          {".div3 {"}
          <p className="pl-3">{"background: green;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/overflow"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Overflow
          </Button>
        </Link>
        <Link href={"/doc/css/inline-block"}>
          <Button variant={"outline"} className="flex gap-3">
            Inline Block <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
