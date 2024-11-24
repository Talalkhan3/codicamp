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
import { ChevronLeftIcon, ChevronRightIcon, Table } from "lucide-react";
import { TableDemo } from "../styles/Table";

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
                Formatting
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Text Formatting */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Text Formatting
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML contains several elements for defining text with a special
          meaning.
        </p>
        <h3 className="font-bold my-3">Examples</h3>
        <div className="flex flex-col gap-4 p-5 bg-gray-100 rounded-md">
          <h1 className=" font-bold">This text is bold</h1>
          <h1 className=" italic">This text is italic</h1>
        </div>
        <Separator className="mt-5" />
      </div>

      {/* Formatting Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Formatting Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Formatting elements were designed to display special types of text:
        </p>
        <ol className=" list-disc flex flex-col gap-2 mt-3">
          <li className="flex gap-2 items-center">
            <Code color="success">{"<b>"}</Code> -<p>Bold Text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<strong>"}</Code> -<p>Important text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<i>"}</Code> -<p>Italic text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<em>"}</Code> -<p>Emphasized text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<mark>"}</Code> -<p>Marked text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<small>"}</Code> -<p>Smaller text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<del>"}</Code> -<p>Deleted text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<ins>"}</Code> -<p>Inserted text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<sub>"}</Code> -<p>Subscript text</p>
          </li>
          <li className="flex gap-2 items-center">
            <Code color="success">{"<sup>"}</Code> -<p>Superscript text</p>
          </li>
        </ol>
      </div>

      {/* <b> and <strong> Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<b>"} and {"<strong>"} Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<b>"}</Code> element defines bold
          text, without any extra importance.
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] my-3"
          size="md"
        >
          {"<b>This text is bold</b>"}
        </Code>

        <p className="text-[16px] text-[#71717a]">
          he HTML <Code color="success">{"<strong>"}</Code> element defines text
          with strong importance. The content inside is typically displayed in
          bold.
        </p>

        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] my-3"
          size="md"
        >
          {"<strong>This text is important!</strong>"}
        </Code>
      </div>

      {/* <i> and <em> Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<i>"} and {"<em>"} Elements
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<i>"}</Code> element defines a part
          of text in an alternate voice or mood. The content inside is typically
          displayed in italic.The <Code color="success">{"<i>"}</Code> tag is
          often used to indicate a technical term, a phrase from another
          language, a thought, a ship name, etc.
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] my-3"
          size="md"
        >
          {"<i>This text is italic</i>"}
        </Code>
        <p className="text-[16px] text-[#71717a]">
          The HTML <Code color="success">{"<em>"}</Code> element defines
          emphasized text. The content inside is typically displayed in italic.
          A screen reader will pronounce the words in{" "}
          <Code color="success">{"<em>"}</Code> with an emphasis, using verbal
          stress.
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<em>This text is emphasized</em>"}
        </Code>
      </div>

      {/* <small> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<small>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<small>"}</Code> element defines
          smaller text:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<small>This is some smaller text.</small>"}
        </Code>
      </div>

      {/* <mark> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<mark>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<mark>"}</Code> element defines text
          that should be marked or highlighted:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<p>Do not forget to buy "} <br />
          {"<mark>milk</mark> today.</p>"}
        </Code>
      </div>

      {/*<del> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<del>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<del>"}</Code> element defines text
          that has been deleted from a document. Browsers will usually strike a
          line through deleted text:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<p>My favorite color is <del>blue</del> red.</p>"}
        </Code>
      </div>

      {/*<ins> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<ins>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<ins>"}</Code> eelement defines a
          text that has been inserted into a document. Browsers will usually
          underline inserted text:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<p>My favorite color is "} <br />
          {"<del>blue</del> "} <br />
          {"<ins>red</ins>."} <br />
          {"</p>"}
        </Code>
      </div>

      {/* <sub> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<sub>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<sub>"}</Code> element defines
          subscript text. Subscript text appears half a character below the
          normal line, and is sometimes rendered in a smaller font. Subscript
          text can be used for chemical formulas, like H2O:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<p>This is <sub>subscripted</sub> text.</p>"}
        </Code>
      </div>

      {/* <sup> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          {"<sup>"} Element
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<sup>"}</Code> element defines
          superscript text. Superscript text appears half a character above the
          normal line, and is sometimes rendered in a smaller font. Superscript
          text can be used for footnotes, like WWW<sup>1</sup>:
        </p>
        <Code
          color="success"
          className="w-full p-3 border-l-5 border-[#33d45e] mt-3"
          size="md"
        >
          {"<p>This is <sub>subscripted</sub> text.</p>"}
        </Code>
      </div>

      {/*  Text Formatting Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {" "}
          Text Formatting Elements
        </h1>
        <Separator className="mb-5" />
        <TableDemo />
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/styles"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Styles
          </Button>
        </Link>
        <Link href={"/doc/html/quotations"}>
          <Button variant={"outline"} className="flex gap-3">
            Quotations <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
