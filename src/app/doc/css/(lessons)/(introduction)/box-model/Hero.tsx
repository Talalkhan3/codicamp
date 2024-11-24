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
                Box Model
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Box Model */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Box Model</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          All HTML elements can be considered as boxes.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The CSS Box Model */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The CSS Box Model
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In CSS, the term "box model" is used when talking about design and
          layout. The CSS box model is essentially a box that wraps around every
          HTML element. It consists of: content, padding, borders and margins.
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">Content </Code> - The content of the box,
              where text and images appear
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">Padding </Code> - Clears an area around the
              content. The padding is transparent px, cm, etc.
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">Border </Code> - A border that goes around
              the padding and content
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">Margin </Code> - Clears an area outside the
              border. The margin is transparent
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The box model allows us to add a border around elements, and to define
          space between elements.{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"border: 15px solid green;"}</p>
          <p className="pl-3">{"padding: 50px;"}</p>
          <p className="pl-3">{"margin: 20px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Width and Height of an Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Width and Height of an Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In order to set the width and height of an element correctly in all
          browsers, you need to know how the box model works.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 320px;"}</p>
          <p className="pl-3">{"height: 50px;"}</p>
          <p className="pl-3">{"padding: 10px;"}</p>
          <p className="pl-3">{"border: 5px solid gray;"}</p>
          <p className="pl-3">{"margin: 0;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is the calculation:
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          320px (width of content area) <br />
          + 20px (left padding + right padding) <br />
          + 10px (left border + right border) <br />
          = 350px (total width) <br /> <br />
          50px (height of content area) <br />
          + 20px (top padding + bottom padding) <br />
          + 10px (top border + bottom border) <br />= 80px (total height)
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The total width of an element should be calculated like this: <br />
          Total element width = width + left padding + right padding + left
          border + right border <br />
          The total height of an element should be calculated like this: <br />
          Total element height = height + top padding + bottom padding + top
          border + bottom border
        </p>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/height-and-width"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Height & Width
          </Button>
        </Link>
        <Link href={"/doc/css/outline"}>
          <Button variant={"outline"} className="flex gap-3">
            Outline <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
