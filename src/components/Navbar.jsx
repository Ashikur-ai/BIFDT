import { Link } from "react-router-dom";

const Navbar = () => {


    const navlinks =
        <>
            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Home</Link>
            <Link to="/courseDetails" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Our Courses</Link>

            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">About Us</Link>

            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Fashion Design</Link>
            <Link to="/courseDetails" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Merchandising</Link>
            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Pattern Design</Link>
            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Graphics & Web Design</Link>


            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Interior Design</Link>
            <Link to="/courseDetails" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Leather Design</Link>
            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Computer Operator</Link>
            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Online Admission</Link>

            <Link to="/" className="mr-5 hover:text-gray-900  focus:text-white focus:underline">Free Seminar</Link>

        </>
    return (
        <>
            <div className="navbar  bg-pink-600 text-white sticky top-0 z-10">
                <div className="">
                    {/* Mobile view  */}
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-pink-700 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box"
                        >
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}

                            {navlinks}
                        </ul>
                    </div>
                    {/* laptop view  */}
                    <div className="text-sm hidden lg:flex">

                        <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center">

                            {navlinks}
                        </nav>
                    </div>
                </div>


            </div>
        </>
    );
};
export default Navbar;
