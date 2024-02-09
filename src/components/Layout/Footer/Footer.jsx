import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
