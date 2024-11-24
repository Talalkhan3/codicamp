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
                Navigation Bar
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Navigation Bar  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Navigation Bar</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Having easy-to-use navigation is important for any web site. With CSS
          you can transform boring HTML menus into good-looking navigation bars.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Navigation Bar = List of Links */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Navigation Bar = List of Links
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          A navigation bar needs standard HTML as a base. In our examples we
          will build the navigation bar from a standard HTML list. A navigation
          bar is basically a list of links, so using the{" "}
          <Code color="success">{"<ul>"}</Code> and{" "}
          <Code color="success">{"<li>"}</Code> elements makes perfect sense:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<ul>"}
          <p className="pl-3">{`<li><a href="default.asp">Home</a></li>`}</p>
          <p className="pl-3">{`<li><a href="news.asp">News</a></li>`}</p>
          <p className="pl-3">{`<li><a href="contact.asp">Contact</a></li>`}</p>
          <p className="pl-3">{`<li><a href="about.asp">About</a></li>`}</p>
          {"</ul>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Now let's remove the bullets and the margins and padding from the
          list:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"ul {"}
          <p className="pl-3">{"list-style-type: none;"}</p>
          <p className="pl-3">{"margin: 0;"}</p>
          <p className="pl-3">{"padding: 0;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">list-style-type:</Code> none; property
          removes the bullets from a list, which is ideal for creating a clean
          navigation bar that doesn’t require list markers. Additionally,
          setting <Code color="success">margin: 0;</Code> and{" "}
          <Code color="success">padding: 0;</Code> eliminates the browser’s
          default spacing, ensuring consistent styling for the navigation bar.
        </p>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/opacity"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Opacity
          </Button>
        </Link>
        <Link href={"/doc/css/dropdowns"}>
          <Button variant={"outline"} className="flex gap-3">
            Dropdowns <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
