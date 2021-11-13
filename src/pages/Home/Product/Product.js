import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, picture, info, price, _id } = props.product;
    return (
        <div className="product-container">
            <div>
                <img className="product-img" src={picture} alt="" />
            </div>
            <div className="inner-container">
                <br />
                <h5>{name}</h5>
                <h6>Price: {price}$</h6>
                <h6>Short description:</h6>
                <p>"{info.slice(0, 75)}"</p>
                <Link to={`/products/purchase/${_id}`}>
                    <button type="button" className="btn btn-outline-dark">PURCHASE</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;