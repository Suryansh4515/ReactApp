import React from 'react';
import MenuIcon from '../media/icons/menu.svg'
import BellIcon from '../media/icons/bell.svg'
import CartIcon from '../media/icons/cart.svg'

export default function NavBar () {
    return (
        <nav className="absolute w-full flex justify-between px-6 py-5 bg-white rounded-b-xl shadow-lg shadow-blue-100">
            <img src={MenuIcon}/>
            <div className='flex gap-x-6'>
                <img src={CartIcon}/>
                <img src={BellIcon}/>
            </div>
        </nav>
    );
}