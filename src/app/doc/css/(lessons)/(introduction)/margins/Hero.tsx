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
import { ul } from "framer-motion/client";

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
                Margins
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Margins */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Margins</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Margins are used to create space around elements, outside of any
          defined borders.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Margins */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">CSS Margins</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">margin</Code> properties are used to
          create space around elements, outside of any defined borders. With
          CSS, you have full control over the margins. There are properties for
          setting the margin for each side of an element (top, right, bottom,
          and left).
        </p>
      </div>

      {/* Margin - Individual Sides */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Margin - Individual Sides
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS has properties for specifying the margin for each side of an
          element:
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
          All the margin properties can have the following values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              auto - the browser calculates the margin
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              length - specifies a margin in px, pt, cm, etc.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              % - specifies a margin in % of the width of the containing element
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              inherit - specifies that the margin should be inherited from the
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
          <p className="pl-3">{"margin-top: 100px;"} </p>
          <p className="pl-3">{"margin-bottom: 100px;"}</p>
          <p className="pl-3">{"margin-right: 150px;"}</p>
          <p className="pl-3">{"margin-left: 80px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Margin - Shorthand Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Margin - Shorthand Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To shorten the code, it is possible to specify all the margin
          properties in one property. The <Code color="success">margin</Code>{" "}
          property is a shorthand property for the following individual margin
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
          If the <Code color="success">margin</Code> property has four values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{"margin: 25px 50px 75px 100px;"}</p>
          {"}"}
        </Code>

        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">margin</Code> property has three values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{" margin: 25px 50px 75px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">margin</Code> property has two values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{" margin: 25px 50px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">margin</Code> property has one values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-3">{"margin: 25px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The auto Value */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">The auto Value</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can set the margin property to <Code color="success">auto</Code>{" "}
          to horizontally center the element within its container. The element
          will then take up the specified width, and the remaining space will be
          split equally between the left and right margins.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"} <br />
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"margin: auto;"}</p>
          <p className="pl-3">{"border: 1px solid red;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The inherit Value */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The inherit Value
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          This example lets the left margin of the{" "}
          <Code color="success">{`<p class="ex1">`}</Code> element be inherited
          from the parent element {"(<div>)"}:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"border: 1px solid red;"}</p>
          <p className="pl-3">{"margin-left: 100px;"}</p>
          {"}"} <br />
          {"p.ex1 {"}
          <p className="pl-3">{"margin-left: inherit;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/borders"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Borders
          </Button>
        </Link>
        <Link href={"/doc/css/paddings"}>
          <Button variant={"outline"} className="flex gap-3">
            Paddings <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
