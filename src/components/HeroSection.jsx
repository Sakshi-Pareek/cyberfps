import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeroLogo from "../assets/images/webp/hero_logo.webp";
import MenWithGun from "../assets/images/webp/men_with_gun.webp";
import WebLogo from "../assets/images/webp/footer_logo.webp";
import { Discordicon, InstagramIcon, TwitterIcon } from "./IconsImg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
  }
  return (
    <>
      <div className="hero_bg">
        <Container className="custom_container">
          <div className="d-flex align-items-center justify-content-between">
            <a href=""><img
              src={WebLogo}
              alt="WebLogo"
              className="w-100 max_w_128 h-100"
            /></a>
            <ul
              id="navbar"
              className="d-flex gap-4 mb-0 flex-column list-unstyled flex-lg-row justify-content-center align-items-center mobile_view z_index_3"
            >
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  className="nav-link text-white fs-sm6 fw-normal ff-Audiowide"
                  to="/CyberGame"
                >
                  About
                </Link>
              </li>
              <li className="link">
                <Link
                  onClick={opennav}
                  to="/Cs"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  CryptoStraps
                </Link>
              </li>
              <li className="link">
                <Link
                  onClick={opennav}
                  to="/TeamSection"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Team
                </Link>
              </li>
              <li className="link">
                <Link
                  onClick={opennav}
                  to="FaqSection"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Faq
                </Link>
              </li>
              <li className="link">
                <Link
                  onClick={opennav}
                  to="SolanaSection"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Light Paper
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-baseline nav_button gap-2">
              <TwitterIcon />
              <InstagramIcon />
              <Discordicon />
            </div>
            <div
              id="menubtn-icon"
              onClick={opennav}
              className="d-lg-none d-block z_index_3 pe-2 pt-2"
            >
              <div className="line"></div>
              <div className="line1 my-2"></div>
              <div className="line2"></div>
            </div>
          </div>
          <Row className="justify-content-lg-between justify-content-center align-items-center">
            <Col
              xs={11}
              sm={12}
              lg={6}
              xl={5}
              className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
            >
              <img
                src={HeroLogo}
                alt="HeroLogo"
                className="w-100 max_w_344 max_h_239"
              />
              <h1 className="ff_audiowide fs_lg fw-normal lh_normal text-white mb-lg-5">
                Web3 Gaming Reimagined
              </h1>
              <div className="text-center">
                <button
                  href="#"
                  className="ff_audiowide fs-sm fw-normal text-black get_btn d-inline-block me-3 mt-3"
                >
                  Get Started
                </button>
                <button
                  href="#"
                  className="ff_audiowide fs-sm fw-normal text-white learn_btn d-inline-block me-sm-0 me-3 mt-3"
                >
                  Learn More
                </button>
              </div>
            </Col>
            <Col
              xs={11}
              sm={10}
              lg={5}
              xl={6}
              className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
            >
              <img
                src={MenWithGun}
                alt="MenWithGun"
                className="w-100 mt-lg-0 mt-5"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
