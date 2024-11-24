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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-3 max-sm:px-0">
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
                Counters
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Counters */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold"> Counters</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS counters are "variables" maintained by CSS whose values can be
          incremented by CSS rules (to track how many times they are used).
          Counters let you adjust the appearance of content based on its
          placement in the document.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Automatic Numbering With Counters */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Automatic Numbering With Counters
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS counters function like variables that track and increment values
          based on CSS rules. They are created or reset using the
          <Code color="success">counter-reset</Code> property, incremented with{" "}
          <Code color="success">counter-increment</Code>, and their values can
          be displayed using the <Code color="success">content</Code> property
          with the <Code color="success">counter()</Code> or{" "}
          <Code color="success">counters()</Code> function. To use a CSS
          counter, you must initialize it with{" "}
          <Code color="success">counter-reset</Code>. For example, a counter can
          be created in the <Code color="success">body</Code> selector and
          incremented for each {"<h2>"} element, allowing "Section{" "}
          {"<counter value>:"}" to be dynamically added to the beginning of each{" "}
          <Code color="success">{"<h2>"}</Code> element, creating an
          automatically numbered structure.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"counter-reset: section;"}</p>
          {"}"} <br /> <br />
          {"h2::before {"}
          <p className="pl-3">{`counter-increment: section;`}</p>
          <p className="pl-3">{`content: "Section " counter(section) ": ";`}</p>
          {"}"}
        </Code>
      </div>

      {/* Nesting Counters */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Nesting Counters
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example creates one counter for the page (section) and
          one counter for each <Code color="success">{"<h1>"}</Code> element
          (subsection). The "section" counter will be counted for each{" "}
          <Code color="success">{"<h1>"}</Code> element with "Section{" "}
          {"<value of the section counter>"}.", and the "subsection" counter
          will be counted for each <Code color="success">{"<h1>"}</Code> element
          with "
          {"<value of the section counter>.<value of the subsection counter>"}":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{"counter-reset: section;"}</p>
          {"}"} <br /> <br />
          {"h1 {"}
          <p className="pl-3">{"counter-reset: subsection;"}</p>
          {"}"} <br /> <br />
          {"h1::before {"}
          <p className="pl-3">{"counter-increment: section;"}</p>
          <p className="pl-3">{`content: "Section " counter(section) ". ";`}</p>
          {"}"} <br /> <br />
          {"h2::before {"}
          <p className="pl-3">{"counter-increment: subsection;"}</p>
          <p className="pl-3">{`content: counter(section) "." counter(subsection) " ";`}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          A counter can also be useful to make outlined lists because a new
          instance of a counter is automatically created in child elements. Here
          we use the <Code color="success">counters()</Code> function to insert
          a string between different levels of nested counters:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ol {"}
          <p className="pl-3">{"counter-reset: section;"}</p>
          <p className="pl-3">{"list-style-type: none;"}</p>
          {"}"} <br /> <br />
          {"li::before {"}
          <p className="pl-3">{"counter-increment: section;"}</p>
          <p className="pl-3">{`content: counters(section,".") " ";`}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/forms"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Forms
          </Button>
        </Link>
        <Link href={"/doc/css/website-layout"}>
          <Button variant={"outline"} className="flex gap-3">
            Website Layout <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
