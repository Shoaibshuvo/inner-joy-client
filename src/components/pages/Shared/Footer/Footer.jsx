import React from "react";
import {  FaFacebookF, FaFeatherPointed, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10  text-white  bg-[#27325a]">
        <div>
          <a className="btn btn-ghost normal-case text-xl p-0  ">
            InnerJoy<FaFeatherPointed className="text-green-400"></FaFeatherPointed>
          </a>
          <p>2578 Broadway #602 <br /> New York, NY 10025</p>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter className="text-3xl"></FaTwitter>
            </a>
            <a>
              <FaYoutube className="text-3xl "></FaYoutube>
            </a>
            <a>
             <FaFacebookF className="text-3xl"></FaFacebookF>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
