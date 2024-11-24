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
                Outline
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Outline */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Outline</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An outline is a line drawn outside the element's border.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Outline */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Outline
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An outline is a line that is drawn around elements, OUTSIDE the
          borders, to make the element "stand out".
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS has the following outline properties:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outline-style </Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outline-color</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outline-width</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outline-offset </Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outline </Code>
            </p>
          </li>
        </ul>
      </div>

      {/* CSS Outline Style */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Outline Style
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">outline-style</Code> property specifies the
          style of the outline, and can have one of the following values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">dashed </Code> - Defines a dashed outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">solid </Code> - Defines a solid outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">double </Code> - Defines a double outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">groove </Code> - Defines a 3D grooved
              outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">ridge </Code> - Defines a 3D ridged outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">inset </Code> - Defines a 3D inset outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">outset </Code> - Defines a 3D outset outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">none </Code> - Defines no outline
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">hidden </Code> - Defines a hidden outline
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example shows the different{" "}
          <Code color="success">outline-style</Code> values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p.dotted {outline-style: dotted;}"} <br />
          {"p.dashed {outline-style: dashed;}"} <br />
          {"p.solid {outline-style: solid;}"} <br />
          {"p.double {outline-style: double;}"} <br />
          {"p.groove {outline-style: groove;}"} <br />
          {"p.ridge {outline-style: ridge;}"} <br />
          {"p.inset {outline-style: inset;}"} <br />
          {"p.outset {outline-style: outset;}"}
        </Code>

        <div className="flex flex-col gap-2 mt-3">
          <p className=" border-dotted p-1 border-green-500 border">
            A dotted outline.
          </p>
          <p className=" border-dashed p-1 border-green-500 border">
            A dashed outline.
          </p>
          <p className=" border-solid p-1 border-green-500 border">
            A solid outline.
          </p>
          <p className=" border-double p-1 border-green-500 border">
            A double outline.
          </p>
          <p className=" border-outline p-1 border-green-500 border">
            A groove outline. The effect depends on the outline-color value.
          </p>
          <p className=" border-outline p-1 border-green-500 border">
            A ridge outline. The effect depends on the outline-color value.
          </p>
          <p className=" border-outline p-1 border-green-500 border">
            An inset outline. The effect depends on the outline-color value.
          </p>
          <p className=" border-outline p-1 border-green-500 border">
            An outset outline. The effect depends on the outline-color value.
          </p>
        </div>
      </div>


      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/box-model"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Box Model
          </Button>
        </Link>
        <Link href={"/doc/css/text"}>
          <Button variant={"outline"} className="flex gap-3">
            Text <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
