import React from 'react';
import car1_ from '../../../assets/car1_.png';
import car2_ from '../../../assets/car2_.png';
import car3_ from '../../../assets/car3_.png';
import car4_ from '../../../assets/car4_.png';
import car5_ from '../../../assets/car5_.png';



const Banner = () => {
    return (
        <section className='bg-black'>
            <div className="container mx-auto">
                <div className="text-center uppercase text-white py-10 lg:py-20 mx-5">
                    <h2 className='text-3xl md:text-4xl lg:text-6xl'>Vehicle Models</h2>
                    <p className='text-yellow-500 mt-2'>Reserve now and get the best offer</p>
                </div>
                <div className="bg-black lg:h-[450px]">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item w-full">
                            <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 mx-5 ">
                                <div>
                                    <p className='text-gray-400'>ECONOMY</p>
                                    <h2 className='text-2xl md:text-3xl lg:text-5xl text-yellow-500'>TOYOTA AYGO</h2>
                                    <div className="border-[5px] lg:border-[8px] border-red-600 w-32 my-4"></div>
                                    <div className="flex">
                                        <span className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>$40 </span>
                                        <span className='text-gray-400 pl-2 mt-2'> / DAY</span>
                                    </div>
                                    <button className='bg-red-600 px-14 py-5 text-white mt-10 rounded-md font-bold hover:bg-yellow-500'>RESERVE NOW</button>
                                </div>
                                <div className="text-center">
                                    <img src={car1_} alt='car images' className="w-[400px] md:w-[500px] lg:w-[900px]" />
                                    <p className='text-white mt-10'>{'<<'} arrow icon {'>>'}</p>
                                </div>
                                <div className="">
                                    <ul className='text-md'>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>DOOR: </span> <span className='text-yellow-500'>4</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>PASSENGERS: </span><span className='text-yellow-500'>4</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>LUGGAGE: </span><span className='text-yellow-500'>2 SMALL BAGS</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>TRANSMISSION: </span> <span className='text-yellow-500'>MANUAL</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>AIR CONDITIONING: </span>  <span className='text-yellow-500'>NO</span></li>
                                        <li className='ml-5 lg:ml-28'><span className='text-white'>MINIMUM AGE: </span>  <span className='text-yellow-500'>20</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item w-full">
                            <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 mx-5 ">
                                <div>
                                    <p className='text-gray-400'>ECONOMY</p>
                                    <h2 className='text-2xl md:text-3xl lg:text-5xl text-yellow-500'>KIA CEED</h2>
                                    <div className="border-[5px] lg:border-[8px] border-red-600 w-32 my-4"></div>
                                    <div className="flex">
                                        <span className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>$45 </span>
                                        <span className='text-gray-400 pl-2 mt-2'> / DAY</span>
                                    </div>
                                    <button className='bg-red-600 px-14 py-5 text-white mt-10 rounded-md font-bold hover:bg-yellow-500'>RESERVE NOW</button>
                                </div>
                                <div className="text-center">
                                    <img src={car2_} alt='car images' className="w-[400px] md:w-[500px] lg:w-[900px]" />
                                    <p className='text-white mt-10'>{'<<'} arrow icon {'>>'}</p>
                                </div>
                                <div className="">
                                    <ul className='text-md'>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>DOOR: </span> <span className='text-yellow-500'>4</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>PASSENGERS: </span><span className='text-yellow-500'>5</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>LUGGAGE: </span><span className='text-yellow-500'>2 BAGS</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>TRANSMISSION: </span> <span className='text-yellow-500'>MANUAL</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>AIR CONDITIONING: </span>  <span className='text-yellow-500'>YES</span></li>
                                        <li className='ml-5 lg:ml-28'><span className='text-white'>MINIMUM AGE: </span>  <span className='text-yellow-500'>20</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* slide3  */}
                        <div id="slide3" className="carousel-item w-full">
                            <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 mx-5 ">
                                <div>
                                    <p className='text-gray-400'>ECONOMY</p>
                                    <h2 className='text-2xl md:text-3xl lg:text-5xl text-yellow-500'>VOLVO V60</h2>
                                    <div className="border-[5px] lg:border-[8px] border-red-600 w-32 my-4"></div>
                                    <div className="flex">
                                        <span className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>$55 </span>
                                        <span className='text-gray-400 pl-2 mt-2'> / DAY</span>
                                    </div>
                                    <button className='bg-red-600 px-14 py-5 text-white mt-10 rounded-md font-bold hover:bg-yellow-500'>RESERVE NOW</button>
                                </div>
                                <div className="text-center">
                                    <img src={car3_} alt='car images' className="w-[400px] md:w-[500px] lg:w-[900px]" />
                                    <p className='text-white mt-10'>{'<<'} arrow icon {'>>'}</p>
                                </div>
                                <div className="">
                                    <ul className='text-md'>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>DOOR: </span> <span className='text-yellow-500'>4</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>PASSENGERS: </span><span className='text-yellow-500'>6</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>LUGGAGE: </span><span className='text-yellow-500'>3 BAGS</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>TRANSMISSION: </span> <span className='text-yellow-500'>MANUAL</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>AIR CONDITIONING: </span>  <span className='text-yellow-500'>YES</span></li>
                                        <li className='ml-5 lg:ml-28'><span className='text-white'>MINIMUM AGE: </span>  <span className='text-yellow-500'>20</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* slide4  */}
                        <div id="slide4" className="carousel-item w-full">
                            <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 mx-5 ">
                                <div>
                                    <p className='text-gray-400'>ECONOMY</p>
                                    <h2 className='text-2xl md:text-3xl lg:text-5xl text-yellow-500'>BMW 3-SERIES</h2>
                                    <div className="border-[5px] lg:border-[8px] border-red-600 w-32 my-4"></div>
                                    <div className="flex">
                                        <span className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>$80 </span>
                                        <span className='text-gray-400 pl-2 mt-2'> / DAY</span>
                                    </div>
                                    <button className='bg-red-600 px-14 py-5 text-white mt-10 rounded-md font-bold hover:bg-yellow-500'>RESERVE NOW</button>
                                </div>
                                <div className="text-center">
                                    <img src={car4_} alt='car images' className="w-[400px] md:w-[500px] lg:w-[900px]" />
                                    <p className='text-white mt-10'>{'<<'} arrow icon {'>>'}</p>
                                </div>

                                <div className="">
                                    <ul className='text-md'>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>DOOR: </span> <span className='text-yellow-500'>4</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>PASSENGERS: </span><span className='text-yellow-500'>6</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>LUGGAGE: </span><span className='text-yellow-500'>4 BAGS</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>TRANSMISSION: </span> <span className='text-yellow-500'>MANUAL</span></li>
                                        <li className='ml-5 lg:ml-28 mb-5'><span className='text-white'>AIR CONDITIONING: </span>  <span className='text-yellow-500'>YES</span></li>
                                        <li className='ml-5 lg:ml-28'><span className='text-white'>MINIMUM AGE: </span>  <span className='text-yellow-500'>25</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;