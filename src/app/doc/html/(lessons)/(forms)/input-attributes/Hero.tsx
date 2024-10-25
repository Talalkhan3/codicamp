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
                Input Attributes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/*Input Attributes */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Input Attributes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter describes the different attributes for the HTML{" "}
          <Code color="success">{"<input>"}</Code> element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The value Attribute */}
      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The value Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">value</Code> attribute specifies an
          initial value for an input field:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John"><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* The readonly Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The readonly Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">readonly</Code> attribute specifies
          that an input field is read-only. A read-only input field cannot be
          modified (however, a user can tab to it, highlight it, and copy the
          text from it). The value of a read-only input field will be sent when
          submitting the form!
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John" readonly><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname" value="Doe">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* The size Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The size Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">size</Code> attribute specifies the
          visible width, in characters, of an input field. The default value for
          <Code color="success">size</Code> is 20. Note: The{" "}
          <Code color="success">size</Code> attribute works with the following
          input types: text, search, tel, url, email, and password.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John" size="50" ><br>`}</p>
          <p className="pl-3">{`<label for="pin">PIN:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="pin" name="pin" size="4">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* The maxlength Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The maxlength Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">maxlength</Code> attribute specifies
          the maximum number of characters allowed in an input field. When a{" "}
          <Code color="success">maxlength</Code> is set, the input field will
          not accept more than the specified number of characters. However, this
          attribute does not provide any feedback. So, if you want to alert the
          user, you must write JavaScript code.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" value="John" size="50" ><br>`}</p>
          <p className="pl-3">{`<label for="pin">PIN:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="pin" name="pin" maxlength="4" size="4">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* The min and max Attributes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The min and max Attributes
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">min </Code> and{" "}
          <Code color="success">max </Code> attributes specify the minimum and
          maximum values for an input field. The{" "}
          <Code color="success">min </Code> and{" "}
          <Code color="success">max </Code> tattributes work with the following
          input types: number, range, date, datetime-local, month, time and
          week.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="datemax">Enter a date before 1980-01-01:</label>`}</p>
          <p className="pl-3">{`<input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br></br>`}</p>
          <br />
          <p className="pl-3">{`<label for="datemin">Enter a date after 2000-01-01:</label>`}</p>
          <p className="pl-3">{`<input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br></br>`}</p>
          <br />
          <p className="pl-3">{`<label for="quantity">Quantity (between 1 and 5):</label>`}</p>
          <p className="pl-3">{`<input type="number" id="quantity" name="quantity" min="1" max="5">`}</p>
          {"</form>"}
        </Code>
      </div>

      {/* The multiple Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The multiple Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">multiple</Code> attribute specifies
          that the user is allowed to enter more than one value in an input
          field. The <Code color="success">multiple</Code> attribute works with
          the following input types: email, and file.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="files">Select files:</label>`}</p>
          <p className="pl-3">{` <input type="file" id="files" name="files" multiple>`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The pattern Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The pattern Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">pattern</Code> attribute specifies a
          regular expression that the input field's value is checked against,
          when the form is submitted. The <Code color="success">pattern</Code>{" "}
          attribute works with the following input types: text, date, search,
          url, tel, email, and password.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="country_code">Country code:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="country_code" name="country_code"`}</p>
          <p className="pl-3">{`pattern="[A-Za-z]{3}" title="Three letter country code">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The placeholder Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The placeholder Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">placeholder</Code> attribute specifies
          a short hint that describes the expected value of an input field (a
          sample value or a short description of the expected format). The short
          hint is displayed in the input field before the user enters a value.
          The <Code color="success">placeholder</Code> attribute works with the
          following input types: text, search, url, number, tel, email, and
          password. password.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="phone">Enter a phone number:</label>`}</p>
          <p className="pl-3">{`<input type="tel" id="phone" name="phone"`}</p>
          <p className="pl-3">{`placeholder="123-45-678"`}</p>
          <p className="pl-3">{`pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The required Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The required Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">required</Code> aattribute specifies
          that an input field must be filled out before submitting the form. The{" "}
          <Code color="success">required</Code> attribute works with the
          following input types: text, search, url, tel, email, password, date
          pickers, number, checkbox, radio, and file.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="username">Username:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="username" name="username" required>`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The step Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The step Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">step</Code> attribute specifies the
          legal number intervals for an input field. Example: if step="3", legal
          numbers could be -3, 0, 3, 6, etc. Tip: This attribute can be used
          together with the max and min attributes to create a range of legal
          values. The <Code color="success">step</Code> attribute works with the
          following input types: number, range, date, datetime-local, month,
          time and week.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="points">Points:</label>`}</p>
          <p className="pl-3">{`<input type="number" id="points" name="points" step="3">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The autofocus Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The autofocus Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">autofocus </Code> attribute specifies
          that an input field should automatically get focus when the page
          loads.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<label for="fname">First name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname" autofocus><br>`}</p>
          <p className="pl-3">{` <label for="lname">Last name:</label><br>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The height and width Attributes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The autofocus Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">height</Code> and{" "}
          <Code color="success">width</Code> aattributes specify the height and
          width of an <Code color="success">{`<input type="image">`}</Code>{" "}
          element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{` <label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br>`}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname"><br><br>`}</p>
          <p className="pl-3">{`<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The list Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The autofocus Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">list </Code> attribute refers to a{" "}
          <Code color="success">{`<datalist>`}</Code> element that contains
          pre-defined options for an {"<input>"} element.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {"<form>"}
          <p className="pl-3">{`<input list="browsers">`}</p>
          <p className="pl-3">{`<datalist id="browsers">`}</p>
          <p className="pl-5">{`<option value="Edge">`}</p>
          <p className="pl-5">{`<option value="Firefox">`}</p>
          <p className="pl-5">{`<option value="Chrome">`}</p>
          <p className="pl-5">{`<option value="Opera">`}</p>
          <p className="pl-5">{`<option value="Safari">`}</p>
          <p className="pl-3">{`</datalist>`}</p>
          {`</form>`}
        </Code>
      </div>

      {/* The autocomplete Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The autocomplete Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The input <Code color="success">autocomplete </Code> attribute
          specifies whether a form or an input field should have autocomplete on
          or off. Autocomplete allows the browser to predict the value. When a
          user starts to type in a field, the browser should display options to
          fill in the field, based on earlier typed values. <br /> The{" "}
          <Code color="success">autocomplete </Code> attribute works with{" "}
          <Code color="success">{"<form>"}</Code> and the following{" "}
          <Code color="success">{"<input>"}</Code> types: text, search, url,
          tel, email, password, datepickers, range, and color.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" autocomplete="on">`}
          <p className="pl-3">{`<label for="fname">First name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="fname" name="fname"><br><br> `}</p>
          <p className="pl-3">{`<label for="lname">Last name:</label>`}</p>
          <p className="pl-3">{`<input type="text" id="lname" name="lname"><br><br>`}</p>
          <p className="pl-3">{`<label for="email">Email:</label>`}</p>
          <p className="pl-3">{`<input type="email" id="email" name="email" autocomplete="off"><br><br>`}</p>
          <p className="pl-3">{`<input type="submit" value="Submit">`}</p>

          {`</form>`}
        </Code>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/input-types"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Input Types
          </Button>
        </Link>
        <Link href={"/doc/html/input-form-attributes"}>
          <Button variant={"outline"} className="flex gap-3">
            Input Form Attributes <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
