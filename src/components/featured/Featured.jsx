import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        {/* <div className="img"></div> */}
        <div className="left">
          <h1>
            Find the perfect <em>freelance</em> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="img/icons/search.png" alt="search-icon" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="populer">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>Word Press</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
