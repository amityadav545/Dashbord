import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import '../Components/Main_style.scss'
export default function Data_table(props) {
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
                <div style={{ padding: '0px 50px' }} >
                    <select name="pets" id="pet-select" style={{ width: '100px', background: 'black', color: 'white', padding: '5px' }}>
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

                                    <th scope="row">{ele.id}</th>
                                    <td>{ele.User_name}</td>
                                    <td>{ele.Transction_Id}</td>
                                    <td>{ele.Date}</td>
                                    <td>{ele.Product_name}</td>
                                    <td>{ele.Amount}</td>
                                    <td className={ele.Status}>{ele.Status}</td>

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

        </div>
    )
}
