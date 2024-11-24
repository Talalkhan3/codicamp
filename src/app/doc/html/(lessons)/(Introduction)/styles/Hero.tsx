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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-0 ">
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
                Styles
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* STYLES */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Styles</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML style attribute is used to add styles to an element, such as
          color, font, size, and more.
        </p>
        <h3 className="font-bold my-3">Examples</h3>
        <div className="flex flex-col gap-4 p-5 bg-gray-200 rounded-md">
          <h1 className="text-red-600 font-medium">I am Red</h1>
          <h1 className="text-blue-600 font-medium">I am Blue</h1>
          <h1 className="text-2xl font-medium">I am Big</h1>
        </div>
        <Separator className="mt-5" />
      </div>

      {/*  Style Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Style Attribute
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Setting the style of an HTML element, can be done with the style
          attribute. The HTML style attribute has the following syntax:
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full my-3 p-3"
        >
          {`<tagname style="property:value;">`}
        </Code>
        <p className="text-[16px] text-[#71717a]">
          The property is a CSS property. The value is a CSS value.
        </p>
      </div>

      {/* Background Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Background Color
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS background-color property defines the background color for an
          HTML element.
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
        >
          {`<body style="background-color:powderblue;">`} <br /> <br />
          {"<h1>This is a heading</h1>"} <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"</body>"}
        </Code>
      </div>

      {/* Text Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Color
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS color property defines the text color for an HTML element:
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
        >
          {`<h1 style="color:blue;">`} <br /> {`This is a heading</h1>`} <br />{" "}
          <br />
          {`<p style="color:red;">`} <br /> {`This is a paragraph.</p>`}
        </Code>
      </div>

      {/* Fonts */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Fonts
        </h1>

        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS font-family property defines the font to be used for an HTML
          element:
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
        >
          {`<h1 style="font-family:verdana;">`} <br /> {`This is a heading`}{" "}
          <br />
          {`</h1>`} <br /> <br />
          {`<p style="font-family:courier;">`} <br /> {`This is a paragraph.`}{" "}
          <br /> {`</p>`}
        </Code>
      </div>

      {/* Text Size */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Size
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS font-size property defines the text size for an HTML element:
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
        >
          {`<h1 style="font-size:300%;">`} <br /> {`This is a heading `} <br />{" "}
          {`</h1>`} <br /> <br />
          {`<p style="font-size:160%;"> `} <br /> {`This is a paragraph.`}{" "}
          <br /> {`</p>`}
        </Code>
      </div>

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Alignment
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS text-align property defines the horizontal text alignment for
          an HTML element:
        </p>
        <Code
          color="success"
          size="md"
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
        >
          {`<h1 style="text-align:center;">`} <br /> {`Centered Heading`} <br />{" "}
          {`</h1>`} <br /> <br />
          {`<p style="text-align:center;">`} <br /> {`Centered paragraph.`}{" "}
          <br /> {`</p>`}
        </Code>
      </div>

      {/* SUMMARY */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Summary
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">{"style"}</Code> attribute for styling
          HTML elements, applying{" "}
          <Code color="success">{"background-color"}</Code> for background
          colors, <Code color="success">{"color"}</Code> for text colors,{" "}
          <Code color="success">{"font-family"}</Code> for text fonts,{" "}
          <Code color="success">{"<font-size>"}</Code> for text sizes, and{" "}
          <Code color="success">{"text-align"}</Code> for text alignment.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 max-lg:mx-2">
        <Link href={"/doc/html/paragraphs"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Paragraphs
          </Button>
        </Link>
        <Link href={"/doc/html/formatting"}>
          <Button variant={"outline"} className="flex gap-3">
            Formatting <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
