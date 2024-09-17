import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Code } from "@nextui-org/code";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { TableDemo } from "./Table";

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10">
      {/* BREADCRUMBS  */}
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/doc/html">HTML</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Introduction{" "}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* INTORDUCTION TO HTML */}

      <div className="mt-1">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Introduction to HTML
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML, which stands for Hyper Text Markup Language, is the standard
          language used for creating web pages. It defines the structure of a
          webpage by organizing content through a series of elements. These HTML
          elements serve as instructions for the browser, indicating how the
          content should be displayed. Each element labels different parts of
          the content, such as headings, paragraphs, and links, guiding the
          browser in rendering the webpage properly. Through this, HTML provides
          a way to structure and present information in a clear and organized
          manner.
        </p>

        <div className="mt-7">
          <h1 className="text-[30px] text-[#09090b] font-bold">Example</h1>

          <Code color="success" size="md" className="w-full p-3 mt-3">
            {"<!DOCTYPE html>"} <br />
            {"<html>"} <br />
            {"<head>"} <br />
            {"<title>Page Title</title>"} <br />
            {"</head>"} <br />
            {"<body>"} <br /> <br />
            {"<h1>My First Heading</h1>"} <br />
            {"<p>My first paragraph.</p>"} <br /> <br />
            {"</body>"} <br />
            {"</html>"}
          </Code>
        </div>
      </div>

      {/* CODE EXPLANATION */}

      <div className="mt-5">
        <h1 className="text-[#09090b] text-[22px] font-semibold">
          Explanation
        </h1>
        <div className="mt-3">
          <ul className="list-disc flex flex-col gap-y-2 w-full">
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<!DOCTYPE html>"}
              </Code>
              <p>declaration defines that this document is an HTML5 document</p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<html>"}
              </Code>
              <p>element is the root element of an HTML page</p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<head>"}
              </Code>
              <p> element contains meta information about the HTML page</p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<title>"}
              </Code>
              <p>
                element specifies a title for the HTML page (which is shown in
                the browser's title bar or in the page's tab)
              </p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<body>"}
              </Code>
              <p>
                element defines the document's body, and is a container for all
                the visible contents, such as headings, paragraphs, images,
                hyperlinks, tables, lists, etc.
              </p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<h1>"}
              </Code>
              <p>element defines a large heading</p>
            </li>
            <li className="flex gap-3 ">
              <Code color="success" size="sm">
                {"<p>"}
              </Code>
              <p>element defines a paragraph</p>
            </li>
          </ul>
        </div>
      </div>

      {/* WHAT IS AN ELEMENT ? */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What is an HTML Element ?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An HTML element is defined by a start tag, some content, and an end
          tag:
        </p>
        <Code color="success" size="lg" className="mt-2">
          {"<tagname> Content goes here... </tagname>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML element is everything from the start tag to the end tag:
        </p>
        <div></div>
        <Code color="success" size="lg" className="mt-2">
          {"<h1>My First Heading</h1>"}
        </Code>
        <br />
        <Code color="success" size="lg" className="mt-2">
          {"<p>My first paragraph.</p>"}
        </Code>
      </div>

      {/* HISTORY OF HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">History</h1>
        <p className="text-[16px] text-[#71717a] mt-3 mb-7">
          Since the early days of the World Wide Web, there have been many
          versions of HTML:
        </p>
        <TableDemo />
      </div>
      <Separator className="mt-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Getting Started
          </Button>
        </Link>
        <Link href={"/doc/html/editors"}>
          <Button variant={"outline"} className="flex gap-3">
            Editors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
