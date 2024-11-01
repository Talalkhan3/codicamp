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
import { FaChrome } from "react-icons/fa";
import { FaEdge } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";
import { FaOpera } from "react-icons/fa";
import { SiSafari } from "react-icons/si";

const VideoFormats = [
  {
    Browser: "Edge",
    MP4: "YES",
    WebM: "YES",
    Ogg: "YES",
  },
  {
    Browser: "Chrome",
    MP4: "YES",
    WebM: "YES",
    Ogg: "YES",
  },
  {
    Browser: "Firefox",
    MP4: "YES",
    WebM: "YES",
    Ogg: "YES",
  },
  {
    Browser: "Safari",
    MP4: "YES",
    WebM: "YES",
    Ogg: "NO",
  },
  {
    Browser: "Opera",
    MP4: "YES",
    WebM: "YES",
    Ogg: "YES",
  },
];

const MediaTypes = [
  {
    FileFormat: "MP4",
    MediaType: "video/mp4",
  },
  {
    FileFormat: "WebM",
    MediaType: "video/webm",
  },
  {
    FileFormat: "Ogg",
    MediaType: "video/ogg",
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
                Video
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Video */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Video</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"<video>"}</Code> element is used to
          show a video on a web page.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The HTML <video> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<video>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To show a video in HTML, use the{" "}
          <Code color="success">{"<video>"}</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {` <video width="320" height="240" controls>`}
          <p className="pl-3">{`<source src="movie.mp4" type="video/mp4">`}</p>
          <p className="pl-3">{`<source src="movie.ogg" type="video/ogg">`}</p>
          {"Your browser does not support the video tag."} <br />
          {"</video>"}
        </Code>
      </div>

      {/* How it Works */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">How it Works</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"controls"}</Code> attribute adds video
          controls, like play, pause, and volume. It is a good idea to always
          include <Code color="success">{"width"}</Code> and{" "}
          <Code color="success">{"height"}</Code> attributes. If height and
          width are not set, the page might flicker while the video loads. The{" "}
          <Code color="success">{"<source>"}</Code> element allows you to
          specify alternative video files which the browser may choose from. The
          browser will use the first recognized format. The text between the{" "}
          <Code color="success">{"<video>"}</Code> and{" "}
          <Code color="success">{"</video>"}</Code> tags will only be displayed
          in browsers that do not support the{" "}
          <Code color="success">{"<video>"}</Code> element.
        </p>
      </div>

      {/* HTML <video> Autoplay */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<video>"} Autoplay
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To start a video automatically, use the autoplay attribute: Example
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<video width="320" height="240" autoplay>`}
          <p className="pl-3">{`<source src="movie.mp4" type="video/mp4">`}</p>
          <p className="pl-3">{` <source src="movie.ogg" type="video/ogg">`}</p>
          {"Your browser does not support the video tag."} <br />
          {"</video>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Add <Code color="success">muted</Code> after{" "}
          <Code color="success">autoplay</Code> to let your video start playing
          automatically (but muted):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {`<video width="320" height="240" autoplay muted>`}
          <p className="pl-3">{`<source src="movie.mp4" type="video/mp4">`}</p>
          <p className="pl-3">{` <source src="movie.ogg" type="video/ogg">`}</p>
          {"Your browser does not support the video tag."} <br />
          {"</video>"}
        </Code>
      </div>

      {/* Browser Support */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Browser Support
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The numbers in the table specify the first browser version that fully
          supports the <Code color="success">{"<video>"}</Code> element.
        </p>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableCell className="w-[200px]">Element</TableCell>
              <TableCell className="text-black">
                <FaChrome size={17} />
              </TableCell>
              <TableCell className="text-black">
                <FaEdge size={17} />
              </TableCell>
              <TableCell className="text-black">
                <FaFirefoxBrowser size={17} />
              </TableCell>
              <TableCell className="text-black">
                <FaOpera size={17} />
              </TableCell>
              <TableCell className="text-black">
                <SiSafari size={17} />
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Code color="success">{"<video>"}</Code>
              </TableCell>
              <TableCell className="text-[#71717a]">4.0</TableCell>
              <TableCell className="text-[#71717a]">9.0</TableCell>
              <TableCell className="text-[#71717a]">3.5</TableCell>
              <TableCell className="text-[#71717a]">4.0</TableCell>
              <TableCell className="text-[#71717a]">10.5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* HTML Video Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Video Formats
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          There are three supported video formats: MP4, WebM, and Ogg. The
          browser support for the different formats is:
        </p>
        <Table className="border mt-5">
          <TableCaption>HTML Video Formats</TableCaption>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-black">Browser</TableHead>
              <TableHead className="text-black">MP4</TableHead>
              <TableHead className="text-black">WebM</TableHead>
              <TableHead className="text-black">Ogg</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {VideoFormats.map((key, index) => (
              <TableRow key={index}>
                <TableCell className=" font-medium">{key.Browser}</TableCell>
                <TableCell className="text-[#71717a]">{key.MP4}</TableCell>
                <TableCell className="text-[#71717a]">{key.WebM}</TableCell>
                <TableCell className="text-[#71717a]">{key.Ogg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Video - Media Types */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Video - Media Types
        </h1>
        <Separator />
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-black">Browser</TableHead>
              <TableHead className="text-black">MP4</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MediaTypes.map((key, index) => (
              <TableRow key={index}>
                <TableCell className=" font-medium">{key.FileFormat}</TableCell>
                <TableCell className="text-[#71717a]">
                  {key.MediaType}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Video - Methods, Properties, and Events */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Video - Methods, Properties, and Events
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML DOM defines methods, properties, and events for the{" "}
          <Code color="success">{"<video>"}</Code> element. This allows you to
          load, play, and pause videos, as well as setting duration and volume.
          There are also DOM events that can notify you when a video begins to
          play, is paused, etc.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/media"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Media
          </Button>
        </Link>
        <Link href={"/doc/html/audio"}>
          <Button variant={"outline"} className="flex gap-3">
            Audio <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
