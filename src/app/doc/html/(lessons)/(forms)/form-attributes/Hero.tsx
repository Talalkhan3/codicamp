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


const targetableattr = [
  {
    val: "_blank",
    desc: "The response is displayed in a new window or tab",
  },
  {
    val: "_self",
    desc: "The response is displayed in the current window",
  },
  {
    val: "_parent",
    desc: "The response is displayed in the parent frame",
  },
  {
    val: "_top",
    desc: "The response is displayed in the full body of the window",
  },
  {
    val: "framename",
    desc: "The response is displayed in a named iframe",
  },
];

const AllAttr = [
  {
    value: "accept-charset",
    desc: "Specifies the character encodings used for form submission",
  },
  {
    value: "action",
    desc: "Specifies where to send the form-data when a form is submitted",
  },
  {
    value: "autocomplete",
    desc: "Specifies whether a form should have autocomplete on or off",
  },
  {
    value: "enctype",
    desc: `Specifies how the form-data should be encoded when submitting it to the server (only for method="post")`,
  },
  {
    value: "method",
    desc: "Specifies the HTTP method to use when sending form-data",
  },
  {
    value: "name",
    desc: "Specifies the name of the form",
  },
  {
    value: "novalidate",
    desc: "Specifies that the form should not be validated when submitted",
  },
  {
    value: "rel",
    desc: "Specifies the relationship between a linked resource and the current document",
  },
  {
    value: "target",
    desc: "Specifies where to display the response that is received after submitting the form",
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
                Form Attributes
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Form Attributes */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Form Attributess
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          This chapter describes the different attributes for the HTML{" "}
          <Code color="success">{"<form>"}</Code> element.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* The Action Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Action Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">action</Code> attribute defines the action
          to be performed when the form is submitted. Usually, the form data is
          sent to a file on the server when the user clicks on the submit
          button.
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
          {"</form>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          If the <Code color="success">action</Code> attribute is omitted, the
          action is set to the current page.
        </p>
      </div>

      {/* The Target Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Target Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The target attribute specifies where to display the response that is
          received after submitting the form. The target attribute can have one
          of the following values:
        </p>
        <Table className="border mt-3">
          <TableHeader>
            <TableRow>
              <TableHead>Attribute</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {targetableattr.map((key, index) => (
              <TableRow key={index}>
                <TableCell>{key.val}</TableCell>
                <TableCell>{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-[16px] text-[#71717a] mt-3">
          The default value is <Code color="success">_self</Code> which means
          that the response will open in the current window.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<form action="/action_page.php" target="_blank">`}</Code>
      </div>

      {/* The Method Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Method Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The method attribute specifies the HTTP method to be used when
          submitting the form data. The form-data can be sent as URL variables
          (with method="get") or as HTTP post transaction (with method="post").
          The default HTTP method when submitting form data is GET. This example
          uses the GET method when submitting the form data:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<form action="/action_page.php" method="get">`}</Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          This example uses the POST method when submitting the form data:
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >{`<form action="/action_page.php" method="post">`}</Code>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">GET</h1>
        <p className="text-[16px] text-[#71717a] mt-2">
          The GET method appends form data to the URL in name/value pairs, which
          makes it visible in the browser's address bar. This means that GET
          should never be used to send sensitive information, such as passwords
          or personal data, because it can easily be seen and potentially
          exploited. Additionally, the length of a URL is limited to around 2048
          characters, which can restrict the amount of data that can be sent.
          However, GET is useful in situations where the results of a form
          submission need to be bookmarked or shared, as the query data is
          embedded in the URL. It's generally recommended for sending
          non-sensitive data, such as search queries in search engines like
          Google. For any secure or extensive data transmission, POST is a
          better alternative.
        </p>
        <h1 className="text-[20px] text-[#09090b] font-bold mt-3">POST</h1>
        <p className="text-[16px] text-[#71717a] mt-2">
          The POST method sends form data within the body of the HTTP request,
          meaning the data is not visible in the URL, which enhances security
          compared to GET. This method allows for the transmission of large
          amounts of data, as there are no inherent size limitations like with
          URLs. However, because the data is not embedded in the URL, form
          submissions made using POST cannot be bookmarked or shared through the
          address bar. POST is ideal for sending sensitive information or
          handling complex form data where privacy and size are key concerns.
        </p>
      </div>

      {/* The Autocomplete Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Autocomplete Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">autocomplete</Code> attribute specifies
          whether a form should have autocomplete on or off. When autocomplete
          is on, the browser automatically complete values based on values that
          the user has entered before.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" autocomplete="on">`}
        </Code>
      </div>

      {/* The Novalidate Attribute */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          The Novalidate Attribute
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          The <Code color="success">novalidate</Code> attribute is a boolean
          attribute. When present, it specifies that the form-data (input)
          should not be validated when submitted.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="md"
        >
          {`<form action="/action_page.php" novalidate>`}
        </Code>
      </div>

      {/* List of All <form> Attributes */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          List of All {"<form>"} Attributes{" "}
        </h1>
        <Separator />
        <Table className="border mt-3">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Attribute</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {AllAttr.map((key, index) => (
              <TableRow key={index}>
                <TableCell>{key.value}</TableCell>
                <TableCell>{key.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24 ">
        <Link href={"/doc/html/forms"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Forms
          </Button>
        </Link>
        <Link href={"/doc/html/form-elements"}>
          <Button variant={"outline"} className="flex gap-3">
            Form Elements <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
