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
                Plug-ins
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Plug-ins */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">HTML Plug-ins</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Plug-ins are computer programs that extend the standard functionality
          of the browser.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Plug-ins */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Plug-ins</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Plug-ins were designed to be used for many different purposes.To
          enable various functionalities, systems must support running Java
          applets, executing Microsoft ActiveX controls, displaying Flash
          movies, rendering interactive maps, scanning for viruses, and
          verifying bank IDs.
        </p>
      </div>

      {/* The <object> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<object>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<object>"}</Code> element is supported by
          all browsers. The <Code color="success">{"<object>"}</Code> element
          defines an embedded object within an HTML document. It was designed to
          embed plug-ins (like Java applets, PDF readers, and Flash Players) in
          web pages, but can also be used to include HTML in HTML:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<object width="100%" height="500px" data="snippet.html"></object>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Or images if you like:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<object data="audi.jpeg"></object>`}
        </Code>
      </div>

      {/* The <embed> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<embed>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<embed>"}</Code> element is supported in
          all major browsers. The <Code color="success">{"<embed>"}</Code>{" "}
          element also defines an embedded object within an HTML document. Web
          browsers have supported the <Code color="success">{"<embed>"}</Code>{" "}
          element for a long time. However, it has not been a part of the HTML
          specification before HTML5.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<embed src="audi.jpeg">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<embed>"}</Code> element can also be used
          to include HTML in HTML:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<embed width="100%" height="500px" src="snippet.html">`}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/audio"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Audio
          </Button>
        </Link>
        <Link href={"/doc/html/youtube"}>
          <Button variant={"outline"} className="flex gap-3">
            Youtube <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
