import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';

import '../Components/Main_style.scss'
import Rating from './Rating';
export default function Usertable(props) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    // if (searchInput.length > 0) {
    //     countries.filter((country) => {
    //         return country.name.match(searchInput);
    //     });
    // }
    const handlePageClick = (data) => {
        alert(data.selected)
    }

    const sortByName = () => {



    }
    const Search_box = () => {
        alert(searchInput)
    }


    return (
        <div>
            <div className='Search_div '>
                <div className='first '>
                    <input
                        className='search_box'
                        type="search"
                        placeholder="Write here"
                        onChange={handleChange}
                        value={searchInput}
                    />
                    <button onClick={Search_box} className='search_button'>Search</button>
                </div>

                <div className='second' >
                    <div style={{ fontSize: '30px', color: 'red', cursor: 'pointer' }} >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>

                    </div>
                    <div>
                        <button className='add_button'>Add<i className="fa fa-plus-circle mx-1" aria-hidden="true"></i></button>

                    </div>
                    <select name="pets" id="pet-select" style={{ width: '100px', background: 'black', color: 'white', padding: '5px', cursor: 'pointer' }}>
                        <option value="">Row</option>
                        <option value="dog">10</option>
                        <option value="cat">50</option>
                        <option value="hamster">100</option>

                    </select>

                </div>

            </div>
            <div className="table-responsive table-bordered">

                <table className="table table-hover ">
                    <thead className="thead-dark text-white bg-dark text-center">
                        <tr>
                            <th><input type="checkbox" /></th>
                            {
                                props.Thead.map((elememt, index) => {
                                    return <th style={{ cursor: 'pointer' }} scope="col">{elememt}</th>
                                })
                            }


                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            props.Tbody.map((ele, index) => {
                                return <tr>
                                    <th><input type="checkbox" /></th>
                                    <th scope="row">{ele.id}</th>
                                    <td >
                                        <NavLink to={`${ele.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <div className="d-flex justify-content-between align-items-center ">
                                                <div className='mx-2' style={{ width: '50px', height: '50px', borderRadius: '50%', border: "1px solid black" }}><img src={ele.User_img} alt={ele.User_img} style={{ width: '100%', height: '100%', borderRadius: '50%' }} /></div>
                                                <div style={{ whiteSpace: 'nowrap', width: '80%', textAlign: 'justify' }}><p style={{ padding: '0px', margin: '0px' }}>{ele.Name}</p><p className={ele.Status} style={{ padding: '0px', margin: '0px', fontSize: '11px' }}>{ele.Status}</p></div>
                                            </div>
                                        </NavLink>
                                    </td>


                                    <td className='align-middle'> {ele.Gender}</td>
                                    <td className='align-middle' >  {ele.Email}</td>
                                    <td className='align-middle'>{ele.Mobile}</td>
                                    <td className='align-middle'>{ele.Address}</td>

                                    <td className='align-middle'>{ele.DOB}</td>


                                    <td className='align-middle' style={{ whiteSpace: 'nowrap' }}><i className="fa fa-pencil mx-1" aria-hidden="true" style={{ color: "green", fontSize: '20px', cursor: 'pointer' }}></i>

                                        <i className="fa fa-trash mx-1" aria-hidden="true" style={{ color: "red", fontSize: '20px', cursor: 'pointer' }}></i>
                                        <NavLink to={`${ele.id}`} style={{ textDecoration: 'none' }}><i className="fa fa-eye mx-1" aria-hidden="true" style={{ color: "black", fontSize: '20px', cursor: 'pointer' }}></i></NavLink>
                                    </td>



                                </tr>


                            })
                        }







                    </tbody>
                </table>


            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={props.Tbody.length}
                    previousLabel="prev"
                    marginPagesDisplayed={1}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}

                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}

                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}


                />
            </div>

        </div >
    )
}
