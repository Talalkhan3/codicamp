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
                Comments
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Comments */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Comments</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML comments are not displayed in the browser, but they can help
          document your HTML source code.
        </p>
        <Separator className="mt-5" />
      </div>

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Comment Tag
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can add comments to your HTML source by using the following
          syntax:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full my-3 p-3"
          color="success"
          size="md"
        >
          {"<!-- Write your comments here -->"}
        </Code>
        <p className="text-[16px] text-[#71717a] ">
          Notice that there is an exclamation point (!) in the start tag, but
          not in the end tag.
        </p>
      </div>

      {/* Add Comments */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Add Comments
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          With comments you can place notifications and reminders in your HTML
          code:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="md"
        >
          {"<!-- This is a comment -->"} <br /> <br />
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"<!-- Remember to add more information here -->"}
        </Code>
      </div>

      {/* Hide Content */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Hide Content
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Comments can be used to hide content. This can be helpful if you hide
          content temporarily:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full my-3 p-3"
          color="success"
          size="md"
        >
          {"<p>This is a paragraph.</p>"} <br /> <br />
          {"<!-- <p>This is another paragraph </p> -->"} <br /> <br />
          {"<p>This is a paragraph too.</p>"}
        </Code>
        <p className="text-[16px] text-[#71717a]">
          You can also hide more than one line. Everything between the{" "}
          <Code color="success">{"<!--"}</Code> and the{" "}
          <Code color="success">{"-->"}</Code> will be hidden from the display.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full my-3 p-3"
          color="success"
          size="md"
        >
          {"<p>This is a paragraph.</p>"} <br />
          {"<!--"} <br />
          {"<p>Look at this cool image:</p>"} <br />
          {`<img border="0" `} <br /> {`src="pic_trulli.jpg"`}
          <br />
          {`alt="Trulli">`} <br />
          {`-->`} <br />
          {`<p>This is a paragraph too.</p>`}
        </Code>
        <p className="text-[16px] text-[#71717a]">
          Comments are also great for debugging HTML, because you can comment
          out HTML lines of code, one at a time, to search for errors.
        </p>
      </div>

      {/* Hide Inline Content */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Hide Inline Content
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Comments can be used to hide parts in the middle of the HTML code.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="md"
        >
          {"<p>This "} <br /> {"<!-- great text -->"} <br />
          {" is a paragraph.</p>"} <br />
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/quotations"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Quotations
          </Button>
        </Link>
        <Link href={"/doc/html/colors"}>
          <Button variant={"outline"} className="flex gap-3">
            Colors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
