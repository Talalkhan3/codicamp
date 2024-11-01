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
                Syntax
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Syntax */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Syntax</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          A CSS rule consists of a selector and a declaration block.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Syntax */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">CSS Syntax</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The selector points to the HTML element you want to style. <br />
          The declaration block contains one or more declarations separated by
          semicolons. <br />
          Each declaration includes a CSS property name and a value, separated
          by a colon. <br />
          Multiple CSS declarations are separated with semicolons, and
          declaration blocks are surrounded by curly braces.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"}
          <p className="pl-4">{"color: red;"}</p>
          <p className="pl-4">{"text-align: center;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In CSS, the <Code color="success">{"p"}</Code> selector targets the
          HTML <Code color="success">{"<p>"}</Code> element, allowing you to
          apply specific styles to all paragraphs. A property like{" "}
          <Code color="success">{"color"}</Code> defines what aspect you want to
          style, such as text color, and the value red specifies that the text
          should appear in red. Similarly, the{" "}
          <Code color="success">{"text-align"}</Code> property controls the
          alignment of the text, with the value center indicating that the text
          should be centered within its container. Together, these properties
          and values shape the appearance and layout of HTML elements in a web
          page.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/introduction"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Introduction
          </Button>
        </Link>
        <Link href={"/doc/css/selectors"}>
          <Button variant={"outline"} className="flex gap-3">
            Selectors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
