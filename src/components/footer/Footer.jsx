import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { footerData } from "../../data/footerData";

import { ReactComponent as Fiverr } from "../../svg/logo.svg";
import { ReactComponent as Globe } from "../../svg/globe.svg";
import { ReactComponent as Accessibility } from "../../svg/accessibility.svg";
import { ReactComponent as Facebook } from "../../svg/facebook.svg";
import { ReactComponent as Instargram } from "../../svg/instargram.svg";
import { ReactComponent as Linkedin } from "../../svg/linkedin.svg";
import { ReactComponent as Pintrest } from "../../svg/pintrest.svg";
import { ReactComponent as Twitter } from "../../svg/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {footerData.map((section) => {
            return (
              <div className="section" key={section.id}>
                <h3 className="title">{section.title}</h3>
                <ul className="subtitleSection">
                  {section.subtitleSec.map((sub) => (
                    <li className="subtitle" key={sub.id}>
                      <Link to="/" className="link">
                        {sub.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <div className="logo">
              <Fiverr className="icon" />
            </div>
            <div className="copyright">© Fiverr International Ltd. 2023</div>
          </div>
          <div className="right">
            <div className="socialIcons">
              <Twitter className="icon" />
              <Facebook className="icon" />
              <Linkedin className="icon" />
              <Pintrest className="icon" />
              <Instargram className="icon" />
            </div>
            <div className="otherSettings">
              <div className="lang">
                <Globe className="icon" />
                English
              </div>
              <div className="currency">$ USD</div>
              <div className="accessibility">
                <Accessibility className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
