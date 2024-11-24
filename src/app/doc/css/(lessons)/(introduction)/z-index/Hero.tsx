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
                z-index
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - The position Property */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - The z-index Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The <Code color="success">z-index</Code> property specifies the stack
          order of an element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The z-index Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The z-index Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          When elements are positioned, they can overlap other elements. The{" "}
          <Code color="success">z-index</Code> property specifies the stack
          order of an element (which element should be placed in front of, or
          behind, the others). An element can have a positive or negative stack
          order:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"left: 0px;"}</p>
          <p className="pl-3">{"top: 0px;"}</p>
          <p className="pl-3">{"z-index: -1;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Another z-index Example */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Another z-index Example
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here we see that an element with greater stack order is always above
          an element with a lower stack order:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {".container {"} <br />
          <p className="pl-3">{"position: relative;"}</p>
          {"}"} <br /> <br />
          {".black-box {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"z-index: 1;"}</p>
          <p className="pl-3">{"border: 2px solid black;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"margin: 30px;"}</p>
          {"}"} <br /> <br />
          {".gray-box {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"z-index: 3;"}</p>
          <p className="pl-3">{"background: lightgray;"}</p>
          <p className="pl-3">{"height: 60px;"}</p>
          <p className="pl-3">{"width: 70%;"}</p>
          <p className="pl-3">{"left: 50px;"}</p>
          <p className="pl-3">{"top: 50px;"}</p>
          {"}"} <br /> <br />
          {".green-box {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"z-index: 2;"}</p>
          <p className="pl-3">{"background: lightgreen;"}</p>
          <p className="pl-3">{"width: 35%;"}</p>
          <p className="pl-3">{"left: 270px;"}</p>
          <p className="pl-3">{"top: -15px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<div class="container">`}
          <p className="pl-3">{`<div class="black-box">Black box</div>`}</p>
          <p className="pl-3">{`<div class="gray-box">Gray box</div>`}</p>
          <p className="pl-3">{`<div class="green-box">Green box</div>`}</p>
          {"</div>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Without z-index */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Without z-index
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If two positioned elements overlap each other without a{" "}
          <Code color="success">z-index</Code> specified, the element defined
          last in the HTML code will be shown on top.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {".container {"}
          <p className="pl-3">{"position: relative;"}</p>
          {"}"} <br /> <br />
          {".black-box {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"border: 2px solid black;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"margin: 30px;"}</p>
          {"}"} <br /> <br />
          {".gray-box {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"background: lightgray;"}</p>
          <p className="pl-3">{"height: 60px;"}</p>
          <p className="pl-3">{"width: 70%;"}</p>
          <p className="pl-3">{"left: 50px;"}</p>
          <p className="pl-3">{"top: 50px;"}</p>
          {"}"} <br /> <br />
          {".green-box {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"background: lightgreen;"}</p>
          <p className="pl-3">{"width: 35%;"}</p>
          <p className="pl-3">{"left: 270px;"}</p>
          <p className="pl-3">{"top: -15px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<div class="container">`}
          <p className="pl-3">{`<div class="black-box">Black box</div>`}</p>
          <p className="pl-3">{`<div class="gray-box">Gray box</div>`}</p>
          <p className="pl-3">{`<div class="green-box">Green box</div>`}</p>
          {"</div>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/position"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Position
          </Button>
        </Link>
        <Link href={"/doc/css/overflow"}>
          <Button variant={"outline"} className="flex gap-3">
            Overflow <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
