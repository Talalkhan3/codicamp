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
                Backgrounds
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Backgrounds */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Backgrounds</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS background properties are used to add background effects for
          elements.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS background-color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          CSS background-color
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">background-color</Code> property specifies
          the background color of an element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"background-color: lightblue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Other Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Other Elements</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can set the background color for any HTML elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" h1 {"}
          <p className="pl-3">{"background-color: green;"}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"background-color: lightblue;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Opacity / Transparency */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Opacity / Transparency
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">opacity</Code> property specifies the
          opacity/transparency of an element. It can take a value from 0.0 -
          1.0. The lower value, the more transparent:
        </p>
        <div className="flex w-full items-center justify-center mt-3">
          <div className=" flex justify-center bg-[#33d45e] w-full p-12">
            <h1>opacity 1</h1>
          </div>
          <div className="  flex justify-center bg-[#33d45e]/60 w-full p-12">
            <h1>opacity 0.6</h1>
          </div>
          <div className=" flex justify-center bg-[#33d45e]/30 w-full p-12">
            <h1>opacity 0.3</h1>
          </div>
          <div className="  flex justify-center bg-[#33d45e]/10 w-full p-12">
            <h1>opacity 0.1</h1>
          </div>
        </div>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" div {"}
          <p className="pl-3">{"background-color: green;"}</p>
          <p className="pl-3">{"opacity: 0.3;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Transparency using RGBA */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Transparency using RGBA
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If you do not want to apply opacity to child elements, like in our
          example above, use RGBA color values. The following example sets the
          opacity for the background color and not the text:
        </p>
        <div className="flex w-full items-center justify-center mt-3">
          <div className=" flex justify-center bg-[#33d45e] w-full p-12">
            <h1>100% opacity</h1>
          </div>
          <div className="  flex justify-center bg-[#33d45e]/60 w-full p-12">
            <h1>60% opacity</h1>
          </div>
          <div className=" flex justify-center bg-[#33d45e]/30 w-full p-12">
            <h1>30% opacity</h1>
          </div>
          <div className="  flex justify-center bg-[#33d45e]/10 w-full p-12">
            <h1>10% opacity</h1>
          </div>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          You learned from our CSS Colors Chapter, that you can use RGB as a
          color value. In addition to RGB, you can use an RGB color value with
          an alpha channel (RGBA) - which specifies the opacity for a color. An
          RGBA color value is specified with: rgba(red, green, blue, alpha). The
          alpha parameter is a number between 0.0 (fully transparent) and 1.0
          (fully opaque).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">
            {
              "background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */"
            }
          </p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/colors"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Colors
          </Button>
        </Link>
        <Link href={"/doc/css/borders"}>
          <Button variant={"outline"} className="flex gap-3">
            Borders <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
