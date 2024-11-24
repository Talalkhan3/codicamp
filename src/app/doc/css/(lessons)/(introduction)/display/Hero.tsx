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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const displayvalues = [
  {
    value: "inline",
    desc: "Displays an element as an inline element",
  },
  {
    value: "block",
    desc: "Displays an element as a block element",
  },
  {
    value: "contents",
    desc: "Makes the container disappear, making the child elements children of the element the next level up in the DOM",
  },
  {
    value: "flex",
    desc: "Displays an element as a block-level flex container",
  },
  {
    value: "grid",
    desc: "Displays an element as a block-level grid container",
  },
  {
    value: "inline-block",
    desc: "	Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values",
  },
  {
    value: "inline-flex",
    desc: "Displays an element as an inline-level flex container",
  },
  {
    value: "inline-grid",
    desc: "Displays an element as an inline-level grid container",
  },
  {
    value: "inline-table",
    desc: "The element is displayed as an inline-level table",
  },
  {
    value: "list-item",
    desc: "Let the element behave like a <li> element",
  },
  {
    value: "run-in	",
    desc: "	Displays an element as either block or inline, depending on context",
  },
  {
    value: "table	",
    desc: "		Let the element behave like a <table> element",
  },
  {
    value: "table-caption",
    desc: "	Let the element behave like a <caption> element",
  },
  {
    value: "table-column-group",
    desc: "Let the element behave like a <colgroup> element",
  },
  {
    value: "table-header-group",
    desc: "Let the element behave like a <thead> element",
  },
  {
    value: "table-footer-group",
    desc: "Let the element behave like a <tfoot> element",
  },
  {
    value: "table-row-group",
    desc: "Let the element behave like a <tbody> element",
  },
  {
    value: "table-cell",
    desc: "Let the element behave like a <td> element",
  },
  {
    value: "table-column",
    desc: "Let the element behave like a <col> element",
  },
  {
    value: "table-row",
    desc: "	Let the element behave like a <tr> element",
  },
  {
    value: "none",
    desc: "The element is completely removed",
  },
  {
    value: "initial",
    desc: "	Sets this property to its default value",
  },
  {
    value: "inherit",
    desc: "	Inherits this property from its parent element",
  },
];

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
                Display
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Layout - The display Property */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Layout - The display Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The <Code color="success">display</Code> property is the most
          important CSS property for controlling layout.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The display Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The display Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">display</Code> property is used to specify
          how an element is shown on a web page. Every HTML element has a
          default display value, depending on what type of element it is. The
          default display value for most elements is block or inline. The{" "}
          <Code color="success">display</Code> property is used to change the
          default display behavior of HTML elements.
        </p>
      </div>

      {/* Block-level Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Block-level Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A block-level element ALWAYS starts on a new line and takes up the
          full width available (stretches out to the left and right as far as it
          can).
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Examples of block-level elements:
        </p>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
          <Code color="success">{"<div>"}</Code>
          <Code color="success">{"<h1> - <h6>"}</Code>
          <Code color="success">{"<p>"}</Code>
          <Code color="success">{"<form>"}</Code>
          <Code color="success">{"<header>"}</Code>
          <Code color="success">{"<footer>"}</Code>
          <Code color="success">{"<section>"}</Code>
        </div>
      </div>

      {/* Inline Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Inline Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An inline element DOES NOT start on a new line and only takes up as
          much width as necessary.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Examples of inline elements:
        </p>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
          <Code color="success">{"<span>"}</Code>
          <Code color="success">{"<a>"}</Code>
          <Code color="success">{"<img>"}</Code>
        </div>
      </div>

      {/* The display Property Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The display Property Values
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">display</Code> property has many values:
        </p>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="max-lg:w-[170px] w-[230px]">
                Value
              </TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayvalues.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.value}</TableCell>
                <TableCell className=" text-[#71717a]">{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Display: none; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Display: none;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">display: none;</Code> is commonly used with
          JavaScript to hide and show elements without deleting and recreating
          them. Take a look at our last example on this page if you want to know
          how this can be achieved.
        </p>
      </div>

      {/* Override The Default Display Value */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Override The Default Display Value
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          As mentioned, every element has a default display value. However, you
          can override this. Changing an inline element to a block element, or
          vice versa, can be useful for making the page look a specific way, and
          still follow the web standards. A common example is making inline{" "}
          <Code color="success">{"<li>"}</Code> elements for horizontal menus:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"li {"}
          <p className="p-3">{"display: inline;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example displays <Code color="success">{"<span>"}</Code>{" "}
          elements as block elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"span {"}
          <p className="p-3">{"display: block;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example displays <Code color="success">{"<a>"}</Code>
          elements as block elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a {"}
          <p className="p-3">{"display: block;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Hide an Element  */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Hide an Element{" "}
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Hiding an element can be done by setting the{" "}
          <Code color="success">display</Code> property to{" "}
          <Code color="success">none</Code>. The element will be hidden, and the
          page will be displayed as if the element is not there:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1.hidden {"}
          <p className="pl-3">{"display: none;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">visibility:hidden;</Code> also hides an element.{" "}
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          However, the element will still take up the same space as before. The
          element will be hidden, but still affect the layout: Example
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1.hidden {"}
          <p className="pl-3">{"visibility: hidden;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/tables"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Tables
          </Button>
        </Link>
        <Link href={"/doc/css/max-width"}>
          <Button variant={"outline"} className="flex gap-3">
            Max Width <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
