import React from "react";

// BUTTON
import Button from "./Button.jsx";

function HeroSectionBanner({
  title,
  description,
  buttonText,
  mainButtonColor,
  col,
  isMonarchProject,
  DesCol,
  isContentCenter,
}) {
  return (
    <div
      className={`row d-flex justify-content-center justify-content-lg-${
        isContentCenter ? "center" : "start"
      } ${!isContentCenter && "ps-lg-7 ms-xl-4"}`}
    >
      <div
        className={`col-12 ${
          col !== 12 && `col-lg-${Number(col) + 1}`
        } col-xxl-${col} px-lg-0 align-self-center ps-xl-${
          !isContentCenter && "5"
        }`}
      >
        {title && (
          <div
            className={`d-flex justify-content-center justify-content-lg-${
              isContentCenter ? "center" : "start"
            }`}
          >
            <h1
              className={`text-Rubik text-center text-lg-${
                isContentCenter ? "center" : "start"
              } fs-64px fw-bold text-white ${
                isContentCenter
                  ? "custom-underline-top-left"
                  : "custom-border-left"
              } mb-0 ps-2 ps-lg-4 py-2`}
            >
              {title}
            </h1>
          </div>
        )}
        {description && (
          <div
            className={`d-flex justify-content-center justify-content-lg-${
              isContentCenter ? "center" : "start"
            }`}
          >
            <p
              className={`text-OpenSans text-center text-lg-${
                isContentCenter ? "center" : "start"
              } fs-22px fw-normal text-white mt-4 mb-0 ps-lg-1 col-xxl-${DesCol}`}
            >
              {description}
            </p>
          </div>
        )}

        {buttonText && (
          <div className={` mt-5 pt-3 ps-lg-1`}>
            <Button
              buttonText={buttonText}
              mainButtonColor={mainButtonColor}
              maxWidth={"230px"}
              isJustifyCenter={isContentCenter}
            />
          </div>
        )}
      </div>

      {isMonarchProject && (
        <div className="col-12 col-lg-3 d-flex text-OpenSans fs-16 text-white ps-lg-5 mt-7 mt-lg-0">
          <div className="mx-auto mx-lg-0">
            <p className="text-center text-lg-start">
              <span className="fw-600">Date: </span>12 April 2018
            </p>
            <p className="text-center text-lg-start">
              <span className="fw-600">Client: </span>Monarch Group
            </p>
            <p className="text-center text-lg-start">
              <span className="fw-600">Project Type:</span> Building Renovation
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSectionBanner;
