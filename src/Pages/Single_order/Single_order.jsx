import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import ModalImage from "react-modal-image";
import ReadMoreReact from 'read-more-react';
import Typography from '@mui/material/Typography';
import '../Single_order/single_order.scss'
const drawerWidth = 250;
export default function Single_order() {
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


                    <div className='Single_order_container'>

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
                                    <button type="button" className="btn btn-success w-100 mx-1 ">Accept</button>
                                    <button type="button" className="btn btn-danger w-100 mx-1 ">Reject</button>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-8 col-lg-9 border my-2'>
                                <h3 className='my-2'>Order_Number-#362145</h3>
                                <div className='row m-0 p-0'>
                                    <div className='col-lg-6  p-2'>
                                        <div className='border border-secondary'>
                                            <div className='row m-0 p-0 '>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>


                                            </div>
                                            <div className='mx-2'>
                                                <ul style={{ margin: '0px', padding: '0px', listStyle: 'none' }}>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Product Name</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Category</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Description</p>
                                                        <p><ReadMoreReact text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                                                            min={50}
                                                            ideal={80}
                                                            max={200}
                                                            readMoreText=" read more" /></p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Amount</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6  p-2'>
                                        <div className='border border-secondary'>
                                            <div className='row m-0 p-0'>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>
                                                <div className=' col-4  p-2'>
                                                    <ModalImage
                                                        small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                        className={"product_images"}
                                                    />
                                                </div>


                                            </div>
                                            <div className='mx-2'>
                                                <ul style={{ margin: '0px', padding: '0px', listStyle: 'none' }}>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Product Name</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Category</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Description</p>
                                                        <p><ReadMoreReact text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                                                            min={50}
                                                            ideal={80}
                                                            max={200}
                                                            readMoreText=" read more" /></p>
                                                    </li>
                                                    <li>
                                                        <p style={{ margin: '0px', padding: '0px' }}>Amount</p>
                                                        <p>Luminaire Giotto Headphones</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row m-0 p-0 border my-2'>
                                    <div className='col-sm-12'>
                                        <div className='d-flex justify-content-between my-2'>
                                            <h4>Payment Summary</h4>
                                            <h6>Success</h6>
                                        </div>
                                        <p className='d-flex justify-content-between m-0 p-0'><span>Subtotal</span><span>1,762.00</span></p>
                                        <p className='d-flex justify-content-between m-0 p-0'><span>Delivery fee</span><span>15.00</span></p>
                                        <hr></hr>
                                        <p className='d-flex justify-content-between '><span>Total</span><span>2000.00</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </Box>


            </Box>
        </>
    )
}
