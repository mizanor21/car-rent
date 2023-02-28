import React from 'react';

const CarInfo = ({ carInfo }) => {
    const { car_model, img, price, ratting } = carInfo
    return (
        <div title='Details Information' className='pb-5 text-white hover:animate-pulse border-b-2 hover:border-yellow-500'>
            <div className="card glass hover:bg-gradient-to-r from-black via-yellow-500 to-black shadow-xl">
                <figure><img className='w-96 h-52' src={img} alt="car!" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{car_model}</h2>
                        <div className="flex" title='Included VAT & TAX.'>
                            <span className="text-xl md:text-2xl lg:text-3xl font-bold mr-2">{price} </span>
                            <span className='text-gray-400 mt-1'> / DAY</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="rating w-24">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <h5><strong>55</strong> Reviews</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarInfo;