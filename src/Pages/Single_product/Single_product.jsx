import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../Single_product/single_product.scss'
const drawerWidth = 250;
export default function Single_product() {
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


                    <div className='Single_product_container'>
                        <h1>Single_product</h1>
                    </div>



                </Box>


            </Box>
        </>
    )
}
