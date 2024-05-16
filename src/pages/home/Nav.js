import React from "react";
import { FaHome, FaSearch, FaSignInAlt, FaCartPlus, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loggedUser, logoutUser } from "../../store/slices/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";

function Nav() {
  const loginUser = useSelector(loggedUser)
  const dispatch = useDispatch()

  return (
    <>
      <div class="container">
        <div class="nav">
          <div class="logo">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo-03.png"} alt="LOGO" />
          </div>
          <div class="menuBar">
            <ul class="menuBar-links">
              <li >
                <Link to='/home' className="link home" >
                  <FaHome className="home-icon" />
                  Home
                </Link>
              </li>
              <li class="menuLink">
                <Link to='/shop' className="link menuLink" >
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/products' className="link menuLink" >
                  Features
                </Link>
              </li>
              <li>
                <Link to='/blog' className="link menuLink" >
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/about' className="link menuLink" >
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className="link menuLink" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <div class="searchBar">
            <input type="text" class="searchBox" />
            <FaSearch />
          </div> */}
          <div class="loginArea">
            <Link to='/login' class="login">
              {loginUser.username != '' ? loginUser.name : <FaSignInAlt />}
            </Link>
            <Link to='/logout' class="login" >
              <FaSignOutAlt />
            </Link>
            <Link to='/cart' class="login">
              <FaCartPlus />
            </Link>
            <Link to='/admin' class="login">
              <MdAdminPanelSettings />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;