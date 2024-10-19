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
                Charsets
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Encoding (Character Sets) */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Encoding (Character Sets)
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          To display an HTML page correctly, a web browser must know which
          character set to use.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The HTML charset Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML charset Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The character set is specified in the{" "}
          <Code color="success">{"<meta>"} </Code>tag:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta charset="UTF-8">`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML5 specification encourages web developers to use the UTF-8
          character set. UTF-8 covers almost all of the characters and symbols
          in the world!
        </p>
      </div>

      {/* The ASCII Character Set */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The ASCII Character Set
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          ASCII was the first character encoding standard for the web. It
          defined 128 different characters that could be used on the internet:
        </p>
        <ul className="flex flex-col gap-2 mt-3 ml-10">
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              English letters (A-Z)
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">Numbers (0-9)</h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Special characters like ! $ + - ( ) @ {"< >"}.
            </h1>
          </li>
        </ul>
      </div>

      {/* The ANSI Character Set */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The ANSI Character Set
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          ANSI (Windows-1252) was the original Windows character set:
        </p>
        <ul className="flex flex-col gap-2 mt-3 ml-10">
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Identical to ASCII for the first 127 characters
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Special characters from 128 to 159
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Identical to UTF-8 from 160 to 255
            </h1>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta charset="Windows-1252">`}
        </Code>
      </div>

      {/* The ISO-8859-1 Character Set */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The ISO-8859-1 Character Set
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          ISO-8859-1 was the default character set for HTML 4. This character
          set supported 256 different character codes. HTML 4 also supported
          UTF-8.
        </p>
        <ul className="flex flex-col gap-2 mt-3 ml-10">
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Identical to ASCII for the first 127 characters
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Does not use the characters from 128 to 159
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Identical to ANSI and UTF-8 from 160 to 255
            </h1>
          </li>
        </ul>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
          HTML 4 Example
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">`}
        </Code>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
          HTML 5 Example
        </h1>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta charset="ISO-8859-1">`}
        </Code>
      </div>

      {/* The UTF-8 Character Set */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The UTF-8 Character Set
        </h1>
        <Separator />
        <ul className="flex flex-col gap-2 mt-3 ml-10">
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              is identical to ASCII for the values from 0 to 127
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Does not use the characters from 128 to 159
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Identical to ANSI and UTF-8 from 160 to 255
            </h1>
          </li>
          <li className="flex gap-3 items-center">
            <div className="h-2 w-2 bg-[#09090b] rounded-xl"></div>
            <h1 className="text-[16px] text-[#71717a]">
              Continues from the value 256 to 10 000 characters
            </h1>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<meta charset="UTF-8">`}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/emojies"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Emojies
          </Button>
        </Link>
        <Link href={"/doc/html/url-encode"}>
          <Button variant={"outline"} className="flex gap-3">
            URL Encode <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
