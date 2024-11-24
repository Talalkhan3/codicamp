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
                Pseudo-Elements
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Pseudo-elements */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Pseudo-elements
        </h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Pseudo-elements in CSS allow you to style specific parts of an
          element, such as the first letter{" "}
          <Code color="success">::first-letter</Code> or inserting content
          before/after an element
          <Code color="success">::before</Code> and{" "}
          <Code color="success">::after</Code>
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What are Pseudo-Elements? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What are Pseudo-Elements?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A CSS pseudo-element is used to style specific parts of an element,
          enabling more precise and dynamic designs. For example, it can style
          the first letter or first line of an element using{" "}
          <Code color="success">::first-letter</Code>
          and <Code color="success">::first-line</Code>, insert content before
          or after an element with <Code color="success">::before</Code> and{" "}
          <Code color="success">::after</Code>, customize the markers of list
          items with <Code color="success">::marker</Code> , and style the
          viewbox behind a dialog box using{" "}
          <Code color="success">::backdrop</Code>.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The syntax of pseudo-elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"selector::pseudo-element {"}
          <p className="pl-3">{"property: value;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The ::first-line Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::first-line Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::first-line</Code> pseudo-element is used
          to add a special style to the first line of a text. The following
          example formats the first line of the text in all{" "}
          <Code color="success">{"<p>"}</Code> elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p::first-line {"}
          <p className="pl-3">{"color: #ff0000;"}</p>
          <p className="pl-3">{"font-variant: small-caps;"}</p>
          {"}"}{" "}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::first-line</Code> pseudo-element can only
          be applied to block-level elements.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following properties apply to the{" "}
          <Code color="success">::first-line</Code> pseudo-element:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">font properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">color properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">background properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">word-spacing</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">letter-spacing</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">text-decoration</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">vertical-align</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">text-transform</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">line-height</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">clear</p>
          </li>
        </ul>
      </div>

      {/* The ::first-letter Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::first-letter Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::first-letter</Code> pseudo-element is used
          to add a special style to the first letter of a text. The following
          example formats the first letter of the text in all{" "}
          <Code color="success">{"<p>"}</Code> elements:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p::first-letter {"}
          <p className="pl-3">{"color: #ff0000;"}</p>
          <p className="pl-3">{"font-size: xx-large;"}</p>
          {"}"}{" "}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::first-letter</Code> pseudo-element can
          only be applied to block-level elements.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following properties apply to the{" "}
          <Code color="success">::first-letter</Code> pseudo-element:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">font properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">color properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">background properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">margin properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">padding properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">border properties</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">text-decoration</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              vertical-align (only if "float" is "none")
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">text-transform</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">line-height</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">float</p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-1.5 w-1.5 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">clear</p>
          </li>
        </ul>
      </div>

      {/* Pseudo-elements and HTML Classes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Pseudo-elements and HTML Classes
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Pseudo-elements can be combined with HTML classes:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"p.intro::first-letter {"}
          <p className="pl-3">{"color: #ff0000;"}</p>
          <p className="pl-3">{"font-size: 200%;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Multiple Pseudo-elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Multiple Pseudo-elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Several pseudo-elements can also be combined.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the first letter of a paragraph will be red,
          in an xx-large font size. The rest of the first line will be blue, and
          in small-caps. The rest of the paragraph will be the default font size
          and color:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" p::first-letter {"}
          <p className="pl-3"> {"color: #ff0000;"}</p>
          <p className="pl-3">{"font-size: xx-large;"}</p>
          {"}"} <br /> <br />
          {"p::first-line {"}
          <p className="pl-3">{"color: #0000ff;"}</p>
          <p className="pl-3">{"font-variant: small-caps;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The ::before Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::before Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::before</Code> pseudo-element can be used
          to insert some content before the content of an element. The following
          example inserts an image before the content of each{" "}
          <Code color="success">{"<h1>"}</Code> element:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1::before {"}
          <p className="pl-3"> {"content: url(smiley.gif);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The ::after Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::after Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::after </Code> pseudo-element can be used
          to insert some content after the content of an element. The following
          example inserts an image after the content of each{" "}
          <Code color="success">{"<h1>"}</Code> element:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1::after {"}
          <p className="pl-3"> {"content: url(smiley.gif);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The ::marker Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::after Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::marker </Code> pseudo-element selects the
          markers of list items. The following example styles the markers of
          list items:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"::marker {"}
          <p className="pl-3"> {"color: red;"}</p>
          <p className="pl-3"> {"font-size: 23px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The ::selection Pseudo-element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The ::selection Pseudo-element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">::selection</Code> pseudo-element matches
          the portion of an element that is selected by a user. <br /> The
          following CSS properties can be applied to{" "}
          <Code color="success">::selection</Code> :{" "}
          <Code color="success">color</Code>.{" "}
          <Code color="success">background</Code>, element:
          <Code color="success">cursor</Code>, and
          <Code color="success">outline</Code> The following example makes the
          selected text red on a yellow background:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"::selection {"}
          <p className="pl-3"> {"color: red;"}</p>
          <p className="pl-3"> {"background: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/pseudo-classes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Psuedo Classes
          </Button>
        </Link>
        <Link href={"/doc/css/opacity"}>
          <Button variant={"outline"} className="flex gap-3">
            Opacity <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
