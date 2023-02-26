import React from 'react';
import Banner from '../Banner/Banner';
import BookCar from '../BookCar/BookCar';
import CustomerCenter from '../CustomerCenter/CustomerCenter';
import VideoInfo from '../VideoInfo/VideoInfo';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner />
            <BookCar />
            <VideoInfo />
            <CustomerCenter />
        </div>
    );
};

export default Home;