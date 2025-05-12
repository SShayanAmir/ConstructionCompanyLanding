import React from "react";

function BlogCard({ image, title, date, category, blogText }) {
  return (
    <div
      style={{ maxWidth: "321px", cursor: "pointer" }}
      className="card border-0 unsetMaxWidth rounded-0"
    >
      <img src={image} alt="" />
      <div className="card-body p-4">
        <h1 className="text-Rubik fw-bold fs-18px text-gray card-title">
          {title}
        </h1>
        <div className="d-flex gap-2">
          <p
            style={{ color: "#C9C9C9" }}
            className="text-OpenSans fw-normal fs-14px border-end border-end-5 pe-lg-2"
          >
            {date}
          </p>
          <p
            style={{ color: "#C9C9C9" }}
            className="text-OpenSans fw-normal fs-14px"
          >
            {category}
          </p>
        </div>
        <p
          style={{ lineHeight: "27px" }}
          className="text-OpenSans fw-normal fs-14px card-text pe-lg-3"
        >
          {blogText}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
