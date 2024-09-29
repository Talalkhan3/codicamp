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
                Page Titles
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Page Title */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Page Title</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Every web page should have a page title to describe the meaning of the
          page.
        </p>
        <Separator className="my-5" />

        <p className="text-[16px] text-[#71717a]">
          The <Code color="success">{"<title>"}</Code>The element adds a title
          to your page: element adds a title to your page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {" <title>HTML Tutorial</title>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {"The content of the document......"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The title is shown in the browser's title bar:
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The title should describe the content and the meaning of the page.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The page title is very important for search engine optimization (SEO).
          The text is used by search engine algorithms to decide the order when
          listing pages in search results.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<title>"}</Code> element:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              defines a title in the browser toolbar
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              provides a title for the page when it is added to favorites
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              displays a title for the page in search engine-results
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          So, try to make the title as accurate and meaningful as possible!
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/links"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Links
          </Button>
        </Link>
        <Link href={"/doc/html/tables"}>
          <Button variant={"outline"} className="flex gap-3">
            Tables <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
