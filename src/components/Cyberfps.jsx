import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cyberimg from "../assets/images/webp/cyberfps.webp";

const Cyberfps = () => {
  return (
    <>
      <div className="bg_cyber py_cyber">
        <Container className="custom_container">
          <Row className="align-items-center justify-content-center">
            <Col xs={11} sm={12} lg={6}>
              <h2 className="ff_audiowide text-black fw-normal fs_xl position-relative">
                What is <span className="text_sky cyberfps_line">CyberFPS</span>
              </h2>
              <p className="ff_montserrat fw-normal fs_sm text-black opacity_07 mw_562 py-3">
                CyberFPS is centered around 5v5 Search & Destroy style combat
                with P2E mechanics featuring the $AMMO Token and deep
                integrations within the CryptoStraps ecosystem.
              </p>
              <p className="ff_montserrat fw-normal fs_sm text-black opacity_07 mw_562 mb-0">
                CyberFPS pits 2 teams of 5 players against each other with the
                objective being to attack or defend depending on which side you
                start on. This "Search & Destroy" style combat has been
                implemented in many popular FPS titles and is a high-skill cap
                game mode.
              </p>
            </Col>
            <Col lg={6} className="col-sm-12 col-11 pt-3 pt-lg-0">
              <img src={Cyberimg} alt="cyberimg" className="w-100 mw_528" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cyberfps;
