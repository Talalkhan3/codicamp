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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:pr-3">
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
                How to
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* How To Add CSS */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">How To Add CSS</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          When a browser reads a style sheet, it will format the HTML document
          according to the information in the style sheet.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Three Ways to Insert CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Three Ways to Insert CSS
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          There are three ways of inserting a style sheet:
        </p>
        <ul className="flex flex-col gap-1 mt-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>External CSS
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>Internal CSS
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>Inline CSS
          </li>
        </ul>
      </div>

      {/* External CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">External CSS</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          With an external style sheet, you can change the look of an entire
          website by changing just one file!
          <br />
          Each HTML page must include a reference to the external style sheet
          file inside the <Code color="success">{" <link>"}</Code> element,
          inside the head section.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {`<link rel="stylesheet" href="mystyle.css">`} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-4">{"<h1>This is a heading</h1>"}</p>
          <p className="pl-4">{"<p>This is a paragraph.</p>"}</p> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          An external style sheet can be written in any text editor, and must be
          saved with a .css extension. The external .css file should not contain
          any HTML tags.
          <br />
          Here is how the "mystyle.css" file looks:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"background-color: lightblue;"}</p>
          {"}"} <br />
          {"h1 {"}
          <p className="pl-3">{"color: navy;"}</p>
          <p className="pl-3">{"margin-left: 20px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Internal CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Internal CSS</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An internal style sheet may be used if one single HTML page has a
          unique style. The internal style is defined inside the{" "}
          <Code color="success">{"<style>"}</Code> element, inside the head
          section.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"body {"}
          <p className="pl-3">{"background-color: linen;"}</p>
          {"}"} <br /> <br />
          {"h1 {"}
          <p className="pl-3">{"color: maroon;"}</p>
          <p className="pl-3">{"margin-left: 40px;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{"<h1>This is a heading</h1>"}</p>
          <p className="pl-3">{"<p>This is a paragraph.</p>"}</p>
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Inline CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Inline CSS</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An inline style may be used to apply a unique style for a single
          element. To use inline styles, add the style attribute to the relevant
          element. The style attribute can contain any CSS property.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{`<h1 style="color:blue;text-align:center;">This is a heading</h1>`}</p>
          <p className="pl-3">{`<p style="color:red;">This is a paragraph.</p>`}</p>{" "}
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Multiple Style Sheets */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Multiple Style Sheets
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If some properties have been defined for the same selector (element)
          in different style sheets, the value from the last read style sheet
          will be used.{" "}
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Assume that an external style sheet has the following style for the{" "}
          <Code color="success">{"<h1>"}</Code> element
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"h1 {"}
          <p className="pl-3">{"color: navy;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Then, assume that an internal style sheet also has the following style
          for the <Code color="success">{"<h1>"}</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"h1 {"}
          <p className="pl-3">{"color: orange;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the internal style is defined after the link to the external style
          sheet, the <Code color="success">{"<h1>"}</Code> elements will be
          "orange":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<head>"} <br />
          {`<link rel="stylesheet" type="text/css" href="mystyle.css">`} <br />
          {"<style>"} <br />
          {"h1 {"}
          <p className="pl-3">{"color: orange;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          However, if the internal style is defined before the link to the
          external style sheet, the <Code color="success">{"<h1>"}</Code>{" "}
          elements will be "navy":{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<head>"} <br />
          {"<style>"} <br />
          {"h1 {"}
          <p className="pl-3">{"color: orange;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {`<link rel="stylesheet" type="text/css" href="mystyle.css">`} <br />
          {"</head>"}
        </Code>
      </div>

      {/* Cascading Order */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Cascading Order
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          What style will be used when there is more than one style specified
          for an HTML element?
          <br />
          All the styles in a page will "cascade" into a new "virtual" style
          sheet by the following rules, where number one has the highest
          priority:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-7">
          <li className="flex items-center gap-2">
            1.{" "}
            <p className="text-[#71717a]">
              Inline style (inside an HTML element)
            </p>
          </li>
          <li className="flex items-center gap-2">
            2.{" "}
            <p className="text-[#71717a]">
              External and internal style sheets (in the head section)
            </p>
          </li>
          <li className="flex items-center gap-2">
            3. <p className="text-[#71717a]">Browser default</p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          So, an inline style has the highest priority, and will override
          external and internal styles and browser defaults.
        </p>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/selectors"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Selectors
          </Button>
        </Link>
        <Link href={"/doc/css/comments"}>
          <Button variant={"outline"} className="flex gap-3">
            Comments <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
