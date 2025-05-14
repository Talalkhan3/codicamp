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
                Gradients
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Gradients */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Gradients</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS gradients let you display smooth transitions between two or more
          specified colors.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Linear Gradients */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Linear Gradients
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a linear gradient you must define at least two color stops.
          Color stops are the colors you want to render smooth transitions
          among. You can also set a starting point and a direction (or an angle)
          along with the gradient effect.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          background-image: linear-gradient(direction, color-stop1, color-stop2,
          ...);
        </Code>
        <p className="text-[16px] font-semibold mt-5">
          Direction - Top to Bottom (this is default)
        </p>
        <div className="bg-gradient-to-t from-green-500 to-green-900 w-full h-[200px] rounded-lg mt-3 "></div>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#grad {"}
          <p className="pl-3">
            {"background-image: linear-gradient(red, yellow);"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] font-semibold mt-5">
          Direction - Left to Right
        </p>
        <div className="bg-gradient-to-r from-green-500 to-green-900 w-full h-[200px] rounded-lg mt-3 "></div>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#grad {"}
          <p className="pl-3">
            {"background-image: linear-gradient(to right, red , yellow);"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] font-semibold mt-5">Direction - Diagonal</p>
        <p className="text-[16px] text-[#71717a]">
          You can make a gradient diagonally by specifying both the horizontal
          and vertical starting positions.
        </p>
        <div className="bg-gradient-to-br from-green-500 to-green-900 w-full h-[200px] rounded-lg mt-3 "></div>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#grad {"}
          <p className="pl-3">
            {"background-image: linear-gradient(to bottom right, red, yellow);"}
          </p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/color-keyword"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Color Keywords
          </Button>
        </Link>
        <Link href={"/doc/css/shadows"}>
          <Button variant={"outline"} className="flex gap-3">
            Shadows <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
