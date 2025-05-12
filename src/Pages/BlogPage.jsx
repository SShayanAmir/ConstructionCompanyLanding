import React from "react";

import BlogBannerImage from "../assets/BlogPage/BlogBannerImage.svg";
import HeroSection from "../Components/HeroSection";

import BlogCard from "../Components/BlogCard.jsx";

import BlogCardImage1 from "../assets/BlogPage/BlogCardImage1.svg";
import BlogCardImage2 from "../assets/BlogPage/BlogCardImage2.svg";
import BlogCardImage3 from "../assets/BlogPage/BlogCardImage3.svg";
import BlogCardImage4 from "../assets/BlogPage/BlogCardImage4.svg";
import BlogCardImage5 from "../assets/BlogPage/BlogCardImage5.svg";
import BlogCardImage6 from "../assets/BlogPage/BlogCardImage6.svg";

function BlogPage() {
  const heroData = {
    image: BlogBannerImage,
    title: "News",
    col: "10",
    isMonarchProject: false,
  };

  const BlogCardData = [
    {
      image: BlogCardImage1,
      title: "Nunc Volutpat Venenatis",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.",
    },
    {
      image: BlogCardImage2,
      title: "Vestibulum Nisl Felis",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. ",
    },
    {
      image: BlogCardImage3,
      title: "Proin Eu Augue Efficitur",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. ",
    },
    {
      image: BlogCardImage4,
      title: "Nunc Volutpat Venenatis",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue. ",
    },
    {
      image: BlogCardImage5,
      title: "Donec Sit Amet Nibh",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.  ",
    },
    {
      image: BlogCardImage6,
      title: "Maecenas Fringilla Augue",
      date: "May 9, 2014",
      category: " Category",
      blogText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.  ",
    },
  ];

  return (
    <div className="container-fluid">
      <HeroSection
        heroData={heroData}
        isImageFull={true}
        paddingTop="120px"
        paddingBottom="120px"
      />
      <div className="row justify-content-center gap-5 gap-lg-0 gap-xl-5 py-7">
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="row justify-content-center gap-6 gap-md-3 gap-lg-5">
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[0]} />
            </div>
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[3]} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="row  justify-content-center gap-6 gap-md-3 gap-lg-5">
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[1]} />
            </div>
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[4]} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="row  justify-content-center gap-6 gap-md-3 gap-lg-5">
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[2]} />
            </div>
            <div className="col-12 col-md-5 col-lg-auto">
              <BlogCard {...BlogCardData[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
