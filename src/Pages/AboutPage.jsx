import React from "react";
import HeroSection from "../Components/HeroSection";

import AboutPageBannerImage from "../assets/AboutPage/AboutPageBannerImage.svg";

import AboutPageIcon1 from "../assets/ServicePage/ServicePageIcon1.svg";
import AboutPageIcon2 from "../assets/ServicePage/ServicePageIcon2.svg";
import AboutPageIcon3 from "../assets/ServicePage/ServicePageIcon3.svg";

import AboutPageFeatureImage from "../assets/AboutPage/AboutPageFeatureImage.svg";

import AboutText from "../Components/AboutText";
import Features from "../Components/Features";

import YellowArrowIcon from "../assets/AboutPage/YellowArrowIcons.svg";

function AboutPage() {
  const heroData = {
    image: AboutPageBannerImage,
    title: "About Our Construction Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.",
    buttonText: "GET A FREE QUOTE",
    mainButtonColor: "#FFB400",
    col: "11",
    DesCol: "11",
  };

  const servicesData = [
    {
      icon: AboutPageIcon1,
      title: "Building Construction",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
    {
      icon: AboutPageIcon2,
      title: "Building Repairs",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
    {
      icon: AboutPageIcon3,
      title: "Custom Design",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
  ];

  const AboutTextData = {
    title: "About Divi Construction",
    leftColText1:
      "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
    leftColText2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.",
    rightColText1:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.",
    rightColText2:
      "Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
  };

  const featureData = {
    FeatureImageRight: AboutPageFeatureImage,
    maxWidthLeftCol: "430px",
    isStats: true,
    icon: YellowArrowIcon,
    leftPanelBackgroundColor: "lightGray",
    sidePanelButtonText: "FREE QUOTE",
    mainButtonColor: "#FFB400",
    colAboveLarge: "6",
  };

  const statsData = {
    NumberLeftCol: "12",
    DetailLeftCol: "YEARS ESTABLISHED",
    NumberRightCol: "250",
    DetailRightCol: "COMPLETED PROJECTS",
    leftColBgColor: "yellow",
    RightColBgColor: "black",
  };

  const statsData2 = {
    NumberLeftCol: "24",
    DetailLeftCol: "FIELD WORKERS",
    NumberRightCol: "18",
    DetailRightCol: "OFFICE STAFF",
    leftColBgColor: "lightGray",
    RightColBgColor: "lightGray",
  };

  const leftSidePanelData = [
    {
      title: "Eco Friendly Construction",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
    },
    {
      title: "The Newest Technology Repairs",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
    },
    {
      title: "High Quality Construction Management",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
    },
  ];

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        services={servicesData}
        isImageFull={true}
        sidePanelBackground={"transparent"}
        sidePanelHeadingColor={"yellow"}
        SidePanelHeading={"What We Do"}
        paddingTop={"60px"}
        paddingBottom={"60px"}
      />

      <AboutText AboutTextData={AboutTextData} />

      <Features
        {...featureData}
        leftSidePanelData={leftSidePanelData}
        isStatsRow2={true}
        statsData={statsData}
        statsData2={statsData2}
      />

      <div className="row bg-white justify-content-center py-7">
        <div className="col-12 col-md-8 col-lg-6 gx-7">
          <h1
            style={{ lineHeight: "48px" }}
            className="text-Rubik fw-medium fs-3 text-black text-center"
          >
            “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan
            lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi.
            Nullam maximus lectus libero.”
          </h1>
          <p className="text-Rubik fw-medium fs-14px text-gray text-center mt-4 pt-2 pb-lg-4">
            JOHN SMITH – CEO
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
