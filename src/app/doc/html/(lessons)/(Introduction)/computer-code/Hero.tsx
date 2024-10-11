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
    <ScrollArea className="w-full h-[90vh] pr-10 max-md:pr-3">
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
                Computer Code
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Computer Code Elements */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Computer Code Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML contains several elements for defining user input and computer
          code.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* HTML <kbd> For Keyboard Input */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<kbd>"} For Keyboard Input
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<kbd>"}</Code> element is used to
          define keyboard input. The content inside is displayed in the
          browser's default monospace font.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>`}
        </Code>
        <h1 className="text-[18px] text-[#09090b] font-bold mt-2">Result:</h1>
        <p className="border w-full p-2 mt-2">
          Save the document by pressing <kbd>Ctrl + S</kbd>
        </p>
      </div>

      {/* HTML <samp> For Program Output */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<samp>"} For Program Output
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<samp>"}</Code> element is used to
          define sample output from a computer program. The content inside is
          displayed in the browser's default monospace font
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>Message from my computer:</p>"} <br />
          {"<p><samp>File not found.<br />Press F1 to continue</samp></p>"}
        </Code>
        <h1 className="text-[18px] text-[#09090b] font-bold mt-2">Result:</h1>
        <div className="border w-full p-2 mt-2">
          <p>Message from my computer:</p>
          <p className="ml-3 mt-2">
            <samp>
              File not found. <br />
              Press F1 to continue
            </samp>
          </p>
        </div>
      </div>

      {/* HTML <code> For Computer Code */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<code>"} For Computer Code
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<code>"}</Code> element is used to
          define a piece of computer code. The content inside is displayed in
          the browser's default monospace font.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<code>"} <br />
          {"x = 5;"} <br />
          {"y = 6;"} <br />
          {"z = x + y;"} <br />
          {"</code>"}
        </Code>
        <h1 className="text-[18px] text-[#09090b] font-bold my-2">Result:</h1>
        <code className="border w-full p-2 mt-2">x = 5; y = 6; z = x + y;</code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Notice that the <Code color="success">{"<code>"}</Code> element does
          not preserve extra whitespace and line-breaks. To fix this, you can
          put the <Code color="success">{"<code>"}</Code> element inside a{" "}
          <Code color="success">{"<pre>"}</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<pre>"} <br />
          {"<code>"} <br />
          {"x = 5;"} <br />
          {"y = 6;"} <br />
          {"z = x + y;"} <br />
          {"</code>"} <br />
          {"</pre>"}
        </Code>
        <h1 className="text-[18px] text-[#09090b] font-bold my-2">Result:</h1>
        <pre className="border w-full p-2 mt-2">
          <code>x = 5; y = 6; z = x + y;</code>
        </pre>
      </div>

      {/* HTML <var> For Variables */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<var>"} For Variables
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<var>"}</Code> element is used to
          define a variable in programming or in a mathematical expression. The
          content inside is typically displayed in italic.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>"} <br />
          {`The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where`}{" "}
          <br />
          {
            "<var>b</var> is the base, and <var>h</var> is the vertical height."
          }{" "}
          <br />
          {"</p>"}
        </Code>
        <h1 className="text-[18px] text-[#09090b] font-bold my-2">Result:</h1>
        <p className="border w-full p-2">
          The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where{" "}
          <var>b</var> is the base, and <var>h</var> is the vertical height.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/responsive"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Responsive
          </Button>
        </Link>
        <Link href={"/doc/html/semantics"}>
          <Button variant={"outline"} className="flex gap-3">
            Semantics <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
