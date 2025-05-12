import React from "react";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import Cart from "../assets/cart.svg";

function Navbar() {
  return (
    <div className="navbar navbar-expand-xl bg-white px-3 px-xl-4 py-4">
      <div className="container-fluid ">
        <Link to="/" className="text-decoration-none col-6 col-sm-auto">
          <h1 className="text-Poppins fw-600 text-black fs-4 mb-0">
            Construction Company Landing
          </h1>
        </Link>
        <button
          data-bs-toggle="collapse"
          data-bs-target="#CollapsableNavbar"
          type="button"
          className="navbar-toggler border-0"
        >
          <FaBars size={40} />
        </button>
        <div
          id="CollapsableNavbar"
          className="nav justify-content-end me-4 collapse navbar-collapse gap-4 align-content-center"
        >
          <Link to="/Project" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Project
            </p>
          </Link>
          <Link to="/Blog" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Blog
            </p>
          </Link>
          <Link to="/Portfolio" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Portfolio
            </p>
          </Link>
          <Link to="/Service" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Service
            </p>
          </Link>
          <Link to="/Services" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Services
            </p>
          </Link>
          <Link to="/Contact" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Contact
            </p>
          </Link>
          <Link to="/About" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              About
            </p>
          </Link>
          <Link to="/Home" className="text-decoration-none">
            <p className="text-Poppins fw-medium fs-14px text-black mb-0">
              Home
            </p>
          </Link>
          <Link to="/Cart" className="text-decoration-none">
            <img src={Cart} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
