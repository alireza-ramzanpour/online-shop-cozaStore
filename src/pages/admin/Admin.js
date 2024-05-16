import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { FaElementor } from "react-icons/fa6";
import { FaTableColumns } from "react-icons/fa6";
import { LuComponent } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import "../../assets/style.css"



function Admin() {


    return (
        <>
            <div className="nav-wrapper">
                <div className="left-nav">
                    <img src="/assets/images/logo-03.png" />
                </div>
                <div className="right-nav">
                    <div className='right-nav__box'>
                        <div className="searchBox">
                            <IoSearch className="fa" />
                            <input type="text" className="search-input" placeholder="Search here..." />
                        </div>
                        <div className="notification">
                            <div className="noti-box">
                                <FaRegBell className="fa" />
                            </div>
                            <div className="noti-box">
                                <FaRegEnvelope className="fa" />
                            </div>
                            <div className='profile-info'>
                                <h3 className="profile-username">Hello Alireza</h3>
                                <img src="/assets/images/Max-R_Headshot.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-wrapper">
                <div className="left-context">
                    <div className="menu">
                        <ul className="items">
                            <Link to='/admin/dashboard' className='menu-link'   >
                                <li className="item">
                                    <div className="icon-menu">
                                        <LuLayoutDashboard />
                                    </div>
                                    <span>Dashboard</span>
                                </li>
                            </Link>
                            <Link to='/admin/management' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <MdOutlineManageAccounts />
                                    </div>
                                    <span>Management</span>
                                </li>
                            </Link>
                            <Link to='/admin/pages' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <IoIosApps />
                                    </div>
                                    <span>Pages</span>
                                </li>
                            </Link>
                            <Link to='/admin/applications' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <IoApps />
                                    </div>
                                    <span>Applications</span>
                                </li>
                            </Link>
                            <Link to='/admin/elements' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <FaElementor />
                                    </div>
                                    <span>Elements</span>
                                </li>
                            </Link>
                            <Link to='/admin/forms' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <FaTableColumns />
                                    </div>
                                    <span>Forms</span>
                                </li>
                            </Link>
                            <Link to='/admin/components' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <LuComponent />
                                    </div>
                                    <span>Components</span>
                                </li>
                            </Link>
                            <Link to='/admin/clothes' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <GiClothes />
                                    </div>
                                    <span>Clothes</span>
                                </li>
                            </Link>
                            <Link to='/admin/users' className='menu-link'>
                                <li className="item">
                                    <div className="icon-menu">
                                        <FaUsers />
                                    </div>
                                    <span>Users</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="right-context">
                    <div className="page-wrapper">
                        {/* <div className='page-wrapper__box'> */}
                        <div className='page-wrapper__row'>
                            <Outlet />
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Admin;