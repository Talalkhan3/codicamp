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
                3D Transforms
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*    3D Transforms */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">3D Transforms</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS also supports 3D transformations.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS 3D Transforms Functions */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS 3D Transforms Functions
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          With the CSS <Code color="success">transform</Code> property you can
          use the following 3D transformation functions:
        </p>
        <div className="mt-5 flex items-center flex-wrap gap-5">
          <Code color="success">rotateX()</Code>
          <Code color="success">rotateY()</Code>
          <Code color="success">rotateZ()</Code>
        </div>
      </div>

      {/* The rotateX() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The rotateX() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">rotateX()</Code> function rotates an element
          around its X-axis at a given degree:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#myDiv {"}
          <p className="pl-3">{"transform: rotateX(150deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The rotateX() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The rotateY() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">rotateY()</Code> function rotates an element
          around its Y-axis at a given degree:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#myDiv {"}
          <p className="pl-3">{"transform: rotateY(150deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The rotateX() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The rotateZ() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">rotateZ()</Code> function rotates an element
          around its Z-axis at a given degree:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#myDiv {"}
          <p className="pl-3">{"transform: rotateZ(90deg);"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/2d-transforms"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> 2D Transforms
          </Button>
        </Link>
        <Link href={"/doc/css/transitions"}>
          <Button variant={"outline"} className="flex gap-3">
            Transitions <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
