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
                Lists
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Lists */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Lists</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Lists in HTML are structures for organizing content.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* HTML Lists and CSS List Properties */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          HTML Lists and CSS List Properties
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In HTML, there are two main types of lists:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">unordered lists ({"<ul>"})</Code> - the list
              items are marked with bullets
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">ordered lists ({"<ol>"})</Code> - the list
              items are marked with numbers or letters
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS list properties allow you to:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              Set different list item markers for ordered lists
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              Set different list item markers for unordered lists
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              Set an image as the list item marker
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              Add background colors to lists and list items
            </p>
          </li>
        </ul>
      </div>

      {/* Different List Item Markers */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Different List Item Markers
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">list-style-type</Code> property specifies
          the type of list item marker. The following example shows some of the
          available list item markers:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ul.a {"}
          <p className="pl-3">{"list-style-type: circle;"}</p>
          {"}"} <br /> <br />
          {"ul.b {"}
          <p className="pl-3">{"list-style-type: square;"}</p>
          {"}"} <br /> <br />
          {"ol.c {"}
          <p className="pl-3">{"list-style-type: upper-roman;"}</p>
          {"}"} <br /> <br />
          {"ol.d {"}
          <p className="pl-3">{"list-style-type: lower-alpha;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Some of the values are for unordered lists, and some for ordered
          lists.
        </p>
      </div>

      {/* An Image as The List Item Marker */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          An Image as The List Item Marker
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">list-style-image</Code> property specifies
          an image as the list item marker:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" ul {"}
          <p className="pl-3">{`list-style-image: url('sqpurple.gif');`}</p>
          {"}"}
        </Code>
      </div>

      {/* Position The List Item Markers */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Position The List Item Markers
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">list-style-position</Code> property
          specifies the position of the list-item markers (bullet points).
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">list-style-position: outside;</Code> means that
          the bullet points will be outside the list item. The start of each
          line of a list item will be aligned vertically.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">list-style-position: inside;</Code> means that
          the bullet points will be inside the list item. As it is part of the
          list item, it will be part of the text and push the text at the start
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ul.a {"}
          <p className="pl-3">{"list-style-position: outside;"}</p>
          {"}"} <br /> <br />
          {"ul.b {"}
          <p className="pl-3">{"list-style-position: inside;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Remove Default Settings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Remove Default Settings
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          The <Code color="success">list-style-type:none</Code> property can
          also be used to remove the markers/bullets. Note that the list also
          has default margin and padding. To remove this, add{" "}
          <Code color="success">margin:0</Code> and{" "}
          <Code color="success">padding:0</Code> to {"<ul>"} or {"<ol>"}:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ul {"}
          <p className="pl-3">{"list-style-type: none;"}</p>
          <p className="pl-3">{"margin: 0;"}</p>
          <p className="pl-3">{"padding: 0;"}</p>
          {"}"}
        </Code>
      </div>

      {/* List - Shorthand property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          List - Shorthand property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">list-style</Code> property is a shorthand
          property. It is used to set all the list properties in one
          declaration:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ul {"}
          <p className="pl-3">{`list-style: square inside url("sqpurple.gif");`}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          When using the shorthand property, the order of the property values
          are:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">list-style-type</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">list-style-position</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">list-style-image</Code>
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          If one of the property values above is missing, the default value for
          the missing property will be inserted, if any.
        </p>
      </div>

      {/* Styling List With Colors */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling List With Colors
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          We can also style lists with colors, to make them look a little more
          interesting. Anything added to the {"<ol>"} or {"<ul>"} tag, affects
          the entire list, while properties added to the {"<li>"} tag will
          affect the individual list items:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ol {"}
          <p className="pl-3">{"background: #ff9999;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          {"}"} <br /> <br />
          {"ul {"}
          <p className="pl-3">{"background: #3399ff;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          {"}"} <br /> <br />
          {"ol li {"}
          <p className="pl-3">{"background: #ffe5e5;"}</p>
          <p className="pl-3">{"color: darkred;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"margin-left: 35px;"}</p>
          {"}"} <br /> <br />
          {"ul li {"}
          <p className="pl-3">{"background: #cce5ff;"}</p>
          <p className="pl-3">{"color: darkblue;"}</p>
          <p className="pl-3">{"margin: 5px;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/links"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Links
          </Button>
        </Link>
        <Link href={"/doc/css/tables"}>
          <Button variant={"outline"} className="flex gap-3">
            Tables <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
