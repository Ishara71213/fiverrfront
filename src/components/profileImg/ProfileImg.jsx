import React from "react";
import "./ProfileImg.scss";

const ProfileImg = ({ url, width, height }) => {
  return (
    <div className="profileImg-cont">
      <img
        className="profileImg"
        src={url}
        alt="profileImg"
        width={width}
        height={height}
      />
    </div>
  );
};

export default ProfileImg;
