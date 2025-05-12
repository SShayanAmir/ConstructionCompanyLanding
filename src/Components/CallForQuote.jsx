import React from "react";

import Button from "./Button";
import AboutList from "./AboutList";
import OnlineEstimatePrompt from "./OnlineEstimatePrompt";

function CallForQuote({
  title,
  description,
  buttonText,
  mainButtonColor,
  image,
  isAboutList,
  AboutListTextColor,
  AboutListTitle,
  onlineEstimatePromptData,
}) {
  return (
    <div className="row d-flex">
      <div
        style={{ backgroundColor: "#2A2A2A", maxWidth: "430px" }}
        className="col-12 col-lg-4 px-lg-5 ps-3 pe-3 py-6 unsetMaxWidth position-relative z-2"
      >
        {isAboutList ? (
          <AboutList title={AboutListTitle} textColor={AboutListTextColor} />
        ) : (
          <>
            {" "}
            <h1
              style={{ lineHeight: "50.4px", "--underline-bottom": "-30%" }}
              className="text-Rubik fw-bold fs-1 text-white custom-underline-left d-flex justify-content-center justify-content-lg-start text-center text-lg-start"
            >
              {title}
            </h1>
            <p
              style={{ lineHeight: "27px" }}
              className="text-OpenSans fw-normal fs-15px text-white mt-6 pt-4 pe-lg-4 text-center text-lg-start"
            >
              {description}
            </p>
            <div className="mt-5">
              <Button
                buttonText={buttonText}
                mainButtonColor={mainButtonColor}
                maxWidth={"210px"}
              />
            </div>{" "}
          </>
        )}
      </div>

      <div className="d-flex flex-column col-12 col-lg px-0">
        <div>
          <img
            src={image}
            style={{ cursor: "pointer" }}
            className="w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>
        <OnlineEstimatePrompt {...onlineEstimatePromptData} />
      </div>
    </div>
  );
}

export default CallForQuote;
