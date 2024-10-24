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

const formElements = [
  {
    val: "<input>",
  },
  {
    val: "<label>",
  },
  {
    val: "<select>",
  },
  {
    val: "<textarea>",
  },
  {
    val: "<button>",
  },
  {
    val: "<option>",
  },
  {
    val: "<output>",
  },
  {
    val: "<legend>",
  },
  {
    val: "<optgroup>",
  },
  {
    val: "<datalist>",
  },
  {
    val: "<fieldset>",
  },
];

const htmlFormElements = [
  {
    tag: "<form>",
    desc: "Defines an HTML form for user input",
  },
  {
    tag: "<input>",
    desc: "Defines an input control",
  },
  {
    tag: "<textarea>",
    desc: "Defines a multiline input control (text area)",
  },
  {
    tag: "<label>",
    desc: "Defines a label for an <input> element",
  },
  {
    tag: "<fieldset>",
    desc: "Groups related elements in a form",
  },
  {
    tag: "<legend>",
    desc: "Defines a caption for a <fieldset> element",
  },
  {
    tag: "<select>",
    desc: "Defines a drop-down list",
  },
  {
    tag: "<optgroup>",
    desc: "Defines a group of related options in a drop-down list",
  },
  {
    tag: "<option>",
    desc: "Defines an option in a drop-down list",
  },
  {
    tag: "<button>",
    desc: "Defines a clickable button",
  },
  {
    tag: "<datalist>",
    desc: "Specifies a list of pre-defined options for input controls",
  },
  {
    tag: "<output>",
    desc: "Defines the result of a calculation",
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
                Form Elements
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Form Elements */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Form Elements</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter describes all the different HTML form elements.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The HTML <form> Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The HTML {"<form>"} Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The HTML <Code color="success">{"<form>"}</Code> element can contain
          one or more of the following form elements:
        </p>
        <ul className="flex flex-col gap-1 mt-3">
          {formElements.map((key, index) => (
            <li key={index} className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-[#09090b] rounded-xl"></div>
              <Code color="success">
                <h1>{key.val}</h1>
              </Code>
            </li>
          ))}
        </ul>
      </div>

      {/* The <input> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<input>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          One of the most used form elements is the{" "}
          <Code color="success"> {"<input>"} </Code>element. The{" "}
          <Code color="success"> {"<input>"}</Code> element can be displayed in
          several ways, depending on the type attribute.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<label for="fname">First name:</label>`}
          {`<input type="text" id="fname" name="fname">`}
        </Code>
      </div>

      {/* The <label> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<label>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<label>"}</Code> element defines a label
          for several form elements. The{" "}
          <Code color="success">{"<label>"}</Code> element is useful for
          screen-reader users, because the screen-reader will read out loud the
          label when the user focus on the input element. The{" "}
          <Code color="success">{"<label>"}</Code> element also help users who
          have difficulty clicking on very small regions (such as radio buttons
          or checkboxes) - because when the user clicks the text within the{" "}
          <Code color="success">{"<label>"}</Code> element, it toggles the radio
          button/checkbox. The for attribute of the{" "}
          <Code color="success">{"<label>"}</Code> tag should be equal to the id
          attribute of the <Code color="success">{"<input>"}</Code>element to
          bind them together.
        </p>
      </div>

      {/* The <select> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<select>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<select>"}</Code> element defines a
          drop-down list:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<label for="cars">Choose a car:</label>`} <br />
          {`<select id="cars" name="cars">`}
          <p className="pl-3">{`<option value="volvo">Volvo</option>`}</p>
          <p className="pl-3">{`<option value="saab">Saab</option>`}</p>
          <p className="pl-3">{`<option value="fiat">Fiat</option>`}</p>
          <p className="pl-3">{`<option value="audi">Audi</option>`}</p>
          {"</select>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<option>"}</Code> element defines an
          option that can be selected. By default, the first item in the
          drop-down list is selected. To define a pre-selected option, add the
          selected attribute to the option:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<option value="fiat" selected>Fiat</option>`}
        </Code>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">
          Visible Values:{" "}
        </h1>
        <p className="text-[16px] text-[#71717a] mt-2">
          Use the <Code color="success">size</Code> attribute to specify the
          number of visible values:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<label for="cars">Choose a car:</label>`} <br />
          {`<select id="cars" name="cars" size="3">`}
          <p className="pl-3">{`<option value="volvo">Volvo</option>`}</p>
          <p className="pl-3">{`<option value="saab">Saab</option>`}</p>
          <p className="pl-3">{`<option value="fiat">Fiat</option>`}</p>
          <p className="pl-3">{`<option value="audi">Audi</option>`}</p>
          {"</select>"}
        </Code>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">
          Allow Multiple Selections:
        </h1>
        <p>
          Use the <Code color="success">multiple</Code> attribute to allow the
          user to select more than one value:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<label for="cars">Choose a car:</label>`} <br />
          {`<select id="cars" name="cars" size="4" multiple>`}
          <p className="pl-3">{`<option value="volvo">Volvo</option>`}</p>
          <p className="pl-3">{`<option value="saab">Saab</option>`}</p>
          <p className="pl-3">{`<option value="fiat">Fiat</option>`}</p>
          <p className="pl-3">{`<option value="audi">Audi</option>`}</p>
          {"</select>"}
        </Code>
      </div>

      {/* The <textarea> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<textarea>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The {"<textarea>"} element defines a multi-line input field (a text
          area):
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<textarea name="message" rows="10" cols="30">`} <br />
          {"The cat was playing in the garden."} <br />
          {"</textarea>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">rows</Code> attribute specifies the visible
          number of lines in a text area. The <Code color="success">cols</Code>{" "}
          attribute specifies the visible width of a text area. This is how the
          HTML code above will be displayed in a browser:
        </p>
        <textarea

          rows={10}
          cols={30}
          className="border p-2 mt-3"
        >
          The cat was playing in the garden.
        </textarea>
      </div>

      {/* The <button> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<button>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<button>"}</Code>
          element defines a clickable button:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<button type="button">Click Me!</button>`}
        </Code>
        <button type="button" className="bg-gray-200 p-2 mt-2">
          Click Me!
        </button>
      </div>

      {/* The <fieldset> and <legend> Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<fieldset>"} and {"<legend>"} Elements
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<fieldset>"}</Code>
          element is used to group related data in a form. The{" "}
          <Code color="success">{"<legend>"}</Code>
          element defines a caption for the{" "}
          <Code color="success">{"<fieldset>"}</Code>
          element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="">`}
          {"<fieldset>"}
          <p className="pl-3">{"<legend>Personalia:</legend>"}</p>
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>
          {"</fieldset>"}
          {"</form>"}
        </Code>
      </div>

      {/* The <datalist> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<datalist>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">{"<datalist>"}</Code> element specifies a
          list of pre-defined options for an{" "}
          <Code color="success">{"<input> "}</Code>element. Users will see a
          drop-down list of the pre-defined options as they input data. The list
          attribute of the <Code color="success">{"<input>"}</Code> element,
          must refer to the id attribute of the{" "}
          <Code color="success">{"<datalist>"}</Code> element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php">`}
          <p className="pl-3">{`<input list="browsers">`}</p>
          <p className="pl-3">{`<datalist id="browsers">`}</p>
          <p className="pl-7">{`<option value="Edge">`}</p>
          <p className="pl-7">{`<option value="Firefox">`}</p>
          <p className="pl-7">{`<option value="Chrome">`}</p>
          <p className="pl-7">{`<option value="Opera">`}</p>
          <p className="pl-7">{`<option value="Safari">`}</p>
          {"</datalist>"}
          {"</form>"}
        </Code>
      </div>

      {/* The <output> Element */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The {"<output>"} Element
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The {"<output>"} element represents the result of a calculation (like
          one performed by a script).
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php"`}
          <p className="pl-3">{`oninput="x.value=parseInt(a.value)+parseInt(b.value)">`}</p>
          <p className="pl-3">{"0"}</p>
          <p className="pl-3">{`<input type="range"  id="a" name="a" value="50">`}</p>
          <p className="pl-3">{`100 +`}</p>
          <p className="pl-3">{`<input type="number" id="b" name="b" value="50">`}</p>
          <p className="pl-3">{"="}</p>
          <p className="pl-3">{`<output name="x" for="a b"></output>`}</p>
          <p className="pl-3">{"<br><br>"}</p>
          <p className="pl-3">{`<input type="submit">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* HTML Form Elements */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          HTML Form Elements
        </h1>
        <Separator />
        <Table className="border mt-5">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Tag</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {htmlFormElements.map((key, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Code color="success">{key.tag}</Code>
                </TableCell>
                <TableCell>{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/form-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Form Attributes
          </Button>
        </Link>
        <Link href={"/doc/html/input-types"}>
          <Button variant={"outline"} className="flex gap-3">
            Input Types <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
