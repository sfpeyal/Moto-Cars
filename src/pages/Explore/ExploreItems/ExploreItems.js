import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreItems.css'

const ExploreItems = (props) => {
    const { name, picture, info, price, _id } = props.product;
    return (
        <div className="exploreitems-container">
            <div>
                <img className="exploreitems-img" src={picture} alt="" />
            </div>
            <div className="explore-inner-container">
                <br />
                <h5>{name}</h5>
                <h6>Price: {price}K$</h6>
                <h6>Short description</h6>
                <p>"{info.slice(0, 75)}"</p>
                <Link to={`/products/purchase/${_id}`}>
                    <button type="button" className="btn btn-outline-dark">PURCHASE</button>
                </Link>
            </div>
        </div>
    );
};

export default ExploreItems;