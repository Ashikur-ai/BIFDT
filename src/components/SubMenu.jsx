import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SubMenu = () => {
    return (
        <>
         <div className="bg-white flex w-3/4 mx-auto my-2">
                <div className='flex flex-col lg:flex-row mx-auto w-3/4 items-center pt-1'>
                    <div className="flex flex-col lg:flex-row items-center gap-1">
                        <p className="flex items-center gap-1"><FaPhoneAlt />Call Us!:</p>
                        <div className="lg:flex">
                            <a className="font-bold" href={`tel:016-29-17-17-17`}>
                                <p>+88016-29-17-17-17</p>
                            </a>
                            <a className="lg:ml-2 font-bold" href={`tel:016-29-18-18-18`}>
                                <p>+88016-29-18-18-18</p>
                            </a>
                        </div>
                    </div>
                    <p className="lg:ml-5 flex items-center gap-2">
                        <MdEmail />
                        <span>info@bifdt.com</span>
                    </p>
                </div>
                <div className='hidden lg:flex gap-5 '>
                    <Link to="/onlineAdmission">
                        <button className="lg:p-2 p-1 rounded-md bg-primary text-white hover:font-bold  hover:scale-110 duration-300 transition-all active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">
                            Online Admission
                        </button>
                    </Link>
                    <Link to="/freeSeminar">
                        <button className="lg:p-2 p-1 rounded-md bg-primary text-white hover:font-bold hover:scale-110 duration-300 transition-all  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">
                            Free Seminar
                        </button>
                    </Link>
                </div>
            </div>   
        </>
    );
};

export default SubMenu;