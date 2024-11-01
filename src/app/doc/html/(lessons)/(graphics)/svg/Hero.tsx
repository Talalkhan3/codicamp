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
import { color } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG Graphics",
};

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
            <BreadcrumbLink href="/doc/html">HTML</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                SVG
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* SVG Graphics */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">SVG Graphics</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          SVG graphics are scalable, and do not lose any quality if they are
          zoomed or resized:
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is SVG? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">What is SVG?</h1>
        <Separator />
        <ul className="flex flex-col gap-1 mt-5 ml-7">
          <li className="flex items-center gap-2 text-[16px] text-[#71717a]">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            SVG stands for Scalable Vector Graphics
          </li>
          <li className="flex items-center gap-2 text-[16px] text-[#71717a]">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            SVG is used to define vector-based graphics for the Web
          </li>
          <li className="flex items-center gap-2 text-[16px] text-[#71717a]">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            SVG defines graphics in XML format
          </li>
          <li className="flex items-center gap-2 text-[16px] text-[#71717a]">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            Each element and attribute in SVG files can be animated
          </li>
          <li className="flex items-center gap-2 text-[16px] text-[#71717a]">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            SVG integrates with other standards, such as CSS, DOM, XSL and
            JavaScript
          </li>
        </ul>
      </div>

      {/* The <svg> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<svg>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<svg>"}</Code> element is a container
          for SVG graphics. SVG has several methods for drawing paths,
          rectangles, circles, polygons, text, and much more
        </p>
      </div>

      {/* SVG Circle */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">SVG Circle</h1>
        <Separator />
        <svg width="100" height="100" className="m-2">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="green"
            stroke-width="4"
            fill="yellow"
          />
        </svg>

        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<body>"} <br /> <br />
          {`<svg width="100" height="100">`}
          <p className="pl-3">{`<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />`}</p>
          {"</svg>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* SVG Rectangle */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">SVG Rectangle</h1>
        <Separator />
        <svg width="400" height="120" className="m-2">
          <rect
            x="10"
            y="10"
            width="200"
            height="100"
            stroke="red"
            stroke-width="6"
            fill="blue"
          />
        </svg>

        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<svg width="100" height="100">`}
          <p className="pl-3">{`<rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="blue" />`}</p>
          {"</svg>"}
        </Code>
      </div>

      {/* Differences Between SVG and Canvas */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Differences Between SVG and Canvas
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          SVG is a language for describing 2D graphics in XML, while Canvas
          draws 2D graphics, on the fly (with JavaScript). SVG is XML based,
          which means that every element is available within the SVG DOM. You
          can attach JavaScript event handlers to SVG graphics. In SVG, each
          drawn shape is remembered as an object. If attributes of an SVG object
          are changed, the browser can automatically re-render the shape. Canvas
          is rendered pixel by pixel. In canvas, once the graphic is drawn, it
          is forgotten by the browser. If its position should be changed, the
          entire scene needs to be redrawn, including any objects that might
          have been covered by the graphic.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/canvas"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Canvas
          </Button>
        </Link>
        <Link href={"/doc/html/media"}>
          <Button className="flex gap-3">
            Media <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
