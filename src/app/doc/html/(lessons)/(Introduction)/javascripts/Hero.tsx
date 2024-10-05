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
import Script from "next/script";

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
                Javascript
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* JavaScript */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">JavaScript</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5" id="demo">
          JavaScript makes HTML pages more dynamic and interactive.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The HTML <script> Tag */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<script>"} Tag
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<script>"}</Code> tag is used to
          define a client-side script (JavaScript). The{" "}
          <Code color="success">{"<script>"}</Code> element either contains
          script statements, or it points to an external script file through the
          <Code color="success">{"src"}</Code> attribute. Common uses for
          JavaScript are image manipulation, form validation, and dynamic
          changes of content. To select an HTML element, JavaScript most often
          uses the <Code color="success">{"document.getElementById()"}</Code>{" "}
          method. This JavaScript example writes "Hello JavaScript!" into an
          HTML element with id="demo":
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {"<script>"} <br />
          <p className="pl-2">{`document.getElementById("demo").innerHTML = "Hello JavaScript!";`}</p>{" "}
          {"</script>"}
        </Code>
      </div>

      {/* A Taste of JavaScript */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          A Taste of JavaScript
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Here are some examples of what JavaScript can do:
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          JavaScript can change content:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {`document.getElementById("demo").innerHTML = "Hello JavaScript!";`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          JavaScript can change styles:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {`document.getElementById("demo").style.fontSize = "25px";`} <br />
          {`document.getElementById("demo").style.color = "red";`} <br />
          {`document.getElementById("demo").style.backgroundColor = "yellow";`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          JavaScript can change attributes:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {`document.getElementById("image").src = "picture.gif";`} <br />
        </Code>
      </div>

      {/* The HTML <noscript> Tag */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<noscript>"} Tag
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<noscript>"}</Code> tag defines an
          alternate content to be displayed to users that have disabled scripts
          in their browser or have a browser that doesn't support scripts:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
        >
          {"<script>"}
          <p className="pl-3">{`document.getElementById("demo").innerHTML = "Hello JavaScript!";`}</p>
          {`</script>`} <br />
          {
            "<noscript>Sorry, your browser does not support JavaScript!</noscript>"
          }
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/iframes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> iFrames
          </Button>
        </Link>
        <Link href={"/doc/html/file-paths"}>
          <Button variant={"outline"} className="flex gap-3">
            File Paths <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
