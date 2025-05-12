import React from "react";
import HeroSection from "../Components/HeroSection";

import PortfolioBannerImage from "../assets/PortfolioPage/PortfolioBannerImage.svg";

import PortfolioCardImage1 from "../assets/PortfolioPage/PortfolioCardImage1.svg";
import PortfolioCardImage2 from "../assets/PortfolioPage/PortfolioCardImage2.svg";
import PortfolioCardImage3 from "../assets/PortfolioPage/PortfolioCardImage3.svg";
import PortfolioCardImage4 from "../assets/PortfolioPage/PortfolioCardImage4.svg";
import PortfolioCardImage5 from "../assets/PortfolioPage/PortfolioCardImage5.svg";
import PortfolioCardImage6 from "../assets/PortfolioPage/PortfolioCardImage6.svg";
import PortfolioCardImage7 from "../assets/PortfolioPage/PortfolioCardImage7.svg";
import PortfolioCardImage8 from "../assets/PortfolioPage/PortfolioCardImage8.svg";
import PortfolioCardImage9 from "../assets/PortfolioPage/PortfolioCardImage9.svg";
import Card from "../Components/Card";

function PortfolioPage() {
  const heroData = {
    image: PortfolioBannerImage,
    title: "Our Construction Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. ",
    col: "7",
    DesCol: "12",
    isMonarchProject: false,
  };

  const cardImages = [
    PortfolioCardImage1,
    PortfolioCardImage2,
    PortfolioCardImage3,
    PortfolioCardImage4,
    PortfolioCardImage5,
    PortfolioCardImage6,
    PortfolioCardImage7,
    PortfolioCardImage8,
    PortfolioCardImage9,
  ];

  const cardData = cardImages.map((image) => ({
    image: image,
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.",
    buttonText: "LEARN MORE",
  }));

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        isImageFull={true}
        paddingTop="110px"
        paddingBottom="200px"
      />

      <div className="row gap-7 justify-content-center py-7 mx-auto">
        {cardData.map((data) => (
          <div className="col-12 col-md-auto">
            <Card {...data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
