import React, { useState } from 'react';
import { MdAddCircle, MdArrowDropDown } from 'react-icons/md';
import NavigationItem from './NavigationItem';
import { SiNginxproxymanager } from 'react-icons/si';

const Dropdown = ({buttonText, urls}) => {
    const [isOpen, setisOpen] = useState(false);

    

    return (
      
        <>
            <div className="w-full">
                <button
                onClick={()=>setisOpen(!isOpen)}
                className='bg-white flex items-center justify-between  px-4 py-2 rounded-md w-full text-left'
                >
                    {buttonText}
                    <MdArrowDropDown />
                </button>

                {isOpen && (
                    <div className="mt-2 ml-4 bg-pink-200 border rounded-lg w-full z-10">
                        
                       {urls}
                    </div>
                )}
            </div>   
        </>
    );
};

export default Dropdown;