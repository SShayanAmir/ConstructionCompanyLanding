import React from "react";

function StatsSection({
  NumberLeftCol,
  DetailLeftCol,
  NumberRightCol,
  DetailRightCol,
  leftColBgColor,
  RightColBgColor,
}) {
  return (
    <>
      <div className={`col-12 col-sm-6 bg-${leftColBgColor} py-4`}>
        <h1
          className={`text-Rubik fw-bold fs-1 text-${
            leftColBgColor === "black" ? "white" : "black"
          } text-center`}
        >
          {NumberLeftCol}
        </h1>
        <h1
          className={`text-Rubik fw-bold fs-12px text-${
            leftColBgColor === "black" ? "white" : "black"
          } text-center`}
        >
          {DetailLeftCol}
        </h1>
      </div>
      <div className={`col-12 col-sm-6 bg-${RightColBgColor} py-4`}>
        <h1
          className={`text-Rubik fw-bold fs-1 text-${
            RightColBgColor === "black" ? "white" : "black"
          } text-center`}
        >
          {NumberRightCol}
        </h1>
        <h1
          className={`text-Rubik fw-bold fs-12px text-${
            RightColBgColor === "black" ? "white" : "black"
          } text-center`}
        >
          {DetailRightCol}
        </h1>
      </div>
    </>
  );
}

export default StatsSection;
