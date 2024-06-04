import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navbar  bg-pink-600 text-white sticky top-0">
                <div className="navbar-start">

                    {/* Mobile view  */}
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu bg-pink-700 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}

                            <li><Link className="">Home</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Fashion Design</Link></li>
                            <li><Link>Graphics and Web Design</Link></li>
                            <li><Link>Free Seminar</Link></li>
                            <li><Link>Online Admission</Link></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Laptop view  */}
                    <ul className="menu menu-horizontal">

                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-pink-700">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">About Us</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Fashion Design</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Merchandising</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Pattern Design</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Graphics and Web Design</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Interior Design</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Leather Design</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Computer Operator</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Online Admission</Link>
                        </li>

                        <li>
                            <Link to="/" className="hover:underline active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white">Free Seminar</Link>
                        </li>
                        

                       

                        
                        
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    )
};
export default Navbar;