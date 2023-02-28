import React from 'react';
import Banner from '../Banner/Banner';
import BookCar from '../BookCar/BookCar';
import CarInformation from '../CarInformation/CarInformation';
import CustomerCenter from '../CustomerCenter/CustomerCenter';
import Sponsorship from '../Sponsorship/Sponsorship';
import VideoInfo from '../VideoInfo/VideoInfo';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner />
            <BookCar />
            <VideoInfo />
            <CarInformation />
            <CustomerCenter />
            <Sponsorship />
        </div>
    );
};

export default Home;