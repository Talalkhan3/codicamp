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
                Pseudo-classes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Pseudo-classes */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Pseudo-classes</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Pseudo-classes in CSS are keywords added to selectors that specify a
          special state of the selected element, such as{" "}
          <Code color="success">:hover</Code> for mouse-over effects or{" "}
          <Code color="success">:nth-child</Code> for specific child elements.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What are Pseudo-classes? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What are Pseudo-classes?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A pseudo-class is used in CSS to define a special state of an element,
          enabling dynamic styling based on user interactions or conditions. For
          example, pseudo-classes can style an element when a user hovers over
          it <Code color="success">:hover</Code>, differentiate between visited
          and unvisited links <Code color="success">:visited</Code>
          and <Code color="success">:link</Code>, apply styles to an element
          when it gains focus <Code color="success">:focus</Code>, or style form
          elements based on their state, such as{" "}
          <Code color="success">:valid</Code>,{" "}
          <Code color="success">:invalid</Code>,{" "}
          <Code color="success">:required</Code>, or{" "}
          <Code color="success">:optional</Code>.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The syntax of pseudo-classes:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"selector:pseudo-class {"}
          <p className="pl-3">{"property: value;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Anchor Pseudo-classes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Anchor Pseudo-classes
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Links can be displayed in different ways:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/* unvisited link */"} <br />
          {"a:link {"}
          <p className="pl-3">{"color: #FF0000;"}</p>
          {"}"} <br /> <br />
          {"/* visited link */"} <br />
          {"a:visited {"}
          <p className="pl-3">{"color: #00FF00;"}</p>
          {"}"} <br /> <br />
          {"/* mouse over link */"} <br />
          {"a:hover {"}
          <p className="pl-3">{"color: #FF00FF;"}</p>
          {"}"} <br /> <br />
          {"/* selected link */"} <br />
          {"a:active {"}
          <p className="pl-3">{"color: #0000FF;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Pseudo-classes and HTML Classes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Pseudo-classes and HTML Classes
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Pseudo-classes can be combined with HTML classes: When you hover over
          the link in the example, it will change color:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a.highlight:hover {"}
          <p className="pl-3">{"color: #ff0000;"}</p>

          {"}"}
        </Code>
      </div>

      {/* Hover on <div> */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Hover on {"<div>"}
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An example of using the :hover pseudo-class on a{" "}
          <Code color="success">{"<div>"}</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div:hover {"}
          <p className="pl-3">{"background-color: blue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Simple Tooltip Hover */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Simple Tooltip Hover
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A simple tooltip hover in CSS displays extra information when hovering
          over an element. The tooltip is styled with{" "}
          <Code color="success">position: absolute</Code> and initially hidden
          using <Code color="success">opacity: 0</Code> and{" "}
          <Code color="success">visibility: hidden</Code>. On hover, it becomes
          visible with <Code color="success">opacity: 1</Code> and{" "}
          <Code color="success">visibility: visible</Code>.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".tooltip {"}
          <p className="pl-3">{"position: relative;"}</p>
          {"}"} <br /> <br />
          {".tooltip-text {"}
          <p className="pl-3">{"visibility: hidden;"}</p>
          <p className="pl-3">{"opacity: 0;"}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"bottom: 125%;"}</p>
          <p className="pl-3">{"left: 50%;"}</p>
          <p className="pl-3">{"transform: translateX(-50%);"}</p>
          <p className="pl-3">{"background: #333;"}</p>
          <p className="pl-3">{"color: #fff;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border-radius: 4px;"}</p>
          <p className="pl-3">{"transition: 0.3s;"}</p>
          {"}"} <br /> <br />
          {".tooltip:hover .tooltip-text {"}
          <p className="pl-3">{"visibility: visible;"}</p>
          <p className="pl-3">{"opacity: 1;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The :first-child Pseudo-class */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The :first-child Pseudo-class
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">:first-child</Code> pseudo-class matches a
          specified element that is the first child of another element.
        </p>{" "}
      </div>

      {/* Match the first <p> element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Match the first {"<p>"} element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the selector matches any {"<p>"} element
          that is the first child of any element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p:first-child {"}
          <p className="pl-3">{"color: blue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Match the first <i> element in all <p> elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Match the first {"<i>"} element in all {"<p>"} elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the selector matches the first {"<i>"}{" "}
          element in all {"<p>"} elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p i:first-child {"}
          <p className="pl-3">{"color: blue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Match all <i> elements in all first child <p> elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Match all {"<i>"} elements in all first child {"<p>"} elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the selector matches all {"<i>"} elements in{" "}
          {"<p>"} elements that are the first child of another element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p:first-child i {"}
          <p className="pl-3">{"color: blue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The :lang Pseudo-class */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The :lang Pseudo-class
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">:lang</Code> pseudo-class allows you to
          define special rules for different languages. In the example below,{" "}
          <Code color="success">:lang</Code> defines the quotation marks for{" "}
          {"<q>"} elements with lang="no":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"q:lang(no) {"}
          <p className="pl-3">{`quotes: "~" "~";`}</p>
          {"}"} <br />
          {`</style>`} <br />
          {`</head>`} <br />
          {`<body>`} <br /> <br />
          <p className="pl-3">{`<p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>`}</p>
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/combinations"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Combinations
          </Button>
        </Link>
        <Link href={"/doc/css/pseudo-elements"}>
          <Button variant={"outline"} className="flex gap-3">
            Pseudo Elements <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
