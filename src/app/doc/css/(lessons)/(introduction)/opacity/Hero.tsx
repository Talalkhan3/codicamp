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
                Opacity
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Opacity  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Opacity</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          The <Code color="success">opacity</Code> property specifies the
          opacity/transparency of an element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Transparent Image */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Transparent Image
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">opacity</Code> property can take a value
          from 0.0 - 1.0. The lower the value, the more transparent:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="mt-7">{"opacity: 0.5;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Transparent Hover Effect */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Transparent Hover Effect
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">opacity</Code> property is often used
          together with the <Code color="success">:hover</Code> selector to
          change the opacity on mouse-over:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img {"}
          <p className="pl-3">{"opacity: 0.5;"}</p>
          {"}"} <br /> <br />
          {"img:hover {"}
          <p className="pl-3">{"opacity: 1.0;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The first CSS block is similar to the code in Example 1. In addition,
          we have added what should happen when a user hovers over one of the
          images. In this case we want the image to NOT be transparent when the
          user hovers over it. The CSS for this is{" "}
          <Code color="success">opacity:1;</Code>. When the mouse pointer moves
          away from the image, the image will be transparent again.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"img:hover {"}
          <p className="pl-3">{"opacity: 0.5;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Transparent Box */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Transparent Box
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          When using the <Code color="success">opacity</Code> property to add
          transparency to the background of an element, all of its child
          elements inherit the same transparency. This can make the text inside
          a fully transparent element hard to read:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3"></p>
          {"opacity: 0.3;"}
          {"}"}
        </Code>
      </div>

      {/* Text in Transparent Box */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text in Transparent Box
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"div.background {"}
          <p className="pl-3">{"background: url(klematis.jpg) repeat;"}</p>
          <p className="pl-3">{"border: 2px solid black;"}</p>
          {"}"} <br /> <br />
          {"div.transbox {"}
          <p className="pl-3">{"margin: 30px;"}</p>
          <p className="pl-3">{"background-color: #ffffff;"}</p>
          <p className="pl-3">{"border: 1px solid black;"}</p>
          <p className="pl-3">{"opacity: 0.6;"}</p>
          {"}"} <br /> <br />
          {"div.transbox p {"}
          <p className="pl-3">{"margin: 5%;"}</p>
          <p className="pl-3">{"font-weight: bold;"}</p>
          <p className="pl-3">{"color: #000000;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<div class="background">`}
          <p className="pl-3">{`<div class="transbox">`}</p>
          <p className="pl-5">
            {"<p>This is some text that is placed in the transparent box.</p>"}
          </p>
          <p className="pl-3">{"</div>"}</p>
          {"</div>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/pseudo-elements"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Psuedo Elements
          </Button>
        </Link>
        <Link href={"/doc/css/navigation-bar"}>
          <Button variant={"outline"} className="flex gap-3">
            Navigation Bar <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
