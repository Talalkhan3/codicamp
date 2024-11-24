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
                Position
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Layout - The position Property */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          Layout - The position Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The <Code color="success">position</Code> property specifies the type
          of positioning method used for an element (static, relative, fixed,
          absolute or sticky).
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The position Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The position Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The position property specifies the type of positioning method used
          for an element.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          There are five different position values:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-green-600/50"></div>
            <p className="text-[#71717a]">
              <Code color="success">static </Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-green-600/50"></div>
            <p className="text-[#71717a]">
              <Code color="success">relative</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-green-600/50"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">fixed</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-green-600/50"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">absolute</Code>
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-green-600/50"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">sticky</Code>
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          Elements are then positioned using the top, bottom, left, and right
          properties. However, these properties will not work unless the
          <Code color="success">position</Code> property is set first. They also
          work differently depending on the position value.
        </p>
      </div>

      {/* position: static; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          position: static;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML elements are positioned static by default. Static positioned
          elements are not affected by the top, bottom, left, and right
          properties. An element with{" "}
          <Code color="success">position: static;</Code> is not positioned in
          any special way; it is always positioned according to the normal flow
          of the page
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is the CSS that is used:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.static {"}
          <p className="pl-3">{"position: static;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"}
        </Code>
      </div>

      {/* position: relative; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          position: relative;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An element with <Code color="success">position: relative;</Code> is
          positioned relative to its normal position. Setting the top, right,
          bottom, and left properties of a relatively-positioned element will
          cause it to be adjusted away from its normal position. Other content
          will not be adjusted to fit into any gap left by the element.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is the CSS that is used:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.static {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{" left: 30px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"}
        </Code>
      </div>

      {/* position: fixed; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          position: fixed;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An element with <Code color="success">position: fixed;</Code> is
          positioned relative to the viewport, which means it always stays in
          the same place even if the page is scrolled. The top, right, bottom,
          and left properties are used to position the element. A fixed element
          does not leave a gap in the page where it would normally have been
          located.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Notice the fixed element in the lower-right corner of the page. Here
          is the CSS that is used:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.static {"}
          <p className="pl-3">{" position: fixed;"}</p>
          <p className="pl-3">{"bottom: 0;"}</p>
          <p className="pl-3">{"right: 0;"}</p>
          <p className="pl-3">{"width: 300px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"}
        </Code>
      </div>

      {/* position: absolute; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          position: absolute;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An element with <Code color="success">position: absolute;</Code> is
          positioned relative to the nearest positioned ancestor (instead of
          positioned relative to the viewport, like fixed). However; if an
          absolute positioned element has no positioned ancestors, it uses the
          document body, and moves along with page scrolling.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is the CSS that is used:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.relative {"}
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"width: 400px;"}</p>
          <p className="pl-3">{"height: 200px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"} <br /> <br />
          {"div.absolute {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 80px;"}</p>
          <p className="pl-3">{"right: 0;"}</p>
          <p className="pl-3">{"width: 200px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"border: 3px solid #73AD21;"}</p>
          {"}"}
        </Code>
      </div>

      {/* position: absolute; */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          position: sticky;
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An element with <Code color="success">position: sticky;</Code> i is
          positioned based on the user's scroll position. A sticky element
          toggles between <Code color="success">relative</Code> and{" "}
          <Code color="success">fixed</Code>, depending on the scroll position.
          It is positioned relative until a given offset position is met in the
          viewport - then it "sticks" in place (like position:fixed).
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          In this example, the sticky element sticks to the top of the page
          (top: 0), when you reach its scroll position.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div.sticky {"}
          <p className="pl-3">{"position: sticky;"}</p>
          <p className="pl-3">{"top: 0;"}</p>
          <p className="pl-3">{"background-color: green;"}</p>
          <p className="pl-3">{"border: 2px solid #4CAF50;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/max-width"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Max-width
          </Button>
        </Link>
        <Link href={"/doc/css/z-index"}>
          <Button variant={"outline"} className="flex gap-3">
            Z-index <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
