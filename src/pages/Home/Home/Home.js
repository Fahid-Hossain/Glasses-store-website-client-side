import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../../Products/HomeProducts/HomeProducts';
import ReviewShow from '../../Dashboard/Review/ReviewShow/ReviewShow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ReviewShow></ReviewShow>
        </div>
    );
};

export default Home;