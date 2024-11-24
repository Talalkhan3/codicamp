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
                Combinations
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Combinators */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Combinators</h1>
        <Separator />
      </div>

      {/* CSS Combinators */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Combinators
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A CSS selector can include multiple simple selectors combined with
          combinators, which define the relationships between elements. The four
          main combinators in CSS are: the descendant combinator (space), which
          selects all descendants of an element; the child combinator (
          <Code color="success">{">"}</Code>) , which selects direct children of
          an element; the next sibling combinator (
          <Code color="success">+</Code>), which selects the immediately
          following sibling of an element; and the subsequent-sibling combinator
          (<Code color="success">~</Code>), which selects all siblings that come
          after a specified element. These combinators allow for precise
          targeting of elements within the DOM.
        </p>
      </div>

      {/* Descendant Combinator */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Descendant Combinator
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The descendant combinator matches all elements that are descendants of
          a specified element. The following example selects all{" "}
          <Code color="success">{"<p>"}</Code> elements inside{" "}
          <Code color="success">{"<div>"}</Code> elements:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div p {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Child Combinator (>) */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Child Combinator {"(>)"}
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The child combinator selects all elements that are the children of a
          specified element. The following example selects all{" "}
          <Code color="success">{"<p>"}</Code> elements that are children of a{" "}
          <Code color="success">{"<div>"}</Code> elements:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div > p {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Next Sibling Combinator (+) */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Next Sibling Combinator (+)
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The next sibling combinator is used to select an element that is
          directly after another specific element. Sibling elements must have
          the same parent element, and "adjacent" means "immediately following".
          The following example selects the first{" "}
          <Code color="success">{"<p>"}</Code> element that are placed
          immediately after <Code color="success">{"<div>"}</Code> elements:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div + p {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Subsequent-sibling Combinator (~) */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Subsequent-sibling Combinator (~)
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The subsequent-sibling combinator selects all elements that are next
          siblings of a specified element. The following example selects the
          first <Code color="success">{"<p>"}</Code> elements that are next
          siblings of <Code color="success">{"<div>"}</Code> elements:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div ~ p {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/align"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Align
          </Button>
        </Link>
        <Link href={"/doc/css/pseudo-classes"}>
          <Button variant={"outline"} className="flex gap-3">
            Pseudo Classes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
