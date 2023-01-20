import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../User/user.scss'

import Usertable from '../../Components/Usertable';
const drawerWidth = 250;
export default function User() {
    const [product, setProduct] = useState([])
    const [product_details, setProduct_details] = useState([])


    useEffect(() => {
        setProduct(["#", "Name", "Gender", "Email", "Mobile", "City", "DOB", "Action"])

        setProduct_details([{
            id: 1,
            User_img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            Status: 'Active',
            Name: 'amit kumar yadav',
            Gender: 'M',
            Email: 'yaduvanshiamit545@gmail.com',
            Address: 'lucknow ',
            Mobile: '6388131984',
            DOB: '01/01/2002',

        }, {
            id: 2,
            User_img: 'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            Status: 'Active',
            Name: 'atul kumar ',
            Gender: 'M',
            Email: 'atul545@gmail.com',
            Address: 'lucknow ',
            Mobile: '6388131984',
            DOB: '01/01/2002',


        }, {
            id: 3,
            User_img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
            Status: 'Active',
            Name: 'harsh kumar',
            Gender: 'M',
            Email: 'harsh545@gmail.com',
            Address: 'lucknow ',
            Mobile: '6388131984',
            DOB: '01/01/2002',


        }, {
            id: 4,
            User_img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            Status: 'Active',
            Name: 'amit kumar yadav',
            Gender: 'M',
            Email: 'yaduvanshiamit545@gmail.com',
            Address: 'lucknow ',
            Mobile: '6388131984',
            DOB: '01/01/2002',


        }, {
            id: 5,
            User_img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            Status: 'Active',
            Name: 'Nafisul hasan',
            Gender: 'M',
            Email: 'nafisul545@gmail.com',
            Address: 'lucknow ',
            Mobile: '6388131984',
            DOB: '01/01/2002',


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


                    <div className='User_container'>
                        <div className='my-3'>
                            <h3>User_table</h3>
                            <Usertable Thead={product} Tbody={product_details} />
                        </div>
                    </div>



                </Box>


            </Box>
        </>
    )
}
