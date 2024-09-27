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
    <ScrollArea className="w-full h-[90vh] pr-10">
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
                Paragraphs
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Paragraphs</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML{" "}
          <Code color="success" radius="full">
            {"<p>"}
          </Code>{" "}
          element defines a paragraph. A paragraph always starts on a new line,
          and browsers automatically add some white space (a margin) before and
          after a paragraph.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<p>This is a paragraph.</p>`} <br />
          {`<p>This is another paragraph.</p>`}
        </Code>
      </div>

      {/* HTML Display */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">HTML Display</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You cannot be sure how HTML will be displayed. Large or small screens,
          and resized windows will create different results. With HTML, you
          cannot change the display by adding extra spaces or extra lines in
          your HTML code. The browser will automatically remove any extra spaces
          and lines when the page is displayed:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<p>"} <br />
          {"This paragraph"} <br />
          {"contains a lot of lines"} <br />
          {"in the source code,"} <br />
          {"but the browser"} <br />
          {"ignores it."} <br />
          {"</p>"} <br /> <br />
          {"<p>"} <br />
          {"This paragraph"} <br />
          {`contains         a lot of spaces`} <br />
          {"in the source         code,"} <br />
          {"but the        browser"} <br />
          {"ignores it."} <br />
          {"</p>"}
        </Code>
      </div>

      {/* Horizontal Rules */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Horizontal Rules
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The{" "}
          <Code color="success" radius="full">
            {"<hr>"}
          </Code>{" "}
          tag defines a thematic break in an HTML page, and is most often
          displayed as a horizontal rule. The{" "}
          <Code color="success" radius="full">
            {"<hr>"}
          </Code>{" "}
          element is used to separate content (or define a change) in an HTML
          page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<h1>This is heading 1</h1>"} <br />
          {"<p>This is some text.</p>"} <br />
          {"<hr>"} <br />
          {"<h2>This is heading 2</h2>"} <br />
          {"<p>This is some other text.</p>"} <br />
          {"<hr>"}
        </Code>

        <p className="text-[16px] text-[#71717a] ">
          The{" "}
          <Code color="success" radius="full">
            {"<hr>"}
          </Code>{" "}
          tag is an empty tag, which means that it has no end tag.
        </p>
      </div>

      {/* Line Breaks */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Line Breaks</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML{" "}
          <Code color="success" radius="full">
            {"<br>"}
          </Code>{" "}
          element defines a line break. Use{" "}
          <Code color="success" radius="full">
            {"<br>"}
          </Code>{" "}
          if you want a line break (a new line) without starting a new
          paragraph:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<p>This is<br>a paragraph<br>with line breaks.</p>"}
        </Code>
        <p className="text-[16px] text-[#71717a] ">
          The{" "}
          <Code color="success" radius="full">
            {"<br>"}
          </Code>{" "}
          tag is an empty tag, which means that it has no end tag.
        </p>
      </div>

      {/* The Poem Problem */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Poem Problem
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          This poem will display on a single line:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<p>"} <br />
          {"My Bonnie lies over the ocean."} <br />
          <br />
          {"My Bonnie lies over the sea."} <br /> <br />
          {"My Bonnie lies over the ocean."} <br /> <br />
          {"Oh, bring back my Bonnie to me."} <br />
          {"</p>"}
        </Code>
      </div>

      {/* Solution - The HTML <pre> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Solution - The HTML {"<pre>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML{" "}
          <Code color="success" radius="full">
            {"<pre>"}
          </Code>{" "}
          element defines preformatted text. The text inside a{" "}
          <Code color="success" radius="full">
            {"<pre>"}
          </Code>{" "}
          element is displayed in a fixed-width font (usually Courier), and it
          preserves both spaces and line breaks:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<pre>"} <br />
          {"My Bonnie lies over the ocean."} <br />
          <br />
          {"My Bonnie lies over the sea."} <br /> <br />
          {"My Bonnie lies over the ocean."} <br /> <br />
          {"Oh, bring back my Bonnie to me."} <br />
          {"</pre>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/headings"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Headings
          </Button>
        </Link>
        <Link href={"/doc/html/styles"}>
          <Button variant={"outline"} className="flex gap-3">
            Styles <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
