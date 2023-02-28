import React, { useEffect, useState } from 'react';
import CarInfo from './CarInfo';
import './CarInformation.css'

const CarInformation = () => {
    const [carInformation, setCarInformation] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/car-info')
            .then(res => res.json())
            .then(data => setCarInformation(data))
    }, [])
    return (
        <section className='services px-5 sm:px-0'>
            <div className='container mx-auto py-20'>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className='text-4xl text-yellow-400 font-bold hover:animate-bounce'>Services</h2>
                        <div className="border-[3px] lg:border-[5px] border-red-600 w-20 my-4"></div>
                    </div>
                    <button className='py-5 px-10 bg-gradient-to-r from-black via-yellow-500 to-black shadow-xl text-white font-bold rounded-md'>All Services</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 py-5">
                    {
                        carInformation.map(carInfo => <CarInfo key={carInfo} carInfo={carInfo}></CarInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CarInformation;