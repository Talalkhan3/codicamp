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
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DivideSquareIcon,
} from "lucide-react";

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
                Lists
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Lists */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Lists</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML lists allow web developers to group a set of related items in
          lists.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* UL AND OL EXAMPLE */}

      <div className="flex items-center justify-between mx-14">
        <div className="mt-5">
          <p>An unordered HTML list:</p>
          <ul className="flex flex-col mt-3 ml-5">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black rounded-3xl"></div> <h1>Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black rounded-3xl"></div> <h1>Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black rounded-3xl"></div> <h1>Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-black rounded-3xl"></div> <h1>Item</h1>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p>An ordered HTML list:</p>
          <ul className="flex flex-col mt-3 ml-5">
            <li className="flex items-center gap-2">
              <div>1.</div> <h1>First Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div>2.</div> <h1>Second Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div>3.</div> <h1>Third Item</h1>
            </li>
            <li className="flex items-center gap-2">
              <div>4.</div> <h1>Fourth Item</h1>
            </li>
          </ul>
        </div>
      </div>

      {/* Unordered HTML List */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Unordered HTML List
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An unordered list starts with the{" "}
          <Code color="success">{"<ul>"}</Code> tag. Each list item starts with
          the <Code color="success">{"<li>"}</Code> tag. The list items will be
          marked with bullets (small black circles) by default:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" "}
          {"<ul>"} <br />
          {"<li>Coffee</li>"} <br />
          {"<li>Tea</li>"} <br />
          {"<li>Milk</li>"} <br />
          {"</ul>"}
        </Code>
      </div>
      {/* Ordered HTML List */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Ordered HTML List
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An ordered list starts with th <Code color="success">{"<ol>"}</Code>{" "}
          tag. Each list item starts with the{" "}
          <Code color="success">{"<li>"}</Code> tag. The list items will be
          marked with numbers by default:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" "}
          {"<ol>"} <br />
          {"<li>Coffee</li>"} <br />
          {"<li>Tea</li>"} <br />
          {"<li>Milk</li>"} <br />
          {"</ol>"}
        </Code>
      </div>

      {/* HTML Description Lists */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Description Lists
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML also supports description lists. A description list is a list of
          terms, with a description of each term. The{" "}
          <Code color="success">{"<dl>"}</Code> tag defines the description
          list, the <Code color="success">{"<dt>"}</Code> tag defines the term
          (name), and the <Code color="success">{"<dd>"}</Code> tag describes
          each term:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <dl>"} <br />
          {"<dt>Coffee</dt>"} <br />
          {"<dd>- black hot drink</dd>"} <br />
          {"<dt>Milk</dt>"} <br />
          {"<dd>- white cold drink</dd>"} <br />
          {"</dl>"}
        </Code>
      </div>
      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/tables"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Tables
          </Button>
        </Link>
        <Link href={"/doc/html/block-and-inline"}>
          <Button variant={"outline"} className="flex gap-3">
            Block & Inline <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
