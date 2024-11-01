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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:pr-3">
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
                Introduction
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Introduction */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Introduction</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS is the language we use to style a Web page.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is CSS? */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">What is CSS?</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS, or Cascading Style Sheets, defines the visual presentation of
          HTML elements across various media, such as screens or print. By
          centralizing style instructions, CSS streamlines the design process,
          allowing a single set of rules to dictate the layout for multiple web
          pages simultaneously. These rules are often saved in external CSS
          files, making updates and maintenance efficient and consistent across
          a site.
        </p>
      </div>

      {/* Why Use CSS? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Why Use CSS?</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS is used to define styles for your web pages, including the design,
          layout and variations in display for different devices and screen
          sizes.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-4">{" background-color: lightblue;"}</p>
          {"}"} <br /> <br />
          {"h1 {"}
          <p className="pl-4">{"color: white;"}</p>
          <p className="pl-4">{" text-align: center;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-4">{"font-family: verdana;"}</p>
          <p className="pl-4">{"font-size: 20px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS Solved a Big Problem */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Solved a Big Problem
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML was NEVER intended to contain tags for formatting a web page!
          HTML was created to describe the content of a web page, like: <br />{" "}
          <br />
          {"<h1>This is a heading</h1>"} <br /> <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          When tags like <Code color="success">{"<font>"}</Code>, and color
          attributes were added to the HTML 3.2 specification, it started a
          nightmare for web developers. Development of large websites, where
          fonts and color information were added to every single page, became a
          long and expensive process. To solve this problem, the World Wide Web
          Consortium (W3C) created CSS. CSS removed the style formatting from
          the HTML page!
        </p>
      </div>

      {/* CSS Saves a Lot of Work! */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Saves a Lot of Work!
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The style definitions are normally saved in external .css files.
          <br />
          With an external stylesheet file, you can change the look of an entire
          website by changing just one file!
        </p>
      </div>


      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> CSS
          </Button>
        </Link>
        <Link href={"/doc/css/syntax"}>
          <Button variant={"outline"} className="flex gap-3">
            Syntax <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
