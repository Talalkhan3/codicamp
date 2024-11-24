import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    year: "1989",
    version: "Tim Berners-Lee invented www",
  },
  {
    year: "1991",
    version: "Tim Berners-Lee invented HTML",
  },
  {
    year: "1993",
    version: "Dave Raggett drafted HTML+",
  },
  {
    year: "1995",
    version: "HTML Working Group defined HTML 2.0",
  },
  {
    year: "1997	",
    version: "HTML 3.2",
  },
  {
    year: "1999",
    version: "HTML 4.01",
  },
  {
    year: "2000",
    version: "XHTML 1.0",
  },
  {
    year: "2008",
    version: "WHATWG HTML5 First Public Draft",
  },
  {
    year: "2012",
    version: "WHATWG HTML5 Living Standard",
  },
  {
    year: "2014	",
    version: "HTML 5",
  },
  {
    year: "2016",
    version: "HTML 5.1",
  },
  {
    year: "2017",
    version: "HTML5.1 2nd Edition",
  },
  {
    year: "2017",
    version: "HTML5.2",
  },
];

export function TableDemo() {
  return (
    <Table className="border">
      <TableCaption>list of all HTML versions</TableCaption>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px]">Year</TableHead>
          <TableHead>Version</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.year}>
            <TableCell className="font-medium">{invoice.year}</TableCell>
            <TableCell>{invoice.version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
