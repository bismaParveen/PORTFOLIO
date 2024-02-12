import React from "react";
import "../Testimonials/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../img/profilepic1.jpg";
import profilePic2 from "../img/profilepic2.jpg";
import profilePic3 from "../img/profilepic3.jpg";
import profilePic4 from "../img/profilepic4.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const client = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti enim accusamus exercitationem nostrum! Nostrum deleniti alias dolores beatae labore dolorem, tenetur eius enim!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos, minus qui quos itaque harum a distinctio ullam minima deserunt, dolore exercitationem non consequatur?",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos, minus qui quos itaque harum a distinctio ullam minima deserunt, dolore exercitationem non consequatur?",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eos, minus qui quos itaque harum a distinctio ullam minima deserunt, dolore exercitationem non consequatur?",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span> Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me....</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--skyblue" }}
        ></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img}  alt="" />
                <span>{client.review} </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    
  );
};

export default Testimonials;
