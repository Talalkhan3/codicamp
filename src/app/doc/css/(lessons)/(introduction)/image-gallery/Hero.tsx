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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-3 max-sm:px-0">
      {/* BREADCRUMBS  */}

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/doc/html">CSS</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Image Gallery
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*  Image Gallery  */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Image Gallery</h1>
        <Separator />{" "}
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS can be used to create an image gallery.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Image Gallery */}

      <div className="mt-3">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Image Gallery
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following image gallery is created with CSS:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<html>"} <br />
          {"<head>"} <br />
          {`<style>`} <br />
          {"div.gallery {"}
          <p className="pl-3">{"margin: 5px;"}</p>
          <p className="pl-3">{"border: 1px solid #ccc;"}</p>
          <p className="pl-3">{"float: left;"}</p>
          <p className="pl-3">{"width: 180px;"}</p>
          {"}"} <br /> <br />
          {"div.gallery:hover {"}
          <p className="pl-3">{"border: 1px solid #777;"}</p>
          {"}"} <br />
          {"div.gallery img {"}
          <p className="pl-3">{"width: 100%;"}</p>
          <p className="pl-3">{"height: auto;"}</p>
          {"}"} <br /> <br />
          {"div.desc {"}
          <p className="pl-3">{"padding: 15px;"}</p>
          <p className="pl-3">{"text-align: center;"}</p>
          {"}"} <br />
          {"</style>"} <br />
          {"</head>"} <br />
          {"<body>"} <br /> <br />
          {`<div class="gallery">`}
          <p className="pl-3">{`<a target="_blank" href="img_5terre.jpg">`}</p>
          <p className="pl-7">{`<img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">`}</p>
          <p className="pl-3">{`</a>`}</p>
          <p className="pl-3">{`<div class="desc">Add a description of the image here</div>`}</p>
          {`</div>`} <br /> <br />
          {`<div class="gallery">`}
          <p className="pl-3">{`<a target="_blank" href="img_forest.jpg">`}</p>
          <p className="pl-7">{`<img src="img_forest.jpg" alt="Forest" width="600" height="400">`}</p>
          <p className="pl-3">{"</a>"}</p>
          <p className="pl-3">{`<div class="desc">Add a description of the image here</div>`}</p>
          {"</div>"} <br /> <br />
          {`<div class="gallery">`}
          <p className="pl-3">{`<a target="_blank" href="img_lights.jpg">`}</p>
          <p className="pl-7">{`<img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">`}</p>
          <p className="pl-3">{`</a>`}</p>
          <p className="pl-3">{`<div class="desc">Add a description of the image here</div>`}</p>
          {"</div>"} <br /> <br />
          {`<div class="gallery">`}
          <p className="pl-3">{`<a target="_blank" href="img_mountains.jpg">`}</p>
          <p className="pl-7">{`<img src="img_mountains.jpg" alt="Mountains" width="600" height="400">`}</p>
          <p className="pl-3">{"</a>"}</p>
          <p className="pl-3">{`<div class="desc">Add a description of the image here</div>`}</p>
          {"</div>"} <br /> <br />
          {"</body>"} <br />
          {"</html>"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/dropdowns"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Navigation Bar
          </Button>
        </Link>
        <Link href={"/doc/css/image-sprites"}>
          <Button variant={"outline"} className="flex gap-3">
            Image Sprites <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
