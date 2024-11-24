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
                Links
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Links */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Links</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Links are found in nearly all web pages. Links allow users to click
          their way from page to page.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Links - Hyperlinks */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Links - Hyperlinks
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML links are hyperlinks. You can click on a link and jump to another
          document. When you move the mouse over a link, the mouse arrow will
          turn into a little hand.
        </p>
      </div>

      {/* Links - Syntax */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Links - Syntax
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<a>"}</Code> tag defines a hyperlink.
          It has the following syntax:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="url">link text</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The most important attribute of the{" "}
          <Code color="success">{"<a>"}</Code> element is the{" "}
          <Code color="success">{"href"}</Code> attribute, which indicates the
          link's destination. The link text is the part that will be visible to
          the reader. Clicking on the link text, will send the reader to the
          specified URL address.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.devlearn.com/">`} <br />{" "}
          {`Visit devlearn.com!`} <br />
          {`</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, links will appear as follows in all browsers:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              An unvisited link is underlined and blue
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              A visited link is underlined and purple
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <p className="text-[16px] text-[#71717a]">
              {" "}
              An active link is underlined and red
            </p>
          </li>
        </ul>
      </div>

      {/* Links - The target Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Links - The target Attribute
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, the linked page will be displayed in the current browser
          window. To change this, you must specify another target for the link.
          The target attribute specifies where to open the linked document.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          The target attribute can have one of the following values:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-5">
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <Code color="success">_self</Code>
            <p className="text-[16px] text-[#71717a]">
              {" "}
              Default. Opens the document in the same window/tab as it was
              clicked
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <Code color="success">_blank</Code>
            <p className="text-[16px] text-[#71717a]">
              {" "}
              Opens the document in a new window or tab
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <Code color="success">_parent</Code>
            <p className="text-[16px] text-[#71717a]">
              {" "}
              Opens the document in the parent frame
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-[6px] w-[6px] bg-black rounded-3xl"></div>{" "}
            <Code color="success">_top</Code>
            <p className="text-[16px] text-[#71717a]">
              {" "}
              Opens the document in the full body of the window
            </p>
          </li>
        </ul>
      </div>

      {/* Absolute URLs vs. Relative URLs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Absolute URLs vs. Relative URLs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Both examples above are using an absolute URL (a full web address) in
          the href attribute. A local link (a link to a page within the same
          website) is specified with a relative URL (without the "https://www"
          part):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<h2>Absolute URLs</h2>"} <br />
          {`<p>`} <br /> {`<a href="https://www.w3.org/">W3C</a>`} <br />
          {`</p>`} <br />
          {`<p>`} <br />
          {`<a href="https://www.google.com/">Google</a>`} <br />
          {`</p>`} <br /> <br />
          {`<h2>Relative URLs</h2>`} <br />
          {`<p>`} <br /> {`<a href="html_images.asp">HTML Images</a>`} <br />
          {`</p>`} <br />
          {`<p>`} <br /> {`<a href="/css/default.asp">CSS Tutorial</a>`} <br />
          {`</p>`}
        </Code>
      </div>

      {/* Links - Use an Image as a Link */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Links - Use an Image as a Link
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To use an image as a link, just put the{" "}
          <Code color="success">{"<img>"}</Code> tag inside the{" "}
          <Code color="success">{"<img>"}</Code> tag:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="default.asp">`} <br />
          {`<img src="smiley.gif" alt="HTML tutorial" `} <br />{" "}
          {`style="width:42px;height:42px;">`} <br />
          {`</a>`}
        </Code>
      </div>

      {/* Link to an Email Address */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Link to an Email Address
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use mailto: inside the href attribute to create a link that opens the
          user's email program (to let them send a new email):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="mailto:someone@example.com">`} <br />
          {`Send email`} <br />
          {`</a>`}
        </Code>
      </div>

      {/* Button as a Link */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Button as a Link
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To use an HTML button as a link, you have to add some JavaScript code.
          JavaScript allows you to specify what happens at certain events, such
          as a click of a button:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<button onclick="document.location='default.asp'">`} <br />{" "}
          {`HTML Tutorial`} <br /> {`</button>`}
        </Code>
      </div>

      {/* Link Titles */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Link Titles
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The title attribute specifies extra information about an element. The
          information is most often shown as a tooltip text when the mouse moves
          over the element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.w3schools.com/html/" `} <br />{" "}
          {`title="Go to W3Schools HTML section">`} <br />{" "}
          {`Visit our HTML Tutorial`} <br /> {`</a>`}
        </Code>
      </div>

      {/* More on Absolute URLs and Relative URLs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          More on Absolute URLs and Relative URLs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use a full URL to link to a web page:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="https://www.w3schools.com/html/`} <br />
          {`default.asp">`} <br />
          {`HTML tutorial`} <br />
          {`</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Link to a page located in the html folder on the current web site:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="/html/default.asp">HTML tutorial</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Link to a page located in the same folder as the current page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<a href="default.asp">HTML tutorial</a>`}
        </Code>
      </div>

      {/* SUMMARY */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<a>"}</Code> element defines a link, with
          the href attribute specifying the link address and the target
          attribute determining where to open the linked document. You can also
          use the <Code color="success">{"<img>"}</Code> element inside{" "}
          <Code color="success">{"<a>"}</Code> to turn an image into a clickable
          link. Additionally, the mailto: scheme can be used within the href
          attribute to create a link that opens the user's email program.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/css"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> CSS
          </Button>
        </Link>
        <Link href={"/doc/html/page-titles"}>
          <Button variant={"outline"} className="flex gap-3">
            Page Titles <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
