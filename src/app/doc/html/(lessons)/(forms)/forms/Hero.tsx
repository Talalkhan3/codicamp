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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
                Forms
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Forms */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Forms</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          An HTML form is used to collect user input. The user input is most
          often sent to a server for processing.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Form  Examples */}

      <div className="mt-5">
        <h1 className="text-[20px] text-[#09090b] font-bold">Example</h1>
        <div className=" flex flex-col gap-3 p-4 border mt-2 ">
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              type="text"
              id="firstname"
              placeholder="First Name"
              className="max-w-sm"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              type="text"
              id="lastname"
              placeholder="Last Name"
              className="max-w-sm"
            />
          </div>
          <Button className="max-w-sm" type="button">
            Submit
          </Button>
        </div>
      </div>

      {/* The <form> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<form>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<form>"}</Code> element is used to
          create an HTML form for user input:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"} <br />
          {"."} <br />
          {"form elements"} <br />
          {"."} <br />
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<form>"}</Code> element is a container for
          different types of input elements, such as: text fields, checkboxes,
          radio buttons, submit buttons, etc.
        </p>
      </div>

      {/* The <input> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<input>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<input>"}</Code> element is the most
          used form element. <br />
          An <Code color="success">{"<input>"}</Code> element can be displayed
          in many ways, depending on the type attribute.
          <br /> <br />
          Here are some examples:
        </p>
        <Table className="border mt-3">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Type</TableHead>
              <TableHead className="font-bold"> Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-[#71717a]">{`<input type="text">`}</TableCell>
              <TableCell className="text-[#71717a]">
                Displays a single-line text input field
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[#71717a]">{`<input type="radio">`}</TableCell>
              <TableCell className="text-[#71717a]">
                Displays a radio button (for selecting one of many choices)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[#71717a]">{`<input type="checkbox">`}</TableCell>
              <TableCell className="text-[#71717a]">
                Displays a checkbox (for selecting zero or more of many choices)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[#71717a]">{`<input type="submit">`}</TableCell>
              <TableCell className="text-[#71717a]">
                Displays a submit button (for submitting the form)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[#71717a]">{`<input type="button">`}</TableCell>
              <TableCell className="text-[#71717a]">
                Displays a clickable button
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Text Fields */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Text Fields</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="text">`}</Code> defines a
          single-line input field for text input.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname">`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] my-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form action="">
          <label htmlFor="fname">First name:</label> <br />
          <input type="text" id="fname" name="fname" className="border" />{" "}
          <br />
          <label htmlFor="lname">Last name:</label> <br />
          <input type="text" id="lname" name="lname" className="border" />{" "}
          <br />
        </form>
      </div>

      {/* The <label> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<label>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Notice the use of the <Code color="success">{"<label>"}</Code> element
          in the example above. The <Code color="success">{"<label>"}</Code> tag
          defines a label for many form elements. The{" "}
          <Code color="success">{"<label>"}</Code> element is useful for
          screen-reader users, because the screen-reader will read out loud the
          label when the user focuses on the input element. The{" "}
          <Code color="success">{"<label>"}</Code> element also helps users who
          have difficulty clicking on very small regions (such as radio buttons
          or checkboxes) - because when the user clicks the text within the{" "}
          <Code color="success">{"<label>"}</Code> element, it toggles the radio
          button/checkbox. The for attribute of the{" "}
          <Code color="success">{"<label>"}</Code> tag should be equal to the id
          attribute of the <Code color="success">{"<input>"}</Code> element to
          bind them together.
        </p>
      </div>

      {/* Radio Buttons */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Radio Buttons</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The {`<input type="radio">`} defines a radio button. Radio buttons let
          a user select ONE of a limited number of choices.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<p>Choose your favorite Web language:</p>"} <br /> <br />
          {"<form>"}
          <p className="pl-3">{`<input type="radio" id="html" name="fav_language" value="HTML">`}</p>
          <p className="pl-3">{`<label for="html">HTML</label><br>`}</p>
          <p className="pl-3">{`<input type="radio" id="css" name="fav_language" value="CSS">`}</p>
          <p className="pl-3">{`<label for="css">CSS</label><br>`}</p>
          <p className="pl-3">{`<input type="radio" id="javascript" name="fav_language" value="JavaScript">`}</p>
          <p className="pl-3">{`<label for="javascript">JavaScript</label>`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] my-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <p>Choose your favorite Web language:</p>

        <form action="">
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label> <br />
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label> <br />
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
        </form>
      </div>

      {/* Checkboxes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Checkboxes</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="checkbox"> `}</Code>defines a
          checkbox. Checkboxes let a user select ZERO or MORE options of a
          limited number of choices.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">`}</p>
          <p className="pl-3">{`<label for="vehicle1"> I have a bike</label><br>`}</p>
          <p className="pl-3">{`<input type="checkbox" id="vehicle2" name="vehicle2" value="Car">`}</p>
          <p className="pl-3">{`<label for="vehicle2"> I have a car</label><br>`}</p>
          <p className="pl-3">{`<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">`}</p>
          <p className="pl-3">{`<label for="vehicle3"> I have a boat</label>`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] my-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1"> I have a bike</label>
          <br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label htmlFor="vehicle2"> I have a car</label>
          <br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label htmlFor="vehicle3"> I have a boat</label>
        </form>
      </div>

      {/* The Submit Button */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Submit Button{" "}
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="submit">`}</Code> defines a
          button for submitting the form data to a form-handler. The
          form-handler is typically a file on the server with a script for
          processing input data. The form-handler is specified in the form's{" "}
          <Code color="success">{"action"}</Code> attribute.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {` <form action="/action_page.php">`}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] my-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value="John"
            className="border"
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value="Doe"
            className="border"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      {/* The Name Attribute for <input> */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Name Attribute for {"<input>"}
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          Notice that each input field must have a name attribute to be
          submitted. If the name attribute is omitted, the value of the input
          field will not be sent at all.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" value="John"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          {"</form>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/html-vs-xhtml"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> HTML vs XHTML
          </Button>
        </Link>
        <Link href={"/doc/html/form-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            Form Attributes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
