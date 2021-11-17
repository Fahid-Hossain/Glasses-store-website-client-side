import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../../Products/HomeProducts/HomeProducts';
import ReviewShow from '../../Dashboard/Review/ReviewShow/ReviewShow';
import GlassesAbout from '../../GlassesAbout/GlassesAbout';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ReviewShow></ReviewShow>
            <GlassesAbout></GlassesAbout>
        </div>
    );
};

export default Home;