"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavLink from "@/app/shared/Nav-link";

const cssIntroductionNav = [
  {
    label: "Introduction",
    href: "/doc/css/introduction",
  },
  {
    label: "Syntax",
    href: "/doc/css/syntax",
  },
  {
    label: "Selectors",
    href: "/doc/css/selectors",
  },
  {
    label: "How to",
    href: "/doc/css/how-to",
  },
  {
    label: "Comments",
    href: "/doc/css/comments",
  },
  {
    label: "Colors",
    href: "/doc/css/colors",
  },
  {
    label: "Backgrounds",
    href: "/doc/css/backgrounds",
  },
  {
    label: "Borders",
    href: "/doc/css/borders",
  },
  {
    label: "Margins",
    href: "/doc/css/margins",
  },
  {
    label: "Paddings",
    href: "/doc/css/paddings",
  },
  {
    label: "Height and Width",
    href: "/doc/css/height-and-width",
  },
  {
    label: "Box Model",
    href: "/doc/css/box-model",
  },
  {
    label: "Outline",
    href: "/doc/css/outline",
  },
  {
    label: "Text",
    href: "/doc/css/text",
  },
  {
    label: "Fonts",
    href: "/doc/css/fonts",
  },
  {
    label: "Icons",
    href: "/doc/css/icons",
  },
  {
    label: "Links",
    href: "/doc/css/links",
  },
  {
    label: "Lists",
    href: "/doc/css/lists",
  },
  {
    label: "Tables",
    href: "/doc/css/tables",
  },
  {
    label: "Display",
    href: "/doc/css/display",
  },
  {
    label: "Max Width",
    href: "/doc/css/max-width",
  },
  {
    label: "Position",
    href: "/doc/css/position",
  },
  {
    label: "Z-index",
    href: "/doc/css/z-index",
  },
  {
    label: "Overflow",
    href: "/doc/css/overflow",
  },
  {
    label: "Float",
    href: "/doc/css/float",
  },
  {
    label: "Inline Block",
    href: "/doc/css/inline-block",
  },
  {
    label: "Align",
    href: "/doc/css/align",
  },
  {
    label: "Combinations",
    href: "/doc/css/combinations",
  },
  {
    label: "Pseudo Class",
    href: "/doc/css/pseudo-classes",
  },
  {
    label: "Pseudo Elements",
    href: "/doc/css/pseudo-elements",
  },
  {
    label: "Opacity",
    href: "/doc/css/opacity",
  },
  {
    label: "Navigation Bar",
    href: "/doc/css/navigation-bar",
  },
  {
    label: "Dropdowns",
    href: "/doc/css/dropdowns",
  },
  {
    label: "Image Gallery",
    href: "/doc/css/image-gallery",
  },
  {
    label: " Image Sprites",
    href: "/doc/css/image-sprites",
  },
  {
    label: "Attr Selectors",
    href: "/doc/css/attr-selectors",
  },
  {
    label: "Forms",
    href: "/doc/css/forms",
  },
  {
    label: "Counters",
    href: "/doc/css/counters",
  },
  {
    label: "Website Layout",
    href: "/doc/css/website-layout",
  },
  {
    label: "Units",
    href: "/doc/css/units",
  },
  {
    label: "Specificity",
    href: "/doc/css/specificity",
  },
  {
    label: "!important",
    href: "/doc/css/css_important",
  },
  {
    label: "Math Functions",
    href: "/doc/css/math-functions",
  },
];

const cssAdvancedNav = [
  {
    label: "Rounded Corners",
    href: "/doc/css/rounded-corners",
  },
  {
    label: "Border Image",
    href: "/doc/css/border-images",
  },
  {
    label: "Backgrounds",
    href: "/doc/css/ad-backgrounds",
  },
  {
    label: "Colors",
    href: "/doc/css/ad-colors",
  },
  {
    label: "Color Keyword",
    href: "/doc/css/color-keyword",
  },
  {
    label: "Gradients",
    href: "/doc/css/gradients",
  },
  {
    label: "Shadows",
    href: "/doc/css/shadows",
  },
  {
    label: "Text Effects",
    href: "/doc/css/text-effects",
  },
  {
    label: "Web Fonts",
    href: "/doc/css/web-fonts",
  },
  {
    label: "2D Transforms",
    href: "/doc/css/2d-transforms",
  },
  {
    label: "3D Transforms",
    href: "/doc/css/3d-transforms",
  },
  {
    label: "Transitions",
    href: "/doc/css/transitions",
  },
  {
    label: "Animations",
    href: "/doc/css/animations",
  },
  {
    label: "Tool Tips",
    href: "/doc/css/tool-tips",
  },
  {
    label: "Image Centering",
    href: "/doc/css/image-centering",
  },
  {
    label: "Object Fit",
    href: "/doc/css/object-fit",
  },
  {
    label: "Object Position",
    href: "/doc/css/object-position",
  },
  {
    label: "Masking",
    href: "/doc/css/masking",
  },
  {
    label: "Buttons",
    href: "/doc/css/buttons",
  },
  {
    label: "Paginations",
    href: "/doc/css/paginations",
  },
  {
    label: "Multiple Column",
    href: "/doc/css/multiple-column",
  },
  {
    label: "User Interface",
    href: "/doc/css/user-interface",
  },
  {
    label: "Variables ",
    href: "/doc/css/variables",
  },
  {
    label: "Box Sizing",
    href: "/doc/css/box-sizing",
  },
  {
    label: "Media Queries",
    href: "/doc/css/media-queries",
  },
  {
    label: "Flexbox",
    href: "/doc/css/flexbox",
  },
];

const cssResponsiveNav = [
  {
    label: "Intro",
    href: "/doc/css/intro",
  },
  {
    label: "Viewport",
    href: "/doc/css/viewport",
  },
  {
    label: "Grid View",
    href: "/doc/css/grid-view",
  },
  {
    label: "Media Quaries",
    href: "/doc/css/media-quaries",
  },
  {
    label: "Images",
    href: "/doc/css/images",
  },
  {
    label: "Videos",
    href: "/doc/css/videos",
  },
  {
    label: "Frameworks",
    href: "/doc/css/framework",
  },
  {
    label: "Templates",
    href: "/doc/css/templates",
  },
  {
    label: "Grid",
    href: "/doc/css/grid",
  },
  {
    label: "Grid Container",
    href: "/doc/css/grid-container",
  },
  {
    label: "Grid Items",
    href: "/doc/css/grid-items",
  },
];

function SideNav() {
  return (
    <ScrollArea className="h-[88vh] min-w-64 fixed max-lg:hidden">
      {/* Introduction Part */}
      <div className="px-4">
        <h4 className="mb-4 text-[14px] font-bold leading-none text-[#09090b]">
          Getting Started
        </h4>
        {cssIntroductionNav.map((tag, index) => (
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

      {/* Advanced Part */}
      <div className="p-4">
        <h4 className="mt-4 text-lg font-medium leading-none">Advanced</h4>
        {cssAdvancedNav.map((tag, index) => (
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

      {/* Responsive Part */}

      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Responsive</h4>
        {cssResponsiveNav.map((tag, index) => (
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
