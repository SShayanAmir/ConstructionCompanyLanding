import React, { useState } from "react";
import Button from "./Button";
import Accordian from "./Accordian";

function GetInTouch({
  title,
  description,
  Questions,
  buttonText,
  mainButtonColor,
  buttonMaxWidth,
  isContactPage,
}) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center gap-5 gap-lg-4 pt-3 pb-6">
        <div
          className={`col-12 col-lg-${isContactPage ? "5" : "3"} pb-4 pb-lg-6`}
        >
          {isContactPage ? (
            <>
              <h1 className="text-Rubik fw-bold fs-1 text-black custom-underline-left d-flex justify-content-center justify-content-lg-start">
                Get In Touch
              </h1>
              <input
                type="text"
                className="form-control rounded-0 border-0 shadow-none ps-3 py-3 mt-7"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control rounded-0 border-0 shadow-none ps-3 py-3 mt-3"
                placeholder="Email"
              />
              <textarea
                type="text"
                style={{ paddingBottom: "90px" }}
                className="form-control rounded-0 border-0 shadow-none ps-3 pt-3 mt-3"
                placeholder="Message"
              />
              <div className="mt-4 pt-3">
                <Button
                  buttonText={"SEND MESSAGE"}
                  mainButtonColor={"#2A2A2A"}
                  maxWidth={"210px"}
                  isJustifyEnd={true}
                />
              </div>
            </>
          ) : (
            <>
              <h1
                style={{ "--underline-bottom": "-30%" }}
                className="text-Rubik fw-bold fs-1 text-black custom-underline-left d-flex justify-content-center justify-content-lg-start text-center text-lg-start"
              >
                {title}
              </h1>
              <p
                style={{ lineHeight: "27px" }}
                className="text-OpenSans fw-normal fs-15px mt-6 col-lg-11 text-center text-lg-start"
              >
                {description}
              </p>
              <div className="mt-5">
                <Button
                  buttonText={buttonText}
                  mainButtonColor={mainButtonColor}
                  maxWidth={buttonMaxWidth}
                />
              </div>
            </>
          )}
        </div>

        {/* ACCORDIAN */}
        <div style={{ maxWidth: "650px" }} className="col-12 col-lg-6 px-0 ">
          <Accordian Questions={Questions} />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
