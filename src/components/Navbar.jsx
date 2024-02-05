"use client";

import { Navbar } from "flowbite-react";
import logo from "../../public/img/brandlogo.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

function Navbarcomponent() {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-10 ">
      <Navbar fluid rounded className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="cursor-pointer ">
          {navLinks.map((link) => {
            return (
              <div
                key={link.id}
                className="active:text-color-primary-500 hover:text-color-primary-500 dark:text-white"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </div>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomponent;
