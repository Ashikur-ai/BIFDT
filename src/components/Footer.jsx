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
            
            <footer className="grid  lg:grid-cols-2 bg-pink-600 text-neutral-content py-5">
                
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <div>
                        <nav className="px-10">
                            <div className="flex px-20 py-5 gap-5 flex-wrap">
                                <Link to="https://x.com/"><BiLogoTwitter className="text-4xl" /></Link>
                                <Link to="https://www.youtube.com/"><TbBrandYoutubeFilled className="text-4xl" />
                                </Link>
                                <Link to="https://www.facebook.com/"><FaFacebook className="text-4xl" /></Link>
                                <Link to="https://www.pinterest.com/"><BsPinterest className="text-4xl" /></Link>
                            </div>
                        </nav>
                        <div className=" lg:pl-20">


                            <div className="lg:px-10">
                                <p className="text-xl font-bold  text-white px-10 lg:px-0"> House # 3/GA,Shyamoli, Road # 1. Dhaka-1207.</p>
                                <p className="text-xl font-bold text-white px-10 lg:px-0">Email: info@bifdt.com</p>
                            </div>
                            <img src={logo} className="lg:pl-5 lg:w-full w-3/4 mx-auto" alt="" />
                        </div>
                    </div>
                    </div>
                </nav>

                <div className="">
                    <div className="mx-auto w-1/2">
                    <p className="text-3xl font-bold mt-5 ">Contact Number</p>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 016-29-17-17-17,</span>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 016-29-18-18-18,</span>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 015-52-64-44-79,</span>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 019-15-67-05-40,</span>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 019-79-79-93-93,</span>
                    <span className="flex gap-2 text-xl my-5"><FaSquarePhone /> 019-79-79-94-94</span>
                   </div>
                </div>
            </footer>
        </>
    )
};
export default Footer;