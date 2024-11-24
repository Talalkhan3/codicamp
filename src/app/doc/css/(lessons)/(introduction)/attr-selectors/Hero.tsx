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
                Attribute Selectors
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Image Gallery  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Attribute Selectors
        </h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Attribute selectors in CSS target elements based on the presence,
          value, or value patterns of their attributes, allowing for precise
          styling.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS [attribute] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute]</Code> selector is used to
          select elements with a specified attribute. The following example
          selects all <Code color="success">{"<a>"}</Code> elements with a
          target attribute:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a[target] {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS [attribute="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute="value"]</Code> selector is used
          to select elements with a specified attribute and value. The following
          example selects all <Code color="success">{"<a>"}</Code> elements with
          a target="_blank" attribute:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`a[target="_blank"] {`}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS [attribute~="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute~="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute~="value"]</Code> selector is used
          to select elements with an attribute value containing a specified
          word. The following example selects all elements with a title
          attribute that contains a space-separated list of words, one of which
          is "flower":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`[title~="flower"] {`}
          <p className="pl-3">{"border: 5px solid yellow;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The example above will match elements with title="flower",
          title="summer flower", and title="flower new", but not
          title="my-flower" or title="flowers".
        </p>
      </div>

      {/* CSS [attribute|="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute|="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute|="value"]</Code> selector is used
          to select elements with the specified attribute, whose value can be
          exactly the specified value, or the specified value followed by a
          hyphen (-). The value has to be a whole word, either alone, like
          class="top", or followed by a hyphen( - ), like class="top-text".
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`[class|="top"] {`}
          <p className="pl-3">{"background: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS [attribute^="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute^="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute^="value"]</Code> selector is used
          to select elements with the specified attribute, whose value starts
          with the specified value. The following example selects all elements
          with a class attribute value that starts with "top": The value does
          not have to be a whole word!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`[class^="top"] {`}
          <p className="pl-3">{"background: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS [attribute$="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute$="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute$="value"]</Code> selector is used
          to select elements whose attribute value ends with a specified value.
          The following example selects all elements with a class attribute
          value that ends with "test". The value does not have to be a whole
          word!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`[class$="test"] {`}
          <p className="pl-3">{"background: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS [attribute*="value"] Selector */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS [attribute*="value"] Selector
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">[attribute*="value"]</Code> selector is used
          to select elements whose attribute value contains a specified value.
          The following example selects all elements with a class attribute
          value that contains "te" The value does not have to be a whole word!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`[class*="te"] {`}
          <p className="pl-3">{"background: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Styling Forms */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Forms
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The attribute selectors can be useful for styling forms without class
          or ID:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`input[type="text"] {`}
          <p className="pl-3">{"width: 150px;"}</p>
          <p className="pl-3">{"display: block;"}</p>
          <p className="pl-3">{"margin-bottom: 10px;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"} <br /> <br />
          {`input[type="button"] {`}
          <p className="pl-3">{"width: 120px;"}</p>
          <p className="pl-3">{"margin-left: 35px;"}</p>
          <p className="pl-3">{"display: block;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/image-sprites"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Image Sprites
          </Button>
        </Link>
        <Link href={"/doc/css/forms"}>
          <Button variant={"outline"} className="flex gap-3">
            Forms <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
