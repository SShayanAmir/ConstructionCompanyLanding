import React from "react";
import Button from "./Button";

function FeatureLeftPanelText({ icon, buttonText, mainButtonColor, data }) {
  return (
    <div
      className={`ps-lg-5 pe-lg-3 pt-7 pb-lg-3 pb-xxl-${
        buttonText ? "6" : "9rem"
      }`}
    >
      <h1
        className={`text-Rubik fw-bold fs-2 text-black text-center text-lg-start`}
      >
        Only the Best
      </h1>

      <div className="row justify-content-center justify-content-lg-start gap-3">
        {data.map((data) => {
          return (
            <div className="col-md-7 col-lg-12">
              <div className="d-flex mt-4">
                <div>
                  <img src={icon} className="" alt="" />
                </div>
                <div className="ps-3">
                  <h1 className="text-Rubik fw-medium fs-18px text-black">
                    {data.title}
                  </h1>
                  <p
                    style={{ lineHeight: "27px" }}
                    className="text-OpenSans fw-normal fs-15px col-lg-10"
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="col-md-7 col-lg-12">
          <div className="d-flex mt-5">
            <div>
              <img src={icon} className="" alt="" />
            </div>
            <div className="ps-3">
              <h1 className="text-Rubik fw-medium fs-18px text-black">
                {data[1].title}
              </h1>
              <p
                style={{ lineHeight: "27px" }}
                className="text-OpenSans fw-normal fs-15px col-lg-10"
              >
                {data[1].description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-12">
          <div className="d-flex mt-4">
            <div>
              <img src={icon} className="" alt="" />
            </div>
            <div className="ps-3">
              <h1 className="text-Rubik fw-medium fs-18px text-black">
                {data[2].title}
              </h1>
              <p
                style={{ lineHeight: "27px" }}
                className="text-OpenSans fw-normal fs-15px col-lg-10"
              >
                {data[2].description}
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {buttonText && (
        <div className="pb-5 pb-lg-0 pt-4 pt-xl-5 pt-xxl-6 mt-xxl-7 pe-lg-4">
          <Button
            buttonText={buttonText}
            mainButtonColor={mainButtonColor}
            maxWidth={"230px"}
            isJustifyEnd={true}
          />
        </div>
      )}
    </div>
  );
}

export default FeatureLeftPanelText;
