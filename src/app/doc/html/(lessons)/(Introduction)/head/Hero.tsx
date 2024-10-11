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
                Head
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* The Head Element */}
      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Head Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"<head>"}</Code> element is a
          container for the following elements:{" "}
          <Code color="success">{"<title>"}</Code>,{" "}
          <Code color="success">{"<style>"}</Code>,{" "}
          <Code color="success">{"<meta>"}</Code>,{" "}
          <Code color="success">{"<link>"}</Code>,{" "}
          <Code color="success">{"<script>"}</Code>, and{" "}
          <Code color="success">{"<base>"}</Code>.
        </p>
        <Separator className="mt-5" />
      </div>
      {/* The HTML <head> Element */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<head>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<head>"}</Code> element is a container for
          metadata (data about data) and is placed between the{" "}
          <Code color="success">{"<html>"}</Code> tag and the{" "}
          <Code color="success">{"<body>"}</Code> tag. HTML metadata is data
          about the HTML document. Metadata is not displayed. Metadata typically
          define the document title, character set, styles, scripts, and other
          meta information.
        </p>
      </div>
      {/* The HTML <title> Element */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<title>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<title>"}</Code> element defines the title
          of the document. The title must be text-only, and it is shown in the
          browser's title bar or in the page's tab. The{" "}
          <Code color="success">{"<title>"}</Code> element is required in HTML
          documents! The content of a page title is very important for search
          engine optimization (SEO)! The page title is used by search engine
          algorithms to decide the order when listing pages in search results.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<title>"}</Code> element in HTML defines
          the title of a webpage, appearing in the browser's title bar or tab.
          This title is crucial as it not only helps users identify the page
          when multiple tabs are open but also displays in search engine
          results. When users bookmark the page, the{" "}
          <Code color="success">{"<title>"}</Code> element provides the default
          title for the bookmarked link. Its concise and descriptive content is
          essential for both user experience and SEO, influencing how the page
          is perceived and indexed by search engines.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          So, try to make the title as accurate and meaningful as possible!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<title>A Meaningful Page Title</title>"}</p>
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{"The content of the document......"}</p> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>
      {/* The HTML <style> Element */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<style>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<style>"}</Code> element is used to define
          style information for a single HTML page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<style>"}
          <p className="pl-3">{`body {background-color: powderblue;}`}</p>
          <p className="pl-3">{`h1 {color: red;}`}</p>
          <p className="pl-3">{`p {color: blue;}`}</p>
          {`</style>`}
        </Code>
      </div>
      {/* The HTML <link> Element */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<link>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<link>"}</Code> element defines the
          relationship between the current document and an external resource.
          The <Code color="success">{"<link>"}</Code> tag is most often used to
          link to external style sheets:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<link rel="stylesheet" href="mystyle.css">`}
        </Code>
      </div>
      {/* The HTML <meta> Element */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<meta>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<meta>"}</Code> element is typically used
          to specify the character set, page description, keywords, author of
          the document, and viewport settings. The metadata will not be
          displayed on the page, but is used by browsers (how to display content
          or reload page), by search engines (keywords), and other web services.
        </p>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            The character set used:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta charset="UTF-8">`}</Code>
        </div>
        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            keywords for search engines:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta name="keywords" content="HTML, CSS, JavaScript">`}</Code>
        </div>
        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            Description of your web page:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta name="description" content="Free Web tutorials">`}</Code>
        </div>
        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            the author of a page:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta name="author" content="John Doe">`}</Code>
        </div>
        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            Refresh document every 30 seconds:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta http-equiv="refresh" content="30">`}</Code>
        </div>
        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            {" "}
            Setting the viewport to make your website look good on all devices:
          </h1>
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</Code>
        </div>
        <p className="text-[16px] text-[#71717a] mt-3">
          Example of <Code color="success">{"<meta>"}</Code> tags:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta charset="UTF-8">`} <br />
          {`<meta name="description" content="Free Web tutorials">`} <br />
          {`<meta name="keywords" content="HTML, CSS, JavaScript">`} <br />
          {`<meta name="author" content="John Doe">`}
        </Code>
      </div>
      {/* Setting The Viewport */}\
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Setting The Viewport
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The viewport is the user's visible area of a web page. It varies with
          the device - it will be smaller on a mobile phone than on a computer
          screen. You should include the following{" "}
          <Code color="success">{"<meta>"}</Code> element in all your web pages:
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
          dimensions and scaling. <br /> The{" "}
          <Code color="success">{"width=device-width"}</Code> part sets the
          width of the page to follow the screen-width of the device (which will
          vary depending on the device). <br /> The{" "}
          <Code color="success">{"initial-scale=1.0"}</Code> part sets the
          initial zoom level when the page is first loaded by the browser.
        </p>
      </div>
      {/* The HTML <script> Elemen */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<script>"} Elemen
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The {"<script>"} element is used to define client-side JavaScripts.
          The following JavaScript writes "Hello JavaScript!" into an HTML
          element with id="demo":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<script>"} <br />
          {"function myFunction() {"}
          <p className="pl-3">{`document.getElementById("demo").innerHTML = "Hello JavaScript!";`}</p>
          {"}"} <br />
          {"</script>"}
        </Code>
      </div>
      {/* The HTML <base> Element */}\
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<base>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<base> "}</Code>
          element specifies the base URL and/or target for all relative URLs in
          a page. The <Code color="success">{"<base> "}</Code> tag must have
          either an href or a target attribute present, or both. There can only
          be one single <Code color="success">{"<base> "}</Code> element in a
          document!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<head>"} <br />
          {`<base href="https://www.w3schools.com/" target="_blank">`} <br />
          {"</head>"} <br /> <br />
          {"<body>"} <br />
          {`<img src="images/stickman.gif" width="24" height="39" alt="Stickman">`}{" "}
          <br />
          {`<a href="tags/tag_base.asp">HTML base Tag</a>`} <br />
          {"</body>"}
        </Code>
      </div>
    </ScrollArea>
  );
}

export default Hero;
