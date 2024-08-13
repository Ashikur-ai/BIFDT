import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const BackendNavbar = () => {
    const [isOpen, setOpenMenu] = useState(false)
    return (
        <>
            <div className="flex items-center bg-white justify-between  p-5 ">
                <h2 className="text-2xl font-bold hidden sm:block">Bangladesh Institute of <br /> Fashion & Design Technology</h2>
                <h2 className="text-2xl font-bold sm:hidden block">BIFDT</h2>
                <div className="flex items-center flex-wrap gap-2">

                    <Link to={'/dashboard'}><FaRegCircleUser className='ml-5 text-2xl' /></Link>

                    <div className='z-20 block lg:hidden'>
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="">
                                <Hamburger toggled={isOpen} toggle={setOpenMenu} size={23} duration={0.6} />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label onClick={() => setOpenMenu(false)} htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BackendNavbar;