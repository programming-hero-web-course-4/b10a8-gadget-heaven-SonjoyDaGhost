import { NavLink, useLocation } from "react-router-dom";

// import { FaCartArrowDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
    let atHome;
    const { pathname } = useLocation();
    if (pathname.includes('/category') || pathname === '/') {
        atHome = true;

    }
    else {
        atHome = false;
    }
    return (
        <div className={`navbar px-5 pt-4 mt-2 ${atHome ? "bg-[#9538E2] rounded-t-xl" : "bg-base-100"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>

                        </li>
                        <li>

                            <NavLink to={'/blogs'}>Blogs</NavLink>
                        </li>
                        <li>

                            <NavLink to={'/dashboard'}>Dashboard</NavLink>
                        </li>

                    </ul>
                </div>
                <NavLink to={'/'}><a className="btn btn-ghost text-xl">Gadget Heaven</a></NavLink>
                {/* <a className="btn btn-ghost text-xl">Gadget Heaven</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>

                    </li>
                    <li>

                        <NavLink to={'/blogs'}>Blogs</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to={'/dashboard/cart'} className="text-2xl rounded-[50%] bg-gray-300 p-2 mr-2">
                    
                        <FaCartArrowDown />

                   
                </NavLink>
                <NavLink to={'/dashboard/wishlist'} className="text-2xl rounded-[50%] bg-gray-300 p-2">
                   
                        <FaHeart />
                    
                </NavLink>

            </div>
        </div>
    );
};

export default Navbar;