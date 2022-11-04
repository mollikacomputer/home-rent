import React from "react";
import { Link as NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mb-1">
                <NavLink to="/about"> About </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/service">Our Service</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            etshomerent
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-1">
              <NavLink to="/about"> About </NavLink>
            </li>
            <li className="mr-1">
              <NavLink to="/service">Our Service</NavLink>
            </li>
            <li className="mr-1">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="mr-1">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/register" className="btn">
            Get started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
