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
                Math Functions
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*   Math Functions */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Math Functions</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          The CSS math functions allow mathematical expressions to be used as
          property values. Here, we will explain the{" "}
          <Code color="success">calc()</Code>,{" "}
          <Code color="success">max()</Code> and{" "}
          <Code color="success">min()</Code>
          functions.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The calc() Function */}

      <div className="mt-7">
        <h2 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The calc() Function
        </h2>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">calc()</Code> function performs a
          calculation to be used as the property value.
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3 underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Syntax
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"calc(expression)"}
        </Code>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Value</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">expression</TableCell>
              <TableCell>
                {" "}
                Required. A mathematical expression. The result will be used as
                the value. The following operators can be used: + - * /
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          Let us look at an example:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#div1 {"}
          <p className="pl-3">{"position: absolute;"}</p>
          <p className="pl-3">{"left: 50px;"}</p>
          <p className="pl-3">{"width: calc(100% - 100px);"}</p>
          <p className="pl-3">{"border: 1px solid black;"}</p>
          <p className="pl-3">{"background-color: yellow;"}</p>
          <p className="pl-3">{"padding: 5px;"}</p>
          {"}"}
        </Code>
      </div>

      {/* The max() Function */}

      <div className="mt-7">
        <h2 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The max() Function
        </h2>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">max()</Code> function uses the largest
          value, from a comma-separated list of values, as the property value.
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3 underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Syntax
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"max(value1, value2, ...)"}
        </Code>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Value</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">value1, value2, ...</TableCell>
              <TableCell>
                {" "}
                Required. A list of comma-separated values - where the largest
                value is chosen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          Let us look at an example:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#div1 {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"width: max(50%, 300px);"}</p>
          {"}"}
        </Code>
      </div>

      {/* The min() Function */}

      <div className="mt-7">
        <h2 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The min() Function
        </h2>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">min()</Code> function uses the smallest
          value, from a comma-separated list of values, as the property value.
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3 underline underline-offset-4 decoration-green-400 decoration-2">
          CSS Syntax
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"min(value1, value2, ...)"}
        </Code>
        <Table className="mt-3 border">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Value</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">value1, value2, ...</TableCell>
              <TableCell>
                {" "}
                Required. A list of comma-separated values - where the smallest
                value is chosen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          Let us look at an example:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"#div1 {"}
          <p className="pl-3">{"background-color: yellow;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{" width: min(50%, 300px);"}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/css_important"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> !important
          </Button>
        </Link>
        <Link href={"/doc/css/rounded-corners"}>
          <Button variant={"default"} className="flex gap-3">
            Rounded Corners <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
