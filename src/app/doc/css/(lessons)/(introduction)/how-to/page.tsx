import React from "react";
import Hero from "./Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS How to",
};

function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default page;