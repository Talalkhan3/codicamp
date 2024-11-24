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
                Image Sprites
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Image Sprites  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Image Sprites</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          An image sprite is a collection of images put into a single image. A
          web page with many images can take a long time to load and generates
          multiple server requests. Using image sprites will reduce the number
          of server requests and save bandwidth.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Image Sprites - Create a Navigation List */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Image Sprites - Create a Navigation List
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          We want to use the sprite image ("img_navsprites.gif") to create a
          navigation list. We will use an HTML list, because it can be a link
          and also supports a background image:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#navlist {"}
          <p className="pl-3">{"position: relative;"}</p>
          {"}"} <br /> <br />
          {"#navlist li {"}
          <p className="pl-3">{"margin: 0;"}</p>
          <p className="pl-3">{"padding: 0;"}</p>
          <p className="pl-3">{"list-style: none;"}</p>
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"top: 0;"}</p>
          {"}"} <br /> <br />
          {"#navlist li, #navlist a {"}
          <p className="pl-3">{"height: 44px;"}</p>
          <p className="pl-3">{"display: block;"}</p>
          {"}"} <br /> <br />
          {"#home {"}
          <p className="pl-3">{"left: 0px;"}</p>
          <p className="pl-3">{"width: 46px;"}</p>
          <p className="pl-3">{"background: url('img_navsprites.gif') 0 0;"}</p>
          {"}"} <br /> <br />
          {"#prev {"}
          <p className="pl-3">{"left: 63px;"}</p>
          <p className="pl-3">{"width: 43px;"}</p>
          <p className="pl-3">
            {"background: url('img_navsprites.gif') -47px 0;"}
          </p>
          {"}"} <br /> <br />
          {"#next {"}
          <p className="pl-3">{"left: 129px;"}</p>
          <p className="pl-3">{"width: 43px;"}</p>
          <p className="pl-3">
            {"background: url('img_navsprites.gif') -91px 0;"}
          </p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">#navlist</Code> is set to{" "}
          <Code color="success">position: relative</Code> to enable absolute
          positioning for its child elements. The list items (
          <Code color="success">#navlist li</Code>) are styled with{" "}
          <Code color="success">margin: 0</Code>,
          <Code color="success">padding: 0</Code>,{" "}
          <Code color="success">list-style: none</Code>, and{" "}
          <Code color="success">position: absolute</Code> with a
          <Code color="success">top: 0</Code>. Both{" "}
          <Code color="success">#navlist li</Code> and{" "}
          <Code color="success">#navlist a</Code> are given a height of 44px and{" "}
          <Code color="success">display: block</Code>. The{" "}
          <Code color="success">#home</Code>, <Code color="success">#prev</Code>
          , and <Code color="success">#next</Code> items are positioned using{" "}
          <Code color="success">left</Code> and{" "}
          <Code color="success">width`</Code> values to create spacing, with
          background images defined using the{" "}
          <Code color="success">background</Code>
          property. Each background image is offset horizontally to display the
          correct section of the sprite, with positions calculated based on the
          widths and spacing of previous elements.
        </p>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/image-gallery"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Image Gallery
          </Button>
        </Link>
        <Link href={"/doc/css/attr-selectors"}>
          <Button variant={"outline"} className="flex gap-3">
            Attr Selectors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
