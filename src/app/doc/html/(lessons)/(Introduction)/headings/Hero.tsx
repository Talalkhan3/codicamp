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
                Headings
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Headings */}
      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Headings</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML headings are titles or subtitles that you want to display on a
          webpage.
        </p>
        <Code
          color="success"
          className="w-full flex flex-col gap-y-3 p-4 border-l-5 border-[#33d45e] my-3"
        >
          <h1 className="text-[2.125rem]">Heading 1</h1>
          <h2 className="text-[1.875rem]">Heading 1</h2>
          <h3 className="text-[1.5rem]">Heading 1</h3>
          <h4 className="text-[1.25rem]">Heading 1</h4>
          <h5 className="text-[1.125rem]">Heading 1</h5>
          <h6 className="text-[1rem]">Heading 1</h6>
        </Code>
      </div>

      {/* HTML Headings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">HTML Headings</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-2">
          {" "}
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
          defines the least important heading.
        </p>
        <Code
          className="p-4 w-full border-l-5 border-[#33d45e] my-3"
          color="success"
        >
          {`<h1>Heading 1</h1>`} <br />
          {`<h2>Heading 2</h2>`} <br />
          {`<h3>Heading 3</h3>`} <br />
          {`<h4>Heading 4</h4>`} <br />
          {`<h5>Heading 5</h5>`} <br />
          {`<h6>Heading 6</h6>`} <br />
        </Code>
      </div>

      {/* Headings Are Important */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Headings Are Important
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-2">
          {" "}
          Search engines use the headings to index the structure and content of
          your web pages. Users often skim a page by its headings. It is
          important to use headings to show the document structure.
          <Code color="success" radius="full">
            {"<h1>"}
          </Code>{" "}
          headings should be used for main headings, followed by{" "}
          <Code color="success" radius="full">
            {"<h2>"}
          </Code>{" "}
          headings, then the less important{" "}
          <Code color="success" radius="full">
            {"<h3>"}
          </Code>{" "}
          , and so on.
        </p>
      </div>

      {/* Bigger Headings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Bigger Headings
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-2">
          Each HTML heading has a default size. However, you can specify the
          size for any heading with the style attribute, using the CSS font-size
          property:
        </p>
        <Code
          color="success"
          className="w-full flex flex-col gap-y-3 p-4 border-l-5 border-[#33d45e] my-3"
        >
          {`<h1 style="font-size:60px;">Heading 1</h1>`}
        </Code>
      </div>
      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Attributes
          </Button>
        </Link>
        <Link href={"/doc/html/paragraphs"}>
          <Button variant={"outline"} className="flex gap-3">
            Paragraphs <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
