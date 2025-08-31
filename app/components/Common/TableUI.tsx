import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface TableProps<T> {
  items: T[];
  tableHeads: string[];
  tableRow: (item: T, index: number) => React.ReactNode;
}

function TableList<T>({ tableHeads, tableRow, items }: TableProps<T>) {
  return (
    /* table */
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeads.map((item, index) => {
            return <TableHead key={index}>{item}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items && items.length > 0 ? (
          items.map((item, index) => tableRow(item, index))
        ) : (
          <TableRow>
            <TableCell colSpan={tableHeads.length}>No products found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default TableList;
