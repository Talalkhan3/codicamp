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
                Max-width
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Layout - width and max-width */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - width and max-width
        </h1>
        <Separator />
      </div>

      {/* Using width, max-width and margin: auto; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Using width, max-width and margin: auto;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          As mentioned in the previous chapter; a block-level element always
          takes up the full width available (stretches out to the left and right
          as far as it can).
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Setting the width of a block-level element will prevent it from
          stretching out to the edges of its container. Then, you can set the
          margins to auto, to horizontally center the element within its
          container. The element will take up the specified width, and the
          remaining space will be split equally between the two margins
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The problem with the <Code color="success">{"<div>"}</Code> above
          occurs when the browser window is smaller than the width of the
          element. The browser then adds a horizontal scrollbar to the page.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Using <Code color="success">max-width</Code> instead, in this
          situation, will improve the browser's handling of small windows. This
          is important when making a site usable on small devices
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is an example of the two divs above:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.ex1 {"}
          <p className="pl-3">{"width: 500px;"}</p>
          <p className="pl-3">{"margin: auto;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"} <br /> <br />
          {"div.ex2 {"}
          <p className="pl-3">{"max-width: 500px;"}</p>
          <p className="pl-3">{"margin: auto;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/display"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Display
          </Button>
        </Link>
        <Link href={"/doc/css/position"}>
          <Button variant={"outline"} className="flex gap-3">
            Position <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
