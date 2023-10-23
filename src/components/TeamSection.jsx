import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import slide1 from "../assets/images/webp/GirlWithBlackJacket.webp";
import slide2 from "../assets/images/webp/GirlWithWhiteShirt.webp";
import slide3 from "../assets/images/webp/MenWithPinkTee.webp";
import slide4 from "../assets/images/webp/MenInBlackTee.webp";

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centreMode: true,
          infinite: true,
          centerMode: true,
          centerpadding: 20,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerpadding: 20,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerpadding: 20,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="py_team">
        <h2 className="text-center ff_audiowide fs_xl fw-normal lh_normal text-black mb-5 pb-2" data-aos="zoom-in">
          <span className="team_line position-relative">Team</span>
        </h2>
        <Container className="custom_container" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="300">
          <Slider {...settings}>
            <div className="px-2 outline team_card">
              <img src={slide1} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff_montserrat fs_md fw-semibold lh_normal text-black mt-3 mb-1 text-center text-lg-start">
                Collin
              </h4>
              <p className="ff_montserrat fs_sm fw-normal lh_150 text-black mb-3 text-center text-lg-start">
                Founder
              </p>
            </div>
            <div className="px-2 outline team_card">
              <img src={slide2} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff_montserrat fs_md fw-semibold lh_normal text-black mt-3 mb-1 text-center text-lg-start">
                Pharaox
              </h4>
              <p className="ff_montserrat fs_sm fw-normal lh_150 text-black mb-3 text-center text-lg-start">
                Founder
              </p>
            </div>
            <div className="px-2 outline team_card">
              <img src={slide3} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff_montserrat fs_md fw-semibold lh_normal text-black mt-3 mb-1 text-center text-lg-start">
                Zach
              </h4>
              <p className="ff_montserrat fs_sm fw-normal lh_150 text-black mb-3 text-center text-lg-start">
                CM
              </p>
            </div>
            <div className="px-2 outline team_card">
              <img src={slide4} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff_montserrat fs_md fw-semibold lh_normal text-black mt-3 mb-1 text-center text-lg-start">
                Arlen
              </h4>
              <p className="ff_montserrat fs_sm fw-normal lh_150 text-black mb-3 text-center text-lg-start">
                CM
              </p>
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default TeamSection;
