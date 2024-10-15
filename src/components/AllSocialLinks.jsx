import React from 'react';
import { BsMessenger, BsTelegram, BsWechat } from 'react-icons/bs';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaViber, FaSignal } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { RiChat3Line } from "react-icons/ri";

const AllSocialLinks = () => {
    const messengerMessage = "Where are you located?";
    const messengerUrl = `https://m.me/bifdt.info?ref=${encodeURIComponent(messengerMessage)}`;

    const handleChatClick = () => {
        const imoLink = "https://imo.im/imoid_F1erHWIV4P"; // replace with actual user ID
        window.open(imoLink, "_blank");
    };

    return (
        <div id="ssb-container" className="fixed bottom-60 right-0 top-32  z-40">
            <ul className="list-none">
                <li className='bg-green-500 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://wa.me/+8801629181818?" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </li>

                <li  className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://wa.me/+8801629181818?" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <RiChat3Line />
                    </a>



                </li>

                <li className='bg-blue-300 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="viber://chat?number=+8801629171717" className="text-white text-lg sm:text-2xl">
                        <FaViber />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.facebook.com/bifdt/posts/pfbid01Mkpy4AH82ctvc9FeVE2rApBWi7K7n4rG7QY7iMFrDRzN8DWbXS1NRaMdQ3gsYBBl?ref=embed_page" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </li>



                <li className='bg-pink-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.instagram.com/sharifahmedseraji/?utm_source=ig_embed&ig_rid=2aee6213-936b-40f0-af4b-02bdd2e3905c" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href={messengerUrl} className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <BsMessenger />
                    </a>
                </li>

                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://twitter.com/gift1999" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <BsWechat />
                    </a>
                </li>

                <li className='bg-blue-700 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.linkedin.com/in/bifdt-edu-a4b851152/" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className='bg-red-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a href="https://www.youtube.com/channel/UCiPQeQtjSuNTbSl13i0bxUw?view_as=subscriber" className="text-white text-lg sm:text-2xl" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </li>
                <li className='bg-blue-600 p-2 hover:scale-150 transition-all duration-150'>
                    <a  href="https://t.me/+8801629171717" className="text-white text-xl" target="_blank" rel="noopener noreferrer">
                        <BsTelegram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AllSocialLinks;