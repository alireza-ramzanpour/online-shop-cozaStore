import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import "../../assets/style.css"
import { allMenus } from "../../store/slices/MenuSlice";
import { allGroups } from "../../store/slices/MenuSlice";
import { useSelector } from "react-redux";
import { loggedUser } from "../../store/slices/UsersSlice";


function Admin() {

    const menus = useSelector(allMenus)
    const groups = useSelector(allGroups)
    const loginUser = useSelector(loggedUser)
    const [newMenu, setNewMenu] = useState([])

    useEffect(() => {

        let filteredGroup = groups.filter((group) => loginUser.groups.includes(group.name)).map((g) => g.menus).flat()
        let newGroup = [...new Set(filteredGroup)];
        setNewMenu(newGroup)

    }, [menus, loginUser])

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
                            {
                                newMenu.map((item) => {
                                    const filteredMenu = menus.find(menu => menu.name == item);
                                    if (filteredMenu) {
                                        return (
                                            <Link to={filteredMenu.path} className='menu-link item'>
                                                <span>{filteredMenu.name}</span>
                                            </Link>
                                        )
                                    }
                                })
                            }
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