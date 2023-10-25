import React from "react";
import Salona from "../assets/images/webp/solana.webp";
import Engine from "../assets/images/webp/engine.webp";
import { Container } from "react-bootstrap";

const SolanaSection = () => {
  return (
    <>
      <div className="bg_solana py_solana" id="paper">
        <Container>
          <div className="text-center d-md-flex flex-cloumn justify-content-center gap-5">
            <div className="overflow-hidden">
              <img
                src={Salona}
                alt="Salona"
                className="w-100 max_w_385 max_h_225 solana_img"
                data-aos="zoom-in"
                data-aos-duration="300"
              />
            </div>
            <div className="mt-md-0 mt-sm-5 mt-4 overflow-hidden">
              <img
                src={Engine}
                alt="Engine"
                className="w-100 max_w_263 max_h_225 solana_img"
                data-aos="zoom-in"
                data-aos-duration="300"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SolanaSection;
