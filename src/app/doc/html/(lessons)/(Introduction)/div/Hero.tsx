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
                Div
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Div Element */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Div Element</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The <Code color="success">{"<div>"}</Code> element is used as a
          container for other HTML elements.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The <div> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<div>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<div>"}</Code> element is by default a
          block element, meaning that it takes all available width, and comes
          with line breaks before and after.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          A <Code color="success">{"<div>"}</Code> element takes up all
          available width:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"Lorem Ipsum <div>I am a div</div> dolor sit amet."}
        </Code>
        <h1 className="text-[18px] font-semibold mt-3 text-[#09090b]">
          Result
        </h1>
        <div className="border border-slate-100 rounded-sm p-4 mt-3">
          <p>Lorem Ipsum</p>
          <p className="w-full bg-yellow-200">I am a div</p>
          <p>dolor sit amet.</p>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<div>"}</Code> element has no required
          attributes, but style, class and id are common.
        </p>
      </div>

      {/* <div> as a container */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<div>"} as a container
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<div>"}</Code> element is often used to
          group sections of a web page together.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<div>"} <br />
          {"  <h2>London</h2>"} <br />
          {"  <p>London is the capital city of England.</p>"} <br />
          {"  <p>London has over 13 million inhabitants.</p>"} <br />
          {"</div>"}
        </Code>
      </div>

      {/* Center align a <div> element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Center align a {"<div>"} element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If you have a <Code color="success">{"<div>"}</Code> element that is
          not 100% wide, and you want to center-align it, set the CSS margin
          property to auto.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<style>"} <br />
          {"div {"} <br />
          <p className="pl-2">{"  width:300px;"} </p>
          <p className="pl-2">{"margin:auto;"}</p>
          {"}"} <br />
          {"</style>"}
        </Code>
      </div>

      {/* Multiple <div> elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Multiple {"<div>"} elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can have many <Code color="success">{"<div>"}</Code> containers on
          the same page.
        </p>{" "}
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<div>"} <br />
          <p className="pl-2">{"<h2>London</h2>"}</p>
          <p className="pl-2">
            {"<p>London is the capital city of England.</p>"}
          </p>
          <p className="pl-2">
            {"<p>London has over 13 million inhabitants.</p>"}
          </p>
          {"</div>"} <br /> <br />
          {"<div>"} <br />
          <p className="pl-2">{"<h2>Oslo</h2>"}</p>
          <p className="pl-2">{"<p>Oslo is the capital city of Norway.</p>"}</p>
          <p className="pl-2">{"<p>Oslo has over 600.000 inhabitants.</p>"}</p>
          {"</div>"} <br /> <br />
          {"<div>"} <br />
          <p className="pl-2">{"<h2>Rome</h2>"}</p>
          <p className="pl-2">{"<p>Rome is the capital city of Italy.</p>"}</p>
          <p className="pl-2">
            {"<p>Rome has almost 3 million inhabitants.</p>"}
          </p>
          {"</div>"}
        </Code>
        <div className=" flex flex-col mt-5 gap-2">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
      </div>

      {/* Aligning <div> elements side by side */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Aligning {"<div>"} elements side by side
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          When building web pages, you often want to have two or more{" "}
          <Code color="success">{"<div>"}</Code> elements side by side, like
          this:
        </p>
        <div className=" flex  mt-3 w-full">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          There are different methods for aligning elements side by side, all
          include some CSS styling. We will look at the most common methods:
        </p>
      </div>

      {/* Float */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Float</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">{"float"}</Code> property was not
          originally meant to align <Code color="success">{"<div>"}</Code>{" "}
          elements side-by-side, but has been used for this purpose for many
          years. The CSS <Code color="success">{"float"}</Code> property is used
          for positioning and formatting content and allow elements float next
          to each other instead of on top of each other.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<style>"} <br />
          {".mycontainer {"}
          <p className="pl-2">{"width:100%;"}</p>
          <p className="pl-2">{"overflow:auto;"}</p>
          {"}"} <br />
          {".mycontainer div {"}
          <p className="pl-2">{"width:33%;"}</p>
          <p className="pl-2">{"float:left;"}</p>
          {"}"} <br />
          {"</style>"}
        </Code>
        <div className=" flex  mt-3 w-full">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm w-full">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
      </div>

      {/* Inline-block */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Inline-block</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If you change the <Code color="success">{"<div>"}</Code> element's
          <Code color="success">{"display"}</Code> property from{" "}
          <Code color="success">{"block"}</Code> to{" "}
          <Code color="success">{"inline-block"}</Code>, the{" "}
          <Code color="success">{"<div>"}</Code> elements will no longer add a
          line break before and after, and will be displayed side by side
          instead of on top of each other.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<style>"} <br />
          {"div {"}
          <p className="pl-2">{"  width: 30%;"}</p>
          <p className="pl-2">{"display: inline-block;"}</p>
          {"}"} <br />
          {"</style>"}
        </Code>
        <div className=" flex  mt-3 ">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm ">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm ">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm ">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
      </div>

      {/* Flex */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Flex</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS Flexbox Layout Module was introduced to make it easier to
          design flexible responsive layout structure without using float or
          positioning. To make the CSS flex method work, surround the{" "}
          <Code color="success">{"<div>"}</Code> elements with another{" "}
          <Code color="success">{"<div>"}</Code> element and give it the status
          as a flex container.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<style>"} <br />
          {".mycontainer {"}
          <p className="pl-2">{"display: flex;"}</p>
          {"}"} <br />
          {".mycontainer > div {"}
          <p className="pl-2">{"  width:33%;"}</p>
          {"}"} <br />
          {"</style>"}
        </Code>
        <div className=" flex  mt-3 ">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
      </div>

      {/* Grid */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Grid</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS Grid Layout Module offers a grid-based layout system, with
          rows and columns, making it easier to design web pages without having
          to use floats and positioning. Sounds almost the same as flex, but has
          the ability to define more than one row and position each row
          individually. The CSS grid method requires that you surround the{" "}
          <Code color="success">{"<div>"}</Code> elements with another{" "}
          <Code color="success">{"<div>"}</Code> element and give the status as
          a grid container, and you must specify the width of each column.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<style>"} <br />
          {".grid-container {"}
          <p className="pl-2">{"display: grid;"}</p>
          <p className="pl-2">{"grid-template-columns: 33% 33% 33%;"}</p>
          {"}"} <br />
          {"</style>"}
        </Code>
        <div className=" flex  mt-3 ">
          <div className="bg-yellow-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">London</h1>
            <p>London is the capital city of England.</p>
            <p>London has over 13 million inhabitants.</p>
          </div>
          <div className="bg-pink-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">Oslo</h1>
            <p>Oslo is the capital city of Norway.</p>
            <p>Oslo has over 600.000 inhabitants.</p>
          </div>
          <div className="bg-green-200 flex flex-col gap-3 p-4 rounded-sm w-[33%]">
            <h1 className="text-2xl">Rome</h1>
            <p>Rome is the capital city of Italy.</p>
            <p>Rome has almost 3 million inhabitants.</p>
          </div>
        </div>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/block-and-inline"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Block & Inline
          </Button>
        </Link>
        <Link href={"/doc/html/classes"}>
          <Button variant={"outline"} className="flex gap-3">
            Classes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
