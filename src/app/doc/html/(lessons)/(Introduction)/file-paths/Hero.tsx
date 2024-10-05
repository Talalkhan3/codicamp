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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10 max-md:pr-3">
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
                File Paths
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* File Paths */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">File Paths</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          A file path describes the location of a file in a web site's folder
          structure.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* HTML File Paths */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {" "}
          HTML File Paths
        </h1>
        <Separator />
        <Table className="mt-5 border">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-gray-900">Path</TableHead>
              <TableHead className="font-medium text-gray-900">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Code color="success">{`<img src="picture.jpg">`}</Code>
              </TableCell>
              <TableCell>
                The "picture.jpg" file is located in the same folder as the
                current page
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code color="success">{`<img src="images/picture.jpg">">`}</Code>
              </TableCell>
              <TableCell>
                The "picture.jpg" file is located in the images folder in the
                current folder
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code color="success">{`<img src="/images/picture.jpg">`}</Code>
              </TableCell>
              <TableCell>
                The "picture.jpg" file is located in the images folder at the
                root of the current web
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code color="success">{`<img src="../picture.jpg">`}</Code>
              </TableCell>
              <TableCell>
                The "picture.jpg" file is located in the folder one level up
                from the current folder
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          A file path describes the location of a file in a web site's folder
          structure. File paths are used when linking to <br /> external files,
          like:
        </p>
        <ul className="flex flex-col ml-5 mt-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className=" text-[#09090b]">Web pages</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className=" text-[#09090b]">Images</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className=" text-[#09090b]">Style sheets</h1>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-black"></div>
            <h1 className=" text-[#09090b]">JavaScripts</h1>
          </li>
        </ul>
      </div>

      {/* Absolute File Paths */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Absolute File Paths
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          An absolute file path is the full URL to a file:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">`}
        </Code>
      </div>

      {/* Relative File Paths */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Relative File Paths
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A relative file path points to a file relative to the current page. In
          the following example, the file path points to a file in the images
          folder located at the root of the current web:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<img src="/images/picture.jpg" alt="Mountain">`}</Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the file path points to a file in the images
          folder located in the current folder:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<img src="images/picture.jpg" alt="Mountain">`}</Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          In the following example, the file path points to a file in the images
          folder located in the folder one level up from the current folder:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<img src="../images/picture.jpg" alt="Mountain">`}</Code>
      </div>

      {/* Best Practice */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Best Practice</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          It is best practice to use relative file paths (if possible). <br />{" "}
          When using relative file paths, your web pages will not be bound to
          your current base URL. All links will work on your own computer
          (localhost) as well as on your current public domain and your future
          public domains.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/javascripts"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> JavaScripts
          </Button>
        </Link>
        <Link href={"/doc/html/head"}>
          <Button variant={"outline"} className="flex gap-3">
            Head <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
