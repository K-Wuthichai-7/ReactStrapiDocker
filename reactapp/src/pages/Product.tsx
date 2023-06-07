import { useState, useEffect } from "react";
import { PRODUCT_TITLE, SYSTEM_NAME } from "../config/constants"
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"


const Product = () => {

    const [productsd, setProductsd] = useState([]);


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:1337/api/products?populate=*")
            .then(res => res.json())
            .then(
                (result) => {

                    setProductsd(result.data);
                },
            )
    }, [])

    // console.log(productsd);


    // Set title
    document.title = PRODUCT_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Products</h1>
            <Box sx={styles.columnsContainer}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Create</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                productsd.map((product: any, index: any) => (
                                    <TableRow key={index}>
                                        <TableCell>{product.id}</TableCell>
                                        <TableCell>{product.attributes.title}</TableCell>
                                        <TableCell>{product.attributes.price}</TableCell>
                                        <TableCell>
                                            <img src={"http://localhost:1337" + product.attributes.image.data[0].attributes.url} alt="" width={50} />
                                        </TableCell>
                                        <TableCell>{product.attributes.qty}</TableCell>
                                        <TableCell>{product.attributes.publishedAt}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="warning">Edit</Button>&nbsp;&nbsp;
                                            <Button variant="contained" color="error">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Product

const styles = {
    columnsContainer: {
        columns: '280px 1',
        maxWidth: 1400
    },
}
