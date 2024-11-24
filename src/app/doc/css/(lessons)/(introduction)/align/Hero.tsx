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
                Align
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - float and clear */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - Horizontal & Vertical Align
        </h1>
        <Separator />
      </div>

      {/* Center Align Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Align Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To horizontally center a block element (like {"<div>"}), use{" "}
          <Code color="success">margin: auto;</Code>
          Setting the width of the element will prevent it from stretching out
          to the edges of its container. The element will then take up the
          specified width, and the remaining space will be split equally between
          the two margins:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"margin: auto;"}</p>
          <p className="pl-3">{"width: 50%;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          <p className="pl-3">{" padding: 10px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Center aligning has no effect if the{" "}
          <Code color="success">width</Code> property is not set (or set to
          100%).
        </p>
      </div>

      {/* Center Align Text */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Align Text
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To just center the text inside an element, use{" "}
          <Code color="success">text-align: center;</Code>
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          {"}"}{" "}
        </Code>
      </div>

      {/* Center an Image */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center an Image
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To center an image, set left and right margin to{" "}
          <Code color="success">auto</Code> and make it into a{" "}
          <Code color="success">block</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"display: block;"}</p>
          <p className="pl-3">{"margin-left: auto;"}</p>
          <p className="pl-3">{"margin-right: auto;"}</p>
          <p className="pl-3">{"width: 40%;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Left and Right Align - Using position */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Left and Right Align - Using position
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          One method for aligning elements is to use{" "}
          <Code color="success">position: absolute; </Code>:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".right {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"right: 0px;"}</p>
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          <p className="pl-3">{"padding: 10px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Absolute positioned elements are removed from the normal flow, and can
          overlap elements.
        </p>
      </div>

      {/* Left and Right Align - Using float */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Left and Right Align - Using float
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Another method for aligning elements is to use the float property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".right {"}
          <p className="pl-3">{"float: right;"}</p>
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          <p className="pl-3">{"padding: 10px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Center Vertically - Using padding */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Vertically - Using padding
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          There are many ways to center an element vertically in CSS. A simple
          solution is to use top and bottom <Code color="success">padding</Code>{" "}
          :
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"padding: 70px 0;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To center both vertically and horizontally, use{" "}
          <Code color="success">padding</Code> and{" "}
          <Code color="success">text-align: center:</Code>
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"padding: 70px 0;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Center Vertically - Using line-height */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Vertically - Using line-height
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Another trick is to use the <Code color="success">line-height</Code>{" "}
          property with a value that is equal to the{" "}
          <Code color="success">height</Code> property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"line-height: 200px;"}</p>
          <p className="pl-3">{"height: 200px;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          {"}"} <br /> <br />
          {"/* If the text has multiple lines, add the following: */"} <br />
          {".center p {"}
          <p className="pl-3">{"line-height: 1.5;"}</p>
          <p className="pl-3">{"display: inline-block;"}</p>
          <p className="pl-3">{"vertical-align: middle;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Center Vertically - Using position & transform */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Vertically - Using position & transform
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If <Code color="success">padding</Code> and{" "}
          <Code color="success">line-height</Code> are not options, another
          solution is to use positioning and the transform property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"height: 200px;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          {"}"} <br /> <br />
          {".center p {"}
          <p className="pl-3">{"margin: 0;"}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 50%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"transform: translate(-50%, -50%);"}</p>
          {"}"}
        </Code>
      </div>

      {/* Center Vertically - Using Flexbox */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Center Vertically - Using Flexbox
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can also use flexbox to center things. Just note that flexbox is
          not supported in IE10 and earlier versions:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"display: flex;"}</p>
          <p className="pl-3">{"justify-content: center;"}</p>
          <p className="pl-3">{"align-items: center;"}</p>
          <p className="pl-3">{"height: 200px;"}</p>
          <p className="pl-3">{"border: 3px solid green;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/inline-block"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Inline Block
          </Button>
        </Link>
        <Link href={"/doc/css/combinations"}>
          <Button variant={"outline"} className="flex gap-3">
            Combinations <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
