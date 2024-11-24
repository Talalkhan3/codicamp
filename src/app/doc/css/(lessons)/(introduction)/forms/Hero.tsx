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
                Forms
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Forms */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Forms</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Forms in CSS are styled using properties to enhance the appearance and
          usability of form elements like input fields, buttons, checkboxes, and
          select menus, creating a visually appealing and interactive user
          interface.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Styling Input Fields */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Input Fields
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">width</Code> property to determine the
          width of the input field:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input {"}
          <p className="pl-3">{"width: 100%;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To style specific input types in CSS, use attribute selectors like{" "}
          <Code color="success">input[type=text]</Code> for text fields,{" "}
          <Code color="success">input[type=password]</Code> for password fields,
          and <Code color="success">input[type=number]</Code> for number fields.
        </p>
      </div>

      {/* Padded Inputs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Padded Inputs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">padding</Code> property to add space
          inside the text field. When you have many inputs after each other, you
          might also want to add some <Code color="success">margin</Code>, to
          add more space outside of them:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{"width: 100%;"}</p>
          <p className="pl-3">{"padding: 12px 20px;"}</p>
          <p className="pl-3">{"margin: 8px 0;"}</p>
          <p className="pl-3">{"box-sizing: border-box;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Bordered Inputs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Bordered Inputs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">border </Code> property to change the
          border size and color, and use the{" "}
          <Code color="success">border-radius</Code>property to add rounded
          corners:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{"border: 2px solid red;"}</p>
          <p className="pl-3">{"border-radius: 4px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you only want a bottom border, use the{" "}
          <Code color="success">border-bottom</Code> property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{"border: none;"}</p>
          <p className="pl-3">{"border-bottom: 2px solid red;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Colored Inputs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Colored Inputs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">background-color</Code> property to add
          a background color to the input, and the{" "}
          <Code color="success">color </Code>property to change the text color:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{"background-color: #3CBC8D;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Focused Inputs */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Focused Inputs
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, some browsers will add a blue outline around the input
          when it gets focus (clicked on). You can remove this behavior by
          adding <Code color="success">outline: none;</Code> to the input. Use
          the <Code color="success">:focus </Code> selector to do something with
          the input field when it gets focus:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text]:focus {"}
          <p className="pl-3">{"background-color: lightblue;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Input with icon/image */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Input with icon/image
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If you want an icon inside the input, use the{" "}
          <Code color="success">background-image</Code> property and position it
          with the
          <Code color="success">background-position</Code> property. Also notice
          that we add a large left padding to reserve the space of the icon:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{" background-color: white;"}</p>
          <p className="pl-3">{" background-image: url('searchicon.png');"}</p>
          <p className="pl-3">{" background-position: 10px 10px;"}</p>
          <p className="pl-3">{" background-repeat: no-repeat;"}</p>
          <p className="pl-3">{" padding-left: 40px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Animated Search Input */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Animated Search Input
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In this example we use the CSS{" "}
          <Code color="success">transition </Code> property to animate the width
          of the search input when it gets focus. You will learn more about the
          <Code color="success">transition </Code> property later.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=text] {"}
          <p className="pl-3">{"transition: width 0.4s ease-in-out;"}</p>
          {"}"} <br /> <br />
          {"input[type=text]:focus {"}
          <p className="pl-3">{" width: 100%;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Styling Textareas */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Textareas
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Use the <Code color="success">resize </Code> property to prevent
          textareas from being resized (disable the "grabber" in the bottom
          right corner):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"textarea {"}
          <p className="pl-3">{"width: 100%;"}</p>
          <p className="pl-3">{"height: 150px;"}</p>
          <p className="pl-3">{" padding: 12px 20px;"}</p>
          <p className="pl-3">{"box-sizing: border-box;"}</p>
          <p className="pl-3">{"border: 2px solid #ccc;"}</p>
          <p className="pl-3">{" border-radius: 4px;"}</p>
          <p className="pl-3">{" background-color: #f8f8f8;"}</p>
          <p className="pl-3">{" resize: none;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Styling Select Menus */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Select Menus
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"select {"}
          <p className="pl-3">{"width: 100%;"}</p>
          <p className="pl-3">{"padding: 16px 20px;"}</p>
          <p className="pl-3">{"border: none;"}</p>
          <p className="pl-3">{"border-radius: 4px;"}</p>
          <p className="pl-3">{"background-color: #f1f1f1;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Styling Input Buttons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Styling Select Menus
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"input[type=button], input[type=submit], input[type=reset] {"}
          <p className="pl-3">{"background-color: #04AA6D;"}</p>
          <p className="pl-3">{"border: none;"}</p>
          <p className="pl-3">{"color: white;"}</p>
          <p className="pl-3">{"padding: 16px 32px;"}</p>
          <p className="pl-3">{"text-decoration: none;"}</p>
          <p className="pl-3">{"margin: 4px 2px;"}</p>
          <p className="pl-3">{"cursor: pointer;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/attr-selectors"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Attribute Selectors
          </Button>
        </Link>
        <Link href={"/doc/css/counters"}>
          <Button variant={"outline"} className="flex gap-3">
            Counters <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
