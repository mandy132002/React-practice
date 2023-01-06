import React from 'react';
import ReactDOM from 'react-dom/client';

function Header(){
    return (
        <header>
                <nav className="navbar  bg-black text-white flex justify-between">
                <img className="image w-1/12" src="./images/logo1.png"  />
                <ul className="list-items flex text-2xl space-x-6 mr-6" >
                    <li className='p-4'>Events</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact us</li>
                </ul>
                </nav>
        </header>
    )
}

export default Header;