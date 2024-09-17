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
                Basics
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* BASIC  HTML  */}

      <div className="mt-1">
        <h1 className="text-[30px] text-[#09090b] font-bold">Basic</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          In this chapter we will show some basic HTML examples. Don't worry if
          we use tags you have not learned about yet.
        </p>
      </div>

      {/* Documents section  */}

      <div className="mt-7">
        <h1 className="text-[18px] text-[#09090b] font-bold"> Documents</h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          All HTML documents must start with a document type declaration:
          <Code color="success" radius="full">
            {"<!DOCTYPE html>."}
          </Code>
          The HTML document itself begins with{" "}
          <Code color="success" radius="full">
            {"<html>"}
          </Code>{" "}
          and ends with{" "}
          <Code color="success" radius="full">
            {"</html>"}
          </Code>
          . The visible part of the HTML document is between{" "}
          <Code color="success" radius="full">
            {"<body> "}
          </Code>{" "}
          and{" "}
          <Code color="success" radius="full">
            {"</body>"}
          </Code>{" "}
          .
        </p>
        <div>
          <Code color="success" size="lg" className="w-full p-3 mt-3">
            {"<!DOCTYPE html>"} <br />
            {"<html>"} <br />
            {"<body>"} <br /> <br />
            {"  <h1>Welcome to My Website!</h1>"} <br />
            {" <p>This is a simple HTML page.</p>"} <br /> <br />
            {"</body>"} <br />
            {"</html>"}
          </Code>
        </div>
      </div>

      <Separator className="my-5" />

      {/* The {"<!DOCTYPE>"} Declaration */}
      <div className="mt-5">
        <h1 className="text-[18px] text-[#09090b] font-bold">
          The {"<!DOCTYPE>"} Declaration
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The{" "}
          <Code color="success" radius="full">
            {"<!DOCTYPE>"}
          </Code>{" "}
          declaration represents the document type, and helps browsers to
          display web pages correctly. It must only appear once, at the top of
          the page (before any HTML tags). The{" "}
          <Code color="success" radius="full">
            {"<!DOCTYPE>"}
          </Code>
          declaration is not case sensitive. The{" "}
          <Code color="success" radius="full">
            {"<!DOCTYPE>"}
          </Code>{" "}
          declaration for HTML5 is:
        </p>

        <div className="mt-3">
          <Code color="success" size="lg" className="w-full">
            {"<!DOCTYPE>"}
          </Code>{" "}
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Headings */}

      <div className="mt-5">
        <h1 className="text-[18px] text-[#09090b] font-bold">Headings</h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML headings are defined with the{" "}
          <Code color="success" radius="full">
            {"<h1>"}
          </Code>{" "}
          to{" "}
          <Code color="success" radius="full">
            {"<h6>"}
          </Code>{" "}
          tags.
          <Code color="success" radius="full">
            {"<h1>"}
          </Code>{" "}
          defines the most important heading.{" "}
          <Code color="success" radius="full">
            {"<h6>"}
          </Code>{" "}
          defines the least important heading:{" "}
        </p>
        <div>
          <Code color="success" className="w-full mt-3" size="lg">
            {"<h1>Heading 1</h1>"} <br />
            {"<h2>Heading 2</h2>"} <br />
            {"<h3>Heading 3</h3>"} <br />
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Paragraphs */}

      <div className="mt-5">
        <h1 className="text-[18px] text-[#09090b] font-bold">Paragraphs</h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML paragraphs are defined with the{" "}
          <Code color="success" radius="full">
            {"<p>"}
          </Code>
          tag:
        </p>
        <div>
          <Code color="success" size="lg" className="mt-3 w-full">
            {"<p>This is a paragraph.</p>"} <br />
            {"<p>This is another paragraph.</p>"}
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Links */}

      <div className="mt-5">
        <h1 className="text-[18px] text-[#09090b] font-bold">Link</h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML links are defined with the
          <Code color="success" radius="full">
            {"<a>"}
          </Code>
          tag:
        </p>
        <div>
          <Code color="success" className="mt-3 w-full" size="lg">
            {`<a href="https://www.youtube.com">This is a link</a>`}
          </Code>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          The link's destination is specified in the{" "}
          <Code color="success" radius="full">{`href`}</Code> attribute.
          Attributes are used to provide additional information about HTML
          elements. You will learn more about attributes in a later chapter.
        </p>
      </div>
      <Separator className="my-5" />

      {/* HTML Images */}

      <div className="mt-5">
        <h1 className="text-[18px] text-[#09090b] font-bold">Images </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML images are defined with the{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          tag. The source file (src), alternative text (alt), width, and height
          are provided as attributes:
        </p>
        <div>
          <Code color="success" size="lg" className="w-full mt-3">
            {`<img src="youtube.jpg" alt="youtube.com" width="104" height="142">`}
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* View HTML Source */}

      <div className="mt-5">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          View HTML Source
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Have you ever seen a Web page and wondered "Hey! How did they do
          that?"
        </p>

        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            View HTML Source Code
          </h1>
          <p className="text-[16px] text-[#71717a] mt-2">
            Click CTRL + U in an HTML page, or right-click on the page and
            select "View Page Source". This will open a new tab containing the
            HTML source code of the page.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            Inspect an HTML Element
          </h1>
          <p className="text-[16px] text-[#71717a] mt-2">
            Right-click on an element (or a blank area), and choose "Inspect" to
            see what elements are made up of (you will see both the HTML and the
            CSS). You can also edit the HTML or CSS on-the-fly in the Elements
            or Styles panel that opens.
          </p>
        </div>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/editors"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Editors
          </Button>
        </Link>
        <Link href={"/doc/html/elements"}>
          <Button variant={"outline"} className="flex gap-3">
            Elements <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
