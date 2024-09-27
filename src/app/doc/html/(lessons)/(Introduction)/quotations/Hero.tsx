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
                Quotations
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Quotation and Citation Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          In this chapter we will go through the{" "}
          <Code color="success">{`<blockquote>`}</Code>,
          <Code color="success">{`<q>`}</Code> ,
          <Code color="success">{`<abbr>`}</Code> ,
          <Code color="success">{`<address>`}</Code> ,
          <Code color="success">{`<cite>`}</Code>, and{" "}
          <Code color="success">{`<bdo>`}</Code> HTML elements.
        </p>
        <Separator className="mt-5" />
      </div>

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<blockquote>"} for Quotations
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{`<blockquote>`}</Code> element defines
          a section that is quoted from another source. Browsers usually indent{" "}
          <Code color="success">{`<blockquote>`}</Code> elements.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<p>Here is a quote from WWF's website:</p>`} <br />
          {`<blockquote cite="http://www.worldwildlife.org/who/index.html">`}{" "}
          <br /> <br />
          For 60 years, WWF has worked to help people and nature thrive. As the
          world's <br /> leading conservation organization, WWF works in nearly
          100 countries. At every level, <br /> we collaborate with people
          around the world to develop and deliver innovative <br />
          solutions that protectcommunities, wildlife, and the places in which
          they live. <br /> <br />
          {`</blockquote>`}
        </Code>
      </div>

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<q>"} for Short Quotations
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<q>"}</Code> tag defines a short
          quotation. Browsers normally insert quotation marks around the
          quotation.
        </p>{" "}
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`}{" "}
          <br />
        </Code>
      </div>

      {/* <abbr> for Abbreviations */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<abbr>"} for Abbreviations
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<abbr>"}</Code> tag defines an
          abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP",
          "ATM". Marking abbreviations can give useful information to browsers,
          translation systems and search-engines.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`}{" "}
          <br />
        </Code>
      </div>

      {/* <address> for Contact Information */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<address>"} for Contact Information
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{`<address>`}</Code> tag defines the
          contact information for the author/owner of a document or an article.
          The contact information can be an email address, URL, physical
          address, phone number, social media handle, etc. The text in the{" "}
          <Code color="success">{`<address>`}</Code> element usually renders in
          italic, and browsers will always add a line break before and after the{" "}
          <Code color="success">{`<address>`}</Code> element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<address>`} <br />
          {"Written by John Doe.<br>"} <br />
          {"Visit us at:<br>"} <br />
          {"Example.com<br>"} <br />
          {"Box 564, Disneyland<br>"} <br />
          USA <br />
          {"</address>"}
        </Code>
      </div>

      {/* <cite> for Work Title */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<cite>"} for Work Title
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{`<cite>`}</Code> tag defines the title
          of a creative work (e.g. a book, a poem, a song, a movie, a painting,
          a sculpture, etc.). A person's name is not the title of a work. The
          text in the <Code color="success">{`<cite>`}</Code> element usually
          renders in italic.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`}{" "}
        </Code>
      </div>

      {/* <bdo> for Bi-Directional Override */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {"<bdo>"} for Bi-Directional Override
        </h1>

        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          BDO stands for Bi-Directional Override. The HTML{" "}
          <Code color="success">{`<bdo>`}</Code>tag is used to override the
          current text direction:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] w-full mt-3 p-3"
          color="success"
          size="lg"
        >
          {`<bdo dir="rtl">This text will be written from right to left</bdo>`}{" "}
        </Code>
      </div>
      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/formatting"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Formatting
          </Button>
        </Link>
        <Link href={"/doc/html/comments"}>
          <Button variant={"outline"} className="flex gap-3">
            Comments <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
