import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p> &copy; {year} Alex Bennett.All rights reserved.</p>
      <div className="footer-bottom">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  );
}

export default Footer;
