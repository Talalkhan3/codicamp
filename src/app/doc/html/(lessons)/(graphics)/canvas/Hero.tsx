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
                Canvas
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Canvas Graphics */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Canvas Graphics
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"<canvas>"}</Code> element is used to
          draw graphics on a web page. The graphic to the left is created with
          <Code color="success">{"<canvas>"}</Code> t shows four elements: a red
          rectangle, a gradient rectangle, a multicolor rectangle, and a
          multicolor text.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What is HTML Canvas? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          What is HTML Canvas?
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<canvas>"}</Code> element is used to
          draw graphics, on the fly, via JavaScript. The{" "}
          <Code color="success">{"<canvas>"}</Code> element is only a container
          for graphics. You must use JavaScript to actually draw the graphics.
          Canvas has several methods for drawing paths, boxes, circles, text,
          and adding images. Canvas is supported by all major browsers.
        </p>
      </div>

      {/* Canvas Examples */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Canvas Examples
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A canvas is a rectangular area on an HTML page. By default, a canvas
          has no border and no content.
          <br /> <br />
          The markup looks like this:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<canvas id="myCanvas" width="200" height="100"></canvas>`}
        </Code>
        <p className="text-[16px] text-[#71717a] my-3">
          Here is an example of a basic, empty canvas:
        </p>
        <canvas
          id="myCanvas"
          width="200"
          height="100"
          className="bg-gray-200"
        ></canvas>
      </div>

      {/* Add a JavaScript */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Add a JavaScript
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          After creating the rectangular canvas area, you must add a JavaScript
          to do the drawing.
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
          Draw a Line
        </h1>
        <Separator />
        <Code
          className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
          color="success"
          size="md"
        >
          {"<script>"} <br />
          {`var c = document.getElementById("myCanvas");`} <br />
          {`var ctx = c.getContext("2d");`} <br />
          {"ctx.moveTo(0, 0);"} <br />
          {"ctx.lineTo(200, 100);"} <br />
          {"ctx.stroke();"} <br />
          {"</script>"}
        </Code>

        {/* Draw a Circle */}

        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Draw a Circle
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br />
            {"ctx.beginPath();"} <br />
            {"ctx.arc(95, 50, 40, 0, 2 * Math.PI);"} <br />
            {"ctx.stroke();"} <br />
            {"</script>"}
          </Code>
        </div>

        {/* Draw a Text */}
        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Draw a Text
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br />
            {`ctx.font = "30px Arial";`} <br />
            {`ctx.fillText("Hello World", 10, 50);`} <br />
            {"</script>"}
          </Code>
        </div>

        {/* Stroke Text */}
        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Stroke Text
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br />
            {`ctx.font = "30px Arial";`} <br />
            {`ctx.strokeText("Hello World", 10, 50);`} <br />
            {"</script>"}
          </Code>
        </div>

        {/* Draw Linear Gradient */}
        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Draw Linear Gradient
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br /> <br />
            {"// Create gradient"} <br />
            {"var grd = ctx.createLinearGradient(0, 0, 200, 0);"} <br />
            {`grd.addColorStop(0, "red");`} <br />
            {`grd.addColorStop(1, "white");`} <br /> <br />
            {"// Fill with gradient"} <br />
            {"ctx.fillStyle = grd;"} <br />
            {"ctx.fillRect(10, 10, 150, 80);"} <br />
            {"</script>"}
          </Code>
        </div>

        {/* Draw Circular Gradient */}
        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Draw Circular Gradient
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br /> <br />
            {"// Create gradient"} <br />
            {"var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);"}{" "}
            <br />
            {`grd.addColorStop(0, "red");`} <br />
            {`grd.addColorStop(1, "white");`} <br /> <br />
            {"// Fill with gradient"} <br />
            {"ctx.fillStyle = grd;"} <br />
            {"ctx.fillRect(10, 10, 150, 80);"} <br />
            {"</script>"}
          </Code>
        </div>

        {/* Draw Image */}
        <div>
          <h1 className="text-[20px] text-[#09090b] font-bold mt-5">
            Draw Image
          </h1>
          <Separator />
          <Code
            className="border-l-5 border-[#33d45e] mt-2 w-full p-3"
            color="success"
            size="md"
          >
            {"<script>"} <br />
            {`var c = document.getElementById("myCanvas");`} <br />
            {`var ctx = c.getContext("2d");`} <br /> <br />
            {`var img = document.getElementById("scream");`} <br />
            {"ctx.drawImage(img, 10, 10);"} <br />
            {"</script>"}
          </Code>
        </div>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/input-form-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Input Form Attributes
          </Button>
        </Link>
        <Link href={"/doc/html/svg"}>
          <Button variant={"outline"} className="flex gap-3">
            SVG <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
