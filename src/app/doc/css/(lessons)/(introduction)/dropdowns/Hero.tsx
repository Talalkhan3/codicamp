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
                Dropdowns
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Dropdowns  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Dropdowns</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Create a hoverable dropdown with CSS.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Basic Dropdown */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Basic Dropdown
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Create a dropdown box that appears when the user moves the mouse over
          an element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<style>"} <br />
          {".dropdown {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"display: inline-block;"}</p>
          {"}"} <br /> <br />
          {".dropdown-content {"}
          <p className="pl-3">{"display: none;"}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"background-color: #f9f9f9;"}</p>
          <p className="pl-3">{"min-width: 160px;"}</p>
          <p className="pl-3">
            {"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);"}
          </p>
          <p className="pl-3">{"padding: 12px 16px;"}</p>
          <p className="pl-3">{"z-index: 1;"}</p>
          {"}"} <br /> <br />
          {".dropdown:hover .dropdown-content {"}
          <p className="pl-3">{"display: block;"}</p>
          {"}"} <br />
          {"</style>"} <br /> <br />
          {`<div class="dropdown">`}
          <p className="pl-3">{"<span>Mouse over me</span>"}</p>
          <p className="pl-3">{`<div class="dropdown-content">`}</p>
          <p className="pl-5">{"<p>Hello World!</p>"}</p>
          <p className="pl-3">{"</div>"}</p>
          {"</div>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a dropdown menu, you can use any interactive element, such
          as a <Code color="success">{"<span>"}</Code> or a{" "}
          <Code color="success">{"<button>"}</Code>, to trigger the dropdown.
          Use a container element like a <Code color="success">{"<div>"}</Code>{" "}
          to hold the dropdown content, and add any desired elements inside.
          Wrap these in another <Code color="success">{"<div>"}</Code> to
          position the dropdown content properly with CSS.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the CSS, the <Code color="success">.dropdown</Code> class should
          use <Code color="success">position: relative</Code> to ensure the
          dropdown content can be placed directly below the trigger using{" "}
          <Code color="success">position: absolute</Code>. The{" "}
          <Code color="success">.dropdown-content</Code>
          class defines the dropdown menu, which is initially hidden and
          displayed on hover. You can customize its appearance by setting
          properties like <Code color="success">min-width:</Code> 160px or
          adjusting the width to 100% to match the dropdown button, with{" "}
          <Code color="success">overflow: auto</Code> for scrolling on smaller
          screens. Instead of a border, the box-shadow property is applied to
          give the dropdown a "card-like" appearance. Finally, the{" "}
          <Code color="success">:hover</Code>
          selector reveals the dropdown menu when the user hovers over the
          trigger.
        </p>
      </div>

      {/* Dropdown Menu */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Dropdown Menu
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example is similar to the previous one, except that we add links
          inside the dropdown box and style them to fit a styled dropdown
          button:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<style>"} <br />
          {"/* Style The Dropdown Button */"} <br />
          {".dropbtn {"}
          <p className="pl-3">{"background-color: #4CAF50;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          <p className="pl-3">{"padding: 16px;"}</p>
          <p className="pl-3">{"font-size: 16px;"}</p>
          <p className="pl-3">{"border: none;"}</p>
          <p className="pl-3">{"cursor: pointer;"}</p>
          {"}"} <br /> <br />
          {
            "/* The container <div> - needed to position the dropdown content */"
          }{" "}
          <br />
          {".dropdown {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"display: inline-block;"}</p>
          {"}"} <br /> <br />
          {"/* Dropdown Content (Hidden by Default) */"} <br />
          {".dropdown-content {"}
          <p className="pl-3">{"display: none;"}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"background-color: #f9f9f9;"}</p>
          <p className="pl-3">{"min-width: 160px;"}</p>
          <p className="pl-3">
            {"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);"}
          </p>
          <p className="pl-3">{"z-index: 1;"}</p>
          {"}"} <br /> <br />
          {"/* Links inside the dropdown */"} <br />
          {".dropdown-content a {"}
          <p className="pl-3">{"color: black;"}</p>
          <p className="pl-3">{"padding: 12px 16px;"}</p>
          <p className="pl-3">{"text-decoration: none;"}</p>
          <p className="pl-3">{"display: block;"}</p>
          {"}"} <br /> <br />
          {"/* Change color of dropdown links on hover */"} <br />
          {".dropdown-content a:hover {background-color: #f1f1f1}"} <br />{" "}
          <br />
          {"/* Show the dropdown menu on hover */"} <br />
          {".dropdown:hover .dropdown-content {"}
          <p className="pl-3">{"display: block;"}</p>
          {"}"} <br /> <br />
          {
            "/* Change the background color of the dropdown button when the dropdown content is shown */"
          }{" "}
          <br />
          {".dropdown:hover .dropbtn {"}
          <p className="pl-3">{"background-color: #3e8e41;"}</p>
          {"}"} <br />
          {"</style>"} <br /> <br />
          {`<div class="dropdown">`}
          <p className="pl-3">{`<button class="dropbtn">Dropdown</button>`}</p>
          <p className="pl-3">{`<div class="dropdown-content">`}</p>
          <p className="pl-7">{`<a href="#">Link 1</a>`}</p>
          <p className="pl-7">{`<a href="#">Link 2</a>`}</p>
          <p className="pl-7">{`<a href="#">Link 3</a>`}</p>
          <p className="pl-3">{"</div>"}</p>
          {"</div>"}
        </Code>
      </div>

      {/* Right-aligned Dropdown Content */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Right-aligned Dropdown Content
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you want the dropdown menu to go from right to left, instead of
          left to right, add <Code color="success">right: 0;</Code>
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".dropdown-content {"}
          <p className="pl-3">{"right: 0;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/navigation-bar"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Navigation Bar
          </Button>
        </Link>
        <Link href={"/doc/css/image-gallery"}>
          <Button variant={"outline"} className="flex gap-3">
            Image Gallery <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
