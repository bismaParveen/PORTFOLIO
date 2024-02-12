import React from "react";
import "../Services/Services.css";
import Heart from "../img/heart.png";
import Humble from "../img/humble.png";
import Sunglasses from "../img/sunglasses.png";
import Card from "../Card/Card";
import Resume from "../Services/Resume.pdf";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="services" id="Services">
        {/* Left Side */}
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Natus ex commodi, praesentium dolores cum. Facilis praesentium quam
            voluptatibus?
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
        {/* Right Side */}
        <div className="cards">
          <motion.div
            initial={{ left: "25%" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={Heart}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
          </motion.div>
          {/* Second Card */}
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Sunglasses}
              heading={"Developer"}
              detail={
                "Html, Css, Javascript, React, Figma, Sketch, Photoshop, Adobe, Adobe xd"
              }
            />
          </div>
          {/* Third Card */}
          <div style={{ top: "19rem", left: "12rem" }}>
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, id?"
              }
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
