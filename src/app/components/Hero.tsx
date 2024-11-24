import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="max-w-[1390px] mx-auto px-10">
      <div className="my-24">
        <div className="bg-gray-200 p-3 rounded-full flex items-center gap-3 max-w-[355px] ">
          <div className="bg-gray-700 rounded-full p-3 text-white">
            Code Insights
          </div>
          <div className="">
            <h1 className="font-medium">
              Dive Into Documentation <br /> with /dev.learn 🌐
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="max-w-[500px] text-[80px] font-bold leading-none">
            Your <span className="text-[#33d45e]">Coding</span> Journey Starts
            Here
          </h1>
        </div>

        <div className="mt-10">
          <p className="max-w-[500px] text-gray-500 font-semibold leading-0">
            Explore comprehensive documentation for a wide array of programming
            languages
          </p>
        </div>
        <div className="mt-7">
          <Link href={"/doc"}>
            <Button className="px-20 py-6 font-medium text-md">
              Browse Languages
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
