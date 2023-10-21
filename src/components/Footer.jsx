import React from "react";
import FooterIcon from "../assets/images/webp/footer_logo.webp";
import { Discordicon, InstagramIcon, TwitterIcon } from "./IconsImg";

const Footer = () => {
  return (
    <>
      <div className="bg_footer vh-1 00 pt-2">
        <div className="text-center mt-lg-5 pt-sm-1">
          <a href="">
            <img
              src={FooterIcon}
              alt="WebIcon"
              className="w-100 max_w_200 max_h_139"
            />
          </a>
          <div className="mt-3 pt-1 pb-5 mt-1">
            <a
              href="https://discord.com/servers"
              target="blank"
              className="w-100 me-3 pe-1 social_icon"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://discord.com/servers"
              target="blank"
              className="w-100 me-3 pe-1 social_icon"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://discord.com/servers"
              target="blank"
              className="w-100 social_icon"
            >
              <Discordicon />
            </a>
          </div>
          <hr className="w-100 text-white opacity_07"></hr>
          <p className="ff_montserrat lh_150 fw-normal fs_sm text-white my-1 pb-3">
            © Cyber FPS 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
