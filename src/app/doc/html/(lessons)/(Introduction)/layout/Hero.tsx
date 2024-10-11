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
    <ScrollArea className="w-full h-[90vh] pr-10 max-md:pr-3">
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
                Layout
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Layout Elements and Techniques */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Layout Elements and Techniques
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Websites often display content in multiple columns (like a magazine or
          a newspaper).
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Layout Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Layout Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML has several semantic elements that define the different parts of
          a web page:
        </p>
        <ul className="flex flex-col gap-2 mt-5 ml-5 max-md:ml-0">
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<header>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines a header for a document or a section
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<nav>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines a set of navigation links
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<section>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines a section in a document
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<article>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines an independent, self-contained content
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<aside>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines content aside from the content (like a sidebar)
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<footer>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines a footer for a document or a section
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<details>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines additional details that the user can open and close on
              demand
            </p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <Code color="success">{"<summary>"}</Code>
            <p className="text-[16px] text-[#71717a]">
              Defines a heading for the{" "}
              <Code color="success">{"<details>"}</Code> element
            </p>
          </li>
        </ul>
      </div>

      {/* HTML Layout Techniques */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Layout Techniques
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          There are four different techniques to create multicolumn layouts.
          Each technique has its pros and cons:
        </p>
        <ul className="flex flex-col gap-1 mt-5 ml-5 max-md:ml-0">
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <p className="text-[16px] text-[#71717a]">CSS framework</p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <p className="text-[16px] text-[#71717a]">CSS float property</p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <p className="text-[16px] text-[#71717a]">CSS flexbox</p>
          </li>
          <li className="flex items-center gap-3">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <p className="text-[16px] text-[#71717a]">CSS grid</p>
          </li>
        </ul>
      </div>

      {/* CSS Float Layout */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Float Layout
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          It is common to do entire web layouts using the CSS{" "}
          <Code color="success">{"float"}</Code> property. Float is easy to
          learn - you just need to remember how the{" "}
          <Code color="success">{"float"}</Code> and{" "}
          <Code color="success">{"clear"}</Code> properties work. Disadvantages:
          Floating elements are tied to the document flow, which may harm the
          flexibility. Learn more about float in our ,{" "}
          <Link
            href={"/doc/css/float"}
            className="hover:underline italic font-semibold"
          >
            CSS Float and Clear
          </Link>{" "}
          chapter.
        </p>
      </div>

      {/* CSS Flexbox Layout */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Flexbox Layout
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Use of flexbox ensures that elements behave predictably when the page
          layout must accommodate different screen sizes and different display
          devices. Learn more about flexbox in our{" "}
          <Link
            href={"/doc/css/flexbox"}
            className="hover:underline italic font-semibold"
          >
            CSS Flexbox
          </Link>{" "}
          chapter.
        </p>
      </div>

      {/* CSS Grid Layout */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Grid Layout
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS Grid Layout Module offers a grid-based layout system, with
          rows and columns, making it easier to design web pages without having
          to use floats and positioning.
          <br /> <br />
          Learn more about CSS grids in our{" "}
          <Link
            href={"/doc/css/grid"}
            className="hover:underline italic font-semibold"
          >
            CSS Grid Intro
          </Link>{" "}
          chapter.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/head"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Head
          </Button>
        </Link>
        <Link href={"/doc/html/responsive"}>
          <Button variant={"outline"} className="flex gap-3">
            Responsive <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
