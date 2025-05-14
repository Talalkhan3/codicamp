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
                Color Keywords
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Border Images */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          {" "}
          Color Keywords
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This page will explain the <Code color="success">transparent</Code>,{" "}
          <Code color="success">currentcolor</Code>, and{" "}
          <Code color="success">inherit </Code> keywords.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The transparent Keyword */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The transparent Keyword
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">transparent</Code> keyword is used to make a
          color transparent. This is often used to make a transparent background
          color for an element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{`background-image: url("paper.gif");`}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"background-color: transparent;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The currentcolor Keyword */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The currentcolor Keyword
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">currentcolor</Code> keyword is like a
          variable that holds the current value of the color property of an
          element. This keyword can be useful if you want a specific color to be
          consistent in an element or a page.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"color: blue;"}</p>
          <p className="pl-3">{"border: 10px solid currentcolor;"}</p>
          {"}"}
        </Code>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"color: purple;"}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"background-color: currentcolor;"}</p>
          {"}"}
        </Code>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"color: green;"}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"box-shadow: 0px 0px 15px currentcolor;"}</p>
          <p className="pl-3">{"border: 5px solid currentcolor;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The inherit Keyword */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The inherit Keyword
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">inherit </Code> keyword specifies that a
          property should inherit its value from its parent element. The{" "}
          <Code color="success">inherit </Code> keyword can be used for any CSS
          property, and on any HTML element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"border: 2px solid red;"}</p>
          {"}"} <br /> <br />
          {"span {"}
          <p className="pl-3">{"border: inherit;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/ad-backgrounds"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Backgrounds
          </Button>
        </Link>
        <Link href={"/doc/css/gradients"}>
          <Button variant={"outline"} className="flex gap-3">
            Gradients <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
