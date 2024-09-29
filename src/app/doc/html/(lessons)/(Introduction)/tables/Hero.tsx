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

function Hero() {
  return (
    <ScrollArea className="w-full h-[90vh] pr-10">
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
                Tables
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Tables */}

      <div className="mt-10">
        <h1 className="text-[30px] text-[#09090b] font-bold">Tables</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-5">
          HTML tables allow web developers to arrange data into rows and
          columns.
        </p>
        <Separator className="mt-5" />
      </div>

      {/* Tables */}

      <div className="mt-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Alfreds Futterkiste</TableCell>
              <TableCell>Maria Anders</TableCell>
              <TableCell>Germany</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Centro comercial Moctezuma
              </TableCell>
              <TableCell>Francisco Chang</TableCell>
              <TableCell>Mexico</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ernst Handel</TableCell>
              <TableCell>Roland Mendel</TableCell>
              <TableCell>Austria</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Island Trading</TableCell>
              <TableCell>Helen Bennett </TableCell>
              <TableCell>UK</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Laughing Bacchus Winecellars
              </TableCell>
              <TableCell>Yoshi Tannamuri</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Magazzini Alimentari Riuniti
              </TableCell>
              <TableCell>Giovanni Rovelli </TableCell>
              <TableCell>Italy</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Define an HTML Table */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">
          Define an HTML Table
        </h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          A table in HTML consists of table cells inside rows and columns.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<table>"} <br />
          {"<tr>"} <br />
          {"<th>Company</th>"} <br />
          {"<th>Contact</th>"} <br />
          {"<th>Country</th>"} <br />
          {"</tr>"} <br />
          {"<tr>"} <br />
          {"<td>Alfreds Futterkiste</td>"} <br />
          {"<td>Maria Anders</td>"} <br />
          {"<td>Germany</td>"} <br />
          {"</tr>"} <br />
          {"<tr>"} <br />
          {"<td>Centro comercial Moctezuma</td>"} <br />
          {"<td>Francisco Chang</td>"} <br />
          {"<td>Mexico</td>"} <br />
          {"</tr>"} <br />
          {"</table>"}
        </Code>
      </div>

      {/* Table Cells */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Table Cells</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Each table cell is defined by a <Code color="success">{"<td>"}</Code>{" "}
          and a <Code color="success">{"</td>"}</Code> tag. Everything between{" "}
          <Code color="success">{"<td>"}</Code> and{" "}
          <Code color="success">{"</td>"}</Code> are the content of the table
          cell.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {"<table>"} <br />
          {"<tr>"} <br />
          {"<td>Emil</td>"} <br />
          {"<td>Tobias</td>"} <br />
          {"<td>Linus</td>"} <br />
          {"</tr>"} <br />
          {"</table>"}
        </Code>
      </div>

      {/* Table Rows */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Table Rows</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Each table row starts with a <Code color="success">{"<tr>"}</Code> and
          ends with a <Code color="success">{"</tr>"}</Code> tag.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <table>"} <br />
          {"  <tr>"} <br />
          {"<td>Emil</td>"} <br />
          {"<td>Tobias</td>"} <br />
          {"<td>Linus</td>"} <br />
          {"</tr>"} <br />
          {" <tr>"} <br />
          {"<td>16</td>"} <br />
          {"<td>14</td>"} <br />
          {"   <td>10</td>"} <br />
          {" </tr>"} <br />
          {"</table>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          You can have as many rows as you like in a table; just make sure that
          the number of cells are the same in each row.
        </p>
      </div>

      {/* Table Headers */}

      <div className="mt-7">
        <h1 className="text-[30px] text-[#09090b] font-bold">Table Headers</h1>
        <Separator />
        <p className="text-[16px] text-[#71717a] mt-3">
          Sometimes you want your cells to be table header cells. In those cases
          use the <Code color="success">{"<th>"}</Code> tag instead of the{" "}
          <Code color="success">{"<td>"}</Code> tag.
        </p>
        <Code
          className="border-l-5 border-[#33d45e] mt-3 w-full p-3"
          color="success"
          size="lg"
        >
          {" <table>"} <br />
          {"<tr>"} <br />
          {" <th>Person 1</th>"} <br />
          {"<th>Person 2</th>"} <br />
          {" <th>Person 3</th>"} <br />
          {"</tr>"} <br />
          {" <tr>"} <br />
          {"<td>Emil</td>"} <br />
          {"<td>Tobias</td>"} <br />
          {"<td>Linus</td>"} <br />
          {"</tr>"} <br />
          {" <tr>"} <br />
          {" <td>16</td>"} <br />
          {"<td>14</td>"} <br />
          {" <td>10</td>"} <br />
          {"  </tr>"} <br />
          {"</table>"}
        </Code>
        <p className="text-[16px] text-[#71717a] mt-3">
          By default, the text in <Code color="success">{"<th>"}</Code> elements
          are bold and centered, but you can change that with CSS.
        </p>
      </div>

      <Separator className="my-5" />
      {/* BUTTONS FOR NAVIGATION */}

      <div className="flex justify-between mt-10 mb-24">
        <Link href={"/doc/html/page-titles"}>
          <Button variant={"outline"} className="flex gap-3">
            <ChevronLeftIcon className="h-4 w-4" /> Page Titles
          </Button>
        </Link>
        <Link href={"/doc/html/lists"}>
          <Button variant={"outline"} className="flex gap-3">
            Lists <ChevronRightIcon className="h-4 w-4" />{" "}
          </Button>
        </Link>
      </div>
    </ScrollArea>
  );
}

export default Hero;
