import React, { useEffect, useState } from "react";

import { getAllProducts } from "../../services/productService";
import { Product } from "../../models/Product";
import { Badge, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import FormDialog from "../FormDialog";


const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    useEffect(() => {
        // ดึงข้อมูลสินค้าจากเซิร์ฟเวอร์โดยใช้ Axios

        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TableContainer component={Paper} style={{ width: '100%', maxWidth: '600px', marginTop: '16px' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        รายการสินค้า
                    </Typography>
                    <Box>
                        {/* <Button variant="contained" color="primary" startIcon={<Add />} size="small">
                            Add
                        </Button> */}
                        <FormDialog />

                    </Box>
                </Toolbar>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Category ID</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>
                                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price} บาท</TableCell>

                                <TableCell>
                                    <Badge badgeContent={product.isActive ? 'Active' : 'Inactive'} color={product.isActive ? 'success' : 'error'} />
                                </TableCell>
                                <TableCell>{product.categoryId}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" color="primary">
                                        <Edit />
                                    </IconButton>
                                    <IconButton aria-label="delete" color="error">
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>


        </div>


    );
};

export default ProductList;