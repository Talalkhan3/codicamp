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

const borderstyle = [
  {
    value: "dotted",
    description: "Defines a dotted border",
  },
  {
    value: "dashed ",
    description: "Defines a dashed border",
  },
  {
    value: "solid ",
    description: "Defines a solid border",
  },
  {
    value: "double",
    description: "Defines a double border",
  },
  {
    value: "groove ",
    description:
      "Defines a 3D grooved border. The effect depends on the border-color value",
  },
  {
    value: "ridge ",
    description:
      "Defines a 3D ridged border. The effect depends on the border-color value",
  },
  {
    value: "inset ",
    description:
      "Defines a 3D inset border. The effect depends on the border-color value",
  },
  {
    value: "outset ",
    description:
      " Defines a 3D outset border. The effect depends on the border-color value",
  },
  {
    value: "none ",
    description: "Defines no border",
  },
  {
    value: "hidden ",
    description: "Defines a hidden border",
  },
];

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
                Borders
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Borders */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Borders</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS border properties allow you to specify the style, width, and
          color of an element's border.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Border Style */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS Border Style
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">border-style</Code> property specifies what
          kind of border to display. <br /> <br />
          The following values are allowed:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-7">
          {borderstyle.map((key, index) => (
            <li className="flex items-center gap-2" key={index}>
              <Code color="success">{key.value}</Code>-<p>{key.description}</p>
            </li>
          ))}
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">border-style</Code> property can have from
          one to four values (for the top border, right border, bottom border,
          and the left border).
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Demonstration of the different border styles:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p.dotted {border-style: dotted;}"} <br />
          {"p.dashed {border-style: dashed;}"} <br />
          {"p.solid {border-style: solid;}"} <br />
          {"p.double {border-style: double;}"} <br />
          {"p.groove {border-style: groove;}"} <br />
          {"p.ridge {border-style: ridge;}"} <br />
          {"p.inset {border-style: inset;}"} <br />
          {"p.outset {border-style: outset;}"} <br />
          {"p.none {border-style: none;}"} <br />
          {"p.hidden {border-style: hidden;}"} <br />
          {"p.mix {border-style: dotted dashed solid double;}"} <br />
        </Code>
        <div className="mt-3 flex flex-col gap-2">
          <p className="border-3 border-dotted px-2 py-1 border-[#71717a]">
            A dotted border.
          </p>
          <p className="border-3 border-dashed px-2 py-1 border-[#71717a]">
            A dashed border.
          </p>
          <p className="border-3 border-solid px-2 py-1 border-[#71717a]">
            A solid border.
          </p>
          <p className="border-3 border-double px-2 py-1 border-[#71717a]">
            A double border.
          </p>
          <p className="border-3 border-groove px-2 py-1 border-[#71717a]">
            A groove border. The effect depends on the border-color value.
          </p>
          <p className="border-3 border-ridge px-2 py-1 border-[#71717a]">
            A ridge border. The effect depends on the border-color value.
          </p>
          <p className="border-3 border-inset px-2 py-1 border-[#71717a]">
            An inset border. The effect depends on the border-color value.
          </p>
          <p className="border-3 border-outset px-2 py-1 border-[#71717a]">
            An outset border. The effect depends on the border-color value.
          </p>
          <p className="border-3 border-none px-2 py-1 border-[#71717a]">
            No border.
          </p>
          <p className="border-3 border-hidden px-2 py-1 border-[#71717a]">
            A hidden border.
          </p>
        </div>
      </div>


      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/backgrounds"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Backgrounds
          </Button>
        </Link>
        <Link href={"/doc/css/margins"}>
          <Button variant={"outline"} className="flex gap-3">
            Margins <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
