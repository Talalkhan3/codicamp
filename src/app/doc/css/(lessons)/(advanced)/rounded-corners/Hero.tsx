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
                Rounded Corners
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Rounded Corners */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Rounded Corners
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          With the CSS <Code color="success">border-radius</Code> property, you
          can give any element "rounded corners"
        </p>
        <Separator className="mt-5" />
      </div>

      {/* border-radius Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          border-radius Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">border-radius</Code> property defines
          the radius of an element's corners. This property allows you to add
          rounded corners to elements!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#rcorners1 {"}
          <p className="pl-3">{"border-radius: 25px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners2 {"}
          <p className="pl-3">{"border-radius: 25px;"}</p>
          <p className="pl-3">{"border: 2px solid #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners3 {"}
          <p className="pl-3">{"border-radius: 25px;"}</p>
          <p className="pl-3">{"background: url(paper.gif);"}</p>
          <p className="pl-3">{"background-position: left top;"}</p>
          <p className="pl-3">{"background-repeat: repeat;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"}
        </Code>
      </div>

      {/*  border-radius - Specify Each Corner */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          border-radius - Specify Each Corner
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">border-radius</Code> property can have from
          one to four values. Here are the rules:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" #rcorners1 {"}
          <p className="pl-3">{"border-radius: 15px 50px 30px 5px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners2 {"}
          <p className="pl-3">{"border-radius: 15px 50px 30px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners3 {"}
          <p className="pl-3">{"border-radius: 15px 50px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners4 {"}
          <p className="pl-3">{"border-radius: 15px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          You could also create elliptical corners:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#rcorners1 {"}
          <p className="pl-3">{"border-radius: 50px / 15px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners2 {"}
          <p className="pl-3">{"border-radius: 15px / 50px;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"} <br /> <br />
          {"#rcorners3 {"}
          <p className="pl-3">{"border-radius: 50%;"}</p>
          <p className="pl-3">{"background: #73AD21;"}</p>
          <p className="pl-3">{"padding: 20px;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/math-functions"}>
          <Button className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Math Functions
          </Button>
        </Link>
        <Link href={"/doc/css/border-images"}>
          <Button variant={"outline"} className="flex gap-3">
            Border Images <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
