import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Code } from "@nextui-org/code";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:px-3 max-sm:px-0">
      {/* BREADCRUMBS  */}

      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/doc/html">CSS</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Animations
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Animations */}

      <div className="mt-10">
        <h1 className="text-[40px] text-[#09090b] font-bold">Animations</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          CSS allows animation of HTML elements without using JavaScript!
        </p>
        <Separator className="mt-5" />
      </div>

      {/* What are CSS Animations? */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          What are CSS Animations?
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          An animation lets an element gradually change from one style to
          another. You can change as many CSS properties you want, as many times
          as you want. To use CSS animation, you must first specify some
          keyframes for the animation. Keyframes hold what styles the element
          will have at certain times.
        </p>
      </div>

      {/* The @keyframes Rule */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          The @keyframes Rule
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          To create an animation using the{" "}
          <Code color="success">@keyframes</Code> rule, you define the CSS
          styles that the animation will transition through at specified times,
          and then bind the animation to an element. For example, binding the
          "example" animation to a <Code color="success">{"<div>"}</Code>{" "}
          element with a duration of 4 seconds will gradually change the
          background color of the <Code color="success">{"<div>"}</Code> from
          "red" to "yellow."
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/* The animation code */"} <br />
          {"@keyframes example {"}
          <p className="pl-3">{"from {background-color: red;}"}</p>
          <p className="pl-3">{"to {background-color: yellow;}"}</p>
          {"}"} <br /> <br />
          {"/* The element to apply the animation to */"} <br />
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The animation-duration property determines how long an animation takes
          to complete; if not specified, the default value is 0s, meaning no
          animation occurs. In the earlier example, style changes were defined
          using the keywords "from" and "to," representing 0% (start) and 100%
          (complete). Alternatively, percentages can be used to define multiple
          style changes within an animation. For instance, an animation can
          change the background color of a{" "}
          <Code color="success">{"<div>"}</Code> element at 25%, 50%, and 100%
          completion, allowing for more complex transitions.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/* The animation code */"} <br />
          {"@keyframes example {"}
          <p className="pl-3">{"0%   {background-color: red;}"}</p>
          <p className="pl-3">{"25%  {background-color: yellow;}"}</p>
          <p className="pl-3">{"50%  {background-color: blue;}"}</p>
          <p className="pl-3">{"100% {background-color: green;}"}</p>
          {"}"} <br /> <br />
          {"/* The element to apply the animation to */"} <br />
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example will change both the background-color and the
          position of the <Code color="success">{"<div>"}</Code> element when
          the animation is 25% complete, 50% complete, and again when the
          animation is 100% complete:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"/* The animation code */"} <br />
          {"@keyframes example {"}
          <p className="pl-3">
            {"0%   {background-color:red; left:0px; top:0px;}"}
          </p>
          <p className="pl-3">
            {"25%  {background-color:yellow; left:200px; top:0px;}"}
          </p>
          <p className="pl-3">
            {"50%  {background-color:blue; left:200px; top:200px;}"}
          </p>
          <p className="pl-3">
            {"75%  {background-color:green; left:0px; top:200px;}"}
          </p>
          <p className="pl-3">
            {"100% {background-color:red; left:0px; top:0px;}"}
          </p>
          {"}"} <br /> <br />
          {"/* The element to apply the animation to */"} <br />
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Delay an Animation */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Delay an Animation
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">animation-delay</Code> property specifies a
          delay for the start of an animation. The following example has a 2
          seconds delay before starting the animation:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-delay: 2s;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          Negative values are also allowed. If using negative values, the
          animation will start as if it had already been playing for N seconds.
          In the following example, the animation will start as if it had
          already been playing for 2 seconds:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-delay: -2s;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Set How Many Times an Animation Should Run */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Set How Many Times an Animation Should Run
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">animation-iteration-count</Code> property
          specifies the number of times an animation should run. The following
          example will run the animation 3 times before it stops:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-iteration-count: 3;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example uses the value "infinite" to make the animation
          continue for ever:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-iteration-count: infinite;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Run Animation in Reverse Direction or Alternate Cycles */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Run Animation in Reverse Direction or Alternate Cycles
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">animation-direction</Code> property
          determines the playback direction of an animation, allowing it to run
          forwards, backwards, or alternate between the two. It accepts values
          such as <Code color="success">normal</Code> (default, plays forwards),
          <Code color="success">reverse</Code> (plays backwards),{" "}
          <Code color="success">alternate</Code> (plays forwards first, then
          backwards), and <Code color="success">alternate-reverse</Code> (plays
          backwards first, then forwards). For instance, setting the property to
          <Code color="success">reverse</Code> will make the animation run in
          the reverse direction.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-direction: reverse;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example uses the value "alternate" to make the animation
          run forwards first, then backwards:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-iteration-count: 2;"}</p>
          <p className="pl-3">{"animation-direction: alternate;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example uses the value "alternate-reverse" to make the
          animation run backwards first, then forwards:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"background-color: red;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 4s;"}</p>
          <p className="pl-3">{"animation-iteration-count: 2;"}</p>
          <p className="pl-3">{"animation-direction: alternate-reverse;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Specify the Speed Curve of the Animation */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Specify the Speed Curve of the Animation
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">animation-timing-function</Code> property
          defines the speed curve of an animation, determining how the animation
          progresses over time. It includes values such as{" "}
          <Code color="success">ease</Code> (default, with a slow start, faster
          middle, and slow end), <Code color="success">linear</Code> (constant
          speed from start to end),
          <Code color="success">ease-in</Code> (slow start),{" "}
          <Code color="success">ease-out</Code> (slow end), and{" "}
          <Code color="success">ease-in-out</Code> (slow start and end).
          Additionally, the <Code color="success">cubic-bezier(n,n,n,n)</Code>{" "}
          function allows customization of the speed curve with user-defined
          values. For example, this property can be used to implement various
          speed curves to suit different animation effects.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p>{"#div1 {animation-timing-function: linear;}"}</p>
          <p>{"#div2 {animation-timing-function: ease;}"}</p>
          <p>{"#div3 {animation-timing-function: ease-in;}"}</p>
          <p>{"#div4 {animation-timing-function: ease-out;}"}</p>
          <p>{"#div5 {animation-timing-function: ease-in-out;}"}</p>
        </Code>
      </div>

      {/* Specify the fill-mode For an Animation */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Specify the fill-mode For an Animation
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">animation-fill-mode</Code> property controls
          the styles applied to an element when an animation is not actively
          playing, such as before it starts or after it ends. By default (none),
          the animation does not affect the element outside its execution. The
          value <Code color="success">forwards</Code> retains the style from the
          last keyframe after the animation ends, while
          <Code color="success">backwards</Code> applies the first keyframe's
          style during the animation-delay period. The{" "}
          <Code color="success">both</Code> value combines the effects of
          <Code color="success">forwards</Code> and{" "}
          <Code color="success">backwards</Code>, extending the animation's
          influence in both directions. For example, setting{" "}
          <Code color="success">animation-fill-mode</Code> to
          <Code color="success">forwards</Code> ensures that a{" "}
          <Code color="success">{"<div>"}</Code> retains the styles of its last
          keyframe after the animation concludes.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background: red;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 3s;"}</p>
          <p className="pl-3">{"animation-fill-mode: forwards;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example lets the <Code color="success">{"<div>"}</Code>{" "}
          element get the style values set by the first keyframe before the
          animation starts (during the animation-delay period):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background: red;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 3s;"}</p>
          <p className="pl-3">{"animation-delay: 2s;"}</p>
          <p className="pl-3">{"animation-fill-mode: backwards;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The following example lets the <Code color="success">{"<div>"}</Code>{" "}
          element get the style values set by the first keyframe before the
          animation starts, and retain the style values from the last keyframe
          when the animation ends:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"width: 100px;"}</p>
          <p className="pl-3">{"height: 100px;"}</p>
          <p className="pl-3">{"background: red;"}</p>
          <p className="pl-3">{"position: relative;"}</p>
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 3s;"}</p>
          <p className="pl-3">{"animation-delay: 2s;"}</p>
          <p className="pl-3">{"animation-fill-mode: both;"}</p>
          {"}"}
        </Code>
      </div>

      {/* Animation Shorthand Property */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold underline underline-offset-4 decoration-green-400 decoration-2">
          Animation Shorthand Property
        </h1>
        <p className="text-[16px] text-[#71717a] mt-3">
          The example below uses six of the animation properties:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">{"animation-name: example;"}</p>
          <p className="pl-3">{"animation-duration: 5s;"}</p>
          <p className="pl-3">{"animation-timing-function: linear;"}</p>
          <p className="pl-3">{"animation-delay: 2s;"}</p>
          <p className="pl-3">{"animation-iteration-count: infinite;"}</p>
          <p className="pl-3">{"animation-direction: alternate;"}</p>
          {"}"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The same animation effect as above can be achieved by using the
          shorthand <Code color="success">animation</Code> property:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"div {"}
          <p className="pl-3">
            {"animation: example 5s linear 2s infinite alternate;"}
          </p>
          {"}"}
        </Code>
      </div>

      <Separator className="my-5" />

      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/css/transitions"}>
          <Button className="flex gap-3" variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4" /> Transitions
          </Button>
        </Link>
        <Link href={"/doc/css/tool-tips"}>
          <Button variant={"outline"} className="flex gap-3">
            Tool Tips <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
