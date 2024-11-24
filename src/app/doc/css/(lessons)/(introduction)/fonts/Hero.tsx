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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fonts = [
  {
    name: "Serif",
    example: {
      exam1: "Times New Roman",
      exam2: "Georgia",
      exam3: "Garamond",
    },
  },
  {
    name: "Sans-serif",
    example: {
      exam1: "Arial",
      exam2: "Verdana",
      exam3: "Helvetica",
    },
  },
  {
    name: "Monospace",
    example: {
      exam1: "	Courier New",
      exam2: "Lucida Console",
      exam3: "Monaco",
    },
  },
  {
    name: "Cursive",
    example: {
      exam1: "Brush Script MT",
      exam2: "Lucida Handwriting",
      exam3: "",
    },
  },
  {
    name: "Fantasy",
    example: {
      exam1: "	Copperplate ",
      exam2: "Papyrus",
      exam3: "Garamond",
    },
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
                Fonts
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Fonts */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Fonts</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Choosing the right font for your website is important!
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Font Selection is Important */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Font Selection is Important
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Choosing the right font has a huge impact on how the readers
          experience a website. The right font can create a strong identity for
          your brand. Using a font that is easy to read is important. The font
          adds value to your text. It is also important to choose the correct
          color and text size for the font.
        </p>
      </div>

      {/* Generic Font Families */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Generic Font Families
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In CSS there are five generic font families:
        </p>
        <ul className="flex flex-col gap-1.5 mt-3 ml-5 max-lg:ml-0">
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success">Serif </Code> fonts have a small stroke at
              the edges of each letter. They create a sense of formality and
              elegance.
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              <Code color="success"> Sans-serif</Code> fonts have clean lines
              (no small strokes attached). They create a modern and minimalistic
              look.
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">Monospace </Code> fonts - here all the
              letters have the same fixed width. They create a mechanical look.
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">Cursive </Code> fonts imitate human
              handwriting.
            </p>
          </li>
          <li className="flex items-baseline gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p className="text-[#71717a]">
              {" "}
              <Code color="success">Fantasy </Code> fonts are decorative/playful
              fonts.
            </p>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          All the different font names belong to one of the generic font
          families.{" "}
        </p>
      </div>

      {/* Some Font Examples */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Some Font Examples
        </h1>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Generic Font Family</TableHead>
              <TableHead>Examples of Font Names</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fonts.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.name}</TableCell>
                <TableCell>
                  {key.example.exam1} <br /> {key.example.exam2} <br />{" "}
                  {key.example.exam3}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* The CSS font-family Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The CSS font-family Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          In CSS, we use the font-family property to specify the font of a text.{" "}
          <br /> <br />
          The font-family property should hold several font names as a
          "fallback" system, to ensure maximum compatibility between
          browsers/operating systems. Start with the font you want, and end with
          a generic family (to let the browser pick a similar font in the
          generic family, if no other fonts are available). The font names
          should be separated with a comma.{" "}
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`.p1 {`}
          <p className="pl-3">{` font-family: "Times New Roman", Times, serif;`}</p>
          {"}"} <br /> <br />
          {".p2 {"}
          <p className="pl-3">{"font-family: Arial, Helvetica, sans-serif;"}</p>
          {"}"} <br /> <br />
          {`.p3 {`}
          <p className="pl-3">{`font-family: "Lucida Console", "Courier New", monospace;`}</p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/text"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Text
          </Button>
        </Link>
        <Link href={"/doc/css/icons"}>
          <Button variant={"outline"} className="flex gap-3">
            Icons <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
