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
                Emojies
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Emojis in HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Emojis in HTML</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Emojis are characters from the UTF-8 character set: &#128516;
        </p>
        <Separator className="mt-5" />
      </div>

      <div>
        <Table className="mt-5">
          <TableCaption>A list of Useful HTML Character Entities</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Emoji</TableHead>
              <TableHead> Value</TableHead>
              <TableHead className="text-right">Copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128507;
              </TableCell>
              <TableCell> {"&#128507;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128507;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128508;
              </TableCell>
              <TableCell> {"&#128508;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128508;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128509;
              </TableCell>
              <TableCell> {"&#128509;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128509;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128510;
              </TableCell>
              <TableCell> {"&#128510;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128510;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128511;
              </TableCell>
              <TableCell> {"&#128511;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128511;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128512;
              </TableCell>
              <TableCell> {"&#128512;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128512;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128513;
              </TableCell>
              <TableCell> {"&#128513;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128513;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128514;
              </TableCell>
              <TableCell> {"	&#128514;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="	&#128514;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128515;
              </TableCell>
              <TableCell> {"&#128515;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128515;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128516;
              </TableCell>
              <TableCell> {"&#128516;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128516;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-[20px]">
                &#128517;
              </TableCell>
              <TableCell> {"&#128517;"}</TableCell>
              <TableCell className="text-right">
                {" "}
                <Snippet color="success" hideSymbol codeString="&#128517;">
                  Copy
                </Snippet>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* What are Emojis? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What are Emojis?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Emojis look like images, or icons, but they are not. <br /> They are
          letters (characters) from the UTF-8 (Unicode) character set.
        </p>
      </div>

      {/* The HTML charset Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML charset Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To display an HTML page correctly, a web browser must know the
          character set used in the page. <br /> <br /> This is specified in the{" "}
          <Code color="success">{"<meta>"}</Code>
          tag:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<meta charset="UTF-8">`}</Code>
      </div>

      {/* Emoji Characters */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Emoji Characters
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Emojis are also characters from the UTF-8 alphabet: <br /> <br /> 😄
          is 128516 <br />
          😍 is 128525
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {`<meta charset="UTF-8">`} <br />
          {"<body>"} <br /> <br />
          {"<h1>My First Emoji</h1>"} <br /> <br />
          {`<p>&#128512;</p>`} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Since Emojis are characters, they can be copied, displayed, and sized
          just like any other character in HTML.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<!DOCTYPE html>"} <br />
          {"<html>"} <br />
          {`<meta charset="UTF-8">`} <br />
          {"<body>"} <br /> <br />
          {"<h1>Sized Emojis</h1>"} <br /> <br />
          {`<p style="font-size:48px">`} <br />
          {`&#128512; &#128516; &#128525; &#128151;`} <br />
          {"</p>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/symbols"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Symbols
          </Button>
        </Link>
        <Link href={"/doc/html/charsets"}>
          <Button variant={"outline"} className="flex gap-3">
            Charsets <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
