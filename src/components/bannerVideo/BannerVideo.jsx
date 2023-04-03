import React from "react";
import "./BannerVideo.scss";

const BannerVideo = () => {
  return (
    <div className="bannerVideo">
      <div className="container">
        <div className="left">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="section">
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>The best for every budget</h2>
            </span>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="section">
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>Quality work done quickly</h2>
            </span>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>
          <div className="section">
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>Protected payments, every time</h2>
            </span>
            <p>
              Always know what you ll pay upfront. Your payment isn t released
              until you approve the work.
            </p>
          </div>
          <div className="section">
            <span className="title">
              <img src="img/icons/check.png" alt="checkBtn" />
              <h2>24/7 support</h2>
            </span>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            alt="video-teaser"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
