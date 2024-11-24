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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-0">
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
        <h1 className="text-[40px] text-[#09090b] font-bold">Basic</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          In this chapter we will show some basic HTML examples. Don't worry if
          we use tags you have not learned about yet.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Documents section  */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          {" "}
          Documents
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          All HTML documents must start with a document type declaration:
          <Code color="success" radius="full">
            {"<!DOCTYPE html>."}
          </Code>
          The HTML document itself begins with{" "}
          <Code color="success">{"<html>"}</Code> and ends with{" "}
          <Code color="success">{"</html>"}</Code>. The visible part of the HTML
          document is between <Code color="success">{"<body> "}</Code> and{" "}
          <Code color="success">{"</body>"}</Code> .
        </p>
        <div>
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
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

      {/* The {"<!DOCTYPE>"} Declaration */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          The {"<!DOCTYPE>"} Declaration
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<!DOCTYPE>"}</Code> declaration represents
          the document type, and helps browsers to display web pages correctly.
          It must only appear once, at the top of the page (before any HTML
          tags). The <Code color="success">{"<!DOCTYPE>"}</Code>
          declaration is not case sensitive. The{" "}
          <Code color="success">{"<!DOCTYPE>"}</Code> declaration for HTML5 is:
        </p>

        <div className="mt-3">
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
            {"<!DOCTYPE>"}
          </Code>{" "}
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Headings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Headings
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML headings are defined with the{" "}
          <Code color="success">{"<h1>"}</Code> to{" "}
          <Code color="success">{"<h6>"}</Code> tags.
          <Code color="success">{"<h1>"}</Code> defines the most important
          heading. <Code color="success">{"<h6>"}</Code> defines the least
          important heading:{" "}
        </p>
        <div>
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
            {"<h1>Heading 1</h1>"} <br />
            {"<h2>Heading 2</h2>"} <br />
            {"<h3>Heading 3</h3>"} <br />
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Paragraphs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Paragraphs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML paragraphs are defined with the{" "}
          <Code color="success">{"<p>"}</Code>
          tag:
        </p>
        <div>
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
            {"<p>This is a paragraph.</p>"} <br />
            {"<p>This is another paragraph.</p>"}
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* HTML Links */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Link
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML links are defined with the <Code color="success">{"<a>"}</Code>{" "}
          tag:
        </p>
        <div>
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
            {`<a href="https://www.youtube.com">`} <br />
            {`This is a link`} <br />
            {`</a>`}
          </Code>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          The link's destination is specified in the{" "}
          <Code color="success">{`href`}</Code> attribute. Attributes are used
          to provide additional information about HTML elements. You will learn
          more about attributes in a later chapter.
        </p>
      </div>
      <Separator className="my-5" />

      {/* HTML Images */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Images{" "}
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML images are defined with the{" "}
          <Code color="success">{"<img>"}</Code> tag. The source file (src),
          alternative text (alt), width, and height are provided as attributes:
        </p>
        <div>
          <Code
            className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
            color="success"
            size="md"
          >
            {`<img src="youtube.jpg"`} <br /> {`alt="youtube.com"`} <br />{" "}
            {`width="104"`} <br /> {`height="142">`}
          </Code>
        </div>
      </div>
      <Separator className="my-5" />

      {/* View HTML Source */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
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
