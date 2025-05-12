import React from "react";
import Button from "./Button";

function OnlineEstimatePrompt({
  MainText1,
  MainText2,
  buttonText,
  mainButtonColor,
  leftColBgColor,
  RightColBgColor,
  isSetHeightTo100,
}) {
  return (
    <div className={`row ${isSetHeightTo100 && "h-100"}`}>
      <div
        className={`col-12 col-sm-6 bg-${leftColBgColor} d-flex flex-column justify-content-center py-4 px-4 ps-lg-5 pe-lg-0`}
      >
        <h1
          className={`text-Rubik fw-bold fs-3 text-${
            leftColBgColor === "black" ? "white" : "black"
          } text-center text-lg-start`}
        >
          {MainText1}
        </h1>
        <p
          className={`text-Rubik fw-medium fs-4 text-${
            leftColBgColor === "black" ? "white" : "black"
          } mb-0 text-center text-lg-start`}
        >
          {MainText2}
        </p>
      </div>
      <div
        className={`col-12 col-sm-6 bg-${RightColBgColor} py-4 px-4 px-lg-0 align-content-center`}
      >
        <Button
          isJustifyCenter={true}
          buttonText={buttonText}
          mainButtonColor={mainButtonColor}
          maxWidth={"245px"}
        />
      </div>
    </div>
  );
}

export default OnlineEstimatePrompt;
