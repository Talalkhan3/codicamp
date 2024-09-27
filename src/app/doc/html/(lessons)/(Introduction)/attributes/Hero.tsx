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
                Attributes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* ATTRIBUTES */}
      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">Attributes</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Every HTML element can include attributes, which supply extra
          information about the element. These attributes are always placed
          within the opening tag and typically follow a name/value structure,
          such as{" "}
          <Code color="success" radius="full">
            name="value"
          </Code>{" "}
          .
        </p>
      </div>

      {/* href Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {" "}
          The href Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The{" "}
          <Code color="success" radius="full">
            {"<a>"}
          </Code>{" "}
          tag defines a hyperlink. The{" "}
          <Code color="success" radius="full">
            {"href"}
          </Code>{" "}
          attribute specifies the URL of the page the link goes to:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] mt-2"
        >
          {`<a href="https://www.w3schools.com">Visit W3Schools</a>`}
        </Code>
      </div>

      {/* src Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The src Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          tag is used to embed an image in an HTML page. The
          <Code color="success" radius="full">
            {"src"}
          </Code>{" "}
          attribute specifies the path to the image to be displayed:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<img src="img_girl.jpg">`}
        </Code>
        <div className="mt-3">
          <p className="text-[16px] text-[#71717a] ">
            There are two ways to specify the URL in the src attribute:
          </p>
          <div>
            <h1 className="text-[20px] text-[#09090b] font-bold mt-3 ">
              Absolute URL
            </h1>
            <p className="text-[16px] text-[#71717a] ">
              {" "}
              Links to an external image that is hosted on another website.
              Example: src="https://www.youtube.com/video/img_girl.mp4".
            </p>

            <h1 className="text-[20px] text-[#09090b] font-bold mt-3">
              Relative URL
            </h1>
            <p className="text-[16px] text-[#71717a] ">
              {" "}
              Links to an image that is hosted within the website. Here, the URL
              does not include the domain name. If the URL begins without a
              slash, it will be relative to the current page. Example:
              src="img_girl.jpg". If the URL begins with a slash, it will be
              relative to the domain. Example: src="/images/img_girl.jpg".
            </p>
          </div>
        </div>
      </div>

      {/* The width and height Attributes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The width and height Attributes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          tag should also contain the width and height attributes, which specify
          the width and height of the image (in pixels):
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`img src="img_girl.jpg" width="500" height="600">`}
        </Code>
      </div>

      {/* The alt Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The alt Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The required{" "}
          <Code color="success" radius="full">
            {"alt"}
          </Code>{" "}
          attribute for the{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          tag specifies an alternate text for an image, if the image for some
          reason cannot be displayed. This can be due to a slow connection, or
          an error in the{" "}
          <Code color="success" radius="full">
            {"src"}
          </Code>{" "}
          attribute, or if the user uses a screen reader. Example
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<img src="img_girl.jpg" alt="Girl with a jacket">`}
        </Code>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<img src="img_typo.jpg" alt="Girl with a jacket">`}
        </Code>
      </div>

      {/* The style Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The style Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The{" "}
          <Code color="success" radius="full">
            {"style"}
          </Code>{" "}
          attribute is used to add styles to an element, such as color, font,
          size, and more.
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<p style="color:red;">This is a red paragraph.</p>`}
        </Code>
      </div>
      {/* The lang Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The lang Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          You should always include the lang attribute inside the {""}
          <Code color="success" radius="full">
            {"<html>"}
          </Code>{" "}
          tag, to declare the language of the Web page. This is meant to assist
          search engines and browsers.
        </p>
        <p className="text-[16px] text-[#71717a] mt-1">
          The following example specifies English as the language:
        </p>

        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-3"
        >
          {"<!DOCTYPE html>"} <br />
          {`<html lang="en">`} <br />
          {"<body>"} <br /> <br />
          {"..."} <br /> <br />
          {"</body>"}
          <br />
          {"</html>"}
        </Code>

        <p className="text-[16px] text-[#71717a]">
          Country codes can also be added to the language code in the lang
          attribute. So, the first two characters define the language of the
          HTML page, and the last two characters define the country.
        </p>

        <p className="text-[16px] text-[#71717a] mt-1">
          The following example specifies English as the language and United
          States as the country:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-3"
        >
          {"<!DOCTYPE html>"} <br />
          {`<html lang="en-US">`} <br />
          {"<body>"} <br /> <br />
          {"..."} <br /> <br />
          {"</body>"}
          <br />
          {"</html>"}
        </Code>
      </div>
      {/* The title Attribute */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The title Attribute{" "}
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The title attribute defines some extra information about an element.
          The value of the title attribute will be displayed as a tooltip when
          you mouse over the element:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-3"
        >
          {`<p title="I'm a tooltip">This is a paragraph.</p>`}
        </Code>
      </div>

      {/* Always Use Lowercase Attributes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Always Use Lowercase Attributes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML standard does not require lowercase attribute names. The
          title attribute (and all other attributes) can be written with
          uppercase or lowercase like title or TITLE. However, W3C recommends
          lowercase attributes in HTML, and demands lowercase attributes for
          stricter document types like XHTML.
        </p>
      </div>

      {/* Always Quote Attribute Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Always Quote Attribute Values
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML standard does not require quotes around attribute values.
          However, W3C recommends quotes in HTML, and demands quotes for
          stricter document types like XHTML.
        </p>
        <h3 className="text-green-500 text-[18px] mt-2">Good</h3>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>`}
        </Code>
        <h3 className="text-red-500 text-[18px] mt-2">Bad</h3>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<a href=https://www.w3schools.com/html/>Visit our HTML tutorial</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-2">
          Sometimes you have to use quotes. This example will not display the
          title attribute correctly, <br /> because it contains a space:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<p title=About W3Schools>`}
        </Code>
      </div>

      {/* Single or Double Quotes? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Single or Double Quotes?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Double quotes around attribute values are the most common in HTML, but
          single quotes can also be used. In some situations, when the attribute
          value itself contains double quotes, it is necessary to use single
          quotes:
        </p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<p title='John "ShotGun" Nelson'>`}
        </Code>
        <p className="text-[16px] text-[#71717a]">Or vice versa:</p>
        <Code
          color="success"
          size="lg"
          className=" w-full border-l-5 border-[#33d45e] my-2"
        >
          {`<p title="John 'ShotGun' Nelson">`}
        </Code>
      </div>

      {/* SUMMARY */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML elements can have attributes that provide additional information
          or functionality. For example, the href attribute in an{" "}
          <Code color="success" radius="full">
            {"<a>"}
          </Code>{" "}
          tag specifies the destination URL for the link, while the src
          attribute in an{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          tag defines the image source. The width and height attributes of{" "}
          <Code color="success" radius="full">
            {"<img>"}
          </Code>{" "}
          set image dimensions, and the alt attribute provides alternative text
          if the image fails to load. The style attribute allows inline styling,
          such as color, font, or size, and the lang attribute of the{" "}
          <Code color="success" radius="full">
            {"<html>"}
          </Code>{" "}
          tag specifies the language of the webpage. Additionally, the title
          attribute offers extra information, usually shown as a tooltip when
          hovering over an element.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/elements"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Elements
          </Button>
        </Link>
        <Link href={"/doc/html/headings"}>
          <Button variant={"outline"} className="flex gap-3">
            Headings <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
