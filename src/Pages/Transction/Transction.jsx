import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../Transction/transction.scss'
import Data_table from '../../Components/Data_table';
const drawerWidth = 250;
export default function Transction() {
    const [first, setfirst] = useState([])
    const [second, setSecond] = useState([])


    useEffect(() => {
        setfirst(["#", "User_name", "Transction_Id", "Date", "Product_name", "Amount", "Status"])

        setSecond([{
            id: 1,
            User_name: 'Amit kumar yadav',
            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',
            Product_name: 'shirt',
            Amount: 500,
            Status: 'Success'

        }, {
            id: 2,
            User_name: 'Atul yadav',
            Transction_Id: 'dfg542314tfdgf',
            Date: '02/01/2021',
            Product_name: 't-shirt',
            Amount: 1000,
            Status: 'Pending'

        }, {
            id: 3,
            User_name: 'Harsh kumar',
            Transction_Id: 'dfg5423',
            Date: '02/01/2003',
            Product_name: 'jeans',
            Amount: 500,
            Status: 'Cancle'

        }, {
            id: 4,
            User_name: 'Amit kumar yadav',
            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',
            Product_name: 'shirt',
            Amount: 200,
            Status: 'Success'

        }, {
            id: 5,
            User_name: 'Nafisul Hasan',
            Transction_Id: 'dfg5423145tfd',
            Date: '02/01/2004',
            Product_name: 'shirt',
            Amount: 500,
            Status: 'Success'

        }])
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


                    <div className='Transction_container'>
                        <div className='my-3'>
                            <h3>Transctions Table</h3>
                        </div>
                        <Data_table Thead={first} Tbody={second} />
                    </div>



                </Box>


            </Box>
        </>
    )
}
