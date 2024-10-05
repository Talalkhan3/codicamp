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
                iFrames
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Iframes */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Iframes</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An HTML iframe is used to display a web page within a web page.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Iframe Syntax */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Iframe Syntax</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<iframe>"}</Code> tag specifies an
          inline frame. An inline frame is used to embed another document within
          the current HTML document.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="url" title="description"></iframe>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          It is a good practice to always include a{" "}
          <Code color="success">{"title"}</Code> attribute for the{" "}
          <Code color="success">{"<iframe>"}</Code>. This is used by screen
          readers to read out what the content of the iframe is.
        </p>
      </div>

      {/* Set Height and Width */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Set Height and Width
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the height and width attributes to specify the size of the iframe.
          The height and width are specified in pixels by default:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Or you can add the style attribute and use the CSS height and width
          properties:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>`}
        </Code>
      </div>

      {/* Remove the Border */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Remove the Border
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, an iframe has a border around it. To remove the border,
          add the style attribute and use the CSS border property:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          With CSS, you can also change the size, style and color of the
          iframe's border:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="demo_iframe.htm" style="border:2px solid red;" title="Iframe Example"></iframe>`}
        </Code>
      </div>

      {/* Target for a Link */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Target for a Link
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An iframe can be used as the target frame for a link. The target
          attribute of the link must refer to the name attribute of the iframe:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>`}{" "}
          <br /> <br />
          {`<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>`}
        </Code>
      </div>

      {/* Summary */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<iframe>"}</Code> tag is used to
          specify an inline frame, allowing you to embed another webpage within
          your current page. The <Code color="success">{"src"}</Code> attribute
          defines the URL of the page you want to embed, and it is essential to
          include a <Code color="success">{"title"}</Code> attribute to improve
          accessibility for screen readers. You can control the size of the
          iframe using the <Code color="success">{"height"}</Code> and{" "}
          <Code color="success">{"width"}</Code> attributes, and to remove the
          border around the iframe, you can apply the CSS property{" "}
          <Code color="success">{"border:none;"}</Code>
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/id"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Id
          </Button>
        </Link>
        <Link href={"/doc/html/javascripts"}>
          <Button variant={"outline"} className="flex gap-3">
            JavaScript <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
