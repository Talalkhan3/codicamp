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
                Tooltip
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Tooltip */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Tool tip</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Create tooltips with CSS.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Basic Tooltip */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Basic Tooltip
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Create a tooltip that appears when the user moves the mouse over an
          element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<style>"} <br />
          {"/* Tooltip container */"} <br />
          {".tooltip {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"display: inline-block;"}</p>
          <p className="pl-3">
            {
              "border-bottom: 1px dotted black; /* If you want dots under the hoverable text */"
            }
          </p>
          {"}"} <br /> <br />
          {"/* Tooltip text */"} <br />
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"visibility: hidden;"}</p>
          <p className="pl-3">{"width: 120px;"}</p>
          <p className="pl-3">{"background-color: black;"}</p>
          <p className="pl-3">{"color: #fff;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"padding: 5px 0;"}</p>
          <p className="pl-3">{"border-radius: 6px;"}</p>
          <p className="pl-3">
            {"/* Position the tooltip text - see examples below! */"}
          </p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"z-index: 1;"}</p>
          {"}"} <br /> <br />
          {
            "/* Show the tooltip text when you mouse over the tooltip container */"
          }{" "}
          <br />
          {".tooltip:hover .tooltiptext {"}
          <p className="pl-3">{"visibility: visible;"}</p>
          {"}"} <br />
          {"</style>"} <br /> <br />
          {`<div class="tooltip">Hover over me`}
          <p className="pl-3">{`<span class="tooltiptext">Tooltip text</span>`}</p>
          {"</div>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a tooltip, use a container element like{" "}
          <Code color="success">{"<div>"}</Code> with the class{" "}
          <Code color="success">tooltip</Code>, and place the tooltip text
          inside an inline element like <Code color="success">{"<span>"}</Code>{" "}
          with the class <Code color="success">tooltiptext</Code>. The{" "}
          <Code color="success">tooltip</Code> class applies{" "}
          <Code color="success">position: relative</Code> to position the
          tooltip text. The <Code color="success">tooltiptext</Code> class holds
          the hidden tooltip text, styled with a 120px width, black background,
          white centered text, 5px vertical padding, and rounded corners using
          the <Code color="success">border-radius</Code> property. The text
          becomes visible when the user hovers over the{" "}
          <Code color="success">tooltip</Code> element, achieved using the{" "}
          <Code color="success">hover: </Code>
          selector.
        </p>
      </div>

      {/* Positioning Tooltips */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Positioning Tooltips
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In this example, the tooltip is placed to the right of the "hoverable"
          text . Also note that <Code color="success">top:-5px</Code> is used to
          place it in the middle of its container element. We use the number 5
          because the tooltip text has a top and bottom padding of 5px. If you
          increase its padding, also increase the value of the{" "}
          <Code color="success">top</Code> property to ensure that it stays in
          the middle (if this is something you want). The same applies if you
          want the tooltip placed to the left.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"top: -5px;"}</p>
          <p className="pl-3">{"left: 105%;"}</p>
          {"}"}
        </Code>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"top: -5px;"}</p>
          <p className="pl-3">{"right: 105%;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you want the tooltip to appear on top or on the bottom, see
          examples below. Note that we use the{" "}
          <Code color="success">margin-left</Code> property with a value of
          minus 60 pixels. This is to center the tooltip above/below the
          hoverable text. It is set to the half of the tooltip's width
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"width: 120px;"}</p>
          <p className="pl-3">{"bottom: 100%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"margin-left: -60px;"}</p> /* Use half of the
          width (120/2 = 60), to center the tooltip */
          {"}"}
        </Code>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"width: 120px;"}</p>
          <p className="pl-3">{"top: 100%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"margin-left: -60px;"}</p> /* Use half of the
          width (120/2 = 60), to center the tooltip */
          {"}"}
        </Code>
      </div>

      {/* Tooltip Arrows */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Tooltip Arrows
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create an arrow that should appear from a specific side of the
          tooltip, add "empty" content after tooltip, with the pseudo-element
          class <Code color="success">::after</Code> together with the content
          property. The arrow itself is created using borders. This will make
          the tooltip look like a speech bubble.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext::after {"}
          <p className="pl-3">{`content: " ";`}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 100%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"margin-left: -5px;"}</p>
          <p className="pl-3">{"border-width: 5px;"}</p>
          <p className="pl-3">{"border-style: solid;"}</p>
          <p className="pl-3">
            {"border-color: black transparent transparent transparent;"}
          </p>
          {"}"}
        </Code>

        <p className="text-[16px] text-[#71717a] mt-3">
          To position an arrow inside a tooltip, set{" "}
          <Code color="success">top: 100%</Code> to place the arrow at the
          bottom of the tooltip and <Code color="success">left: 50%</Code> to
          center it horizontally. Use the{" "}
          <Code color="success">border-width</Code> property to define the
          arrow's size, and ensure the <Code color="success">margin-left</Code>{" "}
          matches half the arrow's width to keep it centered. The{" "}
          <Code color="success">border-color</Code> property transforms the
          content into an arrow by setting one side (e.g., the top) to black and
          the others to transparent; if all sides were black, it would form a
          square. To create an arrow at the top of the tooltip, adjust the
          <Code color="success">border-color</Code> to make the bottom border
          black instead.
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext::after {"}
          <p className="pl-3">{`content: " ";`}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"bottom: 100%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"margin-left: -5px;"}</p>
          <p className="pl-3">{"border-width: 5px;"}</p>
          <p className="pl-3">{"border-style: solid;"}</p>
          <p className="pl-3">
            {"border-color: transparent transparent black transparent;"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example demonstrates how to add an arrow to the left of the
          tooltip:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext::after {"}
          <p className="pl-3">{`content: " ";`}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 100%;"}</p>
          <p className="pl-3">{"right: 50%;"}</p>
          <p className="pl-3">{"margin-top: -5px;"}</p>
          <p className="pl-3">{"border-width: 5px;"}</p>
          <p className="pl-3">{"border-style: solid;"}</p>
          <p className="pl-3">
            {"border-color: transparent black transparent transparent;"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example demonstrates how to add an arrow to the right of the
          tooltip:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext::after {"}
          <p className="pl-3">{`content: " ";`}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 100%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"margin-top: -5px;"}</p>
          <p className="pl-3">{"border-width: 5px;"}</p>
          <p className="pl-3">{"border-style: solid;"}</p>
          <p className="pl-3">
            {"border-color: transparent transparent transparent black;"}
          </p>
          {"}"}
        </Code>
      </div>

      {/* Fade In Tooltips (Animation) */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Fade In Tooltips
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you want to fade in the tooltip text when it is about to be
          visible, you can use the CSS <Code color="success">transition</Code>{" "}
          property together with the
          <Code color="success">opacity</Code> property, and go from being
          completely invisible to 100% visible, in a number of specified seconds
          (1 second in our example):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip .tooltiptext {"}
          <p className="pl-3">{"opacity: 0;"}</p>
          <p className="pl-3">{"transition: opacity 1s;"}</p>
          {"}"} <br /> <br />
          {".tooltip:hover .tooltiptext {"}
          <p className="pl-3">{"opacity: 1;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/animations"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Animations
          </Button>
        </Link>
        <Link href={"/doc/css/image-centering"}>
          <Button variant={"outline"} className="flex gap-3">
            Image Centering <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
