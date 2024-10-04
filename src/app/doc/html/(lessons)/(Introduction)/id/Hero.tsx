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
                Id
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* id Attribute */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">id Attribute</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"id"}</Code> attribute is used to
          specify a unique id for an HTML element. You cannot have more than one
          element with the same id in an HTML document.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Using The id Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using The id Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"id"}</Code> attribute specifies a unique
          id for an HTML element. The value of the{" "}
          <Code color="success">{"id"}</Code> attribute must be unique within
          the HTML document. The <Code color="success">{"id"}</Code>
          attribute is used to point to a specific style declaration in a style
          sheet. It is also used by JavaScript to access and manipulate the
          element with the specific id. The syntax for id is: write a hash
          character (#), followed by an id name. Then, define the CSS properties
          within curly braces {}. In the following example we have an{" "}
          <Code color="success">{"<h1>"}</Code> element that points to the id
          name "myHeader". This <Code color="success">{"<h1>"}</Code> element
          will be styled according to the{" "}
          <Code color="success">{"#myHeader"}</Code> style definition in the
          head section:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {"#myHeader {"}
          <p className="pl-2">{"background-color: lightblue;"}</p>
          <p className="pl-2">{"color: black;"}</p>
          <p className="pl-2">{"padding: 40px;"}</p>
          <p className="pl-2">{"text-align: center;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-2">{`<h1 id="myHeader">My Header</h1>`} </p>
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Difference Between Class and ID */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Difference Between Class and ID
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A class name can be used by multiple HTML elements, while an id name
          must only be used by one HTML element within the page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <style>"} <br />
          {`/* Style the element with the id "myHeader" */`} <br />
          {"#myHeader {"} <br />
          <p className="pl-2">{" background-color: lightblue;"} </p>
          <p className="pl-2">{"color: black;"}</p>
          <p className="pl-2">{"padding: 40px;"}</p>
          <p className="pl-2">{"text-align: center;"}</p>
          {"}"} <br /> <br />
          {`/* Style all elements with the class name "city" */`} <br />
          {".city {"}
          <p className="pl-2">{"background-color: tomato;"}</p>
          <p className="pl-2">{"color: white;"}</p>
          <p className="pl-2">{"padding: 10px;"}</p>
          {"}"} <br />
          {"</style>"} <br /> <br />
          <p className="pl-2">{"<!-- An element with a unique id -->"}</p>
          <p className="pl-2">{`<h1 id="myHeader">My Cities</h1>`}</p> <br />
          <p className="pl-2">{"<!-- Multiple elements with same class -->"}</p>
          <p className="pl-2">{`<h2 class="city">London</h2>`}</p>
          <p className="pl-2">
            {"<p>London is the capital of England.</p>"}
          </p>{" "}
          <br />
          <p className="pl-2">{`<h2 class="city">Paris</h2>`}</p>
          <p className="pl-2">
            {"<p>Paris is the capital of France.</p>"}
          </p>{" "}
          <br />
          <p className="pl-2">{`<h2 class="city">Tokyo</h2>`}</p>
          <p className="pl-2">{"<p>Tokyo is the capital of Japan.</p>"}</p>
        </Code>
      </div>

      {/* HTML Bookmarks with ID and Links */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Bookmarks with ID and Links
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML bookmarks are used to allow readers to jump to specific parts of
          a webpage. Bookmarks can be useful if your page is very long. To use a
          bookmark, you must first create it, and then add a link to it. Then,
          when the link is clicked, the page will scroll to the location with
          the bookmark.
        </p>
        <p>
          First, create a bookmark with the <Code color="success">{"id"}</Code>{" "}
          attribute:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<h2 id="C4">Chapter 4</h2>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Then, add a link to the bookmark ("Jump to Chapter 4"), from within
          the same page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<a href="#C4">Jump to Chapter 4</a>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Or, add a link to the bookmark ("Jump to Chapter 4"), from another
          page:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >{`<a href="html_demo.html#C4">Jump to Chapter 4</a>`}</Code>
      </div>

      {/* Using The id Attribute in JavaScript */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using The id Attribute in JavaScript
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"id"}</Code> attribute can also be used by
          JavaScript to perform some tasks for that specific element. JavaScript
          can access an element with a specific id with the{" "}
          <Code color="success">{"getElementById()"}</Code> method:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<script>"} <br />
          {"function displayResult() {"} <br />
          <p className="pl-5">{`document.getElementById("myHeader").innerHTML = "Have a nice day!";`}</p>
          {"}"} <br />
          {"</script>"}
        </Code>
      </div>

      {/* Summary */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"id"}</Code> attribute assigns a unique
          identifier to an HTML element, ensuring its value is distinct within
          the document. This attribute is case-sensitive and is commonly used by
          CSS and JavaScript to style or interact with a specific element.
          Additionally, the <Code color="success">{"id"}</Code> attribute can be
          used to create HTML bookmarks for navigation. JavaScript can directly
          access an element with a particular id using the{" "}
          <Code color="success">{"getElementById()"}</Code> method.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/classes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Classes
          </Button>
        </Link>
        <Link href={"/doc/html/iframes"}>
          <Button variant={"outline"} className="flex gap-3">
            iFrames <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
