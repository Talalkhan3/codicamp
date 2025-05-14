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
                Multiple Backgrounds
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Multiple Backgrounds */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Backgrounds</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter covers how to apply multiple background images to a
          single element and provides an understanding of related properties
          such as <Code color="success">background-size</Code> for controlling
          the size of background images,{" "}
          <Code color="success">background-origin</Code> for setting the
          positioning area, and
          <Code color="success">background-clip</Code> for defining how far the
          background extends within the element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* CSS Multiple Backgrounds */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Multiple Backgrounds
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS allows you to add multiple background images for an element,
          through the background-image property. The different background images
          are separated by commas, and the images are stacked on top of each
          other, where the first image is closest to the viewer. The following
          example has two background images, the first image is a flower
          (aligned to the bottom and right) and the second image is a paper
          background (aligned to the top-left corner):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#example1 {"}
          <p className="pl-3">
            {"background-image: url(img_flwr.gif), url(paper.gif);"}
          </p>
          <p className="pl-3">
            {"background-position: right bottom, left top;"}
          </p>
          <p className="pl-3">{"background-repeat: no-repeat, repeat;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Multiple background images can be specified using either the
          individual background properties (as above) or the{" "}
          <Code color="success">background</Code> shorthand property. The
          following example uses the <Code color="success">background</Code>{" "}
          shorthand property (same result as example above):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#example1 {"}
          <p className="pl-3">
            {
              "background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;"
            }
          </p>
          {"}"}
        </Code>
      </div>

      {/* CSS Background Size */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Background Size
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS background-size property allows you to specify the size of
          background images. The size can be specified in lengths, percentages,
          or by using one of the two keywords: contain or cover.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#div1 {"}
          <p className="pl-3">{"background: url(img_flower.jpg);"}</p>
          <p className="pl-3">{"background-size: 100px 80px;"}</p>
          <p className="pl-3">{"background-repeat: no-repeat;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The two other possible values for{" "}
          <Code color="success">background-size</Code> are{" "}
          <Code color="success">contain</Code> and
          <Code color="success">cover</Code>. <br /> <br /> The{" "}
          <Code color="success">contain</Code> keyword scales the background
          image to be as large as possible (but both its width and its height
          must fit inside the content area). As such, depending on the
          proportions of the background image and the background positioning
          area, there may be some areas of the background which are not covered
          by the background image. <br /> <br /> The{" "}
          <Code color="success">cover</Code> keyword scales the background image
          so that the content area is completely covered by the background image
          (both its width and height are equal to or exceed the content area).
          As such, some parts of the background image may not be visible in the
          background positioning area.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#div1 {"}
          <p className="pl-3">{"background: url(img_flower.jpg);"}</p>
          <p className="pl-3">{"background-size: contain;"}</p>
          <p className="pl-3">{"background-repeat: no-repeat;"}</p>
          {"}"} <br /> <br />
          {"#div2 {"}
          <p className="pl-3">{"background: url(img_flower.jpg);"}</p>
          <p className="pl-3">{"background-size: cover;"}</p>
          <p className="pl-3">{"background-repeat: no-repeat;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Define Sizes of Multiple Background Images */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Define Sizes of Multiple Background Images
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">background-size</Code> property also accepts
          multiple values for background size (using a comma-separated list),
          when working with multiple backgrounds. The following example has
          three background images specified, with different background-size
          value for each image:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#example1 {"}
          <p className="pl-3">
            {"background: url(img_tree.gif) left top no-repeat,"} <br />{" "}
            {
              "url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;"
            }
          </p>
          <p className="pl-3">{"background-size: 50px, 130px, auto;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Full Size Background Image */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Full Size Background Image
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a background image that covers the entire browser window
          without white spaces or scrollbars, apply the background to the{" "}
          <Code color="success">{"<html>"}</Code> element, which always spans at
          least the height of the browser window. Use CSS to set the background
          to fixed and centered, and adjust its size with the{" "}
          <Code color="success">background-size</Code> property to ensure the
          image fills the page, scaling as needed while remaining centered.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"html {"}
          <p className="pl-3">
            {"background: url(img_man.jpg) no-repeat center fixed;"}
          </p>
          <p className="pl-3">{"background-size: cover;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Hero Image */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Hero Image
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          You could also use different background properties on a {"<div>"} to
          create a hero image (a large image with text), and place it where you
          want.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".hero-image {"}
          <p className="pl-3">
            {"background: url(img_man.jpg) no-repeat center;"}
          </p>
          <p className="pl-3">{"background-size: cover;"}</p>
          <p className="pl-3">{"height: 500px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          {"}"}
        </Code>
      </div>

      {/*  CSS background-origin Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS background-origin Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">background-origin</Code> property
          defines the starting position of a background image and offers three
          values: <Code color="success">border-box</Code>, where the image
          begins at the upper-left corner of the border;
          <Code color="success">padding-box</Code> (default), where it starts
          from the upper-left corner of the padding edge; and{" "}
          <Code color="success">content-box</Code>, where it begins at the
          upper-left corner of the content.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#example1 {"}
          <p className="pl-3">{"border: 10px solid black;"}</p>
          <p className="pl-3">{"padding: 35px;"}</p>
          <p className="pl-3">{"background: url(img_flwr.gif);"}</p>
          <p className="pl-3">{"background-repeat: no-repeat;"}</p>
          <p className="pl-3">{"background-origin: content-box;"}</p>
          {"}"}
        </Code>
      </div>

      {/* CSS background-clip Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          CSS background-clip Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS <Code color="success">background-clip</Code> property defines
          the area within which the background is painted, offering three
          values: <Code color="success">border-box</Code>
          (default), where the background extends to the outside edge of the
          border; <Code color="success">padding-box</Code>, where it is confined
          to the outside edge of the padding; and{" "}
          <Code color="success">content-box </Code>, where it is restricted to
          the content area.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#example1 {"}
          <p className="pl-3">{"border: 10px dotted black;"}</p>
          <p className="pl-3">{"padding: 35px;"}</p>
          <p className="pl-3">{"background: yellow;"}</p>
          <p className="pl-3">{"background-clip: content-box;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/rounded-corners"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Rounded corners
          </Button>
        </Link>
        <Link href={"/doc/css/ad-colors"}>
          <Button variant={"outline"} className="flex gap-3">
            Colors <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
