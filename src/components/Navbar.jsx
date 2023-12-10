import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="  flex justify-around items-center h-28 w-screen bg-slate-800 text-slate-100">
                <div className='text-4xl w-5'>
                    <h1>Logo</h1>

                </div>
                <div className="menu flex w-auto ">
                    <ul className='l flex gap-4'>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">
                               Sign Up
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>

            </div>


        </div>
    )
}

export default Navbar
