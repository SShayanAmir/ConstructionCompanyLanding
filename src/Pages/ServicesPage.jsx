import React from "react";
import HeroSection from "../Components/HeroSection";

import ServicesPageBannerImage from "../assets/ServicesPage/ServicesPageBannerImage.svg";

import ServicePageIcon1 from "../assets/ServicesPage/ServicePageIcon1.svg";
import ServicePageIcon2 from "../assets/ServicesPage/ServicePageIcon2.svg";
import ServicePageIcon3 from "../assets/ServicesPage/ServicePageIcon3.svg";

import ServicesProjectCardImage1 from "../assets/ServicesPage/ServicesProjectCardImage1.svg";
import ServicesProjectCardImage2 from "../assets/ServicesPage/ServicesProjectCardImage2.svg";
import ServicesProjectCardImage3 from "../assets/ServicesPage/ServicesProjectCardImage3.svg";

import GetQuote from "../Components/GetQuote";
import ServicesCard from "../Components/ServicesCard";
import Projects from "../Components/Projects";

function ServicesPage() {
  const heroData = {
    image: ServicesPageBannerImage,
    title: "Our Construction Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.",
    buttonText: "GET A FREE QUOTE",
    mainButtonColor: "#FFB400",
    col: "12",
    DesCol: "10",
  };

  const servicesData = [
    {
      icon: ServicePageIcon1,
      title: "Building Construction",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
    {
      icon: ServicePageIcon2,
      title: "Building Repairs",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
    {
      icon: ServicePageIcon3,
      title: "Custom Design",
      description:
        "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat",
      descriptionColor: "white",
    },
  ];

  const images = [
    ServicesProjectCardImage1,
    ServicesProjectCardImage2,
    ServicesProjectCardImage3,
  ];

  const ProjectCardInfo = images.map((image) => ({
    image: image,
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. ",
    buttonText: "LEARN MORE",
  }));

  return (
    <div className="container-fluid bg-white">
      <HeroSection
        heroData={heroData}
        services={servicesData}
        sidePanelBackground={"transparent"}
        sidePanelHeadingColor={"yellow"}
        isImageFull={true}
        paddingTop={"90px"}
        paddingBottom={"70px"}
        SidePanelHeading={"What We Do"}
      />

      <GetQuote
        MainText={"Get a Quote For Your Project"}
        MainTextColor={"black"}
        buttonText={"FREE QUOTE"}
        mainButtonColor={"#FFB400"}
        shadow={true}
        justifyContent={"evenly"}
      />

      <ServicesCard title={"Building Construction"} position={"end"} />
      <ServicesCard title={"Repairs & Installations"} position={"start"} />
      <ServicesCard title={"Custom Design Projects"} position={"end"} />

      <Projects ProjectTitle={"Latest Projects"} cardInfo={ProjectCardInfo} />
    </div>
  );
}

export default ServicesPage;
