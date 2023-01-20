import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../Products/products.scss'
import Product_table from '../../Components/Product_table';
const drawerWidth = 250;
export default function Products() {
    const [product, setProduct] = useState([])
    const [product_details, setProduct_details] = useState([])


    useEffect(() => {
        setProduct(["#", "Product", "Rating", "Amount", "Sell", "Stock", "Category", "Action"])

        setProduct_details([{
            id: 1,
            Product_img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            Product_name: 'oil lavender',
            Product_rating: '1',
            Amount: '2000',
            Auction: '30',
            Stock: 50,
            Category: 'oil'

        }, {
            id: 2,
            Product_img: 'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            Product_name: 'oil lavender',
            Product_rating: '2',
            Amount: '2000',
            Auction: '30',
            Stock: 50,
            Category: 'oil'

        }, {
            id: 3,
            Product_img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
            Product_name: 'oil lavender',
            Product_rating: '4',
            Amount: '2000',
            Auction: '30',
            Stock: 50,
            Category: 'oil'

        }, {
            id: 4,
            Product_img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            Product_name: 'oil lavender',
            Product_rating: '5',
            Amount: '2000',
            Auction: '30',
            Stock: 50,
            Category: 'oil'

        }, {
            id: 5,
            Product_img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            Product_name: 'oil lavender',
            Product_rating: '3.5',
            Amount: '2000',
            Auction: '30',
            Stock: 50,
            Category: 'oil'

        },])
    }, [])
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <SideNav />

                <Toolbar sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` }
                }} />
                <Box sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` }
                }} >


                    <div className='Products_container'>
                        <div className='my-3'>
                            <h3>Product_table</h3>
                            <Product_table Thead={product} Tbody={product_details} />
                        </div>
                    </div>



                </Box>


            </Box>
        </>
    )
}
