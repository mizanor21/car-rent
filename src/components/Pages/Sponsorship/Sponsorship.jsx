import React from 'react';
import sponsored1 from '../../../assets/sponsored/2-cropped.png'
import sponsored2 from '../../../assets/sponsored/2011.svg'
import sponsored3 from '../../../assets/sponsored/logo.a4624c6.svg'
import sponsored4 from '../../../assets/sponsored/ddbl-n.jpg'

const Sponsorship = () => {
    return (
        <div className=' container mx-auto justify-center hidden lg:block items-center py-10'>
            <div className="flex justify-center mb-10">
                <img className='w-36 mr-16 saturate-0 hover:saturate-200' src={sponsored2} alt="" />
                <img className='w-36 mr-16 saturate-0 hover:saturate-200' src={sponsored1} alt="" />
                <img className='w-36 mr-16 saturate-0 hover:saturate-200' src={sponsored3} alt="" />
                <img className='w-36 saturate-0 hover:saturate-200' src={sponsored4} alt="" />
            </div>

        </div>
    );
};

export default Sponsorship;