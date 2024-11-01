import React from "react";
import Hero from "./Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML URL Encode",
};

function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default page;
