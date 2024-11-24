"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavLink from "@/app/shared/Nav-link";

const htmlIntroductionNav = [
  {
    label: "Introduction",
    href: "/doc/html/introduction",
  },
  {
    label: "Editors",
    href: "/doc/html/editors",
  },
  {
    label: "Basic",
    href: "/doc/html/basic",
  },
  {
    label: "Elements",
    href: "/doc/html/elements",
  },
  {
    label: "Attributes",
    href: "/doc/html/attributes",
  },
  {
    label: "Headings",
    href: "/doc/html/headings",
  },
  {
    label: "Paragraphs",
    href: "/doc/html/paragraphs",
  },
  {
    label: "Styles",
    href: "/doc/html/styles",
  },
  {
    label: "Formatting",
    href: "/doc/html/formatting",
  },
  {
    label: "Quotations",
    href: "/doc/html/quotations",
  },
  {
    label: "Comments",
    href: "/doc/html/comments",
  },
  {
    label: "Colors",
    href: "/doc/html/colors",
  },
  {
    label: "CSS",
    href: "/doc/html/css",
  },
  {
    label: "Links",
    href: "/doc/html/links",
  },
  {
    label: "Page Titles",
    href: "/doc/html/page-titles",
  },
  {
    label: "Tables",
    href: "/doc/html/tables",
  },
  {
    label: "Lists",
    href: "/doc/html/lists",
  },
  {
    label: "Block and Inline",
    href: "/doc/html/block-and-inline",
  },
  {
    label: "Div",
    href: "/doc/html/div",
  },
  {
    label: "Classes",
    href: "/doc/html/classes",
  },
  {
    label: "Id",
    href: "/doc/html/id",
  },
  {
    label: "iFrames",
    href: "/doc/html/iframes",
  },
  {
    label: "JavaScript",
    href: "/doc/html/javascripts",
  },
  {
    label: "File Paths",
    href: "/doc/html/file-paths",
  },
  {
    label: "Head",
    href: "/doc/html/head",
  },
  {
    label: "Layout",
    href: "/doc/html/layout",
  },
  {
    label: "Responsive",
    href: "/doc/html/responsive",
  },
  {
    label: "Computer Code",
    href: "/doc/html/computer-code",
  },
  {
    label: "Sematics",
    href: "/doc/html/semantics",
  },
  {
    label: "Style Guide",
    href: "/doc/html/style-guide",
  },
  {
    label: "Entities",
    href: "/doc/html/entities",
  },
  {
    label: "Symbols",
    href: "/doc/html/symbols",
  },
  {
    label: "Emojis",
    href: "/doc/html/emojies",
  },
  {
    label: "Charsets",
    href: "/doc/html/charsets",
  },
  {
    label: "URL Encode",
    href: "/doc/html/url-encode",
  },
  {
    label: "HTML vs XHTML",
    href: "/doc/html/html-vs-xhtml",
  },
];

const htmlFormNav = [
  {
    label: "Forms",
    href: "/doc/html/forms",
  },
  {
    label: "Form Attributes",
    href: "/doc/html/form-attributes",
  },
  {
    label: "Form Elements",
    href: "/doc/html/form-elements",
  },
  {
    label: "Input Types",
    href: "/doc/html/input-types",
  },
  {
    label: "Input Attributes",
    href: "/doc/html/input-attributes",
  },
  {
    label: "Input Form Attributes",
    href: "/doc/html/input-form-attributes",
  },
];

const htmlGraphicNav = [
  {
    label: "Canvas",
    href: "/doc/html/canvas",
  },
  {
    label: "SVG",
    href: "/doc/html/svg",
  },
];

const htmlMediaNav = [
  {
    label: "Media",
    href: "/doc/html/media",
  },
  {
    label: "Video",
    href: "/doc/html/video",
  },
  {
    label: "Audio",
    href: "/doc/html/audio",
  },
  {
    label: "Plug-ins",
    href: "/doc/html/plug-ins",
  },
  {
    label: "Youtube",
    href: "/doc/html/youtube",
  },
];

function SideNav() {
  return (
    <ScrollArea className="h-[85vh] min-w-64 fixed max-lg:hidden">
      {/* Introduction Part */}
      <div className=" px-4">
        <h4 className="mb-4 text-[14px] font-bold leading-none text-[#09090b]">
          Getting Started
        </h4>
        {htmlIntroductionNav.map((tag, index) => (
          <div key={index}>
            <NavLink key={tag.href} href={tag.href}>
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Forms Part */}
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Forms</h4>
        {htmlFormNav.map((tag, index) => (
          <div key={index}>
            <NavLink key={tag.href} href={tag.href}>
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Graphics Part */}

      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Graphics</h4>
        {htmlGraphicNav.map((tag, index) => (
          <div key={index}>
            <NavLink key={tag.href} href={tag.href}>
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Media Part */}
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Media</h4>
        {htmlMediaNav.map((tag, index) => (
          <div key={index}>
            <NavLink key={tag.href} href={tag.href}>
              <div
                key={index}
                className="flex flex-row justify-normal mt-3 items-center"
              >
                <h1>{tag.label}</h1>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default SideNav;
