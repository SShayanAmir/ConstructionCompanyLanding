import React from "react";

function AboutText({ AboutTextData }) {
  return (
    <div className="row justify-content-center py-7 gap-3 gap-lg-0 bg-white">
      {AboutTextData.title && (
        <div className="col-12">
          <h1 className="text-Rubik fw-bold fs-1 text-black custom-underline-center text-center d-flex justify-content-center ">
            {AboutTextData.title}
          </h1>
        </div>
      )}
      <div
        style={{ lineHeight: "27px" }}
        className={`col-12 col-lg-5 ps-lg-5 ${
          AboutTextData.title && "mt-6"
        } text-OpenSans fw-normal fs-15px text-gray text-center text-lg-start`}
      >
        <p className="mb-0">{AboutTextData.leftColText1}</p>
        <p>{AboutTextData.leftColText2}</p>
      </div>
      <div
        style={{ lineHeight: "27px" }}
        className={`col-12 col-lg-5 ps-lg-5 ${
          AboutTextData.title && "mt-6"
        } text-OpenSans fw-normal fs-15px text-gray text-center text-lg-start`}
      >
        <p className="mb-0">{AboutTextData.rightColText1}</p>
        <p>{AboutTextData.rightColText2}</p>
        <p>{AboutTextData.rightColText3}</p>
      </div>
    </div>
  );
}

export default AboutText;
