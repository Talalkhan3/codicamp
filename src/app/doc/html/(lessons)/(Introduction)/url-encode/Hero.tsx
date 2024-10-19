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

const utf = [
  {
    char: "€",
    wind: "%80",
    utf: "%E2%82%AC",
  },
  {
    char: "£",
    wind: "%A3",
    utf: "%C2%A3",
  },
  {
    char: "©",
    wind: "	%A9",
    utf: "%C2%A9",
  },
  {
    char: "®",
    wind: "%AE",
    utf: "%C2%AE",
  },
  {
    char: "À",
    wind: "	%C0",
    utf: "	%C3%80",
  },
  {
    char: "Á",
    wind: "%C1",
    utf: "%C3%81",
  },
  {
    char: "Â",
    wind: "%C2",
    utf: "%C3%82",
  },
];

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
                URL Encode
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Uniform Resource Locators */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Uniform Resource Locators (URL)
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          A URL is another word for a web address. <br />
          A URL can be composed of words (e.g. w3schools.com), or an Internet
          Protocol (IP) address (e.g. 192.68.20.50). <br />
          Most people enter the name when surfing, because names are easier to
          remember than numbers.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* URL - Uniform Resource Locator */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          URL - Uniform Resource Locator
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Web browsers request pages from web servers by using a URL. A Uniform
          Resource Locator (URL) is used to address a document (or other data)
          on the web.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"scheme://prefix.domain:port/path/filename"}
        </Code>
        <ul className="flex flex-col gap-1 mt-5">
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">scheme</h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines the type of Internet service (most common is http or
                https)
              </p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">prefix</h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines a domain prefix (default for http is www)
              </p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">domain</h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines the Internet domain name (like w3schools.com)
              </p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">port</h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines the port number at the host (default for http is 80)
              </p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">path</h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines a path at the server (If omitted: the root directory of
                the site)
              </p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <div className="flex items-center gap-2">
              <h1 className=" text-[#09090b] font-bold">filename </h1> -{" "}
              <p className="text-[16px] text-[#71717a]">
                defines the name of a document or resource
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Common URL Schemes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Common URL Schemes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The table below lists some common schemes:
        </p>
        <Table className="mt-3 border">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Scheme</TableHead>
              <TableHead className="font-medium">Short for</TableHead>
              <TableHead className="font-medium">Used for</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>http</TableCell>
              <TableCell>HyperText Transfer Protocol</TableCell>
              <TableCell>Common web pages. Not encrypted</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>https</TableCell>
              <TableCell>Secure HyperText Transfer Protocol</TableCell>
              <TableCell>Secure HyperText Transfer Protocol</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ftp</TableCell>
              <TableCell> File Transfer Protocol</TableCell>
              <TableCell>Downloading or uploading files</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>file</TableCell>
              <TableCell> </TableCell>
              <TableCell>A file on your computer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* URL Encoding */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">URL Encoding</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          URLs can only be sent over the Internet using the ASCII character-set.
          If a URL contains characters outside the ASCII set, the URL has to be
          converted. URL encoding converts non-ASCII characters into a format
          that can be transmitted over the Internet. URL encoding replaces
          non-ASCII characters with a "%" followed by hexadecimal digits. URLs
          cannot contain spaces. URL encoding normally replaces a space with a
          plus (+) sign, or %20.
        </p>
      </div>

      {/* ASCII Encoding Examples */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          ASCII Encoding Examples
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Your browser will encode input, according to the character-set used in
          your page.
          <br />
          The default character-set in HTML5 is UTF-8.
        </p>
        <Table className="mt-3 border">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Character</TableHead>
              <TableHead className="font-medium">From Windows-1252</TableHead>
              <TableHead className="font-medium">From UTF-8</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {utf.map((key,index)=> (
                <TableRow key={index} className="border-b">
                    <TableCell className="font-medium">{key.char}</TableCell>
                    <TableCell className="font-medium">{key.wind}</TableCell>
                    <TableCell className="font-medium">{key.utf}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/charsets"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Charsets
          </Button>
        </Link>
        <Link href={"/doc/html/html-vs-xhtml"}>
          <Button variant={"outline"} className="flex gap-3">
            HTML vs XHTML <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
