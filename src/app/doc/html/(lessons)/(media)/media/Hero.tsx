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

const videoFormats = [
  {
    format: "MPEG",
    file: ".mpg .mpeg",
    desc: "MPEG. Developed by the Moving Pictures Expert Group. The first popular video format on the web. Not supported anymore in HTML.",
  },
  {
    format: "AVI",
    file: ".avi",
    desc: "AVI (Audio Video Interleave). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.",
  },
  {
    format: "WMV",
    file: ".wmv",
    desc: "WMV (Windows Media Video). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.",
  },
  {
    format: "QuickTime",
    file: ".mov",
    desc: "QuickTime. Developed by Apple. Commonly used in video cameras and TV hardware. Plays well on Apple computers, but not in web browsers.",
  },
  {
    format: "RealVideo",
    file: ".rm .ram",
    desc: "RealVideo. Developed by Real Media to allow video streaming with low bandwidths. Does not play in web browsers.",
  },
  {
    format: "Flash",
    file: ".swf .flv",
    desc: "Flash. Developed by Macromedia. Often requires an extra component (plug-in) to play in web browsers.",
  },
  {
    format: "Ogg",
    file: ".ogg",
    desc: "Theora Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.",
  },
  {
    format: "WebM",
    file: ".webm",
    desc: "WebM. Developed by Mozilla, Opera, Adobe, and Google. Supported by HTML.",
  },
  {
    format: "MPEG-4 or MP4",
    file: ".mp4",
    desc: "MP4. Developed by the Moving Pictures Expert Group. Commonly used in video cameras and TV hardware. Supported by all browsers and  recommended by YouTube. ",
  },
];

const audioFormats = [
  {
    format: "MIDI",
    file: ".mid .midi",
    desc: "MIDI (Musical Instrument Digital Interface). Main format for all electronic music devices like synthesizers and PC sound cards. MIDI files do not contain sound, but digital notes that can be played by electronics. Plays well on all computers and music hardware, but not in web browsers.",
  },
  {
    format: "RealAudio",
    file: ".rm .ram",
    desc: "RealAudio. Developed by Real Media to allow streaming of audio with low bandwidths. Does not play in web browsers.",
  },
  {
    format: "WMA ",
    file: ".wma	",
    desc: "WMA (Windows Media Audio). Developed by Microsoft. Plays well on Windows computers, but not in web browsers.",
  },
  {
    format: "AAC",
    file: ".aac",
    desc: "AAC (Advanced Audio Coding). Developed by Apple as the default format for iTunes. Plays well on Apple computers, but not in web browsers.",
  },
  {
    format: "WAV",
    file: ".wav	",
    desc: "WAV. Developed by IBM and Microsoft. Plays well on Windows, Macintosh, and Linux operating systems. Supported by HTML.",
  },
  {
    format: "Ogg",
    file: ".ogg",
    desc: "Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.",
  },
  {
    format: "MP3",
    file: ".mp3",
    desc: "MP3 files are actually the sound part of MPEG files. MP3 is the most popular format for music players. Combines good compression (small files) with high quality. Supported by all browsers.",
  },
  {
    format: "MP4",
    file: ".mp4",
    desc: "MP4 is a video format, but can also be used for audio. Supported by all browsers.",
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
                Multimedia
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Multimedia */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Multimedia</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          Multimedia on the web is sound, music, videos, movies, and animations.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is Multimedia? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What is Multimedia?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Multimedia comes in many different formats. It can be almost anything
          you can hear or see, like images, music, sound, videos, records,
          films, animations, and more.
          <br />
          Web pages often contain multimedia elements of different types and
          formats.
        </p>
      </div>

      {/* Browser Support */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Browser Support
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The first web browsers had support for text only, limited to a single
          font in a single color.
          <br /> <br />
          Later came browsers with support for colors, fonts, images, and
          multimedia!
        </p>
      </div>

      {/* Multimedia Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Multimedia Formats
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Multimedia elements (like audio or video) are stored in media files.
          <br />
          The most common way to discover the type of a file, is to look at the
          file extension.
          <br />
          Multimedia files have formats and different extensions like: .wav,
          .mp3, .mp4, .mpg, .wmv, and .avi.
        </p>
      </div>

      {/* Common Video Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Common Video Formats
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          There are many video formats out there. The MP4, WebM, and Ogg formats
          are supported by HTML. <br /> The MP4 format is recommended by
          YouTube.
        </p>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Format </TableHead>
              <TableHead>File</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videoFormats.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.format}</TableCell>
                <TableCell className=" text-[#71717a] ">{key.file}</TableCell>
                <TableCell className=" text-[#71717a] ">{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Common Audio Formats */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Common Audio Formats
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          MP3 is the best format for compressed recorded music. The term MP3 has
          become synonymous with digital music.
          <br /> <br />
          If your website is about recorded music, MP3 is the choice.
        </p>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px]">Format </TableHead>
              <TableHead>File</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {audioFormats.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.format}</TableCell>
                <TableCell className=" text-[#71717a] ">{key.file}</TableCell>
                <TableCell className=" text-[#71717a] ">{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/svg"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> SVG
          </Button>
        </Link>
        <Link href={"/doc/html/video"}>
          <Button variant={"outline"} className="flex gap-3">
            Video <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
