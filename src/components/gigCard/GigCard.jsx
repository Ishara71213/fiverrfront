import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./GigCard.scss";
import { useState } from "react";

const GigCard = ({ item }) => {
  const [price, setPrice] = useState("");
  const [gigUser, setGigUser] = useState({});

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["gigUsers"],
  //   queryFn: async () => {
  //     console.log("from card", item?.userId);
  //     return newRequest.get(`users/${item?.userId}`).then((res) => {
  //       return res.data;
  //     });
  //   },
  // });

  useEffect(() => {
    newRequest
      .get(`users/${item?.userId}`)
      .then((res) => {
        setGigUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [item]);
  // console.log(gigUser?.userName);

  useEffect(() => {
    setPrice(item?.price.toString().split("."));
  }, [item]);

  return (
    <div className="gigCard">
      <Link to={`/gig/${item._id}`} className="link">
        <img src={item.cover} alt="gig-img" />
        <div className="info">
          <div className="user">
            <img
              src={gigUser?.img || "/img/icons/noavatar.jpg"}
              alt="profile-img"
            />
            <div className="username-level">
              <h3 className="userName">{gigUser?.userName || "user"}</h3>
              <h3 className="userLevel">Level 1</h3>
            </div>
          </div>

          <p className="description">{item.title}</p>
          <div className="ratings">
            <img src="img/icons/star.png" alt="star-img" />
            <p className="rate">
              {item.totalStars == 0 || item.starNumber == 0
                ? "5.0"
                : Math.round(item.totalStars / item.starNumber)}
            </p>
            <p className="rateCtn">{item.ratingCtn}(1k+)</p>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="img/icons/heart.png" alt="heartImg" />
          <div className="price">
            <p>STARTING AT</p>
            <h3>
              {price[0]}
              <sup>{price[1]}</sup>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GigCard;
