import React from "react";

function ConstructionServices({ icon, title, description }) {
  return (
    <div style={{ maxWidth: "350px" }} className="col-12 col-lg-auto d-flex">
      <div>
        <img src={icon} className="" />
      </div>
      <div className="ps-3">
        <h1 className="text-Rubik fw-bold fs-6 text-black">{title}</h1>
        <p
          style={{ lineHeight: "27px" }}
          className="text-OpenSans fw-normal fs-15px text-gray"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default ConstructionServices;
