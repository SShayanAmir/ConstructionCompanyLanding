import React from "react";
import HeroSection from "../Components/HeroSection";

import HomePageBannerImage from "../assets/HomePage/HomePageBannerImage.svg";

import BuildingConstruction from "../assets/HomePage/BuildingConstruction.svg";
import BuildingRepairs from "../assets/HomePage/BuildingRepairs.svg";
import Demolition from "../assets/HomePage/Demolition.svg";
import Foundation from "../assets/HomePage/Foundation.svg";
import PaintingAndExterior from "../assets/HomePage/PaintingAndExterior.svg";
import SiteManagement from "../assets/HomePage/SiteManagement.svg";
import ConstructionServices from "../Components/ConstructionServices";
import Features from "../Components/Features";

import WhiteArrowIcon from "../assets/HomePage/WhiteArrowIcon.svg";

import HomePageBannerImage2 from "../assets/HomePage/HomePageBannerImage2.svg";
import ClientTestimonials from "../Components/ClientTestimonials";

function HomePage() {
  const heroData = {
    image: HomePageBannerImage,
    title: "Construction Inc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.",
    buttonText: "VIEW OUR WORK",
    mainButtonColor: "#FFB400",
    col: "12",
    DesCol: "8",
    isContentCenter: true,
  };

  const heroData2 = {
    image: HomePageBannerImage2,
    title: "We’ve Been Building For Over 20 years",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.",
    buttonText: "ABOUT US",
    mainButtonColor: "#FFB400",
    col: "8",
    DesCol: "12",
    isContentCenter: true,
  };

  const ConstructionServicesData = [
    {
      icon: BuildingConstruction,
      title: "Building Construction",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
    {
      icon: BuildingRepairs,
      title: "Building Repairs",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
    {
      icon: Demolition,
      title: "Demolition",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
    {
      icon: Foundation,
      title: "Foundation",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
    {
      icon: PaintingAndExterior,
      title: "Painting & Exterior",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
    {
      icon: SiteManagement,
      title: "Site Management",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
    },
  ];

  const leftSidePanelData = [
    {
      title: "Eco Friendly Construction",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
      title: "The Newest Technology Repairs",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
      title: "High Quality Construction Management",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
  ];

  const featureData = {
    text1:
      "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis ",
    text4:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.",
    text5:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
    icon: WhiteArrowIcon,
    colAboveLarge: "5",
  };

  const onlineEstimatePromptData = {
    MainText1: "Get Free Consultation",
    buttonText: "ONLINE ESTIMATE FORM",
    mainButtonColor: "#FFB400",
    leftColBgColor: "black",
    RightColBgColor: "black",
    isSetHeightTo100: false,
  };

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        isImageFull={true}
        paddingTop={"160px"}
        paddingBottom={"160px"}
      />

      <div className="row justify-content-center py-5 gap-7 gap-lg-5">
        {ConstructionServicesData.map((data) => {
          return (
            <ConstructionServices
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>

      <Features
        leftSidePanelData={leftSidePanelData}
        {...featureData}
        maxWidthLeftCol={"524px"}
        leftPanelBackgroundColor={"yellow"}
        onlineEstimatePromptData={onlineEstimatePromptData}
      />

      <HeroSection
        heroData={heroData2}
        isImageFull={true}
        paddingTop={"205px"}
        paddingBottom={"205px"}
      />
      <div className="mt-lg-5">
        <ClientTestimonials />
      </div>
    </div>
  );
}

export default HomePage;
