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
    title: "<b>",
    description: "Defines bold text",
  },
  {
    title: "<em>",
    description: "Defines emphasized text ",
  },
  {
    title: "<i>",
    description: "Defines a part of text in an alternate voice or mood",
  },
  {
    title: "<small>",
    description: "Defines smaller text",
  },
  {
    title: "<strong>",
    description: "Defines important text",
  },
  {
    title: "<sub>",
    description: "Defines subscripted text",
  },
  {
    title: "<sup>",
    description: "Defines superscripted text",
  },
  {
    title: "<ins>",
    description: "Defines inserted text",
  },
  {
    title: "<del>",
    description: "Defines deleted text",
  },
  {
    title: "<mark>",
    description: "Defines marked/highlighted text",
  },
  
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>list of all Formatting Elements</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] font-bold">Year</TableHead>
          <TableHead className="font-bold">Version</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.title}>
            <TableCell className="font-medium">{invoice.title}</TableCell>
            <TableCell>{invoice.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
