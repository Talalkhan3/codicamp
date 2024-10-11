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
            <BreadcrumbLink href="/doc/html">HTML</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Semantics
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Semantic Elements */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Semantic Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Semantic elements = elements with a meaning.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What are Semantic Elements? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What are Semantic Elements?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A semantic element clearly describes its meaning to both the browser
          and the developer. Examples of non-semantic elements: {"<div>"} and{" "}
          {"<span>"} - Tells nothing about its content. Examples of semantic
          elements: {"<form>"}, {"<table>"}, and {"<article>"} - Clearly defines
          its content.
        </p>
      </div>

      {/* Semantic Elements in HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Semantic Elements in HTML
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Many web sites contain HTML code like: {`<div id="nav">`}{" "}
          {`<div class="header">`} {`<div id="footer">`} to indicate navigation,
          header, and footer. In HTML there are some semantic elements that can
          be used to define different parts of a web page:{" "}
        </p>
        <ul className="flex flex-col gap-2 mt-5">
          <li className="flex items-center gap-2">
            1<Code color="success">{`<article>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            2<Code color="success">{`<aside>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            3 <Code color="success">{`<details>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            4<Code color="success">{`<figcaption>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            5 <Code color="success">{`<figure>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            6<Code color="success">{`<footer>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            7<Code color="success">{`<header>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            8<Code color="success">{`<main>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            9 <Code color="success">{`<mark>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            10 <Code color="success">{`<nav>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            11 <Code color="success">{`<section>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            12<Code color="success">{`<summary>`}</Code>
          </li>
          <li className="flex items-center gap-2">
            13 <Code color="success">{`<time>`}</Code>
          </li>
        </ul>
      </div>

      {/* HTML <section> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<section>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<section>"}</Code> element defines a
          section in a document. According to W3C's HTML documentation: "A
          section is a thematic grouping of content, typically with a heading."
          Examples of where a <Code color="success">{"<section>"}</Code> element
          can be used:
        </p>
        <ul className="flex flex-col gap-2 mt-5 ml-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Chapters</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Introduction </h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">News items</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Contact information</h1>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          A web page could normally be split into sections for introduction,
          content, and contact information.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<section>"} <br />
          {"<h1>WWF</h1>"} <br />
          {
            "<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding"
          }{" "}
          <br />{" "}
          {
            " the conservation, research and restoration of the environment, formerly "
          }{" "}
          <br />{" "}
          {" named the World Wildlife Fund. WWF was founded in 1961.</p>"}{" "}
          <br />
          {"</section>"} <br /> <br />
          {"<section>"} <br />
          {"<h1>WWF's Panda symbol</h1>"} <br />
          {
            "<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from "
          }{" "}
          <br />
          {
            " a panda named Chi Chi that was transferred from the Beijing Zoo to "
          }{" "}
          <br />
          {
            " the London Zoo in the same year of the establishment of WWF.</p>"
          }{" "}
          <br />
          {"</section>"}
        </Code>
      </div>

      {/* HTML <article> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<article>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<article>"}</Code> element specifies
          independent, self-contained content. An article should make sense on
          its own, and it should be possible to distribute it independently from
          the rest of the web site. Examples of where the{" "}
          <Code color="success">{"<article>"}</Code> element can be used:
        </p>
        <ul className="flex flex-col gap-2 mt-5 ml-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Forum posts</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Blog posts </h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">User comments</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Product cards</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a] ">Newspaper articless</h1>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<article>"} <br />
          {"<h2>Google Chrome</h2>"} <br />
          {
            "<p>Google Chrome is a web browser developed by Google, released in 2008."
          }{" "}
          <br /> {" Chrome is the world's most popular web browser today!</p>"}
          {"</article>"} <br /> <br />
          {"<article>"} <br />
          {"<h2>Mozilla Firefox</h2>"} <br />
          {
            "<p>Mozilla Firefox is an open-source web browser developed by Mozilla. "
          }{" "}
          <br />
          {
            " Firefox has been the second most popular web browser since January, 2018.</p>"
          }
          {"</article>"} <br /> <br />
          {"<article>"} <br />
          {"<h2>Microsoft Edge</h2>"} <br />
          {
            "<p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. :"
          }{" "}
          <br />
          {" Microsoft Edge replaced Internet Explorer.</p>"}
          {"</article>"}
        </Code>
      </div>

      {/* Nesting <article> in <section> or Vice Versa? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Nesting {"<article>"} in {"<section>"} or Vice Versa?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<article>"}</Code> element specifies
          independent, self-contained content. The{" "}
          <Code color="success">{"<section>"}</Code> element defines section in
          a document. Can we use the definitions to decide how to nest those
          elements? No, we cannot! So, you will find HTML pages with{" "}
          <Code color="success">{"<section>"}</Code> elements containing{" "}
          <Code color="success">{"<article>"}</Code> elements, and{" "}
          <Code color="success">{"<article>"}</Code> elements containing{" "}
          <Code color="success">{"<section>"}</Code> elements.
        </p>
      </div>

      {/* HTML <header> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<header>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<header>"}</Code> element represents a
          container for introductory content or a set of navigational links.You
          can have several <Code color="success">{"<header>"}</Code> elements in
          one HTML document. However, <Code color="success">{"<header>"}</Code>{" "}
          cannot be placed within a <Code color="success">{"<footer>"}</Code>,{" "}
          <Code color="success">{"<address>"}</Code> or another{" "}
          <Code color="success">{"<header>"}</Code> element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<article>"} <br />
          {"  <header>"}
          <p className="pl-3">{"<h1>What Does WWF Do?</h1>"}</p>
          <p className="pl-3">{"<p>WWF's mission:</p>"}</p>
          {"</header>"}
          <p className="pl-3">
            {
              "<p>WWF's mission is to stop the degradation of our planet's natural environment,"
            }
          </p>
          <p className="pl-3">
            {
              "and build a future in which humans live in harmony with nature.</p>"
            }
          </p>
          {"</article>"}
        </Code>
      </div>

      {/* HTML <footer> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<footer>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<footer>"}</Code> element defines a footer
          for a document or section. You can have several{" "}
          <Code color="success">{"<footer>"}</Code> elements in one document.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<footer>"} <br />
          <p className="pl-3">{"<p>Author: Hege Refsnes</p>"}</p>
          <p className="pl-3">{`<p><a href="mailto:hege@example.com">hege@example.com</a></p>`}</p>
          {"</footer>"}
        </Code>
      </div>

      {/* HTML <nav> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<nav>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The {"<nav>"} element defines a set of navigation links.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<nav>"}
          <p className="pl-3">{`<a href="/html/">HTML</a>`} </p>
          <p className="pl-3">{`<a href="/css/">CSS</a>`}</p>
          <p className="pl-3">{`<a href="/js/">JavaScript</a>`} </p>
          <p className="pl-3">{`<a href="/jquery/">jQuery</a>`}</p>
          {"</nav>"}
        </Code>
      </div>

      {/* HTML <aside> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<aside>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<aside>"}</Code> element defines some
          content aside from the content it is placed in (like a sidebar). The{" "}
          <Code color="success">{"<aside>"}</Code> content should be indirectly
          related to the surrounding content.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p className="pl-3">
            {"<p>My family and I visited The Epcot center this summer. "}
          </p>
          <p className="pl-3">
            {
              "The weather was nice, and Epcot was amazing! I had a great summer"
            }
          </p>
          <p className="pl-3">{"together with my family!</p>"}</p>
          {"<aside>"} <br />
          {"<h4>Epcot Center</h4>"}
          <p className="pl-3">
            {
              "<p>Epcot is a theme park at Walt Disney World Resort featuring exciting"
            }
          </p>
          <p className="pl-3">
            {
              "attractions, international pavilions, award-winning fireworks and"
            }{" "}
          </p>
          <p className="pl-3">{"seasonal special events.</p>"}</p>
          {"</aside>"}
        </Code>
      </div>

      {/* HTML <figure> and <figcaption> Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<figure>"} and {"<figcaption>"} Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<figure>"}</Code> tag specifies
          self-contained content, like illustrations, diagrams, photos, code
          listings, etc. The <Code color="success">{"<figcaption>"}</Code> tag
          defines a caption for a <Code color="success">{"<figure>"}</Code>{" "}
          element. The <Code color="success">{"<figcaption>"}</Code> element can
          be placed as the first or as the last child of a{" "}
          <Code color="success">{"<figure>"}</Code> element. The{" "}
          <Code color="success">{"<img>"}</Code> element defines the actual
          image/illustration.{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<figure>"}
          <p className="pl-3">{`<img src="pic_trulli.jpg" alt="Trulli">`}</p>
          <p className="pl-3">
            {"<figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>"}
          </p>
          {"</figure>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/computer-code"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Computer Code
          </Button>
        </Link>
        <Link href={"/doc/html/style-guide"}>
          <Button variant={"outline"} className="flex gap-3">
            Style Guide <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
