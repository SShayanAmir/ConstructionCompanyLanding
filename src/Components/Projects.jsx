import React from "react";
import Card from "./Card";

import Button from "../Components/Button.jsx";

function Projects({ ProjectTitle, cardInfo }) {
  return (
    <div className="container-fluid px-0 py-6">
      <div className="d-flex justify-content-center">
        <h1 className="text-center text-Rubik fw-bold fs-1 text-black custom-underline-center">
          {ProjectTitle}
        </h1>
      </div>
      <div className="row justify-content-center mt-5 gap-4">
        {cardInfo.map((cardInfo) => {
          return (
            <div className="col-12 col-md-auto">
              <Card {...cardInfo} />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <Button
          buttonText={"VIEW ALL"}
          isJustifyCenter={true}
          mainButtonColor={"#1F1F1F"}
          maxWidth={"210px"}
        />
      </div>
    </div>
  );
}

export default Projects;
