import React from 'react';
import { BsMessenger, BsTelegram, BsWechat } from 'react-icons/bs';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaViber, FaSignal } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const AllSocialLinks = () => {
    return (
        <div id="ssb-container" className="fixed bottom-60 right-0 top-32  z-40">
            <ul className="list-none">
                <li className='bg-green-500 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://wa.me/+919830497111?" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </li>

                <li className='bg-blue-300 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="tel:+919830497111" className="text-white text-lg sm:text-2xl">
                        <FaViber />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.facebook.com/GIFT.Design.Academy" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </li>

                <li className='bg-pink-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.instagram.com/gift_design_academy/" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://twitter.com/gift1999" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <BsMessenger />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://twitter.com/gift1999" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <BsWechat />
                    </a>
                </li>
                
                <li className='bg-blue-700 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.linkedin.com/in/gift-fashion-and-interior-design-institute-kolkata-16bb4135/" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className='bg-red-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.youtube.com/channel/UCoxd_jcv24pep52XVNPGI4Q" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </li>
                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://in.pinterest.com/giftdesignacademy/" className="text-white text-xl" target="_blank" rel="noopener noreferrer">
                        <BsTelegram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AllSocialLinks;