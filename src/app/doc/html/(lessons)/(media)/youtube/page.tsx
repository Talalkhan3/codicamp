import React from "react";
import { Metadata } from "next";
import Hero from "./Hero";

export const metadata: Metadata = {
  title: "HTML Youtube",
};
function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default page;
