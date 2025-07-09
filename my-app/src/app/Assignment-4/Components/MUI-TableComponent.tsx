"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export const rows = [
  { id: 1, name: "A", age: 25, city: "Delhi" },
  { id: 2, name: "B", age: 30, city: "Mumbai" },
  { id: 3, name: "C", age: 28, city: "Kolkata" },
  { id: 4, name: "D", age: 35, city: "Chennai" },
  { id: 5, name: "E", age: 22, city: "Pune" },
  { id: 6, name: "F", age: 27, city: "Bangalore" },
];

export default function TableComponent() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);

  const handleChangePage = (_:unknown, newPage:number):void => setPage(newPage);
  const handleChangeRowsPerPage = (e:ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: "80%", margin: "20px auto" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}><b>Name</b></TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}><b>Age</b></TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}><b>City</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[3, 5, 10]}
      />
    </Paper>
  );
}
