import React from 'react';
import person1 from '../../../assets/person1.png'

const CustomerCenter = () => {
    return (
        <div className='relative container mx-auto flex flex-col h-[400px] sm:h-[700px]'>
            <div className="py-10 lg:py-24 text-center">
                <h2 className='text-3xl lg:text-4xl font-bold'>CUSTOMERS CENTER</h2>
                <p className='text-gray-400 uppercase'>FEEL FREE TO CONTACT US WITH ANY QUESTIONS</p>
            </div>
            <div className="flex justify-between border-[8px] mx-0 xl:mx-[250px] 2xl:mx-[350px] border-yellow-400">
                <div className="px-5 py-5 md:px-20 md:py-24">
                    <h2 className='text-2xl font-bold'>JOSEPH HANCOCK</h2>
                    <p className='text-gray-400'>Support Manager</p>
                    <div className="border-[2px] border-red-500 w-14 my-5"></div>
                    <p className='text-gray-400'>Phone:+088 01848081720</p>
                    <p className='text-gray-400'>Email: mizanorrahman398@gmail.com</p>
                </div>
                <img className=' absolute w-96 right-60 lg:right-60 top-[94px] hidden lg:block' src={person1} alt="" />
            </div>
        </div>
    );
};

export default CustomerCenter;