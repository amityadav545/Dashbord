import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from '../../Components/SideNav'
import ModalImage from "react-modal-image";
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
                        <div className='container-fluid my-5'>
                            <div className='row m-0 p-0'>
                                <div className='col-lg-8  border'>
                                    <div className='d-flex justify-content-between my-1'><h3>Product_Details</h3>
                                        <button type="button" className="btn btn-dark"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                    </div>
                                    <div>
                                        <ul className='m-0 p-0' style={{ listStyle: 'none' }}>
                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Product Name</p>
                                                <p>Luminaire Giotto Headphones</p>
                                            </li>
                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Category</p>
                                                <p>Luminaire Giotto Headphones</p>
                                            </li>
                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Price</p>
                                                <p>2000</p>
                                            </li>
                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Discount</p>
                                                <p>5%</p>
                                            </li>
                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Price + Discount</p>
                                                <p>1800</p>
                                            </li>

                                            <li>
                                                <p style={{ margin: '0px', padding: '0px', fontWeight: 'bold', color: '#919191' }}>Description</p>
                                                <p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little.



                                                    Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool
                                                    pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it
                                                    Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel
                                                    whizz air one dirty linen chav not some sort of dosshouse.</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-4  border'>
                                    <h6 className='my-3'>Product_images</h6>
                                    <div className='row m-0 p-0'>
                                        <div className='col-sm-4 col-6  p-2'>
                                            <ModalImage
                                                small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                className={"product_images"}

                                            />
                                        </div>
                                        <div className='col-sm-4 col-6  p-2'>
                                            <ModalImage
                                                small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                className={"product_images"}
                                            />
                                        </div>
                                        <div className='col-sm-4 col-6  p-2'>
                                            <ModalImage
                                                small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                className={"product_images"}
                                            />
                                        </div>
                                        <div className='col-sm-4 col-6  p-2'>
                                            <ModalImage
                                                small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                className={"product_images"}
                                            />
                                        </div>
                                        <div className='col-sm-4 col-6  p-2'>
                                            <ModalImage
                                                small={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                large={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
                                                className={"product_images"}
                                            />
                                        </div>


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
