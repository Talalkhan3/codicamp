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
                Head
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* The Head Element */}

      <div className="mt-10 ">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Head Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          The HTML <Code color="success">{"<head>"}</Code> element is a
          container for the following elements:{" "}
          <Code color="success">{"<title>"}</Code>,{" "}
          <Code color="success">{"<style>"}</Code>,{" "}
          <Code color="success">{"<meta>"}</Code>,{" "}
          <Code color="success">{"<link>"}</Code>,{" "}
          <Code color="success">{"<script>"}</Code>, and{" "}
          <Code color="success">{"<base>"}</Code>.
        </p>
        <Separator className="mt-5" />
      </div>
    </ScrollArea>
  );
}

export default Hero;
