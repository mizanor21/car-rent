import React from 'react';

const NavbarContact = () => {
    return (
        <div className='bg-gray-900 hidden lg:block py-2 font-thin shadow-xl'>
            <ul className='container mx-auto text-yellow-500 opacity-75 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
                <li>mizanorrahman398@gmail.com</li>
                <li>+880 1848081720</li>
                <li>Mirpur 2, Dhaka, Bangladesh</li>
            </ul>
        </div>
    );
};

export default NavbarContact;