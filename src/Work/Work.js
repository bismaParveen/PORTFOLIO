import React from "react";
import "../Work/Work.css";
import Upwork from "../img/upwork.png";
import Facebook from "../img/facebook.png";
import Fiverr from "../img/fiverr.png";
import Shopify from "../img/shopify.png";
import Amazon from "../img/amazon.png";
import { themeContext } from "../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Natus ex commodi, praesentium dolores cum. Facilis
          <br /> ] praesentium quam voluptatibus?
          <br />
          Natus ex commodi, praesentium dolores cum. Facilis
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <motion.div initial={{rotate: 45}} whileInView={{rotate: 0}} viewport={{margin: '-40px'}} transition={{duration: 3.5, type: 'spring'}} className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" style={{ height: "8rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" style={{ height: "8rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" style={{ height: "8rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" style={{ height: "8rem" }} />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" style={{ height: "8rem" }} />
          </div>
        </motion.div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
