import React from "react";
import { BookText } from "lucide-react";
import { Globe } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { IdCard } from "lucide-react";

const progknow = [
  {
    id: "Comprehensive Documentation",
    icon: <BookText />,
    desc: "Access well-structured documentation for various programming languages, from syntax to advanced concepts.",
  },
  {
    id: "Tailored Learning Paths",
    icon: <Globe />,
    desc: "Customize your learning with paths tailored to beginners, intermediates, or advanced programmers.",
  },
  {
    id: "User Ratings and Suggestions",
    icon: <ThumbsUp />,
    desc: "Rate documentation and suggest improvements to help us provide better resources for all.",
  },
  {
    id: "Join Our Developer Community",
    icon: <IdCard />,
    desc: "Engage with fellow developers in our community for support, discussions, and collaboration.",
  },
];

function Power() {
  return (
    <div className="max-w-[1390px] mx-auto  px-10">
      <div className="bg-green-50  py-12 rounded-md">
        <div className="text-center">
          <h1 className="text-[40px] font-bold leading-none">
            Discover the Power of{" "}
            <span className="text-[#33d45e]">Programming</span> <br />
            Knowledge
          </h1>
        </div>
        <div className="flex flex-wrap gap-12 justify-center mt-16">
          {progknow.map((index, key) => (
            <div key={key} className="max-w-[500px]">
              <div className="flex items-center">
                <div className="rounded-full text-slate-800 bg-green-200 p-3">
                  {index.icon}
                </div>
                <h1 className="pl-4 font-semibold text-[20px] max-w-[200px] leading-none">
                  {index.id}
                </h1>
              </div>
              <p className="pl-16 mt-2 text-gray-600">{index.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Power;
