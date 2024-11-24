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
    <ScrollArea className="w-full h-[90vh] pr-10 max-md:px-0">
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
                Elements
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/*  Elements */}

      <div className="mt-10 ">
        <h1 className="text-[40px] text-[#09090b] font-bold">Elements</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An HTML element is defined by a start tag, some content, and an end
          tag.
        </p>
        <Separator className="mt-5" />
      </div>
      {/* HTML Elements */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          HTML Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML element is everything from the start tag to the end tag:
        </p>

        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="w-full border-l-5 border-[#33d45e] p-3">
            {"<tagname>"} Content {"</tagname>"}
          </Code>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          Examples of some HTML elements:
        </p>
        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="w-full border-l-5 border-[#33d45e] p-3">
            {" "}
            {"<h1>"} My First Heading {"</h1>"}
          </Code>
        </div>
        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="w-full border-l-5 border-[#33d45e] p-3">
            {"<p>"} My First Paragraph {""}
            {"</p>"}
          </Code>
        </div>
      </div>

      {/* Nested HTML Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Nested Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML elements can be nested (this means that elements can contain
          other elements). All HTML documents consist of nested HTML elements.
          The following example contains four HTML elements (
          <Code color="success">{"<html>"}</Code>,
          <Code color="success">{"<body>"}</Code> ,{" "}
          <Code color="success">{"<h1>"}</Code> and
          <Code color="success">{"<p>"}</Code>
          ):
        </p>
        <h1 className="text-[18px] text-[#09090b] font-bold">Example</h1>
        <Code
          className="mt-2 w-full border-l-5 border-[#33d45e] p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<body>"} <br /> <br />
          {"<h1>My First Heading</h1>"} <br />
          {"<p>My first paragraph.</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <div className="mt-3">
          <p className="text-[16px] text-[#71717a]">
            The <Code color="success">{"<html>"}</Code> element is the root
            element and it defines the whole HTML document. It has a start tag{" "}
            <Code color="success">{"<html>"}</Code> and an end tag{" "}
            <Code color="success">{"</html>"}</Code>. Then, inside the{" "}
            <Code color="success">{"<html>"}</Code> element there is a{" "}
            <Code color="success">{"<body>"}</Code> element:
          </p>

          <Code
            className="border-l-5 border-[#33d45e] mt-3 w-full p-3 "
            color="success"
            size="md"
          >
            {"<body>"} <br /> <br />
            {"<h1>My First Heading</h1>"} <br />
            {"<p>My first paragraph.</p>"} <br /> <br />
            {"<body>"}
          </Code>

          <p className="text-[16px] text-[#71717a] mt-3">
            The <Code color="success">{"<body>"}</Code> element defines the
            document's body. It has a start tag{" "}
            <Code color="success">{"<body>"}</Code> and an end tag{" "}
            <Code color="success">{"</body>"}</Code>. Then, inside the{" "}
            <Code color="success">{"<body>"}</Code> element there are two other
            elements: <Code color="success">{"<h1>"}</Code> and{" "}
            <Code color="success">{"<p>"}</Code>:
          </p>

          <Code
            className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
            color="success"
            size="md"
          >
            {"<h1>My First Heading</h1>"} <br />
            {"<p>My first paragraph.</p>"}
          </Code>

          <p className="text-[16px] text-[#71717a] my-3">
            The <Code color="success">{"<h1>"}</Code>
            element defines a heading. It has a start tag{" "}
            <Code color="success">{"<h1>"}</Code> and an end tag{" "}
            <Code color="success">{"<h1>"}</Code>:
          </p>

          <Code
            className="border-l-5 border-[#33d45e] w-full p-3 "
            color="success"
            size="md"
          >
            {"<h1>My First Heading</h1>"}
          </Code>

          <p className="text-[16px] text-[#71717a] my-3">
            The <Code color="success">{"<p>"}</Code> element defines a
            paragraph. It has a start tag <Code color="success">{"<p>"}</Code>{" "}
            and an end tag <Code color="success">{"<p>"}</Code> :
          </p>

          <Code
            className="border-l-5 border-[#33d45e] w-full p-3 "
            color="success"
            size="md"
          >
            {"<p>My first paragraph.</p>"}
          </Code>
        </div>
      </div>

      {/* Never Skip the End Tag */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Never Skip the End Tag
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Some HTML elements will display correctly, even if you forget the end
          tag:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<body>"} <br /> <br />
          {"<p>This is a paragraph"} <br />
          {"<p>This is a paragraph"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Empty HTML Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML elements with no content are called empty elements. The{" "}
          <Code color="success">{"<br>"}</Code> tag defines a line break, and is
          an empty element without a closing tag:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>This is a <br> paragraph with a line break.</p>"}
        </Code>
      </div>
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          HTML is Not Case Sensitive
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML tags are not case sensitive:{" "}
          <Code color="success">
            {"<p>"}
          </Code>{" "}
          means the same as{" "}
          <Code color="success">
            {"<p>"}
          </Code>
        </p>
      </div>
      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/basic"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Basic
          </Button>
        </Link>
        <Link href={"/doc/html/attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            Attributes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
