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
                Block & Inline
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Block & Inline */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">Block & Inline</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Every HTML element has a default display value, depending on what type
          of element it is. The two most common display values are block and
          inline.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Block-level Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Block-level Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A block-level element always starts on a new line, and the browsers
          automatically add some space (a margin) before and after the element.
          A block-level element always takes up the full width available
          (stretches out to the left and right as far as it can). Two commonly
          used block elements are: <Code color="success">{"<p>"}</Code> and{" "}
          <Code color="success">{"<div>"}</Code>. The{" "}
          <Code color="success">{"<p>"}</Code> element defines a paragraph in an
          HTML document. The <Code color="success">{"<div>"}</Code> element
          defines a division or a section in an HTML document.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<p>Hello World</p>"} <br />
          {"<div>Hello World</div>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here are the block-level elements in HTML:
        </p>
        <div className="grid grid-cols-7 justify-between items-center gap-3 mt-3">
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<address>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<article>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<aside>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<blockquote>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<canvas>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<dd>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<div>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<dl>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<dt>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<fieldset>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<figcaption>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<figure>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<footer>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<form>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<h1> - <h6>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<header>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<hr>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<li>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<main>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<nav>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<noscript>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<ol>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<p>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<pre>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<section>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<table>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<tfoot>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<ul>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<video>"}
          </Code>
        </div>
      </div>

      {/* Inline Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Inline Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An inline element does not start on a new line. An inline element only
          takes up as much width as necessary.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<span>Hello World</span>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here are the inline elements in HTML:
        </p>
        <div className="grid grid-cols-7 justify-between items-center gap-3 mt-3">
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<a>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<abbr>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<acronym>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<b>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<bdo>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<big>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<br>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<button>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<cite>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<code>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<dfn>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<em>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<i>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<img>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"input"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<kdb>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<label>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<map>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<object>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<output>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<q>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<samp>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<script>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<select>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<small>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<span>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<strong>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<sub>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<sup>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<textarea>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<time>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<tt>"}
          </Code>
          <Code
            color="success"
            className="p-2 items-center flex justify-center"
          >
            {"<var>"}
          </Code>
        </div>
      </div>

      {/* The <div> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<div>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<div>"}</Code>
          element is often used as a container for other HTML elements. The{" "}
          <Code color="success">{"<div>"}</Code> element has no required
          attributes, but style, class and id are common. When used together
          with CSS, the <Code color="success">{"<div>"}</Code> element can be
          used to style blocks of content:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<div style="background-color:black;color:white;padding:20px;">`}{" "}
          <br />
          {"  <h2>London</h2>"} <br />
          {
            "<p>London is the capital city of England. It is the most populous city in the United Kingdom,"
          }{" "}
          <br />
          {"with a metropolitan area of over 13 million inhabitants.</p>"}{" "}
          <br />
          {"</div>"}
        </Code>
      </div>

      {/* The <span> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<span>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<span>"}</Code> element is an inline
          container used to mark up a part of a text, or a part of a document.
          The <Code color="success">{"<span>"}</Code> element has no required
          attributes, but style, class and id are common. When used together
          with CSS, the <Code color="success">{"<span>"}</Code> element can be
          used to style parts of the text:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<p>My mother has `} <br />{" "}
          {`<span style="color:blue;font-weight:bold;"> `} <br />{" "}
          {`blue</span> eyes and my father has `} <br />
          {` <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.`}{" "}
          <br />
          {`</p>`}
        </Code>
      </div>

      {/* Summary  */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Block-level elements always begin on a new line and occupy the entire
          width available, whereas inline elements stay within the flow of the
          text and only take up the necessary width. The{" "}
          <Code color="success">{"<div>"}</Code> tag is a block-level element
          frequently used as a structural container for other HTML elements,
          while the <Code color="success">{"<span>"}</Code> tag is an inline
          container commonly used to apply styling or functionality to a
          specific part of text within a document. Both are essential for
          managing layout and presentation in web development.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/lists"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Lists
          </Button>
        </Link>
        <Link href={"/doc/html/div"}>
          <Button variant={"outline"} className="flex gap-3">
            Div <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
