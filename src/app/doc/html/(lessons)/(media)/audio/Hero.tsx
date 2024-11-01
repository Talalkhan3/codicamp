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

const AudioFormats = [
  {
    Browser: "Edge",
    MP3: "YES",
    WAV: "YES*",
    Ogg: "YES*",
  },
  {
    Browser: "Chrome",
    MP3: "YES",
    WAV: "YES",
    Ogg: "YES",
  },
  {
    Browser: "Firefox",
    MP3: "YES",
    WAV: "YES",
    Ogg: "YES",
  },
  {
    Browser: "Safari",
    MP3: "YES",
    WAV: "YES",
    Ogg: "NO",
  },
  {
    Browser: "Opera",
    MP3: "YES",
    WAV: "YES",
    Ogg: "YES",
  },
];

const MediaTypes = [
  {
    FileFormat: "MP3",
    MediaType: "audio/mpeg",
  },
  {
    FileFormat: "OGG",
    MediaType: "audio/ogg",
  },
  {
    FileFormat: "WAV",
    MediaType: "audio/wav",
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
                Audio
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Audio */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Audio</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"<audio>"}</Code> element is used to
          play an audio file on a web page.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The HTML <audio> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<audio>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To play an audio file in HTML, use the{" "}
          <Code color="success">{"<audio>"}</Code> element:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {" <audio controls>"}
          <p className="pl-3">{`<source src="horse.ogg" type="audio/ogg">`}</p>
          <p className="pl-3">{`<source src="horse.mp3" type="audio/mpeg">`}</p>
          {"Your browser does not support the audio element"}
          {"</audio>"}
        </Code>
      </div>

      {/* HTML Audio - How It Works */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Audio - How It Works
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The controls attribute adds audio controls, like play, pause, and
          volume. The <Code color="success">{"<source>"}</Code> element allows
          you to specify alternative audio files which the browser may choose
          from. The browser will use the first recognized format. The text
          between the <Code color="success">{"<audio>"}</Code> and{" "}
          <Code color="success">{"</audio>"}</Code> tags will only be displayed
          in browsers that do not support the{" "}
          <Code color="success">{"<audio>"}</Code> element.
        </p>
      </div>

      {/* HTML <audio> Autoplay */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML {"<audio>"} Autoplay
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          To start an audio file automatically, use the autoplay attribute:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {" <audio controls autoplay>"}
          <p className="pl-3">{`<source src="horse.ogg" type="audio/ogg">`}</p>
          <p className="pl-3">{`<source src="horse.mp3" type="audio/mpeg">`}</p>
          {"Your browser does not support the audio element"}
          {"</audio>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Add <Code color="success">muted</Code> after{" "}
          <Code color="success">autoplay</Code> to let your audio file start
          playing automatically (but muted):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {" <audio controls autoplay muted>"}
          <p className="pl-3">{`<source src="horse.ogg" type="audio/ogg">`}</p>
          <p className="pl-3">{`<source src="horse.mp3" type="audio/mpeg">`}</p>
          {"Your browser does not support the audio element"}
          {"</audio>"}
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
          supports the <Code color="success">{"<audio>"}</Code> element.
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
                <Code color="success">{"<audio>"}</Code>
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

      {/* Audio Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Audio Formats</h1>
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
            {AudioFormats.map((key, index) => (
              <TableRow key={index}>
                <TableCell className=" font-medium">{key.Browser}</TableCell>
                <TableCell className="text-[#71717a]">{key.MP3}</TableCell>
                <TableCell className="text-[#71717a]">{key.WAV}</TableCell>
                <TableCell className="text-[#71717a]">{key.Ogg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/*  Audio - Media Types */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Audio - Media Types
        </h1>
        <Separator />
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-black">Browser</TableHead>
              <TableHead className="text-black">Media Type</TableHead>
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

      {/* HTML Audio - Methods, Properties, and Events */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Audio - Methods, Properties, and Events
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML DOM defines methods, properties, and events for the{" "}
          <Code color="success">{"<audio>"}</Code> element. This allows you to
          load, play, and pause audios, as well as set duration and volume.
          There are also DOM events that can notify you when an audio begins to
          play, is paused, etc.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/video"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Video
          </Button>
        </Link>
        <Link href={"/doc/html/plug-ins"}>
          <Button variant={"outline"} className="flex gap-3">
            Plug-ins <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
