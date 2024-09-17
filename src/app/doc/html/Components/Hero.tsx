import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function Hero() {
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Getting Started{" "}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-1">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Getting Started
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This article serves as a comprehensive introduction to the
          fundamentals of HTML, designed to help you grasp the building blocks
          of web development. We'll break down essential concepts such as HTML
          elements, attributes, tags, and other key terms you might have
          encountered. Each term will be carefully explained, helping you
          understand how they contribute to the overall structure and
          functionality of HTML.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          As you go through the article, you’ll not only learn how individual
          HTML elements are structured but also gain insight into how they work
          together to form a complete webpage. We will walk you through a
          typical HTML document's structure, explaining the significance of each
          section, from the opening tag to the closing tag. You’ll discover how
          head elements, body content, and metadata interact to shape the way
          browsers render websites.
        </p>
        <p className="text-[16px] text-[#71717a] mt-3">
          In addition to exploring theoretical concepts, you’ll have the
          opportunity to engage with practical examples, giving you the chance
          to experiment with HTML code on your own. By the end of this article,
          you will have a solid foundation in HTML, a better understanding of
          how web pages are built, and the confidence to start creating your own
          simple web pages. Whether you're a beginner or looking to refresh your
          knowledge, this guide will equip you with everything you need to get
          started with HTML.
        </p>
      </div>
      <Separator className="my-5" />
      <div className="flex justify-end mt-5">
        <Link href={"/doc/html/introduction"}>
          <Button variant={"outline"} className="flex gap-3">
            Introduction <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
