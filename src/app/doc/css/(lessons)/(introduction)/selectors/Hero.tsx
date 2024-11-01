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
                Selectors
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* Selectors */}
      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Selectors</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          A CSS selector selects the HTML element(s) you want to style.
        </p>
        <Separator className="mt-5" />
      </div>
      {/* CSS Selectors */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">CSS Selectors</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS selectors are tools used to target and style HTML elements on a
          webpage, organized into five main categories. Simple selectors select
          elements based on their tag name, ID, or class, while combinator
          selectors target elements based on relationships like parent-child or
          sibling connections. Pseudo-class selectors apply styles according to
          a specific state of an element, such as{" "}
          <Code color="success">{":hover"}</Code>, and pseudo-element selectors
          style particular parts of an element, like the first line. Lastly,
          attribute selectors allow you to select elements based on an attribute
          or its specific value. These basic selectors form the foundation for
          styling elements in CSS.
        </p>
      </div>
      {/* CSS element Selector */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS element Selector
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The element selector selects HTML elements based on the element name.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {" p {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
      </div>
      {/* CSS id Selector */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS id Selector
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">id</Code> selector targets a specific HTML
          element using its unique id attribute. Since each id is unique within
          a page, the id selector allows you to style a single, specific
          element. To use it, write a hash symbol (#) followed by the element's
          id.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"#para1 {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
      </div>
      {/* CSS class Selector */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS class Selector
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">class</Code> selector targets HTML elements
          that have a specific class attribute. To use it, write a period (.)
          followed by the class name to apply styles to all elements with that
          class.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {".center {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can also specify that only specific HTML elements should be
          affected by a class.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p.center {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"color: red;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML elements can also refer to more than one class.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<p class="center large">This paragraph refers to two classes.</p>`}
        </Code>
      </div>
      {/* The CSS Universal Selector */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The CSS Universal Selector
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The universal selector (*) selects all HTML elements on the page.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"* {"}
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"color: blue;"}</p>
          {"}"}
        </Code>
      </div>
      {/* CSS Grouping Selector */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Grouping Selector
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The grouping selector selects all the HTML elements with the same
          style definitions. Look at the following CSS code (the h1, h2, and p
          elements have the same style definitions):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"h1 {"}
          <p className="pl-4">{"text-align: center;"}</p>
          <p className="pl-4">{"color: red;"}</p>
          {"}"} <br /> <br />
          {"h2 {"}
          <p className="pl-4">{"text-align: center;"}</p>
          <p className="pl-4">{"color: red;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-4">{"text-align: center;"}</p>
          <p className="pl-4">{"color: red;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          It will be better to group the selectors, to minimize the code.
          <br />
          To group selectors, separate each selector with a comma.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"h1, h2, p {"}
          <p className="pl-4">{"text-align: center;"}</p>
          <p className="pl-4">{"color: red;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS Simple Selectors */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Simple Selectors
        </h1>
        <Separator />
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Selectors</TableHead>
              <TableHead>Example</TableHead>
              <TableHead>Example description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#id</TableCell>
              <TableCell className=" text-[#71717a]">#firstname</TableCell>
              <TableCell className=" text-[#71717a]">
                Selects the element with id="firstname"
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">.class</TableCell>
              <TableCell className=" text-[#71717a]">intro</TableCell>
              <TableCell className=" text-[#71717a]">
                Selects all elements with class="intro"
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">*</TableCell>
              <TableCell className=" text-[#71717a]">*</TableCell>
              <TableCell className=" text-[#71717a]">
                {" "}
                Selects all elements
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">element</TableCell>
              <TableCell className=" text-[#71717a]">p</TableCell>
              <TableCell className=" text-[#71717a]">
                {" "}
                Selects all {"<p>"} elements
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/syntax"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Syntax
          </Button>
        </Link>
        <Link href={"/doc/css/how-to"}>
          <Button variant={"outline"} className="flex gap-3">
            How to <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
