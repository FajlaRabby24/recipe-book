import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { CiLight } from "react-icons/ci";
import logo from "../assets/images/logo.png";
import { MdDarkMode } from "react-icons/md";

const links = (
  <div className="flex items-center gap-4">
    <li>
      <NavLink className={"font-semibold"} to={"/"}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className={"font-semibold"} to={"/all-recipe"}>
        All recipe
      </NavLink>
    </li>
    <li>
      <NavLink className={"font-semibold"} to={"/add-recipe"}>
        Add recipe
      </NavLink>
    </li>
    <li>
      <NavLink className={"font-semibold"} to={"/my-recipe"}>
        My recipe
      </NavLink>
    </li>
  </div>
);

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className="navbar   max-w-7xl mx-auto items-center ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1">
          <img className="w-[40px]" src={logo} alt="logo" />
          <h1 className="text-2xl font-semibold">Recipe Book</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {isDark ? (
          <button>
            <MdDarkMode className="cursor-pointer " size={25} />
          </button>
        ) : (
          <button>
            <CiLight className="cursor-pointer" size={25} />
          </button>
        )}
        <Link to={"/login"}>
          <button className="btn ">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn ">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
