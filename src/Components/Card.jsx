import React, { useState } from "react";

function Card({ image, title, description, buttonText }) {
  const [buttonHover, setButtonHover] = useState(false);

  const buttonStyles = {
    backgroundColor: buttonHover ? "#666666" : "transparent",
    border: buttonHover ? "1px solid transparent" : "1px solid #666666",
    color: buttonHover ? "white" : "#666666",
  };

  return (
    <div style={{ maxWidth: "293px" }} className="mt-2 unsetMaxWidth">
      <img className="img-fluid w-100" src={image} alt="" />
      <div className="border border-gray border-1 mt-3 px-4">
        <h1
          className="text-OpenSans fw-bold fs-15px text-black mt-5 text-center text-lg-start"
          style={{ letterSpacing: "2px" }}
        >
          {title}
        </h1>
        <p
          style={{ lineHeight: "27px", letterSpacing: "0.5px" }}
          className="text-OpenSans fw-normal fs-15px text-gray text-center text-lg-start mt-4 pe-lg-1"
        >
          {description}
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start mt-5 pb-3">
          <button
            onMouseOver={() => setButtonHover(true)}
            onMouseOut={() => setButtonHover(false)}
            style={buttonStyles}
            className="btn rounded-0 text-Rubik fw-bold fs-11px px-4"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
