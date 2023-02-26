import React from 'react';
import carVideo from '../../../assets/Lexus Exclusive Limousine Service.mp4'
import './VideoInfo.css'

const VideoInfo = () => {
    return (
        <div className=''>
            <div className="overlay top-[1930px] md:top-[1995px] lg:top-[1430px]"></div>
            <video autoPlay loop muted className='w-[100%] h-[800px] object-cover bg-black bg-opacity-25'>
                <source src={carVideo} type='video/mp4' />
                <source src={carVideo} type='video/ogg' />
            </video>
            <div className="absolute w-[100%] h-[100%] flex flex-col top-[1950px] lg:top-[1340px] justify-center items-center text-white text-center">
                <h2 className='text-3xl md:text-5xl font-bold'>Our Fleet, Your Fleet</h2>
                <p className='my-5'>We know the difference is in the details and that’s why our car rental services, in the tourism <br />
                    and business industry, stand out for their quality and good taste, to offer you an unique experience</p>

                <h3 className='text-3xl mb-5 bg-black px-10 py-2 animate-pulse'>Call Now (+880) 1848081720</h3>
                <button className='py-5 px-10 text-white bg-red-500 hover:bg-yellow-500 rounded-md font-bold mt-2 uppercase animate-pulse'>Reserve now</button>
            </div>
        </div>
    );
};

export default VideoInfo;