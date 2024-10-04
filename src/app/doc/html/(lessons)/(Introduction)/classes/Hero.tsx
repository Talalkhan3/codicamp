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
import { p } from "framer-motion/client";

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
                Classes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* class Attribute */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Class Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"class"}</Code> attribute is used to
          specify a class for an HTML element. Multiple HTML elements can share
          the same class.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Using The class Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Using The class Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"class"}</Code> attribute is often used to
          point to a class name in a style sheet. It can also be used by a
          JavaScript to access and manipulate elements with the specific class
          name. In the following example we have three{" "}
          <Code color="success">{"<div>"}</Code> elements with a
          <Code color="success">{"class"}</Code> attribute with the value of
          "city". All of the three <Code color="success">{"<div>"}</Code>{" "}
          elements will be styled equally according to the{" "}
          <Code color="success">{".city"}</Code> style definition in the head
          section:
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
          {".city {"}
          <p className="pl-2">{"background-color: tomato;"}</p>
          <p className="pl-2">{"color: white;"}</p>
          <p className="pl-2">{"border: 2px solid black;"}</p>
          <p className="pl-2">{"margin: 20px;"}</p>
          <p className="pl-2">{"padding: 20px;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<div class="city">`}
          <p className="pl-2">{"<h2>London</h2>"}</p>
          <p className="pl-2">{"<p>London is the capital of England.</p>"}</p>
          {"</div>"} <br /> <br />
          {`<div class="city">`}
          <p className="pl-2">{"<h2>Paris</h2>"}</p>
          <p className="pl-2">{"<p>Paris is the capital of France.</p>"}</p>
          {"</div>"} <br /> <br />
          {`<div class="city">`}
          <p className="pl-2">{"<h2>Tokyo</h2>"}</p>
          <p className="pl-2">{"<p>Tokyo is the capital of Japan.</p>"}</p>
          {"</div>"} <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example we have two{" "}
          <Code color="success">{"<span>"}</Code> elements with a class
          attribute with the value of "note". Both{" "}
          <Code color="success">{"<span>"}</Code> elements will be styled
          equally according to the <Code color="success">{".note"}</Code> style
          definition in the head section:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {"<style>"} <br />
          {".note {"}
          <p className="pl-2">{" font-size: 120%;"}</p>
          <p className="pl-2">{"color: red;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-2">{`<h1>My <span class="note">Important</span> Heading</h1>`}</p>
          <p className="pl-2">{`<p>This is some <span class="note">important</span> text.</p>`}</p>{" "}
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* The Syntax For Class */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Syntax For Class
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a class; write a period (.) character, followed by a class
          name. Then, define the CSS properties within curly braces {}:
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
          {".city {"}
          <p className="pl-2">{"background-color: tomato;"}</p>
          <p className="pl-2">{"color: white;"}</p>
          <p className="pl-2">{"padding: 10px;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
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
          <p className="pl-2">{`<p>Tokyo is the capital of Japan.</p>`}</p>{" "}
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Multiple Classes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Multiple Classes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML elements can belong to more than one class. To define multiple
          classes, separate the class names with a space, e.g.{" "}
          <Code color="success">{`<div class="city main">`}</Code>. The element
          will be styled according to all the classes specified. In the
          following example, the first <Code color="success">{"<h2>"}</Code>{" "}
          element belongs to both the city class and also to the main class, and
          will get the CSS styles from both of the classes:{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<h2 class="city main">London</h2>`} <br />
          {`<h2 class="city">Paris</h2>`} <br />
          {`<h2 class="city">Tokyo</h2>`}
        </Code>
      </div>

      {/* Different Elements Can Share Same Class */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Different Elements Can Share Same Class
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Different HTML elements can point to the same class name. In the
          following example, both <Code color="success">{"<h2>"}</Code> and{" "}
          <Code color="success">{"<p>"}</Code> point to the "city" class and
          will share the same style:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {`<h2 class="city">Paris</h2>`} <br />
          {` <p class="city">Paris is the capital of France</p>`}
        </Code>
      </div>

      {/* Use of The class Attribute in JavaScript */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Use of The class Attribute in JavaScript
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The class name can also be used by JavaScript to perform certain tasks
          for specific elements. JavaScript can access elements with a specific
          class name with the{" "}
          <Code color="success">{"getElementsByClassName()"}</Code> method:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<script>"} <br />
          {`function myFunction() {`}
          <p className="pl-2">{` var x = document.getElementsByClassName("city");`}</p>
          <p className="pl-2">{`for (var i = 0; i < x.length; i++) {`}</p>
          <p className="pl-5">{`x[i].style.display = "none";`}</p>
          <p className="pl-2">{`}`}</p>
          {`}`} <br />
          {"</script>"}
        </Code>
      </div>

      {/* Summary */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Summary</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"class"}</Code> attribute assigns one
          or more class names to an element, which can be used by CSS and
          JavaScript to select and interact with specific elements. It can be
          applied to any HTML element, and{" "}
          <Code color="success">{"class"}</Code> names are case-sensitive.
          Multiple elements can share the same class name, allowing for
          consistent styling or behavior across different elements. In
          JavaScript, elements with a particular class name can be accessed
          using the <Code color="success">{"getElementsByClassName()"}</Code>{" "}
          method.
        </p>
      </div>


      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/div"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Div
          </Button>
        </Link>
        <Link href={"/doc/html/id"}>
          <Button variant={"outline"} className="flex gap-3">
            Id <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
