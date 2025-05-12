import React from "react";

function AboutList({ title, textColor }) {
  return (
    <div className="">
      <h1
        className={`d-flex justify-content-center justify-content-lg-start text-Rubik fw-bold fs-1 text-${
          textColor === "white" ? "white" : "black"
        } custom-underline-left`}
      >
        {title}
      </h1>
      <p
        style={{ lineHeight: "27px" }}
        className={`text-OpenSans fw-normal fs-15px text-${textColor} mt-7 text-center text-lg-start`}
      >
        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
        cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
        commodo elit dui sit amet risus.
      </p>
      <ul
        className={`text-OpenSans fw-normal fs-15px text-${textColor} text-center text-lg-start ul-responsive-unstyled mt-4 mt-lg-0`}
      >
        <li>Maecenas ornare nisl</li>
        <li>A tortor ultrices bibendum</li>
        <li>Nulla fermentum</li>
        <li>Metus quis</li>
        <li>Sodales tristique</li>
      </ul>
    </div>
  );
}

export default AboutList;
