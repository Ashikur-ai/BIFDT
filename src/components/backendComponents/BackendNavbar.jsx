import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BackendNavbar = () => {
    return (
        <>
            <div className="flex items-center bg-white justify-between mb-6 p-5 ">
                <h2 className="text-2xl font-bold">Bangladesh Institute of Fashion & Design Technology</h2>
                <div className="flex items-center">
                    <input type="text" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search" />
                    <FaRegCircleUser className='ml-5 text-2xl' />
                    <Link to="/dashboard/adminLogin"><button className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-blue-600">Login</button></Link>
                    <FaRegBell className='text-2xl ml-4' />
                    <IoSettingsOutline className='text-2xl ml-4' />
                </div>
            </div>
        </>
    );
};

export default BackendNavbar;