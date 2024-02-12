import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedIn.png";
import Instagram from "../img/instagram.png";
import Vector1 from "../img/vector1.png";
import Vector2 from "../img/vector2.png";
import Boy from "../img/boy.png";
import Crown from "../img/crown.png";
import Thumbup from "../img/thumbup.png";
import Glassesemoji from "../img/glassesemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: "2", type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Andrew Thomas</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <a href="/">
              <img src={Github} alt="" />
            </a>
            <a href="/">
              {" "}
              <img src={LinkedIn} alt="" />
            </a>
            <a href="/">
              {" "}
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Boy} alt="" style={{ height: "23rem" }} />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={Glassesemoji}
            alt=""
            style={{ height: "5rem" }}
          />
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{ top: "-4%", left: "68%" }}
            className="floating-div"
          >
            <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "18rem", left: "9rem" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{ top: "22rem", left: "0rem" }}
            className="floating-div"
          >
            <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
          </motion.div>
          {/* Blur Divs */}
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
