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
                Links
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Links */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Links</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          With CSS, links can be styled in many different ways.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Styling Links */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Links
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Links can be styled with any CSS property (e.g.{" "}
          <Code color="success">color</Code>,{" "}
          <Code color="success">font-family</Code>,{" "}
          <Code color="success">background</Code>, etc.).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a {"}
          <p className="pl-3">{"color: hotpink;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In addition, links can be styled differently depending on what state
          they are in.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The four links states are:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">a:link </Code> - a normal, unvisited link
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success"> a:visited</Code> - a link the user has
              visited
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">a:hover </Code> - a link when the user
              mouses over it
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">a:active </Code> - a link the moment it is
              clicked
            </p>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/* unvisited link */"} <br />
          {"a:link {"}
          <p className="pl-3">{"color: red;"}</p>
          {"}"} <br /> <br />
          {"/* visited link */"} <br />
          {"a:visited {"}
          <p className="pl-3">{"color: green;"}</p>
          {"}"} <br /> <br />
          {"/* mouse over link */"} <br />
          {"a:hover {"}
          <p className="pl-3">{"color: hotpink;"}</p>
          {"}"} <br /> <br />
          {"/* selected link */"} <br />
          {"a:active {"}
          <p className="pl-3">{"color: blue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Text Decoration */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Text Decoration
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">text-decoration</Code> property is mostly
          used to remove underlines from links:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a:link {"}
          <p className="pl-3">{"text-decoration: none;"}</p>
          {"}"} <br /> <br />
          {"a:visited {"}
          <p className="pl-3">{"text-decoration: none;"}</p>
          {"}"} <br /> <br />
          {"a:hover {"}
          <p className="pl-3">{"text-decoration: underline;"}</p>
          {"}"} <br /> <br />
          {"a:active {"}
          <p className="pl-3">{"text-decoration: underline;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Background Color */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Background Color
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">background-color</Code> property can be used
          to specify a background color for links:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"a:link {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"} <br /> <br />
          {"a:visited {"}
          <p className="pl-3">{"background-color: cyan;"}</p>
          {"}"} <br /> <br />
          {"a:hover {"}
          <p className="pl-3">{" background-color: lightgreen;"}</p>
          {"}"} <br /> <br />
          {"a:active {"}
          <p className="pl-3">{" background-color: lightgreen;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Link Buttons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Link Buttons
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example demonstrates a more advanced example where we combine
          several CSS properties to display links as boxes/buttons:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {" a:link, a:visited {"}
          <p className="pl-3">{"background-color: #f44336;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          <p className="pl-3">{"padding: 14px 25px;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          <p className="pl-3">{"text-decoration: none;"}</p>
          <p className="pl-3">{"display: inline-block;"}</p>
          {"}"} <br /> <br />
          {"a:hover, a:active {"}
          <p className="pl-3"> {"background-color: red;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/icons"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Icons
          </Button>
        </Link>
        <Link href={"/doc/css/lists"}>
          <Button variant={"outline"} className="flex gap-3">
            Lists <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
