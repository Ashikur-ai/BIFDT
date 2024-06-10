import { Link } from "react-router-dom";

const Navbar = () => {


    const navlinks =
        <>
            <Link to="/" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Home</Link>

            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Courses</Link>



            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Fashion Design</Link>

            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Merchandising</Link>

            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Pattern Design</Link>

            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Graphics & Web Design</Link>


            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Interior Design</Link>

            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Leather Design</Link
            >
            <Link to="/courseDetails" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Computer Operator</Link>

            <Link to="/blogs" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Blogs</Link>

            <Link to="/onlineAdmission" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Online Admission</Link>

            <Link to="/freeSeminar" className="mr-3 hover:text-black active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white focus:rounded-lg focus:p-2">Free Seminar</Link>

        </>
    return (
        <>
            <div className="navbar shadow-2xl bg-pink-600 text-white sticky top-0 z-10">
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
                    <div className="text-sm hidden lg:flex px-10">

                        <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center font-bold">

                            {navlinks}
                        </nav>
                    </div>
                </div>


            </div>
        </>
    );
};
export default Navbar;
