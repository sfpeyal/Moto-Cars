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
            <div>
                <h3>{name}</h3>
                <h5>Price: {price}$</h5>
                <p>Shot info: {info.slice(0, 35)}</p>
                <Link to={`/products/purchase/${_id}`}>
                    <button type="button" className="btn btn-outline-danger">PURCHASE</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;