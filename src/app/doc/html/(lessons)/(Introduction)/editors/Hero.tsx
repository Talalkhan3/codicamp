"use client";
import { CodeBlock } from "@/components/ui/code-block";
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
  const code = `<!DOCTYPE html>
<html>
<head>
<title>My First Web Page</title>
</head>
<body>

<h1>Welcome to My Website!</h1>
<p>This is a simple HTML page.</p>

</body>
</html>
`;

  const code1 = `<!DOCTYPE html>
<html>
<head>
<title>My First Web Page</title>
</head>
<body>

<h1>Welcome to My Website!</h1>
<p>This is a simple HTML page.</p>

</body>
</html>`;
  return (
    <ScrollArea className="w-full h-[90vh] pr-10">
      {/* BREADCRUMBS  */}
      <div className="w-full">
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
                Editors{" "}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* EDITORS */}

      <div className="mt-1 w-full">
        <h1 className="text-[30px] text-[#09090b] font-bold ">Editors</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Web pages can be developed and customized using advanced HTML editors,
          which provide a variety of features such as syntax highlighting,
          auto-completion, and integrated preview. Professional editors like
          Visual Studio Code, Sublime Text, and Atom are popular among
          developers for their powerful toolsets.
        </p>
        <p className="text-[16px] text-[#71717a] mt-5">
          However, when starting your journey in learning HTML, we highly
          recommend using a basic text editor like Notepad on Windows or
          TextEdit on macOS. These editors, while minimal in features, allow you
          to focus on the core structure and syntax of HTML without the
          distractions of advanced features. This approach gives you a deeper
          understanding of how HTML works, enabling you to build a strong
          foundation.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Use a Simple Text Editor  */}

      <div className="mt-7">
        <h1 className="text-[24px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Why Use a Simple Text Editor?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Using a basic text editor helps you manually write every line of code,
          allowing you to practice writing the raw HTML syntax from scratch.
          This hands-on approach is invaluable because it trains you to spot and
          fix errors early on, which will be beneficial as you progress to more
          complex projects.
        </p>
      </div>

      {/* GETTING STARTED TO NOTEPAD AND TEXTEDIT */}

      <div className="mt-7">
        <h1 className="text-[24px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Getting Started with Notepad (PC) or TextEdit (Mac)
        </h1>
        <p className="text-[16px] text-[#71717a] mt-2">
          Follow these steps to create your first web page:
        </p>

        {/* WINDOWS EDITOR */}

        <div className="mt-3">
          <h1 className="text-[18px] text-[#09090b] font-bold">
            For Notepad (Windows Users):
          </h1>
          <div className="flex flex-col mt-3 ml-5 gap-y-1">
            <div>
              <h1 className="text-[16px] font-bold text-[#09090b]">
                1. Open Notepad:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Press the Windows key, type “Notepad,” and hit Enter.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                2. Write Your HTML Code:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Start with a basic HTML structure
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <CodeBlock language="html" filename="editors.html" code={code} highlightLines={[1,3,5]}/>
            </div>

            <div className="mt-5 ">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                3. Save the File:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a]  ">
                Click on{" "}
                <Code color="success" size="sm" radius="full">
                  {"File > Save As"}
                </Code>{" "}
                . Choose "All Files" in the dropdown, and save your file as{" "}
                <Code color="success" radius="full">
                  index.html
                </Code>
                . Be sure to save it with the{" "}
                <Code color="success" radius="full">
                  .html
                </Code>{" "}
                extension.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                4. View Your Page
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Locate the file in your directory and double-click to open it in
                your web browser.
              </p>
            </div>
          </div>
        </div>

        {/* MACOS EDITOR */}

        <div className="mt-10">
          <h1 className="text-[18px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
            For TextEdit (macOS Users):
          </h1>
          <div className="flex flex-col mt-3 ml-5 ">
            <div className="">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                1. Open TextEdit:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Find it in your Applications folder or use Spotlight (Cmd +
                Spacebar).
              </p>
            </div>
            <div className="mt-3">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                2. Switch to Plain Text:
              </h1>
              <p className="text-[16px] text-[#71717a] mt-1">
                Go to{" "}
                <Code color="success" radius="full">
                  {"Format > Make Plain Text."}
                </Code>{" "}
                By default, TextEdit uses rich text, so you need to switch to
                plain text for writing HTML.
              </p>
            </div>
            <div className="mt-3">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                3. Write Your HTML Code:
              </h1>
            </div>
            <div className="rounded-xl overflow-hidden">
              <CodeBlock language="html" filename="editor1.html" code={code1} />
            </div>
            <div className="mt-5">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                4. Save the File:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Click on{" "}
                <Code color="success" size="sm" radius="full">
                  {"File > Save As"}
                </Code>{" "}
                . Choose "All Files" in the dropdown, and save your file as{" "}
                <Code color="success" radius="full">
                  index.html
                </Code>
                . Be sure to save it with the{" "}
                <Code color="success" radius="full">
                  .html
                </Code>{" "}
                extension.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="text-[16px] font-bold text-[#09090b]">
                5. Open in Browser:
              </h1>
              <p className="mt-1 text-[16px] text-[#71717a] ">
                Navigate to the file in Finder, and double-click to open it in
                your preferred web browser.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOVING FORWARD SECTION */}

      <div className="mt-7">
        <h1 className="text-[24px] text-[#09090b] font-bold decoration-2 underline underline-offset-4 decoration-green-400">
          Moving Forward
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          Once you're comfortable creating basic HTML pages, you can explore
          professional HTML editors that offer advanced tools to improve
          efficiency. However, mastering HTML using a simple text editor builds
          a strong foundation, making it easier to transition to those tools
          later.
        </p>
      </div>
      <Separator className="mt-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/introduction"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Introduction
          </Button>
        </Link>
        <Link href={"/doc/html/basic"}>
          <Button variant={"outline"} className="flex gap-3">
            Basic <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
