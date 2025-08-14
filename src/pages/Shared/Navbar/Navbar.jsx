
import { NavLink } from 'react-router-dom';
import { GoGlobe } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuUser } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm dark:bg-white dark:text-black'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-lg text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <NavLink>Courses</NavLink>
                                <ul className="p-2">
                                    <li><NavLink>Web Design</NavLink></li>
                                    <li><NavLink>Web Development</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink>Tutor</NavLink></li>
                            <li><NavLink>Gallery</NavLink></li>
                            <li><NavLink>Pricing</NavLink></li>
                            <li><NavLink>About</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-xl"><img src="https://i.ibb.co.com/BKY4zpPs/islamic-logo-1-CMr35w-We.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-black px-1 text-lg">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li>
                            <details>
                                <summary><NavLink>Courses</NavLink></summary>
                                <ul className="p-2 md:w-52">
                                    <li><NavLink>Web Design</NavLink></li>
                                    <li><NavLink>Web Development</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink>Tutor</NavLink></li>
                        <li><NavLink>Gallery</NavLink></li>
                        <li><NavLink>Pricing</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1 text-lg dark:bg-white dark:text-black dark:border-none dark:shadow-2xl"><GoGlobe /> <IoMdArrowDropdown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 dark:bg-white dark:text-black shadow-sm">
                            <li><a>Bangla</a></li>
                            <li><a>English</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1 text-lg dark:bg-white dark:text-black dark:border-none dark:shadow-2xl"><LuUser /> <IoMdArrowDropdown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 dark:bg-white dark:text-black shadow-sm">
                            <li><a>Login</a></li>
                            <li><a>Registration</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;