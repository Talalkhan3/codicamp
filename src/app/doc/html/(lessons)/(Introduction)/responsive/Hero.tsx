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
    <ScrollArea className="w-full h-[90vh] pr-10 max-md:pr-3">
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
                Responsive
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Responsive Web Design */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Responsive Web Design
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Responsive web design is about creating web pages that look good on
          all devices! A responsive web design will automatically adjust for
          different screen sizes and viewports.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is Responsive Web Design? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What is Responsive Web Design?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Responsive Web Design is about using HTML and CSS to automatically
          resize, hide, shrink, or enlarge, a website, to make it look good on
          all devices (desktops, tablets, and phones):
        </p>
      </div>

      {/* Setting The Viewport */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Setting The Viewport
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a responsive website, add the following{" "}
          <Code color="success">{"<meta>"}</Code> tag to all your web pages:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This will set the viewport of your page, which will give the browser
          instructions on how to control the page's dimensions and scaling.
        </p>
      </div>

      {/* Using the width Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using the width Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If the CSS width property is set to 100%, the image will be responsive
          and scale up and down:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<img src="img_girl.jpg" style="width:100%;">`}
        </Code>
      </div>

      {/* Using the max-width Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using the max-width Property
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          If the max-width property is set to 100%, the image will scale down if
          it has to, but never scale up to be larger than its original size:Z
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<img src="img_girl.jpg" style="max-width:100%;height:auto;">`}
        </Code>
      </div>

      {/* Show Different Images Depending on Browser Width */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Show Different Images Depending on Browser Width
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<picture>"}</Code> element allows you
          to define different images for different browser window sizes.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<picture>"}
          <p className="pl-3">{`<source srcset="img_smallflower.jpg" media="(max-width: 600px)">`}</p>
          <p className="pl-3">{`<source srcset="img_flowers.jpg" media="(max-width: 1500px)">`}</p>
          <p className="pl-3">{`<source srcset="flowers.jpg">`}</p>
          <p className="pl-3">{`<img src="img_smallflower.jpg" alt="Flowers">`}</p>
          {"</picture>"}
        </Code>
      </div>

      {/* Responsive Text Size */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Responsive Text Size
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The text size can be set with a "vw" unit, which means the "viewport
          width". That way the text size will follow the size of the browser
          window:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<h1 style="font-size:10vw">Hello World</h1>`}</Code>
      </div>

      {/* Media Queries */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Media Queries</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          In addition to resize text and images, it is also common to use media
          queries in responsive web pages. With media queries you can define
          completely different styles for different browser sizes.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<style>"} <br />
          {".left, .right {"}
          <p className="pl-3">{"float: left;"}</p>
          <p className="pl-3">
            {"width: 20%; /* The width is 20%, by default */"}
          </p>
          {"}"} <br /> <br />
          {".main {"}
          <p className="pl-3">{"float: left;"}</p>
          <p className="pl-3">
            {"width: 60%; /* The width is 60%, by default */"}
          </p>
          {"}"} <br /> <br />
          {"/* Use a media query to add a breakpoint at 800px: */"} <br />
          {"@media screen and (max-width: 800px) {"}
          <p className="pl-3">{".left, .main, .right {"}</p>
          <p className="pl-7">
            {
              "width: 100%; /* The width is 100%, when the viewport is 800px or smaller */"
            }
          </p>
          <p className="pl-3">{"}"}</p>
          {"}"}
          {"</style>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/layout"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Layout
          </Button>
        </Link>
        <Link href={"/doc/html/computer-code"}>
          <Button variant={"outline"} className="flex gap-3 ">
            Computer Code <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
