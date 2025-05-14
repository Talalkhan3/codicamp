import { Metadata } from "next";
import Hero from "./Hero";

export const metadata: Metadata = {
  title: "CSS Transitions | devlearn",
};

function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default page;
