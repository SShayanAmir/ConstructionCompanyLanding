import React, { useState } from "react";

function Button({
  buttonText,
  mainButtonColor,
  isJustifyCenter,
  isJustifyEnd,
  maxWidth,
}) {
  const [buttonHover, setButtonHover] = useState(false);

  const buttonStyle = {
    backgroundColor: buttonHover ? mainButtonColor : "transparent",
    color: buttonHover
      ? mainButtonColor === "#FFFFFF"
        ? "black"
        : "white"
      : mainButtonColor,
    border: `solid ${buttonHover ? "transparent" : mainButtonColor}`,
    maxWidth: maxWidth,
    width: "100%",
  };

  return (
    <div
      className={`col-auto d-flex justify-content-center ${
        isJustifyCenter
          ? "justify-content-lg-center"
          : isJustifyEnd
          ? "justify-content-lg-end"
          : "justify-content-lg-start"
      }`}
    >
      <button
        onMouseOver={() => setButtonHover(true)}
        onMouseOut={() => setButtonHover(false)}
        style={buttonStyle}
        className={`btn rounded-0 border-5 text-Rubik fs-14px fw-600 py-3`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
