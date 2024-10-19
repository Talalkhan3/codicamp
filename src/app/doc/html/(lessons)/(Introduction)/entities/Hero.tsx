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

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:pr-3">
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
                Entities
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Entities */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Entities</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Reserved characters in HTML must be replaced with entities:
        </p>
        <ul className="flex flex-col gap-2 mt-3 ml-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className="text-[16px] text-[#71717a]">
              {"< (less than) = &lt;"}
            </h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className="text-[16px] text-[#71717a]">
              {"> (greather than) = &gt;"}
            </h1>
          </li>
        </ul>
        <Separator className="mt-5" />
      </div>

      {/* HTML Character Entities */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Character Entities
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Some characters are reserved in HTML. If you use the less than {"(<)"}{" "}
          or greater than {"(>)"} signs in your HTML text, the browser might mix
          them with tags. Entity names or entity numbers can be used to display
          reserved HTML characters.
          <br /> <br />
          Entity names look like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"&entity_name;"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Entity numbers look like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"&#entity_number;"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          To display a less than sign {"(<)"} we must write: {"&lt;"} or{" "}
          {"&#60;"}
        </p>
      </div>

      {/* Non-breaking Space */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Non-breaking Space
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A commonly used HTML entity is the non-breaking space: &nbsp; A
          non-breaking space is a space that will not break into a new line. Two
          words separated by a non-breaking space will stick together (not break
          into a new line). This is handy when breaking the words might be
          disruptive.
          <br /> <br />
          Examples:
        </p>
        <ul className="flex flex-col gap-1 mt-3 ml-7">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className="text-[16px] text-[#71717a]">{"§ 10"}</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className="text-[16px] text-[#71717a]">{"10 km/h"}</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className="text-[16px] text-[#71717a]">{"10 PM"}</h1>
          </li>
        </ul>
        <p className="text-[16px] text-[#71717a] mt-3">
          Another common use of the non-breaking space is to prevent browsers
          from truncating spaces in HTML pages. If you write 10 spaces in your
          text, the browser will remove 9 of them. To add real spaces to your
          text, you can use the {"&nbsp;"} character entity.
        </p>
      </div>

      {/* Some Useful HTML Character Entities */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Some Useful HTML Character Entities
        </h1>
        <Separator />
        <Table className="mt-5">
          <TableCaption>A list of Useful HTML Character Entities</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Result</TableHead>
              <TableHead> Description</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"<"}</TableCell>
              <TableCell> greater than</TableCell>
              <TableCell> {"&gt;"} </TableCell>
              <TableCell className="text-right"> {"&#62;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"&"}</TableCell>
              <TableCell> ampersand</TableCell>
              <TableCell> {"&amp;"} </TableCell>
              <TableCell className="text-right"> {"&#34;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{`"`}</TableCell>
              <TableCell> double quotation mark</TableCell>
              <TableCell> {"&quot;"} </TableCell>
              <TableCell className="text-right"> {"&#34;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"'"}</TableCell>
              <TableCell> single quotation mark</TableCell>
              <TableCell> {"&apos;"} </TableCell>
              <TableCell className="text-right"> {"&#39;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"¢"}</TableCell>
              <TableCell> cent</TableCell>
              <TableCell> {"&cent;"} </TableCell>
              <TableCell className="text-right"> {"&#162;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"£"}</TableCell>
              <TableCell> pound</TableCell>
              <TableCell> {"&pound;"} </TableCell>
              <TableCell className="text-right"> {"&#163;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"¥"}</TableCell>
              <TableCell> yen</TableCell>
              <TableCell> {"	&yen;"} </TableCell>
              <TableCell className="text-right"> {"	&#165;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"€"}</TableCell>
              <TableCell> euro</TableCell>
              <TableCell> {"&euro;"} </TableCell>
              <TableCell className="text-right"> {"&#8364;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"©"}</TableCell>
              <TableCell> copyright</TableCell>
              <TableCell> {"&copy;"} </TableCell>
              <TableCell className="text-right"> {"&#169;"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">{"®"}</TableCell>
              <TableCell> trademark</TableCell>
              <TableCell> {"&reg;"} </TableCell>
              <TableCell className="text-right"> {"&#174"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Combining Diacritical Marks */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Combining Diacritical Marks
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A diacritical mark is a "glyph" added to a letter. Some diacritical
          marks, like grave ( ̀ ) and acute ( ́ ) are called accents. Diacritical
          marks can be used in combination with alphanumeric characters to
          produce a character that is not present in the character set
          (encoding) used in the page. <br /> <br /> Here are some examples:
        </p>
        <Table className="mt-3">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mark</TableHead>
              <TableHead>Character</TableHead>
              <TableHead>Construct</TableHead>
              <TableHead className="text-right">Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ̀"}</TableCell>
              <TableCell> a</TableCell>
              <TableCell> {"a&#768;"} </TableCell>
              <TableCell className="text-right"> a&#768;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ́"}</TableCell>
              <TableCell> a</TableCell>
              <TableCell> {"a&#769;"} </TableCell>
              <TableCell className="text-right"> a&#769;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{`̂`}</TableCell>
              <TableCell> a</TableCell>
              <TableCell> {"a&#770;"} </TableCell>
              <TableCell className="text-right"> a&#770;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ̃"}</TableCell>
              <TableCell>a </TableCell>
              <TableCell> {"a&#771;"} </TableCell>
              <TableCell className="text-right">a&#771;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ̀"}</TableCell>
              <TableCell> O</TableCell>
              <TableCell> {"O&#768;"} </TableCell>
              <TableCell className="text-right">O&#768;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ́"}</TableCell>
              <TableCell> O</TableCell>
              <TableCell> {"O&#769;"} </TableCell>
              <TableCell className="text-right"> O&#769;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{"̂"}</TableCell>
              <TableCell> O</TableCell>
              <TableCell> {"O&#770;"} </TableCell>
              <TableCell className="text-right"> O&#770;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[30px]">{" ̃"}</TableCell>
              <TableCell> O</TableCell>
              <TableCell> {"O&#771;"} </TableCell>
              <TableCell className="text-right"> O&#771;</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/style-guide"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Style Guide
          </Button>
        </Link>
        <Link href={"/doc/html/symbols"}>
          <Button variant={"outline"} className="flex gap-3">
            Symbols <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
