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
import { CircleIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-0">
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
                CSS
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* CSS */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">CSS</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS stands for <strong>Cascading Style Sheets</strong>. <br /> CSS
          saves a lot of work. It can control the layout of multiple web pages
          all at once.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is CSS? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What is CSS?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Cascading Style Sheets (CSS) is used to format the layout of a
          webpage. <br /> <br />
          With CSS, you can control the color, font, the size of text, the
          spacing between elements, how elements are positioned and laid out,
          what background images or background colors are to be used, different
          displays for different devices and screen sizes, and much more!
        </p>
      </div>

      {/* Using CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Using CSS
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS can be added to HTML documents in 3 ways:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-3xl"></div>{" "}
            <div className="flex gap-1 items-center">
              <h1 className="font-bold">Inline</h1>{" "}
              <p>
                {" "}
                - by using the <Code color="success">style</Code> attribute
                inside HTML elements
              </p>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-3xl"></div>{" "}
            <div className="flex gap-1 items-center">
              <h1 className="font-bold">Internal </h1>{" "}
              <p>
                {" "}
                - by using the <Code color="success">style</Code> attribute in
                the <Code color="success">head</Code> section
              </p>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 bg-black rounded-3xl"></div>{" "}
            <div className="flex gap-1 items-center">
              <h1 className="font-bold">External </h1>{" "}
              <p>
                {" "}
                - by using the <Code color="success">link</Code> element to link
                to an external CSS file
              </p>
            </div>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The most common way to add CSS, is to keep the styles in external CSS
          files. However, in this tutorial we will use inline and internal
          styles, because this is easier to demonstrate, and easier for you to
          try it yourself.
        </p>
      </div>

      {/* Inline CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Inline CSS
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An inline CSS is used to apply a unique style to a single HTML
          element. An inline CSS uses the style attribute of an HTML element.
          The following example sets the text color of the{" "}
          <Code color="success">{"<h1>"}</Code> element to blue, and the text
          color of the <Code color="success">{"<p>"}</Code> element to red:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {` <h1 style="color:blue;">A Blue Heading</h1> `} <br /> <br />
          {` <p style="color:red;">A red paragraph.</p>`}
        </Code>
      </div>

      {/* Internal CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Internal CSS
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An internal CSS is used to define a style for a single HTML page. An
          internal CSS is defined in the <Code color="success">{"<head>"}</Code>{" "}
          section of an HTML page, within a{" "}
          <Code color="success">{"<style>"}</Code> element. The following
          example sets the text color of ALL the{" "}
          <Code color="success">{"<h1>"}</Code> elements (on that page) to blue,
          and the text color of ALL the <Code color="success">{"<p>"}</Code>{" "}
          elements to red. In addition, the page will be displayed with a
          "powderblue" background color:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<!DOCTYPE html>`} <br />
          {`<html>`} <br />
          {`<head>`} <br />
          {`<style>`} <br />
          {`body {background-color: powderblue;}`} <br />
          {`h1   {color: blue;}`} <br />
          {`p    {color: red;}`} <br />
          {`</style>`} <br />
          {`</head>`} <br />
          {`<body>`} <br /> <br />
          {`<h1>This is a heading</h1>`} <br />
          {`<p>This is a paragraph.</p>`} <br /> <br />
          {`</body>`} <br />
          {`</html>`}
        </Code>
      </div>

      {/* External CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          External CSS
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An external style sheet is used to define the style for many HTML
          pages. To use an external style sheet, add a link to it in the{" "}
          <Code color="success">{"<head>"}</Code> section of each HTML page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] my-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<!DOCTYPE html>`} <br />
          {`<html>`} <br />
          {`<head>`} <br />
          {`<link rel="stylesheet" href="styles.css">`} <br />
          {`</head>`} <br />
          {`<body>`} <br /> <br />
          {`<h1>This is a heading</h1>`} <br />
          {`<p>This is a paragraph.</p>`} <br /> <br />
          {`</body>`} <br />
          {`</html>`}
        </Code>
        <p className="text-[16px] text-[#71717a] ">
          The external style sheet can be written in any text editor. The file
          must not contain any HTML code, and must be saved with a .css
          extension. Here is what the "styles.css" file looks like:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`body {`} <br />
          {`background-color: powderblue;`} <br />
          {`}`} <br />
          {`h1 {`} <br />
          {`  color: blue;`} <br />
          {`}`} <br />
          {`p {`} <br />
          {`  color: red;`} <br />
          {`}`}
        </Code>
      </div>

      {/* CSS Colors, Fonts and Sizes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Colors, Fonts and Sizes
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here, we will demonstrate some commonly used CSS properties. You will
          learn more about them later.
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-[16px] text-[#71717a]">
            The CSS <Code color="success">{"color"}</Code> property defines the
            text color to be used.{" "}
          </p>
          <p className="text-[16px] text-[#71717a]">
            The CSS <Code color="success">{"font-family"}</Code> property
            defines the font to be used.
          </p>{" "}
          <p className="text-[16px] text-[#71717a]">
            The CSS <Code color="success">{"font-size"}</Code> property defines
            the text size to be used.
          </p>
        </div>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<!DOCTYPE html>`} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"h1 {"} <br />
          {"  color: blue;"} <br />
          {"  font-family: verdana;"} <br />
          {"  font-size: 300%;"} <br />
          {"}"} <br />
          {"p {"} <br />
          {"color: red;"} <br />
          {"  font-family: courier;"} <br />
          {"  font-size: 160%;"} <br />
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {"<h1>This is a heading</h1>"} <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* CSS Border */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Border
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS border property defines a border around an HTML element.You
          can define a border for nearly all HTML elements.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"} <br />
          {"  border: 2px solid powderblue;"} <br />
          {"}"}
        </Code>
      </div>

      {/* CSS Padding */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Padding
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS padding property defines a padding (space) between the text
          and the border.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"} <br />
          {"  border: 2px solid powderblue;"} <br />
          {" padding: 30px;"} <br />
          {"}"}
        </Code>
      </div>

      {/* CSS Margin */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Margin
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS margin property defines a margin (space) outside the border.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p {"} <br />
          {"  border: 2px solid powderblue;"} <br />
          {" margin: 50px;"} <br />
          {"}"}
        </Code>
      </div>

      {/* Link to External CSS */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Link to External CSS
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          External style sheets can be referenced with a full URL or with a path
          relative to the current web page.
        </p>
        <p className="text-[16px] text-[#71717a] mt-6">
          This example uses a full URL to link to a style sheet:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<link rel="stylesheet"`} <br />{" "}
          {`href="https://www.w3schools.com/html/styles.css">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example links to a style sheet located in the html folder on the
          current web site:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<link rel="stylesheet" href="/html/styles.css">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example links to a style sheet located in the same folder as the
          current page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<link rel="stylesheet" href="styles.css">`}
        </Code>
      </div>

      {/* Summary */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To apply styling in HTML, you can use the{" "}
          <Code color="success">{"style"}</Code> attribute for inline styles or
          the <Code color="success">{"<style>"}</Code> element to define
          internal CSS. For external stylesheets, reference the CSS file using
          the <Code color="success">{"<link>"}</Code> element, both of which are
          placed inside the <Code color="success">{"<head>"}</Code>section. The
          CSS <Code color="success">{"color"}</Code> property sets text colors,
          while the <Code color="success">{"font-family"}</Code> and
          <Code color="success">{"font-size"}</Code> properties control text
          fonts and sizes, respectively. Borders are added with the{" "}
          <Code color="success">{"border"}</Code> property, and you can adjust
          spacing inside the border with{" "}
          <Code color="success">{"padding"}</Code> and outside with{" "}
          <Code color="success">{"margin"}</Code>.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/colors"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Colors
          </Button>
        </Link>
        <Link href={"/doc/html/links"}>
          <Button variant={"outline"} className="flex gap-3">
            Links <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
