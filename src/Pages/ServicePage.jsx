import React from "react";
import HeroSection from "../Components/HeroSection";

import ServicePageIcon1 from "../assets/ServicePage/ServicePageIcon1.svg";
import ServicePageIcon2 from "../assets/ServicePage/ServicePageIcon2.svg";
import ServicePageIcon3 from "../assets/ServicePage/ServicePageIcon3.svg";

import ServicePageCallForQuoteImage from "../assets/ServicePage/ServicePageCallForQuoteImage.svg";

import ServiceBannerImage from "../assets/ServicePage/ServiceBannerImage.svg";
import CallForQuote from "../Components/CallForQuote";
import GetInTouch from "../Components/GetInTouch";
import Projects from "../Components/Projects";

import ServicePageCardImage1 from "../assets/ServicePage/ServicePageCardImage1.svg";
import ServicePageCardImage2 from "../assets/ServicePage/ServicePageCardImage2.svg";
import ServicePageCardImage3 from "../assets/ServicePage/ServicePageCardImage3.svg";
import AboutText from "../Components/AboutText";

function ServicePage() {
  const heroData = {
    image: ServiceBannerImage,
    title: "Framing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. ",
    buttonText: "GET A QUOTE",
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

  const callForQuotesData = {
    image: ServicePageCallForQuoteImage,
    buttonText: "ONLINE ESTIMATE FORM",
    mainButtonColor: "#1F1F1F",
  };

  const Questions = [
    {
      question: "Donec rutrum congue leo eget malesuada?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Curabitur non nulla sit amet nisl tempus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Pellentesque in ipsum id orci porta dapibus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Curabitur non nulla sit amet nisl?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
  ];

  const GetInTouchData = {
    title: "F.A.Q.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    buttonText: "ASK A QUESTION",
    mainButtonColor: "#FFB400",
    buttonMaxWidth: "210px",
    Questions: Questions,
  };

  const images = [
    ServicePageCardImage1,
    ServicePageCardImage2,
    ServicePageCardImage3,
  ];

  const cardData = images.map((image) => ({
    image: image,
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.",
    buttonText: "LEARN MORE",
  }));

  const AboutTextData = {
    leftColText1:
      "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
    leftColText2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.",
    rightColText1:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.",
    rightColText2:
      "Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
    rightColText3:
      "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
  };

  const onlineEstimatePromptData = {
    MainText1: "Call for a Quote",
    MainText2: "(346) 234-6973",
    buttonText: "ONLINE ESTIMATE FORM",
    mainButtonColor: "#1F1F1F",
    leftColBgColor: "yellow",
    RightColBgColor: "white",
    isSetHeightTo100: true,
  };

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        services={servicesData}
        isImageFull={true}
        paddingTop="60px"
        paddingBottom="60px"
        sidePanelBackground={"transparent"}
      />

      <AboutText AboutTextData={AboutTextData} />

      <CallForQuote
        {...callForQuotesData}
        isAboutList={true}
        AboutListTitle={"About Process"}
        AboutListTextColor={"white"}
        onlineEstimatePromptData={onlineEstimatePromptData}
      />

      <Projects ProjectTitle={"Related Projects"} cardInfo={cardData} />

      <GetInTouch {...GetInTouchData} />
    </div>
  );
}

export default ServicePage;
