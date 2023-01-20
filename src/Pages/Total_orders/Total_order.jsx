import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../Total_orders/total_order.scss'
import Order_table from '../../Components/Order_table';
const drawerWidth = 250;
export default function Total_order() {
    const [order, setOrder] = useState([])
    const [second, setSecond] = useState([])


    useEffect(() => {
        setOrder(["Order_Id", "Status", "Amount", "User", "Product", "Transction_id", "Date", "Action"])

        setSecond([{
            Order_id: 1,
            Status: 'Delivered',
            Amount: 500,

            User_name: 'Amit kumar yadav',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        }, {
            Order_id: 2,
            Status: 'Pending',
            Amount: 500,

            User_name: 'Atul yadav',
            Product: '3',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        }, {
            Order_id: 3,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        }, {
            Order_id: 4,
            Status: 'Delivered',
            Amount: 500,

            User_name: 'Nafisul hasan',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        }
        ])
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


                    <div className='Total_order_container'>
                        <div className='my-3'>
                            <h3>Total_orders</h3>
                            <Order_table Thead={order} Tbody={second} />
                        </div>

                    </div>



                </Box>


            </Box>
        </>
    )
}
