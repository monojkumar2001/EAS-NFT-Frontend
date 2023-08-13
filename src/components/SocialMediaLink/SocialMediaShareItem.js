import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaShareItem = () => {
  return (
    <>
      <div className="social-media-link d-flex algin-items-center gap-3">
        <a href="#" target="_blank">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank">
          <FaTwitter />
        </a>
        <a href="#" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="#" target="_blank">
          <FaPinterest />
        </a>
      </div>
    </>
  );
};

export default SocialMediaShareItem;
