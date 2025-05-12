import React from "react";

function HeroSectionSidePanel({
  icon,
  title,
  description,
  descriptionLine2,
  backgroundColor,
  descriptionColor,
  isCenterOnSmallScreen,
}) {
  return (
    <li className="row mx-auto mx-lg-0">
      {
        <div
          className={`col-auto ${
            icon ? "d-flex" : "d-lg-flex d-none"
          } align-content-center`}
        >
          <img className="img-fluid" src={icon} alt="" />
        </div>
      }

      <div className="col px-0">
        <p
          className={`text-Rubik fw-bold fs-6 text-${
            backgroundColor === "transparent" ? "white" : "black"
          } mb-0 text-${
            isCenterOnSmallScreen ? "center" : "start"
          } text-lg-start`}
        >
          {title}
        </p>
        <p
          style={{ lineHeight: "27px" }}
          className={`text-OpenSans fw-normal fs-15px text-${descriptionColor} mb-0 mt-2 pe-lg-5 text-${
            isCenterOnSmallScreen ? "center" : "start"
          } text-lg-start`}
        >
          {description}
        </p>
        {descriptionLine2 && (
          <p
            style={{ lineHeight: "27px" }}
            className={`text-OpenSans fw-normal fs-15px text-${descriptionColor} mb-0 mt-2 text-${
              isCenterOnSmallScreen ? "center" : "start"
            } text-lg-start`}
          >
            {descriptionLine2}
          </p>
        )}
      </div>
    </li>
  );
}

export default HeroSectionSidePanel;
