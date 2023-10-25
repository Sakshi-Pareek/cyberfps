import React from "react";
import { Container } from "react-bootstrap";
import Modalimg from "../assets/images/webp/playgamemodalbg.webp";
import { Modalplaybtn } from "./IconsImg";

const CyberGame = () => {
  return (
    <>
      <Container className="custom_container pt_gameplay" id="about">
        <h2
          className="fs_xl ff_audiowide fw-normal text-center gameplay_line position-relative gameplay"
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          CyberFPS <span className="text-teal">Gameplay</span>
        </h2>
        <div
          className="d-flex flex-column justify-content-center align-items-center position-relative pt_modal"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="play_btn"
          >
            <Modalplaybtn />
          </div>
          <img src={Modalimg} alt="Gameplay" className="w-100" />
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="btn-cross d-flex justify-content-center align-items-center position-absolute right-1 top-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex align-items-center justify-content-center h-500">
                <iframe
                  max-width="1160"
                  height="100%"
                  width="100%"
                  src="https://www.youtube.com/embed/xORg0FYKhtg?si=hmCQzyPcap3BASUB"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CyberGame;
