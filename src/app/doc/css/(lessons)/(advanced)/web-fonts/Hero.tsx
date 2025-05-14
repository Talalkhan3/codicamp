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
                Web Fonts
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Web Fonts */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Web Fonts</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Web fonts are fonts specifically designed to be downloaded and
          displayed on web pages, enabling consistent typography across
          different devices and browsers.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The CSS @font-face Rule */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The CSS @font-face Rule
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Web fonts allow Web designers to use fonts that are not installed on
          the user's computer. When you have found/bought the font you wish to
          use, just include the font file on your web server, and it will be
          automatically downloaded to the user when needed. Your "own" fonts are
          defined within the CSS <Code color="success">@font-face</Code> rule.
        </p>
      </div>

      {/* Font Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Font Formats
        </h1>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            TrueType Fonts (TTF)
          </h1>
          <p className="text-[16px] text-[#71717a]">
            TrueType, developed in the late 1980s by Apple and Microsoft, is a
            widely used font standard. It is the most common font format for
            both Mac OS and Microsoft Windows operating systems, offering
            reliable support across platforms.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            OpenType Fonts (OTF)
          </h1>
          <p className="text-[16px] text-[#71717a] ">
            OpenType is an advanced format for scalable fonts, built on the
            foundation of TrueType. It is a registered trademark of Microsoft
            and is widely adopted on major computer platforms due to its
            enhanced features and compatibility.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            Web Open Font Format (WOFF)
          </h1>
          <p className="text-[16px] text-[#71717a] ">
            The WOFF format, introduced in 2009 and now a W3C Recommendation, is
            designed for use on web pages. Essentially a compressed version of
            TrueType or OpenType fonts, WOFF also includes additional metadata
            to optimize font distribution over networks with limited bandwidth.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            Web Open Font Format (WOFF 2.0)
          </h1>
          <p className="text-[16px] text-[#71717a] ">
            An improved version of WOFF, WOFF 2.0 offers better compression for
            TrueType and OpenType fonts, making it more efficient for web use.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            SVG Fonts/Shapes
          </h1>
          <p className="text-[16px] text-[#71717a] ">
            SVG fonts enable the use of scalable vector graphics (SVG) as glyphs
            for text display. Defined in the SVG 1.1 specification, this format
            allows fonts to be created within an SVG document. CSS styling and
            the <Code color="success">@font-face</Code> rule can also be applied
            to SVG-based text, providing flexibility for design and
            functionality.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px] text-[#09090b] font-semibold">
            Embedded OpenType Fonts (EOT)
          </h1>
          <p className="text-[16px] text-[#71717a] ">
            EOT is a compact version of OpenType fonts developed by Microsoft
            for embedding on web pages. It ensures smaller file sizes and
            seamless integration into websites.
          </p>
        </div>
      </div>

      {/* Using The Font You Want */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Using The Font You Want
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the <Code color="success">@font-face</Code> rule; first define a
          name for the font (e.g. myFirstFont) and then point to the font file.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          To use the font for an HTML element, refer to the name of the font
          (myFirstFont) through the <Code color="success">font-familys</Code>{" "}
          property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"@font-face {"}
          <p className="pl-3">{"font-family: myFirstFont;"}</p>
          <p className="pl-3">{"src: url(sansation_light.woff);"}</p>
          {"}"} <br /> <br />
          {"div {"}
          <p className="pl-3">{"font-family: myFirstFont;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Using Bold Text */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Using Bold Text
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          You must add another <Code color="success">@font-face</Code> rule
          containing descriptors for bold text:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"@font-face {"}
          <p className="pl-3">{"font-family: myFirstFont;"}</p>
          <p className="pl-3">{"src: url(sansation_bold.woff);"}</p>
          <p className="pl-3">{"font-weight: bold;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The file "sansation_bold.woff" is another font file, that contains the
          bold characters for the Sansation font. Browsers will use this
          whenever a piece of text with the font-family "myFirstFont" should
          render as bold. This way you can have many{" "}
          <Code color="success">@font-face</Code> rules for the same font.
        </p>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/text-effects"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Text Effects
          </Button>
        </Link>
        <Link href={"/doc/css/2d-transforms"}>
          <Button variant={"outline"} className="flex gap-3">
            2D Transforms <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
