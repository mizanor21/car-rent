import React from 'react';
import Banner from '../Banner/Banner';
import BookCar from '../BookCar/BookCar';
import VideoInfo from '../VideoInfo/VideoInfo';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner />
            <BookCar />
            <VideoInfo />
        </div>
    );
};

export default Home;