import { FaFacebook, FaPhoneAlt, FaPhoneSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
    // Define an array of phone numbers
    const phoneNumbers = [
        { number: "016-29-17-17-17", tel: "+8801629171717" },
        { number: "016-29-18-18-18", tel: "+8801629181818" },
        { number: "015-52-64-44-79", tel: "+8801552644479" },
        { number: "019-15-67-05-40", tel: "+8801915670540" },
        { number: "019-79-79-93-93", tel: "+8801979799393" },
        { number: "019-79-79-94-94", tel: "+8801979799494" }
    ];
    return (
        <>

            <footer className="grid lg:pb-5  grid-cols-2 bg-primary text-neutral-content pt-4 mb-14 lg:mb-0">
                <img src="https://i.ibb.co/TKp1WV6/BIFDT-logo.png" className="lg:w-3/4 w-3/4 pl-5 col-span-2 block sm:hidden" alt="" />
                <nav>
                    <div className="grid grid-flow-col gap-4 px-4">
                        <div className="">

                            <img src="https://i.ibb.co/TKp1WV6/BIFDT-logo.png" className="lg:pl-5 lg:w-3/4 w-3/4 mx-auto hidden sm:block" alt="" />

                            <nav className="lg:pl-9 sm:pl-6 text-white flex sm:block  items-center">
                                <div className="flex flex-row sm:px-20 lg:py-5 lg:gap-5 gap-1 flex-wrap text-[8px] lg:text-3xl">
                                    <Link to="https://x.com/"><BiLogoTwitter className=" " /></Link>
                                    <Link to="https://www.youtube.com/"><TbBrandYoutubeFilled className="" />
                                    </Link>
                                    <Link to="https://www.facebook.com/"><FaFacebook className="" /></Link>
                                    <Link to="https://www.pinterest.com/"><BsPinterest className="" /></Link>
                                </div>
                            </nav>
                            <div className=" lg:pl-20  sm:text-start" >
                                <div className="lg:px-10">
                                    <p className="text-[8px] lg:text-xl lg:font-bold  text-white sm:px-10 lg:px-0"> House # 3/GA,Shyamoli, Road # 1. Dhaka-1207.</p>
                                    <p className="text-[8px] lg:text-xl lg:font-bold text-white sm:px-10 lg:px-0">Email: info@bifdt.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>

                <div className="text-white">
                    <div className="mx-auto lg:px-9">
                        <p className="text-sm lg:text-3xl font-bold lg:mt-5  sm:text-start">Contact Number</p>
                        
                        <div className="flex flex-wrap sm:grid grid-cols-2 sm:w-max gap-2 text-[10px] sm:text-sm">
                            {phoneNumbers.map((phone, index) => (
                                <a key={index} href={`tel:${phone.tel}`}>
                                    <span className="flex gap-x-2 items-center hover:underline">
                                        <FaSquarePhone /> {phone.number}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};
export default Footer;