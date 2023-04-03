import React, { useEffect, useState } from "react";
import "./Ratings.scss";

const Ratings = ({ totalStars, starNumber, ratingCount, ratings }) => {
  const [avgRating, setAvgRating] = useState(5);

  useEffect(() => {
    if (!ratings && (totalStars != 0 || starNumber != 0)) {
      setAvgRating(Math.round(totalStars / starNumber));
    } else {
      setAvgRating(ratings);
    }
  }, []);

  return (
    <div className="rating">
      {Array(avgRating)
        .fill()
        .map((element, id) => (
          <img className="star" src="/img/icons/star.png" alt="star" key={id} />
        ))}
      <p className="ratingNum">{avgRating}</p>
      {ratingCount && <div className="totalRatings">({ratingCount})</div>}
    </div>
  );
};

export default Ratings;
