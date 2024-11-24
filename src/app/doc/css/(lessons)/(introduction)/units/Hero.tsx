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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const absLenghts = [
  {
    unit: "cm",
    desc: "centimeters",
  },
  {
    unit: "mm",
    desc: "	millimeters",
  },
  {
    unit: "in",
    desc: "inches (1in = 96px = 2.54cm)",
  },
  {
    unit: "px *",
    desc: "pixels (1px = 1/96th of 1in)",
  },
  {
    unit: "pt",
    desc: "	points (1pt = 1/72 of 1in)",
  },
  {
    unit: "pc",
    desc: "pc",
  },
];
const relaLenghts = [
  {
    unit: "em",
    desc: "Relative to the font-size of the element (2em means 2 times the size of the current font)",
  },
  {
    unit: "ex",
    desc: "	Relative to the x-height of the current font (rarely used)",
  },
  {
    unit: "ch",
    desc: `Relative to width of the "0" (zero)`,
  },
  {
    unit: "rem",
    desc: "Relative to font-size of the root element",
  },
  {
    unit: "vw",
    desc: "	Relative to 1% of the width of the viewport*",
  },
  {
    unit: "vh",
    desc: "	Relative to 1% of the height of the viewport*",
  },
  {
    unit: "vmin",
    desc: "Relative to 1% of viewport's* smaller dimension",
  },
  {
    unit: "vmax",
    desc: "	Relative to 1% of viewport's* larger dimension",
  },
  {
    unit: "%",
    desc: "	Relative to the parent element",
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
                Units
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Units */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold"> Units</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Units in CSS define the measurement of values for properties like
          width, height, margin, and font-size, using absolute units (e.g.,
          <Code color="success">px</Code>, <Code color="success">cm</Code>) or
          relative units (e.g., <Code color="success">%</Code>,{" "}
          <Code color="success">em</Code>, <Code color="success">rem</Code>,{" "}
          <Code color="success">vw</Code>, <Code color="success">vh</Code>).
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Units */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Units
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS has several different units for expressing a length. Many CSS
          properties take "length" values, such as{" "}
          <Code color="success">width</Code>,{" "}
          <Code color="success">margin</Code>,{" "}
          <Code color="success">padding</Code>,{" "}
          <Code color="success">font-size</Code>, etc. Length is a number
          followed by a length unit, such as
          <Code color="success">10px</Code>, <Code color="success">2em</Code>,
          etc.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1 {"}
          <p className="pl-3">{"font-size: 60px;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-3">{"font-size: 25px;"}</p>
          <p className="pl-3">{"line-height: 50px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          A whitespace cannot appear between the number and the unit. However,
          if the value is 0, the unit can be omitted. For some CSS properties,
          negative lengths are allowed. There are two types of length units:
          absolute and relative.
        </p>
      </div>

      {/* Absolute Lengths */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Absolute Lengths
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The absolute length units are fixed and a length expressed in any of
          these will appear as exactly that size. Absolute length units are not
          recommended for use on screen, because screen sizes vary so much.
          However, they can be used if the output medium is known, such as for
          print layout.
        </p>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Unit</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {absLenghts.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.unit}</TableCell>
                <TableCell className="text-[#71717a]">{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          * Pixels (px) are relative to the viewing device. For low-dpi devices,
          1px is one device pixel (dot) of the display. For printers and high
          resolution screens 1px implies multiple device pixels.
        </p>
      </div>

      {/* Relative Lengths */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Relative Lengths
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Relative length units specify a length relative to another length
          property. Relative length units scale better between different
          rendering mediums.
        </p>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Unit</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {relaLenghts.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.unit}</TableCell>
                <TableCell className="text-[#71717a]">{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/website-layout"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Website Layout
          </Button>
        </Link>
        <Link href={"/doc/css/specificity"}>
          <Button variant={"outline"} className="flex gap-3">
            Specificity <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
