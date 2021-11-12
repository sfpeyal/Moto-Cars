import React from 'react';
import Banner from '../Banner/Banner';
import BestSales from '../BestSales/BestSales';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BestSales></BestSales>
        </div>
    );
};

export default Home;