import { Link, NavLink } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowDropDown, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
import ResponsiveButton from "./ResponsiveButton";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
    const [isOpen, setOpenMenu] = useState(false)
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const handleOpen = () => {
        console.log(!isOpen);
        setOpenMenu(!isOpen)
    }
    const axiosPublic = useAxiosPublic();
    const { data: courses = [], refetch: coursesRefetch, isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/course');
            return res.data;
        }
    })
    if (isLoading) {
        return ''
    }
    console.log(courses);
    const NavLinkStyle = 'text-sm border-transparent border-b-2 hover:border-white py-[5px] hover:px-[10px] lg:px-[10px] transition-all duration-300 font-medium'
    const handleHideDrawer = () => {
        setOpenMenu(false)
        document.getElementById("my-drawer").checked = false;
    }
    const navNavLinks =
        <>
            <NavLink to="/" className={`${NavLinkStyle}`}>Home</NavLink>
            <NavLink to="/aboutUs" className={`${NavLinkStyle}`}>About Us</NavLink>
            {
                courses?.map(course => <NavLink key={course?._id} to={`/courseDetails/${course?._id}`} className={`${NavLinkStyle}`}>{course?.title}</NavLink>)
            }






        </>
    const navNavLinksForDrawer =
        <>
            <NavLink to="/" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>Home</NavLink>



            <NavLink to="/aboutUs" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>About Us</NavLink>
            <p onClick={handleDropdownToggle} className={`text-base hover:bg-[#414040] rounded-md py-[5px] hover:px-[10px] transition-all duration-300 flex justify-between items-center cursor-pointer ${isDropdownOpen && 'bg-[#414040] px-[10px]'}`}>Course
                <span className={` transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}><MdArrowDropDown /></span>
            </p>


            <div className={` rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'} gap-2`}>
                {
                    courses?.map(course => <NavLink key={course?._id} to={`/courseDetails/${course?._id}`} className={`${NavLinkStyle}`}>{course?.title}</NavLink>)
                }
            </div>


            <NavLink to="/onlineAdmission" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>Online Admission</NavLink>

            <NavLink to="/freeSeminar" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>Free Seminar</NavLink>

        </>
    return (
        <div className="sticky top-0 z-20 shadow-lg">


            <div className="navbar  bg-primary text-white ">


                <div className="">
                    {/* Mobile view  */}
                    <div className=" text-white">
                        {/* <div  className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div> */}
                        <div className="block lg:hidden drawer lg:w-max w-max z-50">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className=" drawer-content cursor-pointer">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="z-50  cursor-pointer">
                                    <Hamburger toggled={isOpen} toggle={setOpenMenu} size={23} duration={0.6} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label onClick={() => setOpenMenu(false)} htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <motion.ul

                                    className="menu p-4 w-56 md:w-80 min-h-full bg-primary text-white space-y-2 rounded-lg z-40 navbarUl">
                                    {navNavLinksForDrawer}

                                </motion.ul>
                            </div>
                        </div>

                    </div>
                    {/* laptop view  */}
                    <div className="text-sm hidden lg:flex ">
                        <div className='flex justify-center items-center pt-1 mr-8'>
                            <img src="https://i.ibb.co/9V0WwCN/logo.webp" className='shadow-lg w-14
                    p-2 bg-white rounded-2xl ' alt="" />
                        </div>

                        <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center font-bold navbarUl gap-x-4 gap-y-1">
                            {navNavLinks}
                        </nav>
                    </div>
                </div>


            </div>

        </div>


    );
};
export default Navbar;
