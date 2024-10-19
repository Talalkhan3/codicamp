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
import { Snippet } from "@nextui-org/react";

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
                Symbols
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Symbols */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Symbols</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Symbols or letters that are not present on your keyboard can be added
          to HTML using entities.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* HTML Symbol Entities */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Symbol Entities
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          HTML entities were described in the previous chapter. Many
          mathematical, technical, and currency symbols, are not present on a
          normal keyboard. To add such symbols to an HTML page, you can use the
          entity name or the entity number (a decimal or a hexadecimal
          reference) for the symbol:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>I will display &euro;</p>"} <br />
          {"<p>I will display &#8364;</p>"} <br />
          {"<p>I will display &#x20AC;</p>"}
        </Code>
        <h1 className="text-[18px] text-[#09090b] mt-3 font-bold">Result </h1>
        <div className="p-4 rounded border mt-2">
          <p>I will display &euro;</p>
          <p>I will display &#8364;</p>
          <p>I will display &#x20AC;</p>
        </div>
      </div>

      {/*  Mathematical Symbols Supported by HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b]  font-bold">
          Mathematical Symbols Supported by HTML
        </h1>
        <Separator />
      </div>

      <div>
        <Table className="mt-5">
          <TableCaption>
            A list of Mathematical Symbols Supported by HTML
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Char</TableHead>
              <TableHead> Number</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead className="text-right">Copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8704;</TableCell>
              <TableCell> {"&#8704;"}</TableCell>
              <TableCell>{"&forall;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8704;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8706;</TableCell>
              <TableCell> {"	&#8706;"}</TableCell>
              <TableCell>{"	&part;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8706;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8707;</TableCell>
              <TableCell> {"&#8707;"}</TableCell>
              <TableCell>{"	&exist;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8707;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8709;</TableCell>
              <TableCell> {"&#8709;	"}</TableCell>
              <TableCell>{"	&empty;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8709;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8711;</TableCell>
              <TableCell> {"&#8711;"}</TableCell>
              <TableCell>{"		&nabla;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8711;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8712;</TableCell>
              <TableCell> {"&#8712;"}</TableCell>
              <TableCell>{"			&isin;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8712;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8713;</TableCell>
              <TableCell> {"&#8713;"}</TableCell>
              <TableCell>{"&notin;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8713;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8715;</TableCell>
              <TableCell> {"&#8715;"}</TableCell>
              <TableCell>{"	&ni;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8715;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8719;</TableCell>
              <TableCell> {"&#8719;"}</TableCell>
              <TableCell>{"	&prod;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8719;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8721;</TableCell>
              <TableCell> {"&#8721;"}</TableCell>
              <TableCell>{"	&sum;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8721;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/*  Greek Letters Supported by HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b]  font-bold">
          {" "}
          Greek Letters Supported by HTML
        </h1>
        <Separator />
        <Table className="mt-5">
          <TableCaption>A list of Greek Letters Supported by HTML</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Char</TableHead>
              <TableHead> Number</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead className="text-right">Copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#913;</TableCell>
              <TableCell> {"&#913;"}</TableCell>
              <TableCell>{"	&Alpha;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#913;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#914;</TableCell>
              <TableCell> {"&#914;"}</TableCell>
              <TableCell>{"	&Beta;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#914;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#915;</TableCell>
              <TableCell> {"&#915;"}</TableCell>
              <TableCell>{"&Gamma;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#915;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#916;</TableCell>
              <TableCell> {"&#916;"}</TableCell>
              <TableCell>{"	&Delta;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#916;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#917;</TableCell>
              <TableCell> {"&#917;"}</TableCell>
              <TableCell>{"&nabla;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#917;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#918;</TableCell>
              <TableCell> {"&#918;"}</TableCell>
              <TableCell>{"	&Zeta;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#918;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Other Entities Supported by HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b]  font-bold">
          Other Entities Supported by HTML
        </h1>
        <Separator />
        <Table className="mt-5">
          <TableCaption>
            A list of Other Entities Supported by HTML
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Char</TableHead>
              <TableHead> Number</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead className="text-right">Copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#169;</TableCell>
              <TableCell> {"&#169;"}</TableCell>
              <TableCell>{"	&copy;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#169;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#174;</TableCell>
              <TableCell> {"&#174;"}</TableCell>
              <TableCell>{"&reg;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#174;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8364;</TableCell>
              <TableCell> {"&#8364;"}</TableCell>
              <TableCell>{"&euro;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8364;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8482;</TableCell>
              <TableCell> {"&#8482;"}</TableCell>
              <TableCell>{"&trade;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8482;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8592;</TableCell>
              <TableCell> {"&#8592;"}</TableCell>
              <TableCell>{"&larr;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8592;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8593;</TableCell>
              <TableCell> {"&#8593;"}</TableCell>
              <TableCell>{"&uarr;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8593;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8594;</TableCell>
              <TableCell> {"&#8594;"}</TableCell>
              <TableCell>{"	&rarr;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8594;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#8595;</TableCell>
              <TableCell> {"&#8595;"}</TableCell>
              <TableCell>{"	&darr;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#8595;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#9824;</TableCell>
              <TableCell> {"&#9824;"}</TableCell>
              <TableCell>{"&spades;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#9824;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">&#9827;</TableCell>
              <TableCell> {"&#9827;"}</TableCell>
              <TableCell>{"	&clubs;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#9827;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/entities"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Entities
          </Button>
        </Link>
        <Link href={"/doc/html/emojies"}>
          <Button variant={"outline"} className="flex gap-3">
            Emojies <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
