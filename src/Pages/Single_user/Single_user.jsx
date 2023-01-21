import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import Typography from '@mui/material/Typography';
import '../Single_user/single_user.scss'
import Order_table from '../../Components/Order_table';
const drawerWidth = 250;
export default function Single_user() {
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


        }, {
            Order_id: 5,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
        {
            Order_id: 6,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
        {
            Order_id: 7,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
        {
            Order_id: 8,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
        {
            Order_id: 9,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
        {
            Order_id: 10,
            Status: 'proceeding',
            Amount: 500,

            User_name: 'harsh kumar',
            Product: '4',

            Transction_Id: 'dfg542314tfd',
            Date: '02/01/2002',


        },
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


                    <div className='Single_user_container'>

                        <div className='row m-0 p-0 my-4'>
                            <div className='col-sm-12 col-md-4 col-lg-3 border d-flex flex-column justify-content-between my-2'>
                                <div>
                                    <div>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                                    </div>
                                    <div>
                                        <ul className='m-0 p-0 list-group list-group-flush' style={{ listStyle: "none" }}>
                                            <li>
                                                <p className='m-0 p-0' style={{ color: '#919191', fontWeight: 'bold' }}>Name:</p>
                                                <p style={{ wordWrap: 'break-word' }}>Amit kumar yadav</p>
                                            </li>

                                            <li>
                                                <p className='m-0 p-0' style={{ color: '#919191', fontWeight: 'bold' }}>Email:</p>
                                                <p style={{ wordWrap: 'break-word' }}>yaduvanshiamit545@gmail.com</p>
                                            </li>

                                            <li>
                                                <p className='m-0 p-0' style={{ color: '#919191', fontWeight: 'bold' }}>Mobile:</p>
                                                <p style={{ wordWrap: 'break-word' }}>6388131984</p>
                                            </li>

                                            <li>
                                                <p className='m-0 p-0' style={{ color: '#919191', fontWeight: 'bold' }}>Gender:</p>
                                                <p style={{ wordWrap: 'break-word' }}>Male</p>
                                            </li>

                                            <li>
                                                <p className='m-0 p-0' style={{ color: '#919191', fontWeight: 'bold' }}>Location:</p>
                                                <p style={{ wordWrap: 'break-word' }}>122/7 atrauli lucknow uttar pradesh</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', margin: '10px 0px' }}>
                                    <button type="button" className="btn btn-danger w-100 mx-1 ">Delete</button>
                                    <button type="button" className="btn btn-primary w-100 mx-1 ">Edit</button>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-8 col-lg-9 border my-2'>
                                <h3>Total_order</h3>
                                <Order_table Thead={order} Tbody={second} />
                            </div>
                        </div>
                    </div>



                </Box>


            </Box>
        </>
    )
}
