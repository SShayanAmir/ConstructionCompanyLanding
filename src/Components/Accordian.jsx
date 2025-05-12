import React, { useState } from "react";

function Accordian({ Questions }) {
  const [selected, setSelected] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const showAnswer = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <div className="accordion accordion-flush bg-white" id="accordion">
      {Questions.map((Question, index) => {
        return (
          <div
            style={{ cursor: "default" }}
            className={`collapsed pt-4 ps-4 ${
              index !== 4 && "GetInTouchBottomBorder"
            } pb-4`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`collapse${index}`}
            onClick={() => showAnswer(index)}
          >
            <div className="d-flex justify-content-between">
              <h1 className="text-Rubik fw-bold fs-6 text-black mb-0 align-self-center">
                {Question.question}
              </h1>
              <div className="me-4">
                <button className="btn btn-yellow rounded-circle px-2 py-0 text-Rubik fw-medium fs-14px text-white">
                  {selected === true && openIndex === index ? "-" : "+"}
                </button>
              </div>
            </div>
            <div
              id={`collapse${index}`}
              data-bs-parent="#accordion"
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
            >
              <p
                style={{ lineHeight: "27px" }}
                className={`text-OpenSans fw-normal fs-15px text-gray col-lg-11 mt-4 pb-2`}
              >
                {Question.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
