import React, { useEffect, useState } from 'react';
import ExploreItems from '../ExploreItems/ExploreItems';
import './Explore.css'

const Explore = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://blooming-refuge-66854.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="main-container">
            <h1 className="">ALL PRODUCT</h1>
            <div className="d-flex justify-content-center">
                <div className="explore-container">
                    {
                        products.map(product => <ExploreItems
                            key={product.id}
                            product={product}
                        ></ExploreItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explore;