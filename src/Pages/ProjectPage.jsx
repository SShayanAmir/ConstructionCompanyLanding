import React from "react";

import HeroSection from "../Components/HeroSection";

import ProjectBannerImage from "../assets/ProjectPage/Rectangle 11.svg";

import AboutThisProjectImage1 from "../assets/ProjectPage/AboutThisProjectImage1.svg";
import AboutThisProjectImage2 from "../assets/ProjectPage/AboutThisProjectImage2.svg";
import AboutThisProjectImage3 from "../assets/ProjectPage/AboutThisProjectImage3.svg";

import AboutList from "../Components/AboutList";

import Projects from "../Components/Projects";

// CARD IMAGES
import CardImage1 from "../assets/ProjectPage/RecentProjectCard1.svg";
import CardImage2 from "../assets/ProjectPage/RecentProjectCard2.svg";
import CardImage3 from "../assets/ProjectPage/RecentProjectCard3.svg";

function ProjectPage() {
  const heroData = {
    image: ProjectBannerImage,
    title: "Monarch HQ Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. ",
    col: "7",
    DesCol: "11",
    isMonarchProject: true,
  };

  const cardImages = [CardImage1, CardImage2, CardImage3];

  const cardInfo = cardImages.map((img) => ({
    image: img,
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. ",
    buttonText: "LEARN MORE",
  }));

  return (
    <div className="container-fluid">
      {/* HERO SECTION */}
      <HeroSection
        heroData={heroData}
        isImageFull={true}
        paddingTop="170px"
        paddingBottom="170px"
      />

      {/* ABOUT THIS PROJECT */}
      <div className="row justify-content-center gap-5 bg-white py-7">
        <div
          style={{ maxWidth: "500px" }}
          className="col-12 col-lg-6 col-xl-auto "
        >
          <AboutList title={"About this Project"} textColor={"gray"} />
        </div>

        <div className="col-12 col-lg-5 col-xl-auto d-flex justify-content-center px-lg-0">
          <img
            className="w-100 h-100 object-fit-cover"
            src={AboutThisProjectImage1}
            alt=""
          />
        </div>

        <div className="col-auto d-flex justify-content-center">
          <img
            src={AboutThisProjectImage2}
            className="w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>

        <div className="col-12 col-lg-5 col-xl-auto d-flex d-lg-inline justify-content-center me-xl-4">
          <img
            src={AboutThisProjectImage3}
            className="w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>

        <div
          style={{ maxWidth: "564px" }}
          className="col-12 col-lg-6 col-xl-auto text-center text-lg-start"
        >
          <p
            style={{ lineHeight: "27px" }}
            className="text-OpenSans fw-normal fs-15px text-gray mb-0"
          >
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem.
          </p>
          <p
            style={{ lineHeight: "27px" }}
            className="text-OpenSans fw-normal fs-15px text-gray"
          >
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue non feugiat ligula neque nec
            felis.
          </p>
          <p
            style={{ lineHeight: "27px" }}
            className="text-OpenSans fw-normal fs-15px text-gray"
          >
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
        </div>
      </div>

      <Projects ProjectTitle={"Related Projects"} cardInfo={cardInfo} />
    </div>
  );
}

export default ProjectPage;
