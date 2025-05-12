import React from "react";

// HERO
import MainPageBannerImage from "../assets/MainPage/MainPageBannerImage.svg";
import HeroSection from "../Components/HeroSection.jsx";

// SERVICES IMAGES
import BuildingConstruction from "../assets/MainPage/BuildingConstruction.svg";
import FoundationWork from "../assets/MainPage/FoundationWork.svg";
import SiteManagement from "../assets/MainPage/SiteManagement.svg";

// FEATURES
import Features from "../Components/Features.jsx";
import Projects from "../Components/Projects.jsx";
import FeatureImageLeft from "../assets/MainPage/Rectangle 8.svg";

// CARD IMAGES
import CardImage1 from "../assets/MainPage/LatestProjectCard1.svg";
import CardImage2 from "../assets/MainPage/LatestProjectCard2.svg";
import CardImage3 from "../assets/MainPage/LatestProjectCard3.svg";

import GetQuote from "../Components/GetQuote.jsx";

import CallForQuote from "../Components/CallForQuote.jsx";

import GetInTouch from "../Components/GetInTouch.jsx";

import CallForQuoteImage from "../assets/CallForQuoteImage1.svg";
import ClientTestimonials from "../Components/ClientTestimonials.jsx";

function Home() {
  const heroData = {
    image: MainPageBannerImage,
    title: "Construction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.",
    buttonText: "VIEW OUR WORK",
    mainButtonColor: "#FFB400",
    col: "10",
    DesCol: "12",
  };

  const services = [
    {
      icon: BuildingConstruction,
      title: "Building Construction",
      description: "Lorem ipsum dolor sit consectetur adipiscing elit.",
      descriptionColor: "white",
    },
    {
      icon: FoundationWork,
      title: "Foundation Work",
      description: "Lorem ipsum dolor sit consectetur adipiscing elit.",
      descriptionColor: "white",
    },
    {
      icon: SiteManagement,
      title: "Site Management",
      description: "Lorem ipsum dolor sit consectetur adipiscing elit.",
      descriptionColor: "white",
    },
  ];

  const FeatureData = {
    FeatureImageLeft: FeatureImageLeft,
    text1:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    text2: "Scelerisque lorem posuere iaculis nunc amet phasellus.",
    text3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.",
    text4:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
    buttonText: "LEARN MORE",
    isStats: true,
    colAboveLarge: "4",
  };

  const statsData = {
    NumberLeftCol: "12",
    DetailLeftCol: "YEARS ESTABLISHED",
    NumberRightCol: "250",
    DetailRightCol: "COMPLETED PROJECTS",
    leftColBgColor: "yellow",
    RightColBgColor: "black",
  };

  const cardImages = [CardImage1, CardImage2, CardImage3];

  const cardInfo = cardImages.map((img) => ({
    image: img,
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.",
    buttonText: "VIEW PROJECT",
  }));

  const callForQuotesData = {
    title: "We’ve Been Building For Over 10 Years",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
    buttonText: "ABOUT US",
    mainButtonColor: "#FFB400",
    image: CallForQuoteImage,
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
    title: "Let’s Build Something Together",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    Questions: Questions,
    buttonText: "GET IN TOUCH",
    mainButtonColor: "#FFB400",
    buttonMaxWidth: "210px",
  };

  return (
    <div className="container-fluid">
      {/* HERO SECTION */}
      <HeroSection
        heroData={heroData}
        services={services}
        SidePanelHeading={"Our Services"}
        sidePanelHeadingColor={"black"}
        imageMaxWidth={"1048px"}
        isImageFull={false}
        paddingTop="50px"
        paddingBottom="30px"
        sidePanelBackground={"yellow"}
      />

      {/* Get a Quote For Your Project */}
      <GetQuote
        MainText={"Get a Quote For Your Project"}
        MainTextColor={"black"}
        buttonText={"FREE QUOTE"}
        mainButtonColor={"#FFB400"}
        justifyContent={"evenly"}
      />

      {/* FEATURES */}
      <Features {...FeatureData} statsData={statsData} />

      {/* LATEST PROJECTS */}
      <Projects cardInfo={cardInfo} ProjectTitle={"Latest Projects"} />

      {/* ABOUT US: CALL FOR A QUOTE */}
      <CallForQuote
        {...callForQuotesData}
        onlineEstimatePromptData={onlineEstimatePromptData}
      />

      {/* GET IN TOUCH */}
      <div className="mt-5 mt-lg-6">
        <GetInTouch {...GetInTouchData} />
      </div>

      {/*  CLIENT TESTIMONIALS */}
      <ClientTestimonials />
    </div>
  );
}

export default Home;
