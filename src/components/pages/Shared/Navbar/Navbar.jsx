import React from "react";
import { FaFeatherPointed } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const lis = 
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>My Bookings</a>
      </li>
    </>
  ;
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start justify-between lg:justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#175C62] font-bold"
            >
                {lis}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-[#175C62] normal-case text-xl p-0 ">
           InnerJoy<FaFeatherPointed className="text-green-500"></FaFeatherPointed>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#175C62] font-bold">
            {lis}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-[#175C62] hover:bg-green-500">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
