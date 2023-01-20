import React from 'react'
import '../Components/Main_style.scss'
import ReactStars from "react-rating-stars-component";
export default function Rating(props) {
    return (
        <ReactStars
            count={5}
            value={props.rating_value}
            edit={false}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            classNames={"rating"}
        />
    )
}
