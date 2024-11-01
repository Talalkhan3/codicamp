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
                YouTube
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* YouTube Videos */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">YouTube Videos</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The easiest way to play videos in HTML, is to use YouTube.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Struggling with Video Formats? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Struggling with Video Formats?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Converting videos to different formats can be difficult and
          time-consuming. <br /> An easier solution is to let YouTube play the
          videos in your web page.
        </p>
      </div>

      {/* YouTube Video Id */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          YouTube Video Id
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          YouTube will display an id (like tgbNymZ7vqY), when you save (or play)
          a video.
          <br />
          You can use this id, and refer to your video in the HTML code.
        </p>
      </div>

      {/* Playing a YouTube Video in HTML */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Playing a YouTube Video in HTML
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To play your video on a web pag, To embed a YouTube video on your
          webpage, start by uploading the video to YouTube and noting its unique
          video ID. Define an <Code color="success">{"<iframe>"}</Code> element
          in your HTML, setting its src attribute to point to the video URL. Use
          the width and height attributes to control the player’s dimensions,
          and add any other desired parameters to the URL for customization.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe width="420" height="315"`} <br />
          {`src="https://www.youtube.com/embed/tgbNymZ7vqY">`} <br />
          {"</iframe>"}
        </Code>
      </div>

      {/* YouTube Autoplay + Mute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          YouTube Autoplay + Mute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          You can let your video start playing automatically when a user visits
          the page, by adding autoplay=1 to the YouTube URL. However,
          automatically starting a video is annoying for your visitors! <br />{" "}
          <br />
          Add <Code color="success">mute=1</Code> after{" "}
          <Code color="success">autoplay=1</Code> to let your video start
          playing automatically (but muted).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe width="420" height="315"`} <br />
          {`src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">`}{" "}
          <br />
          {"</iframe>"}
        </Code>
      </div>

      {/* YouTube Loop */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">YouTube Loop</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Add <Code color="success">loop=1</Code> to let your video loop
          forever. Value 0 (default): The video will play only once. Value 1:
          The video will loop (forever).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe width="420" height="315"`} <br />
          {`src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">`}{" "}
          <br />
          {"</iframe>"}
        </Code>
      </div>

      {/* YouTube Controls */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          YouTube Controls
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Add <Code color="success">controls=0</Code> to not display controls in
          the video player. Value 0: Player controls does not display. Value 1
          (default): Player controls display.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<iframe width="420" height="315"`} <br />
          {`src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">`} <br />
          {"</iframe>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/plug-ins"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Plug-ins
          </Button>
        </Link>
        <Link href={"/doc/css"}>
          <Button variant={"outline"} className="flex gap-3">
            Next Language (CSS) <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
