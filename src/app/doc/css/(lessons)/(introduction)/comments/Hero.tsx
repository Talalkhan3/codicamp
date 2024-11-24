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
                Comments
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Comments */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Comments</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS comments are not displayed in the browser, but they can help
          document your source code.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Comments */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">CSS Comments</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Comments are used to explain the code, and may help when you edit the
          source code at a later date. Comments are ignored by browsers. A CSS
          comment is placed inside the <Code color="success">{"<style>"}</Code>{" "}
          element, and starts with <Code color="success">/*</Code> and ends with{" "}
          <Code color="success">*/</Code>:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"/* This is a single-line comment */"} <br />
          {"p {"}
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can add comments wherever you want in the code:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">
            {"color: red;     /* Set text color to red */"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Even in the middle of a code line: Example
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{"color: /*red*/blue; "}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Comments can also span multiple lines:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"/* This is"} <br />
          {"a multi-line"} <br />
          {"comment */"} <br />
          {"p {"}
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
      </div>

      {/* HTML and CSS Comments */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML and CSS Comments
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          From the HTML tutorial, you learned that you can add comments to your
          HTML source by using the <Code color="success">{" <!--...--> "}</Code>
          syntax. In the following example, we use a combination of HTML and CSS
          comments:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"p {"}
          <p className="pl-3">{"color: red; /* Set text color to red */"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{"<h2>My Heading</h2>"}</p> <br />
          <p className="pl-3">{"<!-- These paragraphs will be red -->"}</p>
          <p className="pl-3">{"<p>Hello World!</p>"}</p>
          <p className="pl-3">{"<p>This paragraph is styled with CSS.</p>"}</p>
          <p className="pl-3">
            {"<p>CSS comments are not shown in the output.</p>"}
          </p>{" "}
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/how-to"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> How to
          </Button>
        </Link>
        <Link href={"/doc/css/colors"}>
          <Button variant={"outline"} className="flex gap-3">
            Colors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
