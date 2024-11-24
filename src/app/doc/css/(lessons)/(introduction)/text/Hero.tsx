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
                Text
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Text */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Text</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS has a lot of properties for formatting text.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Text Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Color
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">color</Code> property is used to set the
          color of the text. The color is specified by:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              a <Code color="success">color </Code> name - like "red"
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              a <Code color="success"> HEX</Code> value - like "#ff0000"
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              an <Code color="success">RGB </Code> value - like "rgb(255,0,0)"
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The default text color for a page is defined in the body selector.
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"color: blue;"}</p>
          {"}"} <br /> <br />
          {"h1 {"}
          <p className="pl-3">{"color: green;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Text Color and Background Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Color and Background Color
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In this example, we define both the{" "}
          <Code color="success">background-color</Code> property and the{" "}
          <Code color="success">color</Code> property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"background-color: lightgrey;"}</p>
          <p className="pl-3">{"color: blue;"}</p>
          {"}"} <br /> <br />
          {"h1 {"}
          <p className="pl-3">{"background-color: black;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"background-color: blue;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/outline"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Outline
          </Button>
        </Link>
        <Link href={"/doc/css/fonts"}>
          <Button variant={"outline"} className="flex gap-3">
            Fonts <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
