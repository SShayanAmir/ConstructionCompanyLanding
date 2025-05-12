import React from "react";

import HeroSectionBanner from "../Components/HeroSectionBanner.jsx";
import HeroSectionSidePanel from "../Components/HeroSectionSidePanel.jsx";

function HeroSection({
  heroData,
  services,
  SidePanelHeading,
  sidePanelBackground,
  sidePanelHeadingColor,
  imageMaxWidth,
  isImageFull,
  paddingTop,
  paddingBottom,
}) {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.85)), url(${heroData.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxHeight: "100%",
    maxWidth: isImageFull === false && imageMaxWidth,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  };

  return (
    <div className={`container-fluid px-0`}>
      <div
        style={isImageFull === true ? backgroundImage : undefined}
        className="row"
      >
        <div
          style={isImageFull === false ? backgroundImage : undefined}
          className={`col-12 col-lg-${services ? "8" : "12"} col-xxl-${
            services ? (sidePanelBackground === "yellow" ? "9" : "8") : "12"
          } d-flex ${heroData.isContentCenter && "justify-content-center"}`}
        >
          <HeroSectionBanner {...heroData} />
        </div>
        {services && (
          <div className="col-12 col-lg px-0 d-flex">
            <div
              className={`bg-${sidePanelBackground} ${
                sidePanelBackground === "transparent" && "mt-6 mt-lg-0"
              } p-42px pb-4 ps-lg-4 flex-grow-1`}
            >
              <h1
                className={`text-Rubik fw-bold fs-2 text-${sidePanelHeadingColor} text-center text-lg-start ms-lg-4`}
              >
                {SidePanelHeading}
              </h1>
              <ul className="list-unstyled mt-4 pt-2 d-flex flex-column gap-6 gap-lg-5">
                {services.map((service, index) => {
                  return (
                    <HeroSectionSidePanel
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      descriptionColor={service.descriptionColor}
                      description={service.description}
                      descriptionLine2={service.descriptionLine2}
                      isCenterOnSmallScreen={service.isCenterOnSmallScreen}
                      backgroundColor={sidePanelBackground}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
