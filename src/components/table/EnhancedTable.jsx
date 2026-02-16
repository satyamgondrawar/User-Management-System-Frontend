import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Stack,
} from "@mui/material";

export default function SimpleDynamicTable({
    columns,
    rows,
    onUpdate,
    onDelete,
    showActions = false,   // control via prop
    handleDelete
}) {
    return (
        <TableContainer component={Paper}>
            <Table>

                {/* Table Head */}
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={col.field}>
                                {col.title}
                            </TableCell>
                        ))}

                        {showActions && <TableCell>Actions</TableCell>}
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id || index}>
                            {columns.map((col) => (
                                <TableCell key={col.field}>
                                    {row[col.field]}
                                </TableCell>
                            ))}

                            {showActions && (
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={() => onUpdate(row)}
                                        >
                                            Update
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(row._id)}
                                        >
                                            Delete
                                        </Button>
                                    </Stack>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
}
