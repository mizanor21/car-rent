import React from 'react';

const BookCar = () => {
    return (
        <section className='bg-yellow-400 h-[850px] lg:h-[600px] py-5'>
            <div className="mx-5">
                <div className="container mx-auto">
                    <h2 className='text-center py-12 text-white text-2xl lg:text-3xl font-bold'>BOOK A CAR TODAY!</h2>
                    <div className="">
                        <select className="select w-full">
                            <option disabled selected>Select Car</option>
                            <option>TOYOTA AYGO</option>
                            <option>KIA CEED</option>
                            <option>VOLVO V60</option>
                            <option>BMW 3-SERIES</option>
                        </select>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>PICK-UP</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a location</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>PICK-UP</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a date</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>PICK-UP</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a time</option>
                                    <option>12 : 00 PM</option>
                                    <option>01 : 00 PM</option>
                                    <option>12 : 00 PM</option>
                                    <option>01 : 00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>DROP-OFF</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a location</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>DROP-OFF</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a date</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="bg-white flex justify-center items-center px-5 border-[2px] border-red-500">
                                    <h5 className='font-bold'>DROP-OFF</h5>
                                </div>
                                <select className="select w-full max-w-xs rounded-none border-[2px] border-red-500 bg-white">
                                    <option disabled selected>Choose a time</option>
                                    <option>12 : 00 PM</option>
                                    <option>01 : 00 PM</option>
                                    <option>12 : 00 PM</option>
                                    <option>01 : 00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className='text-center py-5 px-10 bg-gray-800 text-white hover:bg-red-500 rounded-md mt-12 uppercase font-bold'>Continue Booking</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCar;