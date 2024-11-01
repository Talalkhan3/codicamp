import React from "react";
import Hero from "./Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML links",
};

function Page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Page;
