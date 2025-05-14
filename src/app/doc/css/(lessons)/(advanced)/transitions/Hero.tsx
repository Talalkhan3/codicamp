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

const transtions = [
  {
    title: "ease",
    desc: "specifies a transition effect with a slow start, then fast, then end slowly (this is default)",
  },
  {
    title: "linear ",
    desc: "specifies a transition effect with the same speed from start to end",
  },
  {
    title: "ease-in",
    desc: "specifies a transition effect with a slow start",
  },
  {
    title: "ease-out",
    desc: "specifies a transition effect with a slow end",
  },
  {
    title: "ease-in-out",
    desc: "specifies a transition effect with a slow start and end",
  },
  {
    title: "cubic-bezier(n,n,n,n)",
    desc: "lets you define your own values in a cubic-bezier function",
  },
];

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
                Transitions
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Transitions */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Transitions</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS transitions allows you to change property values smoothly, over a
          given duration.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* How to Use CSS Transitions? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          How to Use CSS Transitions?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create a transition effect in CSS, you must specify the property to
          which the effect applies and the duration of the effect; without a
          specified duration, the transition will not occur, as the default
          value is 0. For example, consider a 100px by 100px red{" "}
          <Code color="success">{"<div>"}</Code> element with a transition
          effect applied to its width property, set to last 2 seconds.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background: red;"}</p>
          <p className="pl-3">{"transition: width 2s;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The transition effect will start when the specified CSS property
          (width) changes value.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div:hover {"}
          <p className="pl-3">{"width: 300px;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Notice that when the cursor mouses out of the element, it will
          gradually change back to its original style.
        </p>
      </div>

      {/* Change Several Property Values */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Change Several Property Values
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example adds a transition effect for both the width and
          height property, with a duration of 2 seconds for the width and 4
          seconds for the height:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transition: width 2s, height 4s;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Specify the Speed Curve of the Transition */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Specify the Speed Curve of the Transition
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">transition-timing-function</Code> property
          specifies the speed curve of the transition effect.
        </p>
        <ul className="flex flex-col gap-1 mt-5 ml-3">
          {transtions.map((key, index) => (
            <li key={index} className="flex gap-2 ">
              <Code color="success">{key.title}</Code> -{" "}
              <p className="text-[16px] text-[#71717a]">{key.desc}</p>
            </li>
          ))}
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example shows some of the different speed curves that
          can be used:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p>{"#div1 {transition-timing-function: linear;}"}</p>
          <p>{"#div2 {transition-timing-function: ease;}"}</p>
          <p>{"#div3 {transition-timing-function: ease-in;}"}</p>
          <p>{"#div4 {transition-timing-function: ease-out;}"}</p>
          <p>{"#div5 {transition-timing-function: ease-in-out;}"}</p>
        </Code>
      </div>

      {/* Delay the Transition Effect */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Delay the Transition Effect
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">transition-delay</Code> property specifies a
          delay (in seconds) for the transition effect. The following example
          has a 1 second delay before starting:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transition-delay: 1s;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Transition + Transformation */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Transition + Transformation
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example adds a transition effect to the transformation:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">
            {"transition: width 2s, height 2s, transform 2s;"}
          </p>
          {"}"}
        </Code>
      </div>

      {/* More Transition Examples */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          More Transition Examples
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The CSS transition properties can be specified one by one, like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transition-property: width;"}</p>
          <p className="pl-3">{"transition-duration: 2s;"}</p>
          <p className="pl-3">{"transition-timing-function: linear;"}</p>
          <p className="pl-3">{"transition-delay: 1s;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          or by using the shorthand property{" "}
          <Code color="success">transition</Code> :
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"transition: width 2s linear 1s;"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/3d-transforms"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> 3D Transforms
          </Button>
        </Link>
        <Link href={"/doc/css/animations"}>
          <Button variant={"outline"} className="flex gap-3">
            Animations <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
