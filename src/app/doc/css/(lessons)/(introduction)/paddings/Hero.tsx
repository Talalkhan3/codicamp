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
                Padding
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Padding */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Padding</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Padding is used to create space around an element's content, inside of
          any defined borders.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Padding */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Padding
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">padding</Code> properties are used to
          generate space around an element's content, inside of any defined
          borders. With CSS, you have full control over the padding. There are
          properties for setting the padding for each side of an element (top,
          right, bottom, and left).
        </p>
      </div>

      {/* Padding - Individual Sides */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Padding - Individual Sides
        </h1>
        className="text-[30px] text-[#09090b] font-bold underline
        underline-offset-4 decoration-green-400 decoration-2"
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS has properties for specifying the padding for each side of an
          element:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">padding-top</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">padding-right</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">padding-bottom</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">padding-left</Code>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          All the margin properties can have the following values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              length - specifies a padding in px, pt, cm, etc.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              % - specifies a padding in % of the width of the containing
              element
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              inherit - specifies that the padding should be inherited from the
              parent element
            </p>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"} <br />
          <p className="pl-3">{"padding-top: 100px;"} </p>
          <p className="pl-3">{"padding-bottom: 100px;"}</p>
          <p className="pl-3">{"padding-right: 150px;"}</p>
          <p className="pl-3">{"padding-left: 80px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Padding - Shorthand Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Padding - Shorthand Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To shorten the code, it is possible to specify all the padding
          properties in one property. The <Code color="success">padding </Code>{" "}
          property is a shorthand property for the following individual padding
          properties:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">margin-top</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">margin-right</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">margin-bottom</Code>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <Code color="success">margin-left</Code>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          So, here is how it works:
          <br />
          <br />
          If the <Code color="success">padding</Code> property has four values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{"padding: 25px 50px 75px 100px;"}</p>
          {"}"}
        </Code>

        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">padding</Code> property has three values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{" padding: 25px 50px 75px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">padding</Code> property has two values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{" padding: 25px 50px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">padding</Code> property has one values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{"padding: 25px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Padding and Element Width */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Padding and Element Width
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">width</Code> property specifies the
          width of the element's content area. The content area is the portion
          inside the padding, border, and margin of an element. <br /> <br />{" "}
          So, if an element has a specified width, the padding added to that
          element will be added to the total width of the element. This is often
          an undesirable result.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"} <br />
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"padding: 25px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To keep the width at 300px, no matter the amount of padding, you can
          use the box-sizing property. This causes the element to maintain its
          actual width; if you increase the padding, the available content space
          will decrease.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"} <br />
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"padding: 25px;"}</p>
          <p className="pl-3">{"box-sizing: border-box;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/margins"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Margins
          </Button>
        </Link>
        <Link href={"/doc/css/height-and-width"}>
          <Button variant={"outline"} className="flex gap-3">
            Height & Width <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
