import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png'
import './nav.css'

const Nav = () => {
    return (
        <>
            <header className="text-gray-600 body-font coverimg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} className='w-40' alt="" />
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900">Home</Link>
                        <Link className="mr-5 hover:text-gray-900">Donation</Link>
                        <Link className="mr-5 hover:text-gray-900">Events</Link>
                        <Link className="mr-5 hover:text-gray-900">Blog</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2">Register</button>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Admin</button>
                </div>
            </header>
        </>
    );
};

export default Nav;