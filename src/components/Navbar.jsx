import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowDropDown } from "react-icons/md";
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
    const NavLinkStyle = 'text-base hover:bg-[#414040] rounded-md py-[5px] hover:px-[10px] transition-all duration-300'
    const navNavLinks =
        <>
            <NavLink to="/" className="transition-all duration-300 mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Home</NavLink>



            <NavLink to="/aboutUs" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">About Us</NavLink>

            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Merchandising</NavLink>

            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Pattern Design</NavLink>

            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Graphics & Web Design</NavLink>


            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Interior Design</NavLink>

            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Leather Design</NavLink
            >
            <NavLink to="/courseDetails" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Computer Operator</NavLink>



            <NavLink to="/onlineAdmission" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Online Admission</NavLink>

            <NavLink to="/freeSeminar" className="mr-3 hover:text-black active:bg-[#f6861f] focus:outline-none focus:ring focus:ring-white/70 focus:text-white focus:rounded-lg focus:p-2">Free Seminar</NavLink>

        </>
    const navNavLinksForDrawer =
        <>
            <NavLink to="/" className={`${NavLinkStyle}`}>Home</NavLink>



            <NavLink to="/aboutUs" className={`${NavLinkStyle}`}>About Us</NavLink>
            <p onClick={handleDropdownToggle} className={`text-base hover:bg-[#414040] rounded-md py-[5px] hover:px-[10px] transition-all duration-300 flex justify-between items-center cursor-pointer ${isDropdownOpen && 'bg-[#414040] px-[10px]'}`}>Course
            <span className={` transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}><MdArrowDropDown /></span>
            </p>


            <div className={` rounded-md bg-[#c67d3a] flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'} gap-2`}>
                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Merchandising</NavLink>

                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Pattern Design</NavLink>

                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Graphics & Web Design</NavLink>


                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Interior Design</NavLink>

                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Leather Design</NavLink
                >
                <NavLink to="/courseDetails" className={`${NavLinkStyle}`}>Computer Operator</NavLink>
            </div>


           <NavLink to="/onlineAdmission" className={`${NavLinkStyle}`}>Online Admission</NavLink>

            <NavLink to="/freeSeminar" className={`${NavLinkStyle}`}>Free Seminar</NavLink>

        </>
    return (
        <>
            <div className="navbar shadow-2xl bg-[#f6861f] text-white sticky top-0 z-30">
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

                                    className="menu p-4 w-56 md:w-80 min-h-full bg-[#f6861f] text-white space-y-2 rounded-lg z-40 navbarUl">
                                    {navNavLinksForDrawer}

                                </motion.ul>
                            </div>
                        </div>

                    </div>
                    {/* laptop view  */}
                    <div className="text-sm hidden lg:flex px-10">

                        <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center font-bold">

                            {navNavLinks}
                        </nav>
                    </div>
                </div>


            </div>

        </>
    );
};
export default Navbar;
