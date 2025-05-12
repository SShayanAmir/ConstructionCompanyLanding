import React from "react";
import HeroSection from "../Components/HeroSection";

import ContactPageBannerImage from "../assets/ContactPage/ContactPageBannerImage.svg";
import GetQuote from "../Components/GetQuote";
import GetInTouch from "../Components/GetInTouch";

import ContactPageFooterImage from "../assets/ContactPage/ContactPageFooterImage.svg";

function ContactPage() {
  const heroData = {
    image: ContactPageBannerImage,
    title: "Contact Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.",
    buttonText: "SEND A MESSAGE",
    mainButtonColor: "#FFB400",
    col: "12",
    DesCol: "11",
  };

  const servicesData = [
    {
      title: "Our Office",
      description: "1234 Divi St. #1000, San Francisc, CA 93251",
      descriptionColor: "black",
      isCenterOnSmallScreen: true,
    },
    {
      title: "Open Office Hours",
      description: "M-F: 9am - 6pm",
      descriptionLine2: "S-S: 10am - 4pm",
      descriptionColor: "black",
      isCenterOnSmallScreen: true,
    },
    {
      title: "Our Office",
      description: "constructioninc.com",
      descriptionLine2: "(346) 426-2351",
      descriptionColor: "black",
      isCenterOnSmallScreen: true,
    },
  ];

  const Questions = [
    {
      question: "Donec rutrum congue leo eget malesuada?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Curabitur non nulla sit amet nisl tempus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Pellentesque in ipsum id orci porta dapibus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
    {
      question: "Curabitur non nulla sit amet nisl?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. ",
    },
  ];

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        imageMaxWidth={"1002px"}
        isImageFull={false}
        paddingTop={"100px"}
        paddingBottom={"100px"}
        services={servicesData}
        sidePanelBackground={"yellow"}
        SidePanelHeading={"Contact Info"}
        sidePanelHeadingColor={"black"}
      />

      <GetQuote
        MainText={"Call: (541) 931-3526"}
        MainTextColor={"yellow"}
        SecondaryText={"We Can’t Wait to Make Your Ideas a Reality"}
        buttonText={"ONLINE ESTIMATE FORM"}
        mainButtonColor={"#FFB400"}
        justifyContent={"between"}
      />

      <div className="mt-5 mt-lg-6">
        <GetInTouch isContactPage={true} Questions={Questions} />
      </div>

      <div className="row position-relative">
        <img className="px-0" src={ContactPageFooterImage} alt="" />
        <img
          style={{
            backgroundColor: "rgba(44, 44, 44, 0.69)",
            opacity: "80%",
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default ContactPage;
