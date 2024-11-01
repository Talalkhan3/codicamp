import React from "react";
import Hero from "./Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Basic",
};

function page() {
  return (
    <div className="w-full">
      <Hero />
    </div>
  );
}

export default page;
