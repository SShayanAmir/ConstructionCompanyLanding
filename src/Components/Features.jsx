import React from "react";
import Button from "./Button";
import FeatureLeftPanelText from "./FeatureLeftPanelText";
import StatsSection from "./StatsSection";
import OnlineEstimatePrompt from "./OnlineEstimatePrompt";

function Features({
  FeatureImageLeft,
  FeatureImageRight,
  text1,
  text2,
  text3,
  text4,
  text5,
  buttonText,
  isStats,
  isStatsRow2,
  colAboveLarge,
  leftPanelBackgroundColor,
  icon,
  leftSidePanelData,
  sidePanelButtonText,
  mainButtonColor,
  statsData,
  statsData2,
  onlineEstimatePromptData,
}) {
  return (
    <div className="container-fluid px-0">
      <div className="row">
        {/* FEATURE IMAGE */}
        <div
          className={`col-12 col-lg-${colAboveLarge} col-xl-4 ${
            FeatureImageLeft ? "px-0" : ""
          } bg-${leftPanelBackgroundColor}`}
        >
          {FeatureImageLeft ? (
            <img
              src={FeatureImageLeft}
              className="w-100 h-100 object-fit-cover"
              alt=""
            />
          ) : (
            <FeatureLeftPanelText
              icon={icon}
              buttonText={sidePanelButtonText}
              mainButtonColor={mainButtonColor}
              data={leftSidePanelData}
            />
          )}
        </div>

        {/* PROJECT */}
        <div
          className={`col-12 col-lg bg-lightGray d-flex flex-column ${
            !isStatsRow2 && "justify-content-between"
          }`}
        >
          {FeatureImageRight ? (
            <div className="row">
              <img
                src={FeatureImageRight}
                className="w-100 h-100 object-fit-cover px-0"
                alt=""
              />
            </div>
          ) : (
            <div className="row ps-lg-6 ms-xl-3  pt-xxl-4">
              <div className="col-12 mt-6 d-flex">
                <h1 className="custom-underline-left text-Rubik fw-bold fs-1 text-black text-center text-lg-start mx-auto mx-lg-0">
                  No Project Too Big Or Too Small
                </h1>
              </div>
              <div className="col-12">
                <div className="row justify-content-center justify-content-lg-start mt-6 gap-5">
                  <div className="col-12 col-lg-5">
                    <p className="text-OpenSans fw-normal fs-15px text-gray pe-xxl-3 lh-lg text-center text-lg-start">
                      {text1} <br />
                      {text2}
                    </p>
                    <p className="text-OpenSans fw-normal fs-15px text-gray pe-xxl-3 mt-4 lh-lg text-center text-lg-start">
                      {text3}
                    </p>
                  </div>
                  <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
                    <p className="text-OpenSans fw-normal fs-15px text-gray lh-lg text-center text-lg-start">
                      {text4} <br />
                      {text5}
                    </p>
                    {buttonText && (
                      <div className="mb-3">
                        <Button
                          buttonText={buttonText}
                          mainButtonColor={"#1F1F1F"}
                          maxWidth={"210px"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STATS */}
          {isStats ? (
            <div className={`row mt-${FeatureImageRight ? "0" : "5"} mt-xl-0`}>
              <StatsSection {...statsData} />

              {isStatsRow2 && <StatsSection {...statsData2} />}
            </div>
          ) : (
            <OnlineEstimatePrompt {...onlineEstimatePromptData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
