import React from "react";
import TestimonialCard from "./TestimonialCard";

import Clients from "../assets/Clients.svg";

function ClientTestimonials() {
  return (
    <div className="container-fluid">
      <div className="py-5 pb-7">
        <div className="d-flex justify-content-center">
          <h1 className="text-Rubik fw-bold fs-1 custom-underline-center">
            Client Testimonials
          </h1>
        </div>
        <div className="row justify-content-center mt-6 gap-5">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="d-flex justify-content-center mt-lg-6 pt-5">
          <img src={Clients} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
