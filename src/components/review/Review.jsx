import React from "react";
import "./Review.scss";
import "../profileImg/ProfileImg";
import ProfileImg from "../profileImg/ProfileImg";
import Ratings from "../ratings/Ratings";
import { ReactComponent as Like } from "../../svg/like.svg";
import { ReactComponent as Dislike } from "../../svg/dislike.svg";

const Review = ({ userName, country, ratings, duration, profileImgUrl }) => {
  return (
    <div className="review">
      <div className="container">
        <hr className="divider" />
        {/* profileSection */}
        <div className="profileSection">
          <div className="profileImg">
            <ProfileImg url={profileImgUrl} width="48" height="48" />
          </div>
          <div className="details">
            <h3 className="userName">{userName}</h3>
            <div className="country">
              <img
                src="/img/icons/1f1fa-1f1f8.png"
                alt="countryFlag"
                height={20}
                width={20}
              />
              <h3 className="country">{country}</h3>
            </div>
          </div>
        </div>
        <div className="review-content">
          <div className="reviewAndTime">
            <Ratings ratings={ratings} />
            <p className="seperate">|</p>
            <p className="duration">{duration}</p>
          </div>
          <p className="reviewText">
            Awesome work with my logo. Audy was very professional and did
            exactly what I asked plus revisions. Would highly recommend. Thanks
            again!
          </p>
          <div className="helpful">
            <p>Helpful?</p>
            <span className="rateReview-yes">
              <Like className="rateIcon" />
              <p>yes</p>
            </span>
            <span className="rateReview-no">
              <Dislike className="rateIcon" />
              <p>no</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
