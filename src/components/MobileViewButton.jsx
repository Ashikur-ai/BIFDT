import React from 'react';
import { FaAngleUp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdGetApp } from "react-icons/md";
const MobileViewButton = () => {
    const callFxn = (element) => {
        // Your call function logic here
        console.log(`Calling ${element.dataset.psTrackCall}`);
    };
    return (
        <>
            <div className="fixed bottom-0 w-full right-1 bg-black p-3 ml-5 flex justify-center items-center shadow-lg rounded-md z-50" id="mobiledevice">
                <div className="backtop">
                    <Link to="/freeSeminar" className="flex items-center text-white hover:text-blue-800 text-xs sm:text-base flex-col">
                        <FaAngleUp className="pr-1" />
                        Enquire Now
                    </Link>
                </div>
                <span className="px-2 text-2xl">|</span>
                <div className="mobile-all-lp">
                    <a
                        href="tel:1800-212-2714"
                        onClick={(e) => {
                            e.preventDefault();
                            callFxn(e.currentTarget);
                        }}
                        data-ps-track-call="1800-212-2714"
                        className="flex items-center text-white hover:text-blue-800 text-xs sm:text-base flex-col"
                    >
                        <MdGetApp className="" />
                        Get App
                    </a>
                </div>
                <span className="px-2 text-2xl">|</span>
                <div className="mobile-all-lp">
                    <a
                        href="tel:1800-212-2714"
                        onClick={(e) => {
                            e.preventDefault();
                            callFxn(e.currentTarget);
                        }}
                        data-ps-track-call="1800-212-2714"
                        className="flex items-center text-white hover:text-blue-800 text-xs sm:text-base flex-col"
                    >
                        <FaPhone className="" />
                        Call Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default MobileViewButton;