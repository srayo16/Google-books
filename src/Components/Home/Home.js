import React from 'react';
import Signup from '../Authentication/Signup';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            {/* This is home page's components */}
            <Banner></Banner>
            <Signup></Signup>
        </>
    );
};

export default Home;