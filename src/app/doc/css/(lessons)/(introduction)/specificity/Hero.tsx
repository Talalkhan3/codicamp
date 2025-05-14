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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const calspec = [
  {
    sel: "p",
    spe: "1",
    cal: "1",
  },
  {
    sel: "p.test",
    spe: "11",
    cal: "1 + 10",
  },
  {
    sel: "p#demo",
    spe: "101",
    cal: "1 + 100",
  },
  {
    sel: `<p style="color: pink;">`,
    spe: "1000",
    cal: "1000",
  },
  {
    sel: "#demo",
    spe: "100",
    cal: "100",
  },
  {
    sel: ".test",
    spe: "10",
    cal: "10",
  },
  {
    sel: "p.test1.test2",
    spe: "21",
    cal: "1 + 10 + 10",
  },
  {
    sel: "#navbar p#demo",
    spe: "201",
    cal: "100 + 1 + 100",
  },
  {
    sel: "*",
    spe: "0",
    cal: "0 (the universal selector is ignored)",
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
                Specificity
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Specificity */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold"> Specificity</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          Specificity in CSS is a hierarchy system that determines which rule
          takes precedence when multiple rules target the same element, based on
          the specificity of selectors such as inline styles, IDs, classes, and
          element types.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is Specificity? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What is Specificity?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If there are two or more CSS rules that point to the same element, the
          selector with the highest specificity value will "win", and its style
          declaration will be applied to that HTML element. Think of specificity
          as a score/rank that determines which style declaration is ultimately
          applied to an element. Look at the following examples:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<style>"}</p>
          <p className="pl-7">{"p {color: red;}"}</p>
          <p className="pl-3">{"</style>"}</p>
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {"<p>Hello World!</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Now, look at example 2:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<style>"}</p>
          <p className="pl-7">{".test {color: green;}"}</p>
          <p className="pl-7">{"p {color: red;}"}</p>
          <p className="pl-3">{"</style>"}</p>
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<p class="test">Hello World!</p>`} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Now, look at example 3:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<style>"}</p>
          <p className="pl-7">{"#demo {color: blue;}"}</p>
          <p className="pl-7">{".test {color: green;}"}</p>
          <p className="pl-7">{" p {color: red;}"}</p>
          <p className="pl-3">{"</style>"}</p>
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<p id="demo" class="test">Hello World!</p>`} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Now, look at example 4:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"}
          <p className="pl-3">{"<style>"}</p>
          <p className="pl-7">{"#demo {color: blue;}"}</p>
          <p className="pl-7">{".test {color: green;}"}</p>
          <p className="pl-7">{"p {color: red;}"}</p>
          <p className="pl-3">{"</style>"}</p>
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<p id="demo" class="test" style="color: pink;">`} <br />{" "}
          {`Hello World!`} <br />
          {`</p>`} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      {/* Specificity Hierarchy */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Specificity Hierarchy
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          CSS selectors follow a specificity hierarchy divided into four levels:
          inline styles, which have the highest specificity (e.g.,{" "}
          <Code color="success">{`<h1 style="color: pink;">`}</Code>); ID
          selectors, such as <Code color="success">#navbar</Code>; class
          selectors, pseudo-classes, and attribute selectors, like{" "}
          <Code color="success">.test</Code>,<Code color="success">:hover</Code>
          , or <Code color="success">[href]</Code>; and finally, element
          selectors and pseudo-elements, such as <Code color="success">h1</Code>{" "}
          or <Code color="success">::before</Code>, which have the lowest
          specificity.
        </p>
      </div>

      {/* How to Calculate Specificity? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          How to Calculate Specificity?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Memorize how to calculate specificity! Start at 0, add 100 for each ID
          value, add 10 for each class value (or pseudo-class or attribute
          selector), add 1 for each element selector or pseudo-element. The
          table below shows some examples on how to calculate specificity
          values:
        </p>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Selector</TableHead>
              <TableHead>Specificity Value</TableHead>
              <TableHead>Calculation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calspec.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.sel}</TableCell>
                <TableCell className="text-[#71717a]">{key.spe}</TableCell>
                <TableCell className="text-[#71717a]">{key.cal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* More Specificity Rules Examples */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          More Specificity Rules Examples
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the same rule is written twice into the external style sheet, then
          the latest rule wins:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"h1 {background-color: yellow;}"} <br />
          {"h1 {background-color: red;}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Look at the following three code lines:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`div#a {background-color: green;}`} <br />
          {`#a {background-color: yellow;}`} <br />
          {`div[id=a] {background-color: blue;}`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          the first rule is more specific than the other two, and will therefore
          be applied. The embedded style sheet is closer to the element to be
          styled. So in the following situation
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/*From external CSS file:*/"} <br />
          {"#content h1 {background-color: red;}"} <br /> <br />
          {"/*In HTML file:*/"} <br />
          {"<style>"} <br />
          {"#content h1 {background-color: yellow;}"} <br />
          {"</style>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          a class selector such as .intro beats h1, p, div, etc:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {".intro {background-color: yellow;}"} <br />
          {"h1 {background-color: red;}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/units"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Units
          </Button>
        </Link>
        <Link href={"/doc/css/css_important"}>
          <Button variant={"outline"} className="flex gap-3">
            !important <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
