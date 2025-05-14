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
                Specificity
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   The !important Rule */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">
          {" "}
          The !important Rule
        </h1>
        <Separator className="mt-5" />
      </div>

      {/* What is !important? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What is !important?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">!important</Code> rule in CSS is used to add
          more importance to a property/value than normal. In fact, if you use
          the <Code color="success">!important</Code> rule, it will override ALL
          previous styling rules for that specific property on that element! Let
          us look at an example:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#myid {"}
          <p className="pl-3">{"background-color: blue;"}</p>
          {"}"} <br /> <br />
          {".myclass {"}
          <p className="pl-3">{"background-color: gray;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-3">{"background-color: red !important;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the example above, all three paragraphs will get a red background
          color, even though the ID selector and the class selector have a
          higher specificity. The <Code color="success">!important</Code> rule
          overrides the <Code color="success">background-color</Code> property
          in both cases.
        </p>
      </div>

      {/* Important About !important */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Important About !important
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The only way to override an <Code color="success">!important</Code>{" "}
          rule is to include another <Code color="success">!important</Code>{" "}
          rule on a declaration with the same (or higher) specificity in the
          source code - and here the problem starts! This makes the CSS code
          confusing and the debugging will be hard, especially if you have a
          large style sheet! Here we have created a simple example. It is not
          very clear, when you look at the CSS source code, which color is
          considered most important:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#myid {"}
          <p className="pl-3">{"background-color: blue !important;"}</p>
          {"}"} <br /> <br />
          {".myclass {"}
          <p className="pl-3">{"background-color: gray !important;"}</p>
          {"}"} <br /> <br />
          {"p {"}
          <p className="pl-3">{" background-color: red !important;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          It is good to know about the !important rule. You might see it in some
          CSS source code. However, do not use it unless you absolutely have to.
        </p>
      </div>

      {/* Maybe One or Two Fair Uses of !important */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Maybe One or Two Fair Uses of !important
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          One way to use <Code color="success">!important</Code> is if you have
          to override a style that cannot be overridden in any other way. This
          could be if you are working on a Content Management System (CMS) and
          cannot edit the CSS code. Then you can set some custom styles to
          override some of the CMS styles.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          Another way to use <Code color="success">!important</Code> is: Assume
          you want a special look for all buttons on a page. Here, buttons are
          styled with a gray background color, white text, and some padding and
          border:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".button {"}
          <p className="pl-3">{"background-color: #8c8c8c;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid black;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The look of a button can sometimes change if we put it inside another
          element with higher specificity, and the properties get in conflict.
          Here is an example of this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".button {"}
          <p className="pl-3">{"background-color: #8c8c8c;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid black;"}</p>
          {"}"} <br /> <br />
          {"#myDiv a {"}
          <p className="pl-3">{"color: red;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To "force" all buttons to have the same look, no matter what, we can
          add the <Code color="success">!important</Code> rule to the properties
          of the button, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".button {"}
          <p className="pl-3">{"background-color: #8c8c8c !important;"}</p>
          <p className="pl-3">{"color: white !important;"}</p>
          <p className="pl-3">{"padding: 5px !important;"}</p>
          <p className="pl-3">{"border: 1px solid black !important;"}</p>
          {"}"} <br /> <br />
          {"#myDiv a {"}
          <p className="pl-3">{"color: red;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/specificity"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Specificity
          </Button>
        </Link>
        <Link href={"/doc/css/math-functions"}>
          <Button variant={"outline"} className="flex gap-3">
            Math Functions <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
