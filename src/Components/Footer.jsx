import React, { useState } from "react";

import Facebook from "../assets/Footer/facebook.svg";
import Linkedin from "../assets/Footer/linkedin.svg";
import Twitter from "../assets/Footer/twitter.svg";
import Subtract from "../assets/Footer/Subtract.svg";
import Phone from "../assets/Footer/phone.svg";
import Mail from "../assets/Footer/mail.svg";

import { useLocation } from "react-router-dom";

function Footer() {
  const [buttonHover, setButtonHover] = useState(false);

  const location = useLocation();
  const isPortfolioPage = location.pathname === "/Portfolio";

  const buttonStyle = {
    backgroundColor: buttonHover ? "white" : "transparent",
    color: buttonHover ? "#FFB400" : "white",
    border: `5px solid white`,
    maxWidth: "210px",
    width: "100%",
  };

  return (
    <div className="container-fluid bg-yellow">
      {isPortfolioPage && (
        <div className="pt-5 py-lg-5">
          <h1 className="text-Rubik fw-bold fs-50px text-black text-center">
            Have a Project in Mind?
          </h1>
          <h1 className="text-Rubik fw-bold fs-50px text-black text-center">
            Let’s Get Building!
          </h1>
        </div>
      )}
      <div className="row">
        <div
          style={{ "--background-color": "black" }}
          className="col-12 col-lg-6 bg-yellow px-2 px-sm-5 px-xl-7 py-6"
        >
          <h1
            style={{ "--underline-bottom": "-40%" }}
            className="mt-3 text-Rubik fw-bold fs-1 text-black custom-underline-left d-flex justify-content-center justify-content-lg-start"
          >
            Contact Us
          </h1>
          <div className="row mt-5">
            <div className="col-6">
              <input
                className="form-control rounded-0 border-0 shadow-none ps-4 py-3"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="col-6">
              <input
                className="form-control rounded-0 border-0 shadow-none ps-4 py-3"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <textarea
            className="form-control rounded-0 border-0 shadow-none ps-4 pb-7 mt-3 pt-3"
            type="text"
            placeholder="Message"
          />
          <div className="d-flex justify-content-center justify-content-lg-end mt-3">
            <button
              onMouseOver={() => setButtonHover(true)}
              onMouseOut={() => setButtonHover(false)}
              style={buttonStyle}
              className={`btn rounded-0 text-Rubik fs-14px fw-600 py-2`}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-6 bg-white px-0 pb-6">
          <div className="bg-black d-flex justify-content-center py-5 gap-6">
            <img src={Facebook} alt="" className="img-fluid" />
            <img src={Twitter} alt="" className="img-fluid" />
            <img src={Linkedin} alt="" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column gap-4 mt-5">
              <div className="d-flex align-content-center justify-content-center justify-content-lg-start gap-2">
                <img src={Subtract} alt="" />
                <p className="text-Rubik fw-medium fs-15px mb-0 col-9 col-sm-12 text-center text-lg-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="d-flex align-content-center justify-content-center justify-content-lg-start gap-2">
                <img src={Phone} alt="" />
                <p className="text-Rubik fw-medium fs-15px mb-0">
                  +00 123 456 78
                </p>
              </div>
              <div className="d-flex align-content-center justify-content-center justify-content-lg-start gap-2">
                <img src={Mail} alt="" />
                <p className="text-Rubik fw-medium fs-15px mb-0 ">
                  constractioninc@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
