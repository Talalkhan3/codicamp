import { Metadata } from "next";
import React from "react";
import Hero from "./Hero";

export const metdata: Metadata = {
  title: "CSS Backgrounds | devlearn",
};

function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default page;
