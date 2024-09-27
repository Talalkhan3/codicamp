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
    <ScrollArea className="w-full h-[90vh] pr-10">
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
                Colors
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* COLORS */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Colors</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML colors are specified with predefined color names, or with RGB,
          HEX, HSL, RGBA, or HSLA values.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Color Names */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Color Names</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In HTML, a color can be specified by using a color name:
        </p>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className=" h-[100px] bg-[brown] rounded-sm flex justify-center items-center">
            <h1 className="font-bold text-white ">Brown </h1>
          </div>
          <div className=" h-[100px] bg-[AliceBlue] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-black ">AliceBlue </h1>
          </div>
          <div className=" h-[100px] bg-[ForestGreen] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-white ">ForestGreen </h1>
          </div>
          <div className=" h-[100px] bg-[Indigo] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-white ">Indigo </h1>
          </div>
          <div className=" h-[100px] bg-[AntiqueWhite] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-black ">AntiqueWhite </h1>
          </div>
          <div className=" h-[100px] bg-[BurlyWood] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-white ">BurlyWood </h1>
          </div>
          <div className=" h-[100px] bg-[DarkSlateGrey] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-white ">DarkSlateGrey </h1>
          </div>
          <div className=" h-[100px] bg-[DarkGreen] rounded-sm flex justify-center items-center">
            {" "}
            <h1 className="font-bold text-white ">DarkGreen </h1>
          </div>
        </div>
      </div>

      {/* Background Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Background Color
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can set the background color for HTML elements:
        </p>
        <div className="mt-5 w-full h-[50px] bg-blue-900 rounded-sm flex justify-center items-center">
          <h1 className="text-white font-bold"> Heading</h1>
        </div>
        <div className="mt-3 w-full bg-orange-700 rounded-sm p-4 text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      {/* Text Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Text Color</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can set the color of text:
        </p>
        <div className="flex flex-col gap-3 mt-3">
          <h1 className="text-[tomato] text-[18px]">Headiing</h1>
          <p className="text-[DodgerBlue]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p className="text-[MediumSeaGreen]">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Border Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Border Color</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can set the color of borders:
        </p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="w-full p-4 border-red-600 border">
            <h1 className="text-[18px] font-bold">Heading</h1>
          </div>
          <div className="w-full p-4 border-green-600 border">
            <h1 className="text-[18px] font-bold">Heading</h1>
          </div>
          <div className="w-full p-4 border-blue-600 border">
            <h1 className="text-[18px] font-bold">Heading</h1>
          </div>
        </div>
      </div>

      {/* Color Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Color Values</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In HTML, colors can also be specified using RGB values, HEX values,
          HSL values, RGBA values, and HSLA values. The following three{" "}
          <Code color="success">{"<div>"}</Code> elements have their background
          color set with RGB, HEX, and HSL values
        </p>
        <div className="mt-5 flex flex-col w-full gap-3">
          <div className="flex items-center justify-center p-4 bg-[#ff6347] rounded-sm">
            <h1 className="font-bold text-[16px] text-white">
              rgb(255, 99, 71)
            </h1>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#ff6347] rounded-sm">
            <h1 className="font-bold text-[16px] text-white">#ff6347</h1>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#ff6347] rounded-sm">
            <h1 className="font-bold text-[16px] text-white">
              hsl(9, 100%, 64%)
            </h1>
          </div>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following two <Code color="success">{"<div>"}</Code> elements have
          their background color set with RGBA and HSLA values, which add an
          Alpha channel to the color (here we have 50% transparency)
        </p>
        <div className="mt-5 flex flex-col w-full gap-3">
          <div className="flex items-center justify-center p-4 bg-[#ff6347]/50 rounded-sm">
            <h1 className="font-bold text-[16px] text-white">
              rgba(255, 99, 71, 0.5)
            </h1>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#ff6347]/50 rounded-sm">
            <h1 className="font-bold text-[16px] text-white">
              hsla(9, 100%, 64%, 0.5)
            </h1>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/comments"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Comments
          </Button>
        </Link>
        <Link href={"/doc/html/css"}>
          <Button variant={"outline"} className="flex gap-3">
            CSS <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
