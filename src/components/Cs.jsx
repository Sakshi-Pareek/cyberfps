import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Csimg from "../assets/images/webp/cs_img.webp";

const Cs = () => {
  return (
    <>
      <div className="bg-black py_cryptostrap" id="cs">
        <Container className="custom_container">
          <Row className="align-items-center justify-content-center">
            <Col xs={10} sm={11} lg={6}>
              <img src={Csimg} alt="CSimg" className="w-100 mw_394" />
            </Col>
            <Col xs={11} sm={12} lg={6} className="pt-5 pt-lg-0">
              <h2 className="ff_audiowide fw-normal text-white fs_xl position-relative" data-aos="fade-left"
                data-aos-duration="300" data-aos-easing="linear">
                <span className="position-relative cyberfps_line">CryptoStraps</span>
              </h2>
              <div className="blue_line pb-1"></div>
              <p className="ff_montserrat fs_sm fw-normal text-white lh_150 mw_568 opacity_07 pt-2 mb-0" data-aos="fade-left"
                data-aos-duration="500" data-aos-easing="linear">
                CryptoStraps are firearms pushing the boundaries of 3D animated
                art. CyberFPS will be powered by CryptoStraps $AMMO and is
                directly integrated with the existing CryptoStraps NFTs. You
                will be able to use CryptoStraps NFTs in-game and the
                visuals/graphics of CyberFPS are designed by the CryptoStraps 3D
                Studio.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cs;
