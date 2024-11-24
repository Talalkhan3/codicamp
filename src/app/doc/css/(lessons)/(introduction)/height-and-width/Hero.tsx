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
                Height and Width
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Height, Width and Max-width */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Height, Width and Max-width
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS <Code color="success">height</Code> and{" "}
          <Code color="success">width</Code> properties are used to set the
          height and width of an element. The CSS{" "}
          <Code color="success">max-width</Code> property is used to set the
          maximum width of an element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Setting height and width */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Setting height and width
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">height</Code> and{" "}
          <Code color="success">width</Code> properties are used to set the
          height and width of an element. <br /> <br />
          The height and width properties do not include padding, borders, or
          margins. It sets the height/width of the area inside the padding,
          border, and margin of the element.
        </p>
      </div>

      {/* CSS height and width Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS height and width Values
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">height</Code> and{" "}
          <Code color="success">width</Code> properties may have the following
          values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">auto</Code> - This is default. The browser
              calculates the height and width
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">length</Code> - Defines the height/width in
              px, cm, etc.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">%</Code> - Defines the height/width in
              percent of the containing block
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">initial</Code> - Sets the height/width to
              its default value
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">inherit</Code> - The height/width will be
              inherited from its parent value
            </p>
          </li>
        </ul>
      </div>

      {/* CSS height and width Examples */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS height and width Examples
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Set the height and width of a {"<div>"} element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"height: 200px;"}</p>
          <p className="pl-3">{"width: 50%;"}</p>
          <p className="pl-3">{"background-color: powderblue;"}</p>

          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Set the height and width of another {"<div>"} element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"width: 500px;"}</p>
          <p className="pl-3">{"background-color: powderblue;"}</p>

          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Remember that the <Code color="success">height</Code> and{" "}
          <Code color="success">width</Code> properties do not include padding,
          borders, or margins! They set the height/width of the area inside the
          padding, border, and margin of the element!
        </p>
      </div>

      {/* Setting max-width */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Setting max-width
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">max-width</Code> property sets an element's
          maximum width, which can be defined in units like pixels, centimeters,
          or as a percentage of the containing block, with the default as "none"
          (no limit). When a fixed width (e.g., 500px) is used, smaller browser
          windows will cause horizontal scrolling. Using{" "}
          <Code color="success">max-width</Code> instead allows the element to
          resize, improving responsiveness in narrow windows. Dragging the
          browser window below 500px shows this difference effectively.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"width: 500px;"}</p>
          <p className="pl-3">{"background-color: powderblue;"}</p>

          {"}"}
        </Code>
      </div>
      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/paddings"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Paddings
          </Button>
        </Link>
        <Link href={"/doc/css/box-model"}>
          <Button variant={"outline"} className="flex gap-3">
            Box Model <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
