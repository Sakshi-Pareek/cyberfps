import React from "react";
import { Container } from "react-bootstrap";
import Modalimg from "../assets/images/webp/playgamemodalbg.webp";
import { Modalplaybtn } from "./IconsImg";

const CyberGame = () => {
  return (
    <>
      <Container className="custom_container pt_gameplay">
        <h2 className="fs_xl ff_audiowide fw-normal text-center gameplay_line position-relative gameplay">
          CyberFPS <span className="text-teal">Gameplay</span>
        </h2>
        <div className="d-flex flex-column justify-content-center align-items-center position-relative pt_modal">
          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="play_btn"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32.0007"
                cy="32.0861"
                r="28.6066"
                stroke="#1EADB6"
                strokeWidth="2"
              />
              <circle
                opacity="0.2"
                cx="32.0002"
                cy="32.0861"
                r="29.7213"
                stroke="#1EADB6"
                strokeWidth="4"
              />
              <path
                d="M28.2416 23.1292L39.8769 32.086L28.2416 41.0428L28.2416 23.1292Z"
                stroke="#1EADB6"
                strokeWidth="2"
              />
            </svg>
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
                  src="https://www.youtube.com/embed/ZlenY4qaORo?si=OEaKuqwwcLJOwHc-"
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
