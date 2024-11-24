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
                Specificity
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Specificity */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold"> Specificity</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Specificity in CSS is a hierarchy system that determines which rule
          takes precedence when multiple rules target the same element, based on
          the specificity of selectors such as inline styles, IDs, classes, and
          element types.
        </p>
        <Separator className="mt-5" />
      </div>
    </ScrollArea>
  );
}

export default Hero;
