import { Metadata } from "next";
import React from "react";
import Hero from "./Hero";

export const metadata: Metadata = {
  title: "HTML Audio",
};

function page() {
  return <div>
    <Hero />
  </div>;
}

export default page;
