import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveButton = ({title, link}) => {
    return (
        <>
            <div className="lg:py-5 pb-2 lg:text-xl text-[10px] hidden lg:flex justify-end items-center">
                <Link to={link}>
                    <button className="lg:p-3 p-1 rounded-lg bg-primary text-white hover:text-black  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">{title}
                </button>
                </Link>
                
            </div>
        </>
    );
};

export default ResponsiveButton;