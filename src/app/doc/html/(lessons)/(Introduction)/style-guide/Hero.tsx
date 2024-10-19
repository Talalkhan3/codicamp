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
                Style Guide
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/*  Style Guide */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">Style Guide</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          A consistent, clean, and tidy HTML code makes it easier for others to
          read and understand your`` code. Here are some guidelines and tips for
          creating good HTML code.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Always Declare Document Type */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Always Declare Document Type
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Always declare the document type as the first line in your document.
          The correct document type for HTML is:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"}
        </Code>
      </div>

      {/* Use Lowercase Element Names */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Use Lowercase Element Names
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML allows mixing uppercase and lowercase letters in element names.{" "}
          <br />
          Developers generally prefer using lowercase names because it looks
          cleaner, is easier to write, and avoids the inconsistency of mixing
          uppercase and lowercase, which can make code look messy.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<body>"}
          <p className="pl-3">{"<p>This is a paragraph.</p>"}</p>
          {"</body>"}
        </Code>
      </div>

      {/* Close All HTML Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Close All HTML Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In HTML, you do not have to close all elements (for example the{" "}
          <Code color="success">{"<p>"}</Code> element). However, we strongly
          recommend closing all HTML elements, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<section>"}
          <p className="pl-3">{"<p>This is a paragraph.</p>"}</p>
          <p className="pl-3"> {"<p>This is a paragraph.</p>"}</p>
          {"</section>"}
        </Code>
      </div>

      {/* Use Lowercase Attribute Names */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Use Lowercase Attribute Names
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML allows mixing uppercase and lowercase letters in attribute names.
          However, we recommend using lowercase attribute names, because Mixing
          uppercase and lowercase names tends to look bad, which is why
          developers usually prefer using lowercase names. It looks cleaner and
          is easier to write.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`}
        </Code>
      </div>

      {/* Always Quote Attribute Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Always Quote Attribute Values
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML allows attribute values without quotes. However, we recommend
          quoting attribute values, because Developers typically quote attribute
          values because quoted values are easier to read, and it's mandatory to
          use quotes if the value contains spaces.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<table class="striped">`}
        </Code>
      </div>

      {/* Always Specify alt, width, and height for Images */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Always Specify alt, width, and height for Images
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Always specify the alt attribute for images. This attribute is
          important if the image for some reason cannot be displayed. Also,
          always define the width and height of images. This reduces flickering,
          because the browser can reserve space for the image before loading.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">`}
        </Code>
      </div>

      {/* Spaces and Equal Signs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Spaces and Equal Signs
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML allows spaces around equal signs. But space-less is easier to
          read and groups entities better together.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<link rel="stylesheet" href="styles.css">`}
        </Code>
      </div>

      {/* Avoid Long Code Lines */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Avoid Long Code Lines
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          When using an HTML editor, it is NOT convenient to scroll right and
          left to read the HTML code. Try to avoid too long code lines.
        </p>
      </div>

      {/* Blank Lines and Indentation */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Blank Lines and Indentation
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Do not add blank lines, spaces, or indentations without a reason. For
          readability, add blank lines to separate large or logical code blocks.
          For readability, add two spaces of indentation. Do not use the tab
          key.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<body>"} <br />
          {"<h1>Famous Cities</h1>"} <br /> <br />
          {"<h2>Tokyo</h2>"} <br />
          {
            "<p>Tokyo is the capital of Japan, the center of the Greater"
          } <br />{" "}
          {
            "Tokyo Area, and the most populous metropolitan area in the world.</p>"
          }{" "}
          <br /> <br />
          {"<h2>London</h2>"} <br />
          {
            "<p>London is the capital city of England. It is the most populous"
          }{" "}
          <br />
          {"city in the United Kingdom.</p>"} <br /> <br />
          {"<h2>Paris</h2>"} <br />
          {
            "<p>Paris is the capital of France. The Paris area is one of the"
          }{" "}
          <br />
          {"largest population centers in Europe.</p>"} <br />
          {"</body>"}
        </Code>
      </div>

      {/* Never Skip the <title> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Never Skip the {"<title>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<title>"}</Code> element is required in
          HTML. The contents of a page title is very important for search engine
          optimization (SEO)! The page title is used by search engine algorithms
          to decide the order when listing pages in search results. The{" "}
          <Code color="success">{"<title>"}</Code> element Defines a title in
          the browser toolbar, provides a title for the page when added to
          favorites, and displays a title for the page in search engine results.{" "}
          <br /> <br />
          So, try to make the title as accurate and meaningful as possible:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<title>HTML Style Guide and Coding Conventions</title>"}
        </Code>
      </div>

      {/* Omitting <html> and <body>? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Omitting {"<html>"} and {"<body>"}?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An HTML page will validate without the{" "}
          <Code color="success">{"<html>"}</Code> and{" "}
          <Code color="success">{"<body>"}</Code> tags:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<title>Page Title</title>"}</p>
          {"</head>"} <br /> <br />
          {"<h1>This is a heading</h1>"} <br />
          {"<p>This is a paragraph.</p>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          However, we strongly recommend to always add the{" "}
          <Code color="success">{"<html>"}</Code> and{" "}
          <Code color="success">{"<body>"}</Code> tags! Omitting{" "}
          <Code color="success">{"<body>"}</Code> can produce errors in older
          browsers. Omitting <Code color="success">{"<html>"}</Code> and{" "}
          <Code color="success">{"<body>"}</Code> can also crash DOM and XML
          software.
        </p>
      </div>

      {/* Omitting <head>? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Omitting {"<head>"}?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<head>"}</Code> tag can also be
          omitted. Browsers will add all elements before{" "}
          <Code color="success">{"<body>"}</Code>, to a default{" "}
          <Code color="success">{"<head>"}</Code> element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"}
          <p className="pl-3">{"<title>Page Title</title>"}</p>
          {"<body>"} <br /> <br />
          {"<h1>This is a heading</h1>"} <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          However, we recommend using the{" "}
          <Code color="success">{"<head>"}</Code> tag.
        </p>
      </div>

      {/* Close Empty HTML Elements? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Close Empty HTML Elements?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In HTML, it is optional to close empty elements.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<meta charset="utf-8">`}</Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you expect XML/XHTML software to access your page, keep the closing
          slash (/), because it is required in XML and XHTML.
        </p>
      </div>

      {/* Add the lang Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Add the lang Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You should always include the <Code color="success">{"lang"}</Code>{" "}
          attribute inside the <Code color="success">{"<html>"}</Code> tag, to
          declare the language of the Web page. This is meant to assist search
          engines and browsers.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {`<html lang="en-us">`}
          <p className="pl-3">{"<title>Page Title</title>"}</p>
          {"<body>"} <br /> <br />
          {"<h1>This is a heading</h1>"} <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Meta Data */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Meta Data</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To ensure proper interpretation and correct search engine indexing,
          both the language and the character encoding{" "}
          {`<meta charset="charset">`} should be defined as early as possible in
          an HTML document:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"}
          {`<html lang="en-us">`}
          {"<head>"}
          <p className="pl-3">{` <meta charset="UTF-8">`}</p>
          <p className="pl-3">{" <title>Page Title</title>"}</p>
          {"</head>"}
        </Code>
      </div>

      {/* Setting The Viewport */}

      <div className="mt-7">
        <h1>Setting The Viewport</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The viewport is the user's visible area of a web page. It varies with
          the device - it will be smaller on a mobile phone than on a computer
          screen. You should include the following {"<meta>"} element in all
          your web pages:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This gives the browser instructions on how to control the page's
          dimensions and scaling. The{" "}
          <Code color="success">{"width=device-width"}</Code> part sets the
          width of the page to follow the screen-width of the device (which will
          vary depending on the device). The{" "}
          <Code color="success">{"initial-scale=1.0"}</Code> part sets the
          initial zoom level when the page is first loaded by the browser.
        </p>
      </div>

      {/* HTML Comments */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">HTML Comments </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Short comments should be written on one line, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!-- This is a comment -->"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Comments that spans more than one line, should be written like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!--"} <br />
          {
            "This is a long comment example. This is a long comment example."
          }{" "}
          <br />
          {
            "This is a long comment example. This is a long comment example."
          }{" "}
          <br />
          {"-->"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Long comments are easier to observe if they are indented with two
          spaces.
        </p>
      </div>

      {/* Using Style Sheets */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using Style Sheets
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Use simple syntax for linking to style sheets (the type attribute is
          not necessary):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<link rel="stylesheet" href="styles.css">`}</Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Short CSS rules can be written compressed, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p.intro"}
          {"{"}
          {`font-family:Verdana;`}
          {`font-size:16em;`}
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Long CSS rules should be written over multiple lines:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"body {"}
          <p className="pl-3">{" background-color: lightgrey;"}</p>
          <p className="pl-3">{` font-family: "Arial Black", Helvetica, sans-serif;`}</p>
          <p className="pl-3">{"font-size: 16em;"}</p>
          <p className="pl-3">{"color: black;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Loading JavaScript in HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Loading JavaScript in HTML
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Use simple syntax for loading external scripts (the type attribute is
          not necessary):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<script src="myscript.js">`}</Code>
      </div>

      {/* Accessing HTML Elements with JavaScript */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Accessing HTML Elements with JavaScript
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Using "untidy" HTML code can result in JavaScript errors. These two
          JavaScript statements will produce different results:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {` getElementById("Demo").innerHTML = "Hello";`} <br /> <br />
          {`getElementById("demo").innerHTML = "Hello";`}
        </Code>
      </div>

      {/* Use Lower Case File Names */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Use Lower Case File Names
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Some web servers (Apache, Unix) are case sensitive about file names:
          "london.jpg" cannot be accessed as "London.jpg". Other web servers
          (Microsoft, IIS) are not case sensitive: "london.jpg" can be accessed
          as "London.jpg". If you use a mix of uppercase and lowercase, you have
          to be aware of this. If you move from a case-insensitive to a
          case-sensitive server, even small errors will break your web! To avoid
          these problems, always use lowercase file names!
        </p>
      </div>

      {/* File Extensions */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          File Extensions
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML files should have a <strong>.html</strong> extension (.htm is
          allowed). <br /> <br /> CSS files should have a <strong>.css</strong>{" "}
          extension. <br /> <br />
          JavaScript files should have a <strong>.js</strong> extension.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/semantics"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Semantics
          </Button>
        </Link>
        <Link href={"/doc/html/entities"}>
          <Button variant={"outline"} className="flex gap-3">
            Entities <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
