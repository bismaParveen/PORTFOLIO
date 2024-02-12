import React from "react";
import "../FloatingDiv/FloatingDiv.css";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} style={{ height: "10rem" }} alt="" />
        <span>
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
