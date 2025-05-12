import React from "react";
import Button from "./Button";

function ServicesCard({ title, position }) {
  return (
    <div className={`row justify-content-${position}`}>
      <div className="col-12 col-lg-9 bg-lightGray pt-7 pb-5 ps-lg-6 ps-xl-9rem">
        <h1 className="text-Rubik fw-bold fs-1 text-black custom-underline-left d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
          {title}
        </h1>
        <p
          style={{ lineHeight: "27px" }}
          className="text-OpenSans fw-normal fs-15px mt-7 mt-lg-5 col-lg-11 text-center text-lg-start"
        >
          Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
          cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
          commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
          ultrices bibendum.
        </p>
        <div className="row ps-lg-4 gap-3 gap-md-0 mt-5 mt-md-0">
          <ul className="col-12 col-md ul-responsive-unstyled text-OpenSans fw-normal fs-15px text-center text-lg-start">
            <li>Lectus erat consectetur</li>
            <li>Eu sapien eget</li>
            <li>Rhoncus consectetur</li>
            <li>Proin cursus</li>
            <li>Dolor a mollis consectetur</li>
          </ul>
          <ul className="col-12 col-md ul-responsive-unstyled text-OpenSans fw-normal fs-15px text-center text-lg-start">
            <li>Risus dolor fermentum</li>
            <li>Massa a commodo</li>
            <li>Elit dui sit amet risus</li>
            <li>Maecenas ornare</li>
            <li>Nisl a tortor ultrices</li>
          </ul>
          <ul className="col-12 col-md ul-responsive-unstyled text-OpenSans fw-normal fs-15px text-center text-lg-start">
            <li>Bibendum nulla fermentum</li>
            <li>Metus quis sodales</li>
            <li>Tristique augue mauris</li>
            <li>Molestie augue non</li>
            <li>Feugiat ligula neque</li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-9">
        <div className="row">
          <div className="col-6 bg-black py-4">
            <Button
              buttonText={"GET A QUOTE"}
              mainButtonColor={"#FFFFFF"}
              maxWidth={"230px"}
              isJustifyCenter={true}
            />
          </div>
          <div className="col-6 bg-yellow py-4">
            <Button
              buttonText={"LEARN MORE"}
              mainButtonColor={"#FFFFFF"}
              maxWidth={"230px"}
              isJustifyCenter={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
