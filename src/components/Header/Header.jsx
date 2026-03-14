import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navLink = (
    <>
      <ul className="flex flex-col md:flex-row items-center gap-8 text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border py-2 px-4 border-green-400 rounded-lg text-green-600"
                : "border py-2 px-4 border-transparent"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "border py-2 px-4 border-green-400 rounded-lg text-green-600"
                : "border py-2 px-4 border-transparent"
            }
          >
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages-to-read"
            className={({ isActive }) =>
              isActive
                ? "border py-2 px-4 border-green-400 rounded-lg text-green-600"
                : "border py-2 px-4 border-transparent"
            }
          >
            Pages to Read
          </NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <nav>
      <div className="container mx-auto px-3 md:px-0">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Book <span className="text-green-600">Shop</span>
          </h1>
          <div className="hidden md:inline-flex">{navLink}</div>
          <div className="flex items-center gap-2 md:gap-5">
            <button className="bg-green-500 text-white btn">Sign In</button>
            <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
            {/* Hamberger Menu */}
            <div className="md:hidden">
              {toggle ? (
                <X size={26} onClick={() => setToggle(!toggle)} />
              ) : (
                <Menu size={26} onClick={() => setToggle(!toggle)} />
              )}
            </div>
            {/* Mobile Menu */}
            <div
              onClick={() => setToggle(false)}
              className={`${toggle ? "translate-x-0" : "translate-x-100"} fixed top-16 rounded-l-lg right-0 w-2/3 bg-green-100 flex flex-col h-fit items-center gap-4 py-6 md:hidden transition-transform text-black duration-300 z-50`}
            >
              {navLink}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
