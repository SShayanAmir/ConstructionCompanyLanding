import React from "react";

import Star from "../assets/Star 1.svg";

function TestimonialCard() {
  return (
    <div
      style={{ maxWidth: "311px" }}
      className="col-12 col-sm-auto bg-white p-4"
    >
      <div className="d-flex justify-content-center mt-4 gap-1">
        <img src={Star} alt="" draggable="false" />
        <img src={Star} alt="" draggable="false" />
        <img src={Star} alt="" draggable="false" />
        <img src={Star} alt="" draggable="false" />
        <img src={Star} alt="" draggable="false" />
      </div>
      <p
        style={{ lineHeight: "27px" }}
        className="text-OpenSans fw-normal fs-15px text-gray text-center text-lg-start mt-5 ps-2 pe-lg-3"
      >
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
        dignissim tristique tellus sed faucibus nullam.”
      </p>
      <h1 className="text-Rubik fw-medium fs-6 text-black text-center text-lg-start py-3 ps-2">
        John Smith
      </h1>
    </div>
  );
}

export default TestimonialCard;
