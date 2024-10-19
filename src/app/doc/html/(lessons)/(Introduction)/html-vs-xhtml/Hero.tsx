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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
            <BreadcrumbLink href="/doc/html">HTML</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                HTML vs XHTML
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* HTML Versus XHTML */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Versus XHTML
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          XHTML is a stricter, more XML-based version of HTML.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is XHTML? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">What is XHTML?</h1>
        <Separator />
        <ul className="flex flex-col gap-1 mt-5 ml-7">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>XHTML stands for EXtensible HyperText Markup Language</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>XHTML is a stricter, more XML-based version of HTML</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>XHTML is HTML defined as an XML application</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>XHTML is supported by all major browsers</h1>
          </li>
        </ul>
      </div>

      {/* Why XHTML? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Why XHTML?</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          XML is a markup language where all documents must be marked up
          correctly (be "well-formed").
          <br />
          XHTML was developed to make HTML more extensible and flexible to work
          with other data formats (such as XML). In addition, browsers ignore
          errors in HTML pages, and try to display the website even if it has
          some errors in the markup. So XHTML comes with a much stricter error
          handling.
        </p>
      </div>

      {/* The Most Important Differences from HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Most Important Differences from HTML
        </h1>
        <Separator />
        <ul className="flex flex-col gap-1 mt-5 ml-7">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>{"<!DOCTYPE> "}is mandatory</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>The xmlns attribute in {"<html>"} is mandatory</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>
              {"<html>"}, {"<head>"}, {"<title>"}, and {"<body>"} are mandatory
            </h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Elements must always be properly nested</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Elements must always be closed</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Elements must always be in lowercase</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Attribute names must always be in lowercase</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Attribute values must always be quoted</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
            <h1>Attribute minimization is forbidden</h1>
          </li>
        </ul>
      </div>

      {/* XHTML - <!DOCTYPE ....> Is Mandatory */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML - {"<!DOCTYPE ....>"} Is Mandatory
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An XHTML document must have an XHTML{" "}
          <Code color="success">{"<!DOCTYPE>"}</Code>
          declaration. <br /> The <Code color="success">{"<html>"}</Code>,{" "}
          <Code color="success">{"<head>"}</Code>,{" "}
          <Code color="success">{"<title>"}</Code>, and{" "}
          <Code color="success">{"<body>"}</Code> elements must also be present,
          and the xmlns attribute in <Code color="success">{"<html>"}</Code>{" "}
          must specify the xml namespace for the document.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"`} <br />
          {`"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`} <br />
          {`<html xmlns="http://www.w3.org/1999/xhtml">`} <br />
          {"<head>"} <br />
          {"<title>Title of document</title>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {` some content here...`} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* XHTML Elements Must be Properly Nested */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Elements Must be Properly Nested
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, elements must always be properly nested within each other,
          like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<b><i>Some text</i></b>"}
        </Code>
      </div>

      {/* XHTML Elements Must Always be Closed */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Elements Must Always be Closed
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, elements must always be closed, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>This is a paragraph</p>"} <br />
          {"<p>This is another paragraph</p>"}
        </Code>
      </div>

      {/* XHTML Empty Elements Must Always be Closed */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Empty Elements Must Always be Closed
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, empty elements must always be closed, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"A break: <br />"} <br />
          {"A horizontal rule: <hr />"} <br />
          {`An image: <img src="happy.gif" alt="Happy face" />`}
        </Code>
      </div>

      {/* XHTML Elements Must be in Lowercase */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Elements Must be in Lowercase
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, element names must always be in lowercase, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<body>"}
          {"<p>This is a paragraph</p>"}
          {"</body>"}
        </Code>
      </div>

      {/* XHTML Attribute Names Must be in Lowercase */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Attribute Names Must be in Lowercase
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, attribute names must always be in lowercase, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`}
        </Code>
      </div>

      {/* XHTML Attribute Values Must be Quoted */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Attribute Values Must be Quoted
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, attribute values must always be quoted, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`}
        </Code>
      </div>

      {/* XHTML Attribute Minimization is Forbidden */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          XHTML Attribute Minimization is Forbidden
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In XHTML, attribute minimization is forbidden:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<input type="checkbox" name="vehicle" value="car" checked="checked" />`}{" "}
          <br />
          {`<input type="text" name="lastname" disabled="disabled" />`}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/url-encode"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> URL Encode
          </Button>
        </Link>
        <Link href={"/doc/html/forms"}>
          <Button variant={"default"} className="flex gap-3">
            Form <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
