import { FaFacebook, FaPhoneAlt, FaPhoneSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

            <footer className="grid lg:pb-5  grid-cols-2 bg-primary text-neutral-content pt-4 mb-14 lg:mb-0">

                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <div>

                            <img src="https://i.ibb.co/TKp1WV6/BIFDT-logo.png" className="lg:pl-5 lg:w-3/4 w-3/4 mx-auto" alt="" />

                            <nav className="lg:pl-9 pl-6 text-white flex sm:block  items-center">
                                <div className="flex flex-row px-5 sm:px-20 lg:py-5 lg:gap-5 gap-1 flex-wrap text-[8px] lg:text-3xl">
                                    <Link to="https://x.com/"><BiLogoTwitter className=" " /></Link>
                                    <Link to="https://www.youtube.com/"><TbBrandYoutubeFilled className="" />
                                    </Link>
                                    <Link to="https://www.facebook.com/"><FaFacebook className="" /></Link>
                                    <Link to="https://www.pinterest.com/"><BsPinterest className="" /></Link>
                                </div>
                            </nav>
                            <div className=" lg:pl-20  sm:text-start" >
                                <div className="lg:px-10">
                                    <p className="text-[8px] lg:text-xl lg:font-bold  text-white px-10 lg:px-0"> House # 3/GA,Shyamoli, Road # 1. Dhaka-1207.</p>
                                    <p className="text-[8px] lg:text-xl lg:font-bold text-white px-10 lg:px-0">Email: info@bifdt.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>

                <div className="text-white">
                    <div className="mx-auto lg:px-9">
                        <p className="text-sm lg:text-3xl font-bold lg:mt-5  sm:text-start">Contact Number</p>
                        <div className="hidden lg:flex justify-center sm:justify-start items-center ">
                            <div className="">
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 016-29-17-17-17,</span>
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 016-29-18-18-18,</span>
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 015-52-64-44-79,</span>
                            </div>
                            <div>
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 019-15-67-05-40,</span>
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 019-79-79-93-93,</span>
                                <span className="flex gap-2 my-5"><FaSquarePhone /> 019-79-79-94-94</span>
                            </div>
                        </div>
                        <div className="lg:hidden flex text-[8px] my-3">
                            <div>
                                <span className="flex  gap-1"><FaSquarePhone /> 016-29-17-17-17,</span>
                                <span className="flex  gap-1"><FaSquarePhone /> 016-29-18-18-18,</span>
                                <span className="flex  gap-1"><FaSquarePhone /> 015-52-64-44-79,</span>
                            </div>
                            <div>
                                <span className="flex  gap-1"><FaSquarePhone /> 019-15-67-05-40,</span>
                                <span className="flex  gap-1"><FaSquarePhone /> 019-79-79-93-93,</span>
                                <span className="flex  gap-1"><FaSquarePhone /> 019-79-79-94-94</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};
export default Footer;