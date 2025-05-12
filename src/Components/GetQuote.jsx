import React from "react";

// BUTTON
import Button from "../Components/Button.jsx";

function GetQuote({
  MainText,
  MainTextColor,
  SecondaryText,
  buttonText,
  mainButtonColor,
  shadow,
  justifyContent,
}) {
  return (
    <div className="container-fluid px-0">
      <div
        className={`row bg-white gap-4 gap-xl-0 py-5 py-lg-5 z-1 position-relative justify-content-${justifyContent} ${
          shadow && "shadow-lg"
        }`}
      >
        <div className="col-12 col-lg-7 col-xl-6 ps-xl-5 align-content-center">
          <h1
            className={`text-Rubik text-${MainTextColor} fs-1 fw-bold text-center text-lg-start mb-0`}
          >
            {MainText}
          </h1>
          {SecondaryText && (
            <h1
              className={`text-Rubik text-black fs-3 fw-medium text-center text-lg-start mt-4`}
            >
              {SecondaryText}
            </h1>
          )}
        </div>
        <div className="col-12 col-lg-3 align-content-center">
          <Button
            buttonText={buttonText}
            mainButtonColor={mainButtonColor}
            maxWidth={"230px"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetQuote;
