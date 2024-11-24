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
                Headings
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Headings */}
      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold ">Headings</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML headings are titles or subtitles that you want to display on a
          webpage.
        </p>
        <Code
          color="success"
          size="md"
          className="w-full flex flex-col gap-y-3 p-4 border-l-5 border-[#33d45e] my-3"
        >
          <h1 className="text-[2.125rem]">Heading 1</h1>
          <h2 className="text-[1.875rem]">Heading 1</h2>
          <h3 className="text-[1.5rem]">Heading 1</h3>
          <h4 className="text-[1.25rem]">Heading 1</h4>
          <h5 className="text-[1.125rem]">Heading 1</h5>
          <h6 className="text-[1rem]">Heading 1</h6>
        </Code>
        <Separator className="my-5" />
      </div>

      {/* HTML Headings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          HTML Headings
        </h1>

        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          HTML headings are defined with the{" "}
          <Code color="success">{"<h1>"}</Code> to{" "}
          <Code color="success">{"<h6>"}</Code> tags.
          <Code color="success">{"<h1>"}</Code> defines the most important
          heading. <Code color="success">{"<h6>"}</Code> defines the least
          important heading.
        </p>
        <Code
          className="p-4 w-full border-l-5 border-[#33d45e] my-3"
          color="success"
          size="md"
        >
          {`<h1>Heading 1</h1>`} <br />
          {`<h2>Heading 2</h2>`} <br />
          {`<h3>Heading 3</h3>`} <br />
          {`<h4>Heading 4</h4>`} <br />
          {`<h5>Heading 5</h5>`} <br />
          {`<h6>Heading 6</h6>`} <br />
        </Code>
      </div>

      {/* Headings Are Important */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Headings Are Important
        </h1>

        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          Search engines use the headings to index the structure and content of
          your web pages. Users often skim a page by its headings. It is
          important to use headings to show the document structure.
          <Code color="success">{"<h1>"}</Code> headings should be used for main
          headings, followed by <Code color="success">{"<h2>"}</Code> headings,
          then the less important <Code color="success">{"<h3>"}</Code> , and so
          on.
        </p>
      </div>

      {/* Bigger Headings */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Bigger Headings
        </h1>

        <p className="text-[16px] text-[#71717a] mt-3">
          Each HTML heading has a default size. However, you can specify the
          size for any heading with the style attribute, using the CSS font-size
          property:
        </p>
        <Code
          color="success"
          size="md"
          className="w-full flex flex-col gap-y-3 p-4 border-l-5 border-[#33d45e] my-3"
        >
          {`<h1 style="font-size:60px;">Heading 1</h1>`}
        </Code>
      </div>


      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Attributes
          </Button>
        </Link>
        <Link href={"/doc/html/paragraphs"}>
          <Button variant={"outline"} className="flex gap-3">
            Paragraphs <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
