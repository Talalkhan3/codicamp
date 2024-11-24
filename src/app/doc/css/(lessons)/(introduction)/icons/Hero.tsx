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
                Icons
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Icons */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Icons</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Icons can easily be added to your HTML page, by using an icon library.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* How To Add Icons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          How To Add Icons
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The simplest way to add an icon to your HTML page, is with an icon
          library, such as Font Awesome. Add the name of the specified icon
          class to any inline HTML element (like {`<i>`} or {`<span>`}). All the
          icons in the icon libraries below, are scalable vectors that can be
          customized with CSS (size, color, shadow, etc.)
        </p>
      </div>

      {/* Font Awesome Icons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Font Awesome Icons
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To use the Font Awesome icons, go to fontawesome.com, sign in, and get
          a code to add in the {"<head>"} section of your HTML page:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p>
            {`<script`} <br className="hidden max-md:flex" />{" "}
            {`src="https://kit.fontawesome.com/yourcode.js" `}{" "}
            <br className="hidden max-xl:flex" />{" "}
            {`crossorigin="anonymous"></script>`}
          </p>
        </Code>

        <p className="text-[16px] text-[#71717a] mt-3">
          No downloading or installation is required!
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {`<script`} <br className="hidden max-md:flex" />{" "}
          {`src="https://kit.fontawesome.com/a076d05399.js"`}{" "}
          <br className="hidden max-xl:flex" />{" "}
          {`crossorigin="anonymous"></script>`} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{`<i class="fas fa-cloud"></i>`}</p>
          <p className="pl-3">{`<i class="fas fa-heart"></i>`}</p>
          <p className="pl-3">{`<i class="fas fa-car"></i>`}</p>
          <p className="pl-3">{`<i class="fas fa-file"></i>`}</p>
          <p className="pl-3">{`<i class="fas fa-bars"></i>`}</p> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Google Icons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Google Icons
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To use the Google icons, add the following line inside the{" "}
          <Code color="success">{"<head>"}</Code> section of your HTML page:
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p>
            {`<link`} <br className="hidden max-md:flex" />{" "}
            {`rel="stylesheet"" `} <br className="hidden max-xl:flex" />{" "}
            {`href="https://fonts.googleapis.com/icon?family`}{" "}
            <br className="hidden max-xl:flex" />
            {`=Material+Icons">`}
          </p>
        </Code>

        <p className="text-[16px] text-[#71717a] mt-3">
          No downloading or installation is required!
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {"<head>"} <br />
          {`<link`} <br className="hidden max-md:flex" /> {`rel="stylesheet"" `}{" "}
          <br className="hidden max-xl:flex" />{" "}
          {`href="https://fonts.googleapis.com/icon?family`}{" "}
          <br className="hidden max-xl:flex" />
          {`=Material+Icons">`} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          <p className="pl-3">{`<i class="material-icons">cloud</i>`}</p>
          <p className="pl-3">{`<i class="material-icons">favorite</i>`}</p>
          <p className="pl-3">{`<i class="material-icons">attachment</i>`}</p>
          <p className="pl-3">{`<i class="material-icons">computer</i>`}</p>
          <p className="pl-3">{`<i class="material-icons">traffic</i>`}</p>{" "}
          <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/fonts"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Fonts
          </Button>
        </Link>
        <Link href={"/doc/css/links"}>
          <Button variant={"outline"} className="flex gap-3">
            Links <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
