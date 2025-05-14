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
                2D Transforms
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  2D Transforms */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">2D Transforms</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS transforms allow you to move, rotate, scale, and skew elements.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS 2D Transforms Functions */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS 2D Transforms Functions
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          With the CSS <Code color="success">transform</Code> property you can
          use the following 2D transformation functions:
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <div>
            <Code color="success">translate()</Code>
          </div>
          <div>
            <Code color="success">rotate()</Code>
          </div>
          <div>
            <Code color="success">scaleX()</Code>
          </div>
          <div>
            <Code color="success">scaleY()</Code>
          </div>
          <div>
            <Code color="success">scale()</Code>
          </div>
          <div>
            <Code color="success">skewX()</Code>
          </div>
          <div>
            <Code color="success">skewY()</Code>
          </div>
          <div>
            <Code color="success">skew()</Code>
          </div>
          <div>
            <Code color="success">matrix()</Code>
          </div>
        </div>
      </div>

      {/* The translate() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The translate() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">translate()</Code> function moves an element
          from its current position (according to the parameters given for the
          X-axis and the Y-axis). The following example moves the{" "}
          <Code color="success">{"<div>"}</Code> element 50 pixels to the right,
          and 100 pixels down from its current position:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: translate(50px, 100px);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The rotate() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The rotate() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">rotate()</Code>function rotates an element
          clockwise or counter-clockwise according to a given degree. The
          following example rotates the
          <Code color="success">{"<div>"}</Code> element clockwise with 20
          degrees:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{" transform: rotate(20deg);"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Using negative values will rotate the element counter-clockwise. The
          following example rotates the <Code color="success">{"<div>"}</Code>{" "}
          element counter-clockwise with 20 degrees: Example
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: rotate(-20deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The scale() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The scale() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">scale()</Code> function increases or
          decreases the size of an element (according to the parameters given
          for the width and height). The following example increases the
          <Code color="success">{"<div>"}</Code> element to be two times of its
          original width, and three times of its original height:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scale(2, 3);"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example decreases the{" "}
          <Code color="success">{"<div>"}</Code> element to be half of its
          original width and height:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scale(0.5, 0.5);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The scaleX() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The scaleX() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">scaleX()</Code> function increases or
          decreases the width of an element. The following example increases the
          <Code color="success">{"<div>"}</Code> element to be two times of its
          original width:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scaleX(2);"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example decreases the{" "}
          <Code color="success">{"<div>"}</Code> element to be half of its
          original width:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scaleX(0.5);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The scaleY() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The scaleY() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">scaleY()</Code> function increases or
          decreases the height of an element. The following example increases
          the <Code color="success">{"<div>"}</Code> element to be three times
          of its original height:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scaleY(3);"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example decreases the
          <Code color="success">{"<div>"}</Code> element to be half of its
          original height:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: scaleY(0.5);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The skewX() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The skewX() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">skewX()</Code> function skews an element
          along the X-axis by the given angle. The following example skews the{" "}
          <Code color="success">{"<div>"}</Code> element 20 degrees along the
          X-axis:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: skewX(20deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The skewY() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The skewY() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">skewY()</Code> function skews an element
          along the Y-axis by the given angle. The following example skews the
          <Code color="success">{"<div>"}</Code> element 20 degrees along the
          Y-axis:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: skewY(20deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The skew() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The skew() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">skew()</Code> function skews an element
          along the X and Y-axis by the given angles. The following example
          skews the <Code color="success">{"<div>"}</Code> element 20 degrees
          along the X-axis, and 10 degrees along the Y-axis:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: skew(20deg, 10deg);"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the second parameter is not specified, it has a zero value. So, the
          following example skews the
          <Code color="success">{"<div>"}</Code>element 20 degrees along the
          X-axis:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: skew(20deg);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The skewY() Function */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The matrix() Function
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">matrix() </Code> function combines all the
          2D transform functions into one. The{" "}
          <Code color="success">matrix() </Code> function take six parameters,
          containing mathematic functions, which allows you to rotate, scale,
          move (translate), and skew elements. The parameters are as follow:
          matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(),
          translateY())
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transform: matrix(1, -0.3, 0, 1, 0, 0);"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/web-fonts"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Web Fonts
          </Button>
        </Link>
        <Link href={"/doc/css/3d-transforms"}>
          <Button variant={"outline"} className="flex gap-3">
            3D Transforms <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
