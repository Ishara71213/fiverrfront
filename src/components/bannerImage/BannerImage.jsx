import React from "react";
import "./BannerImage.scss";

const BannerImage = () => {
  return (
    <div className="bannerImage">
      <div className="container">
        <div className="left">
          <h1 className="headLogo">
            fiverr<em> business</em>
          </h1>
          <h1 className="mainTitle">
            A business solution designed for <span>teams</span>
          </h1>
          <div className="section">
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>Connect to freelancers with proven business experience</h2>
            </span>
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>
                Get matched with the perfect talent by a customer success
                manager
              </h2>
            </span>
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>
                Manage teamwork and boost productivity with one powerful
                workspace
              </h2>
            </span>
          </div>
          <button>Explore Fiverr Business</button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_660,dpr_1.0/v1/attachments/generic_asset/asset/5364183d1377de2e002df16f78f56ef3-1599950021826/scattered-feedback-desktop-660-x2.png"
            alt="video-teaser"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
