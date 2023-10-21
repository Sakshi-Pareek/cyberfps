import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Accrdnradius, Accrdnradius_bttm } from "./IconsImg";

const FaqSection = () => {
  return (
    <>
      <div className="bg-black pt-5">
        <h3 className="fs_xl fw-normal ff_audiowide text-white text-center">
          <span className="team_line position-relative pb-1">Faq</span>
        </h3>
        <Container className="custom_container py_faq">
          <Accordion className="mx-auto pb-xl-5">
            <Accordion.Item eventKey="0">
              <Accrdnradius_bttm />
              <Accordion.Header className="ff_montserrat fw-semibold fs_md text-white">
                Dui lectus auctor fermentum potenti enim. ?
              </Accordion.Header>
              <Accrdnradius />
              <Accordion.Body>
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                magna adipiscing facilisis a, nulla.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-4">
              <Accrdnradius_bttm />
              <Accordion.Header className="ff_montserrat fw-semibold fs_md text-white">
                Placerat eros faucibus aliquam nunc, mattis
              </Accordion.Header>
              <Accrdnradius />
              <Accordion.Body>
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                magna adipiscing facilisis a, nulla.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-4">
              <Accrdnradius_bttm />
              <Accordion.Header className="ff_montserrat fw-semibold fs_md text-white">
                Lorem nunc nunc risus viverra a
              </Accordion.Header>
              <Accrdnradius />
              <Accordion.Body>
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                magna adipiscing facilisis a, nulla.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-4">
              <Accrdnradius_bttm />
              <Accordion.Header className="ff_montserrat fw-semibold fs_md text-white">
                In aliquet fusce id dictumst id
              </Accordion.Header>
              <Accrdnradius />
              <Accordion.Body>
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                magna adipiscing facilisis a, nulla.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mt-4">
              <Accrdnradius_bttm />
              <Accordion.Header className="ff_montserrat fw-semibold fs_md text-white">
                Elementum pellentesque nisi, sagittis,
              </Accordion.Header>
              <Accrdnradius />
              <Accordion.Body>
                Dui lectus auctor fermentum potenti enim. Quam donec mauris
                phasellus at auctor. Risus maecenas commodo eget tellus nullam
                magna adipiscing facilisis a, nulla.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default FaqSection;
