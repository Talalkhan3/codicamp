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
    <ScrollArea className="w-full h-[90vh] pr-10 max-lg:pr-3">
      {/* BREADCRUMBS  */}
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Doc</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink href="/doc/html">HTML</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-bold text-[#09090b]">
                Input form Attributes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*Input form Attributes */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input form Attributes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter describes the different{" "}
          <Code color="success">form*</Code> attributes for the HTML{" "}
          <Code color="success">{"<input>"}</Code> element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The form Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The form Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">input</Code> form attribute specifies the
          form the <Code color="success">{`<input>`}</Code> element belongs to.
          The value of this attribute must be equal to the id attribute of the{" "}
          {"<form>"} element it belongs to.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" id="form1">`}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{` <input type="submit" value="Submit">`}</p>
          {`</form>`} <br /> <br />
          {`<label for="lname">Last name:</label>`} <br />
          {`<input type="text" id="lname" name="lname" form="form1">`}
        </Code>
      </div>

      {/* The formaction Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The formaction Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">formaction</Code> attribute specifies
          the URL of the file that will process the input when the form is
          submitted. The <Code color="success">formaction</Code> attribute works
          with the following input types: submit and image.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{` <label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          <p className="pl-3">{`<input type="submit" formaction="/action_page2.php" value="Submit as Admin">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The formenctype Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The formenctype Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">formenctype </Code> attribute
          specifies how the form-data should be encoded when submitted (only for
          forms with method="post"). The{" "}
          <Code color="success">formenctype </Code> attribute works with the
          following input types: submit and image.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page_binary.asp" method="post">`}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          <p className="pl-3">{`<input type="submit" formenctype="multipart/form-data"`}</p>
          <p className="pl-3">{`value="Submit as Multipart/form-data">`}</p>

          {`</form>`}
        </Code>
      </div>

      {/* The formmethod Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The formmethod Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">formmethod </Code> attribute defines
          the HTTP method for sending form-data to the action URL. The{" "}
          <Code color="success">formmethod </Code> aattribute works with the
          following input types: submit and image. The form-data can be sent as
          URL variables (method="get") or as an HTTP post transaction
          (method="post").
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">
          Notes on the "get" method:
        </h1>
        <ul className="flex flex-col gap-1 mt-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>
              This method appends the form-data to the URL in name/value pairs
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>
              This method is useful for form submissions where a user want to
              bookmark the result
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>
              There is a limit to how much data you can place in a URL (varies
              between browsers), therefore, <br />
              you cannot be sure that all of the form-data will be correctly
              transferred
            </p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>
              Never use the "get" method to pass sensitive information!
              (password or other sensitive information <br /> will be visible in
              the browser's address bar)
            </p>
          </li>
        </ul>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">
          Notes on the "post" method:
        </h1>
        <ul className="flex flex-col gap-1 mt-3">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>This method sends the form-data as an HTTP post transaction</p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>Form submissions with the "post" method cannot be bookmarked</p>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-xl bg-[#09090b]"></div>
            <p>
              The "post" method is more robust and secure than "get", and "post"
              does not have size limitations
            </p>
          </li>
        </ul>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" method="get">`}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit using GET">`}</p>
          <p className="pl-3">{`<input type="submit" formmethod="post" value="Submit using POST">`}</p>

          {`</form>`}
        </Code>
      </div>

      {/* The formtarget Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The formtarget Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">formtarget </Code> attribute specifies
          a name or a keyword that indicates where to display the response that
          is received after submitting the form. The{" "}
          <Code color="success">formtarget </Code> attribute works with the
          following input types: submit and image.
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          <p className="pl-3">{`<input type="submit" formtarget="_blank" value="Submit to a new window/tab">`}</p>

          {`</form>`}
        </Code>
      </div>

      {/* The formnovalidate Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The formnovalidate Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">formnovalidate </Code> attribute
          specifies that an {"<input>"} element should not be validated when
          submitted. The <Code color="success">formnovalidate </Code> attribute
          works with the following input types: submit.
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{`<label for="email">Enter your email:</label>   `}</p>
          <p className="pl-3">{`<input type="email" id="email" name="email"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          <p className="pl-3">{`<input type="submit" formnovalidate="formnovalidate"`}</p>
          <p className="pl-3">{`value="Submit without validation">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The novalidate Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The novalidate Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">novalidate </Code> aattribute is a{" "}
          <Code color="success">{"<form>"}</Code> When present, novalidate
          specifies that all of the form-data should not be validated when
          submitted.
        </p>

        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" novalidate>`}
          <p className="pl-3">{`<label for="email">Enter your email:</label>`}</p>
          <p className="pl-3">{`<input type="email" id="email" name="email"><br><br>`}</p>
          <p className="pl-3">{` <input type="submit" value="Submit">`}</p>
          {`</form>`}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/input-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Input Attributes
          </Button>
        </Link>
        <Link href={"/doc/html/canvas"}>
          <Button variant={"default"} className="flex gap-3">
            Canvas <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
