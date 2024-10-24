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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const inputTypes = [
  {
    val: `<input type="button">`,
    id: "#button",
  },
  {
    val: `<input type="checkbox">`,
    id: "#checkbox",
  },
  {
    val: `<input type="color">`,
    id: "#color",
  },
  {
    val: `<input type="date">`,
    id: "#date",
  },
  {
    val: `<input type="datetime-local">`,
    id: "#date-time",
  },
  {
    val: `<input type="email">`,
    id: "#email",
  },
  {
    val: `<input type="file">`,
    id: "#file",
  },
  {
    val: `<input type="hidden">`,
    id: "#hidden",
  },
  {
    val: `<input type="image">`,
    id: "#image",
  },
  {
    val: `<input type="month">`,
    id: "#month",
  },
  {
    val: `<input type="number">`,
    id: "#number",
  },
  {
    val: `<input type="password">`,
    id: "#password",
  },
  {
    val: `<input type="radio">`,
    id: "#radio",
  },
  {
    val: `<input type="range">`,
    id: "#range",
  },
  {
    val: `<input type="reset">`,
    id: "#reset",
  },
  {
    val: `<input type="search">`,
    id: "#search",
  },
  {
    val: `<input type="submit">`,
    id: "#submit",
  },
  {
    val: `<input type="tel">`,
    id: "#tel",
  },
  {
    val: `<input type="text">`,
    id: "#text",
  },
  {
    val: `<input type="time">`,
    id: "#time",
  },
  {
    val: `<input type="url">`,
    id: "#url",
  },
  {
    val: `<input type="week">`,
    id: "#week",
  },
];

const inputRestrictions = [
  {
    attr: "checked",
    desc: `	Specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio")`,
  },
  {
    attr: "disabled",
    desc: `Specifies that an input field should be disabled`,
  },
  {
    attr: "max",
    desc: `Specifies the maximum value for an input field`,
  },
  {
    attr: "maxlength",
    desc: `Specifies the maximum number of character for an input field`,
  },
  {
    attr: "min",
    desc: `	Specifies the minimum value for an input field`,
  },
  {
    attr: "pattern",
    desc: `Specifies a regular expression to check the input value against`,
  },
  {
    attr: "readonly",
    desc: `	Specifies that an input field is read only (cannot be changed)`,
  },
  {
    attr: "required",
    desc: `	Specifies that an input field is required (must be filled out)`,
  },
  {
    attr: "size",
    desc: `	Specifies the width (in characters) of an input field`,
  },
  {
    attr: "step",
    desc: `Specifies the legal number intervals for an input field`,
  },
  {
    attr: "value",
    desc: `Specifies the default value for an input field`,
  },
];

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
                Input Types
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Input Types */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Input Types</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter describes the different types for the HTML{" "}
          <Code color="success">{"<input>"}</Code> element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* HTML Input Types */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Input Types{" "}
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Here are the different input types you can use in HTML:
        </p>

        <ul className="flex flex-wrap justify-center gap-3 mt-3">
          {inputTypes.map((key, index) => (
            <li key={index} className="flex gap-2 items-center">
              <a href={key.id}>
                <Code color="success">
                  <h1>{key.val}</h1>
                </Code>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Input Type Text */}

      <div className="mt-7" id="text">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Text
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success"> {`<input type="text">`}</Code> defines a
          single-line text input field:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{` <label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{` <input type="text" id="fname" name="fname"><br>`}</p>
          <p className="pl-3">{` <label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{` <input type="text" id="lname" name="lname">`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form className="border p-2 max-w-sm">
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" className="border" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" className="border" />
        </form>
      </div>

      {/* Input Type Password */}

      <div className="mt-7" id="password">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Password
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          <Code color="success">{`<input type="password">`}</Code> defines a
          password field:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="username">Username:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="username" name="username"><br>`}</p>
          <p className="pl-3">{`<label for="pwd">Password:</label><br>`}</p>
          <p className="pl-3">{`<input type="password" id="pwd" name="pwd">`}</p>
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form className="border max-w-sm p-2">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" className="border" />
          <br />
          <label htmlFor="pwd">Password:</label>
          <br />
          <input type="password" id="pwd" name="pwd" className="border" />
        </form>
      </div>

      {/* Input Type Submit */}

      <div className="mt-7" id="submit">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Submit
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">{`<input type="submit">`}</Code> defines a
          button for submitting form data to a form-handler. The form-handler is
          typically a server page with a script for processing input data. The
          form-handler is specified in the form's action attribute:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="">`}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          {`</form> `}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This is how the HTML code above will be displayed in a browser:
        </p>
        <form action="" className="border p-2 mt-3 max-w-sm">
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
        <p className="text-[16px] text-[#71717a] mt-3">
          If you omit the submit button's value attribute, the button will get a
          default text:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Reset */}

      <div className="mt-7" id="reset">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Reset
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">{`<input type="reset">`}</Code> defines a reset
          button that will reset all form values to their default values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="">`}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          <p className="pl-3">{`<input type="reset" value="Reset">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Radio */}

      <div className="mt-7" id="radio">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Radio
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          <Code color="success">{`<input type="radio">`}</Code> defines a radio
          button. Radio buttons let a user select ONLY ONE of a limited number
          of choices:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          <p>Choose your favorite Web language:</p> <br />
          {"<form>"}
          <p className="pl-3">{`<input type="radio" id="html" name="fav_language" value="HTML">`}</p>
          <p className="pl-3">{`<label for="html">HTML</label><br>`}</p>
          <p className="pl-3">{`<input type="radio" id="css" name="fav_language" value="CSS">`}</p>
          <p className="pl-3">{`<label for="css">CSS</label><br>`}</p>
          <p className="pl-3">{`<input type="radio" id="javascript" name="fav_language" value="JavaScript">`}</p>
          <p className="pl-3">{`<label for="javascript">JavaScript</label>`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* Input Type Checkbox */}

      <div className="mt-7" id="checkbox">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Checkbox
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          <Code color="success">{`<input type="checkbox">`}</Code> defines a
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
          <p className="pl-3">{` <label for="vehicle3"> I have a boat</label>`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Button */}

      <div className="mt-7" id="button">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Button
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          {" "}
          <Code color="success">{`<input type="button">`}</Code>
          defines a button:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<input type="button" onclick="alert('Hello World!')" value="Click Me!">`}
        </Code>
      </div>

      {/* Input Type Color */}

      <div className="mt-7" id="color">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          {" "}
          Input Type Color
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="color">`}</Code>
          is used for input fields that should contain a color. Depending on
          browser support, a color picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`     <form>`}
          <p className="pl-3">{`<label for="favcolor">Select your favorite color:</label>`}</p>
          <p className="pl-3">{`<input type="color" id="favcolor" name="favcolor">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* Input Type Date */}

      <div className="mt-7" id="date">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Date
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="date">`}</Code>
          is used for input fields that should contain a date. Depending on
          browser support, a date picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form>`}
          <p className="pl-3">{`<label for="birthday">Birthday:</label>`}</p>
          <p className="pl-3">{` <input type="date" id="birthday" name="birthday">`}</p>
          {`</form>`}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can also use the <Code color="success">min</Code> and{" "}
          <Code color="success">max</Code> attributes to add restrictions to
          dates:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="datemax">Enter a date before 1980-01-01:</label>`}</p>
          <p className="pl-3">{`<input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>`}</p>
          <p className="pl-3">{`<label for="datemin">Enter a date after 2000-01-01:</label>`}</p>
          <p className="pl-3">{`<input type="date" id="datemin" name="datemin" min="2000-01-02">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Datetime-local */}

      <div className="mt-7" id="date-time">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Datetime-local
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="datetime-local">`}</Code>{" "}
          specifies a date and time input field, with no time zone. Depending on
          browser support, a date picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="birthdaytime">Birthday (date and time):</label>`}</p>
          <p className="pl-3">{`<input type="datetime-local" id="birthdaytime" name="birthdaytime">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Email */}

      <div className="mt-7" id="email">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Email
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="email">`}</Code>
          is used for input fields that should contain an e-mail address.
          Depending on browser support, the e-mail address can be automatically
          validated when submitted. Some smartphones recognize the email type,
          and add ".com" to the keyboard to match email input.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"  <form>"}
          <p className="pl-3">{`<label for="email">Enter your email:</label>`}</p>
          <p className="pl-3">{`<input type="email" id="email" name="email">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Image */}

      <div className="mt-7" id="image">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Image
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="image">`}</Code> defines an
          image as a submit button. The path to the image is specified in the
          src attribute.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type File */}

      <div className="mt-7" id="file">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type File
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="file">`}</Code> defines a
          file-select field and a "Browse" button for file uploads.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="myfile">Select a file:</label>`}</p>
          <p className="pl-3">{`<input type="file" id="myfile" name="myfile">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Hidden */}

      <div className="mt-7" id="file">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Hidden
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="hidden">`}</Code> defines a
          hidden input field (not visible to a user). A hidden field lets web
          developers include data that cannot be seen or modified by users when
          a form is submitted. A hidden field often stores what database record
          that needs to be updated when the form is submitted. Note: While the
          value is not displayed to the user in the page's content, it is
          visible (and can be edited) using any browser's developer tools or
          "View Source" functionality. Do not use hidden inputs as a form of
          security!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<input type="hidden" id="custId" name="custId" value="3487">`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          {"</form>"}
        </Code>
      </div>
      {/* Input Type Month */}

      <div className="mt-7" id="file">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Month
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="month">`}</Code> allows the
          user to select a month and year. Depending on browser support, a date
          picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="bdaymonth">Birthday (month and year):</label>`}</p>
          <p className="pl-3">{`<input type="month" id="bdaymonth" name="bdaymonth">`}</p>
          {"</form>"}
        </Code>
      </div>
      {/* Input Type Number */}

      <div className="mt-7" id="file">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Number
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="number">`}</Code> defines a
          numeric input field. You can also set restrictions on what numbers are
          accepted. The following example displays a numeric input field, where
          you can enter a value from 1 to 5:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="quantity">Quantity (between 1 and 5):</label>`}</p>
          <p className="pl-3">{`<input type="number" id="quantity" name="quantity" min="1" max="5">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Restrictions */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Restrictions
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Here is a list of some common input restrictions:
        </p>
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Attribute</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inputRestrictions.map((key, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{key.attr}</TableCell>
                <TableCell>{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          You will learn more about input restrictions in the next chapter. The
          following example displays a numeric input field, where you can enter
          a value from 0 to 100, in steps of 10. The default value is 30:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="quantity">Quantity:</label>`}</p>
          <p className="pl-3">{` <input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Range */}

      <div className="mt-7" id="range">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Range
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="range">`} </Code>defines a
          control for entering a number whose exact value is not important (like
          a slider control). Default range is 0 to 100. However, you can set
          restrictions on what numbers are accepted with the min, max, and step
          attributes:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{` <label for="vol">Volume (between 0 and 50):</label>`}</p>
          <p className="pl-3">{` <input type="range" id="vol" name="vol" min="0" max="50">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Search */}

      <div className="mt-7" id="search">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Search
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="search">`} </Code>is used for
          search fields (a search field behaves like a regular text field).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{` <label for="gsearch">Search Google:</label>`}</p>
          <p className="pl-3">{` <input type="search" id="gsearch" name="gsearch">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Tel */}

      <div className="mt-7" id="tel">
        <h1 className="text-[30px] text-[#09090b] font-bold">Input Type Tel</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="tel">`} </Code> is used for
          input fields that should contain a telephone number.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{` <label for="phone">Enter your phone number:</label>`}</p>
          <p className="pl-3">{` <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Time */}

      <div className="mt-7" id="time">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Time
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="time">`} </Code> allows the
          user to select a time (no time zone). Depending on browser support, a
          time picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`  <label for="appt">Select a time:</label>`}</p>
          <p className="pl-3">{` <input type="time" id="appt" name="appt">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Url */}

      <div className="mt-7" id="url">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Time
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="url">`} </Code> is used for
          input fields that should contain a URL address. Depending on browser
          support, the url field can be automatically validated when submitted.
          Some smartphones recognize the url type, and adds ".com" to the
          keyboard to match url input.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="homepage">Add your homepage:</label>`}</p>
          <p className="pl-3">{`<input type="url" id="homepage" name="homepage">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* Input Type Url */}

      <div className="mt-7" id="week">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Type Week
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{`<input type="week">`} </Code> allows the
          user to select a week and year. Depending on browser support, a date
          picker can show up in the input field.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="week">Select a week:</label>`}</p>
          <p className="pl-3">{`<input type="week" id="week" name="week">`}</p>
          {"</form>"}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/form-elements"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Form Elements
          </Button>
        </Link>
        <Link href={"/doc/html/input-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            Input Attributes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
