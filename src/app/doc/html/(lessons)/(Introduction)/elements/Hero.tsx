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
                Elements
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Elements */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">Elements</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An HTML element is defined by a start tag, some content, and an end
          tag.
        </p>
        <Separator className="mt-5" />
      </div>
      {/* HTML Elements */}
      <div className="mt-7">
        <h1 className="text-[18px] text-[#09090b] font-bold">HTML Elements</h1>
        <p className="text-[16px] text-[#71717a] mt-1">
          The HTML element is everything from the start tag to the end tag:
        </p>

        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="border-l-5 border-[#33d45e]">
            {"<tagname>"} Content {"</tagname>"}
          </Code>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          Examples of some HTML elements:
        </p>
        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="border-l-5 border-[#33d45e]">
            {" "}
            {"<h1>"} My First Heading {"</h1>"}
          </Code>
        </div>
        <div className="my-3 text-[20px] text-[#71717a]">
          <Code color="success" className="border-l-5 border-[#33d45e]">
            {"<p>"} My First Paragraph {""}
            {"</p>"}
          </Code>
        </div>
      </div>

      {/* Nested HTML Elements */}

      <div>
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Nested Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-1">
          HTML elements can be nested (this means that elements can contain
          other elements). All HTML documents consist of nested HTML elements.
          The following example contains four HTML elements (
          <Code color="success" radius="full">
            {"<html>"}
          </Code>
          ,
          <Code color="success" radius="full">
            {"<body>"}
          </Code>{" "}
          ,{" "}
          <Code color="success" radius="full">
            {"<h1>"}
          </Code>{" "}
          and
          <Code color="success" radius="full">
            {"<p>"}
          </Code>
          ):
        </p>
        <h1 className="text-[18px] text-[#09090b] font-bold">Example</h1>
        <Code
          className="mt-2 w-full border-l-5 border-[#33d45e] p-3"
          color="success"
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
            The{" "}
            <Code color="success" radius="full">
              {"<html>"}
            </Code>{" "}
            element is the root element and it defines the whole HTML document.
            It has a start tag{" "}
            <Code color="success" radius="full">
              {"<html>"}
            </Code>{" "}
            and an end tag{" "}
            <Code color="success" radius="full">
              {"</html>"}
            </Code>
            . Then, inside the{" "}
            <Code color="success" radius="full">
              {"<html>"}
            </Code>{" "}
            element there is a{" "}
            <Code color="success" radius="full">
              {"<body>"}
            </Code>{" "}
            element:
          </p>

          <Code
            className="border-l-5 border-[#33d45e] mt-3 w-full p-3 "
            color="success"
          >
            {"<body>"} <br /> <br />
            {"<h1>My First Heading</h1>"} <br />
            {"<p>My first paragraph.</p>"} <br /> <br />
            {"<body>"}
          </Code>

          <p className="text-[16px] text-[#71717a] mt-3">
            The{" "}
            <Code color="success" radius="full">
              {"<body>"}
            </Code>{" "}
            element defines the document's body. It has a start tag{" "}
            <Code color="success" radius="full">
              {"<body>"}
            </Code>{" "}
            and an end tag{" "}
            <Code color="success" radius="full">
              {"</body>"}
            </Code>
            . Then, inside the{" "}
            <Code color="success" radius="full">
              {"<body>"}
            </Code>{" "}
            element there are two other elements:{" "}
            <Code color="success" radius="full">
              {"<h1>"}
            </Code>{" "}
            and{" "}
            <Code color="success" radius="full">
              {"<p>"}
            </Code>
            :
          </p>

          <Code
            className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
            color="success"
          >
            {"<h1>My First Heading</h1>"} <br />
            {"<p>My first paragraph.</p>"}
          </Code>

          <p className="text-[16px] text-[#71717a] my-3">
            The{" "}
            <Code color="success" radius="full">
              {"<h1>"}
            </Code>
            element defines a heading. It has a start tag{" "}
            <Code color="success" radius="full">
              {"<h1>"}
            </Code>{" "}
            and an end tag{" "}
            <Code color="success" radius="full">
              {"<h1>"}
            </Code>
            :
          </p>

          <Code
            className="border-l-5 border-[#33d45e] w-full p-3 "
            color="success"
            size="lg"
          >
            {"<h1>My First Heading</h1>"}
          </Code>

          <p className="text-[16px] text-[#71717a] my-3">
            The{" "}
            <Code color="success" radius="full">
              {"<p>"}
            </Code>{" "}
            element defines a paragraph. It has a start tag{" "}
            <Code color="success" radius="full">
              {"<p>"}
            </Code>{" "}
            and an end tag{" "}
            <Code color="success" radius="full">
              {"<p>"}
            </Code>{" "}
            :
          </p>

          <Code
            className="border-l-5 border-[#33d45e] w-full p-3 "
            color="success"
            size="lg"
          >
            {"<p>My first paragraph.</p>"}
          </Code>
        </div>
      </div>

      {/* Never Skip the End Tag */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Never Skip the End Tag
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Some HTML elements will display correctly, even if you forget the end
          tag:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {"<html>"} <br />
          {"<body>"} <br /> <br />
          {"<p>This is a paragraph"} <br />
          {"<p>This is a paragraph"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>
      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Empty HTML Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML elements with no content are called empty elements. The{" "}
          <Code color="success" radius="full">
            {"<br>"}
          </Code>{" "}
          tag defines a line break, and is an empty element without a closing
          tag:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {"<p>This is a <br> paragraph with a line break.</p>"}
        </Code>
      </div>
      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML is Not Case Sensitive
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML tags are not case sensitive:{" "}
          <Code color="success" radius="full">
            {"<p>"}
          </Code>{" "}
          means the same as{" "}
          <Code color="success" radius="full">
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
