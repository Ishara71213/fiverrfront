import React, { useEffect, useState } from "react";
import Slide from "../../components/slide/Slide";
import Ratings from "../../components/ratings/Ratings";
import "./Gig.scss";
import Review from "../../components/review/Review";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

const Gig = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [userCheck, setUserCheck] = useState({
    isLoading: true,
    error: false,
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: async () => {
      return newRequest.get(`gigs/single/${id}`).then((res) => {
        return res.data;
      });
    },
  });

  useEffect(() => {
    if (!isLoading && !error) {
      newRequest
        .get(`users/${data?.userId}`)
        .then((res) => {
          setUser(res.data);
          setUserCheck((prev) => ({ ...prev, isLoading: false }));
        })
        .catch((err) => {
          console.log(err);
          setUserCheck((prev) => ({ ...prev, error: true }));
        });
    }
  }, [isLoading]);

  console.log(user);
  // console.log(data);
  return (
    <div className="gig">
      {isLoading ? (
        "Loadding"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="grid">
            <div className="left">
              <div className="breadcrumbs">
                <p>Fiver &gt; Graphic & Design</p>
              </div>
              <h1 className="gigName">{data?.title}</h1>
              {userCheck.isLoading ? (
                "Loadding"
              ) : userCheck.error ? (
                "Something went wrong!"
              ) : (
                <div className="profile">
                  <img
                    className="profileImg"
                    src={user.img || "/img/icons/noavatar.jpg"}
                    alt="profilepic"
                  />
                  <span className="userName">{user.userName}</span>
                  <p className="divider">|</p>
                  <Ratings
                    starNumber={data.starNumber}
                    totalStars={data.totalStars}
                    ratingCount={data.starNumber}
                  />

                  <div className="ordersQueue">7 Orders in Queue </div>
                </div>
              )}
              <div className="gigImgSlider">
                <Slide slidesToShow={1} arrowsScroll={1}>
                  <div className="imgContainer">
                    <div className="imgwrapper">
                      <img
                        src={data.cover || "/img/icons/loading.jpg"}
                        alt="gigImg1"
                      />
                    </div>
                  </div>
                  {data.images.map((image, id) => (
                    <div className="imgContainer" key={id}>
                      <div className="imgwrapper">
                        <img src={image} alt="gigImg1" />
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
              <div className="gigDescription">
                <h2 className="title">About This Gig</h2>
                <p className="desc">{data.desc}</p>
              </div>
              {/* -----------------seller details ---------------------------------------- */}
              <h1 className="aboutTheSeller">About The Seller</h1>
              <section className="profileCard">
                <div className="sellerInfo">
                  <img
                    src={user.img || "/img/icons/noavatar.jpg"}
                    alt="profileImage"
                    className="profileImg"
                  />
                  <div className="details">
                    <h2 className="sellerName">Ishara</h2>
                    <p className="services">
                      Web Designing, WordPress, Web Development,Logo Design
                    </p>
                    <div className="rating">
                      <Ratings
                        starNumber={data.starNumber}
                        totalStars={data.totalStars}
                        ratingCount={data.starNumber}
                      />
                    </div>
                    <button className="contactBtn">Contact Me</button>
                  </div>
                </div>
                <div className="sellerDesc">
                  <div className="top">
                    <ul className="content-wrapper">
                      <li className="content">
                        From
                        <strong>{user.country}</strong>
                      </li>
                      <li className="content">
                        Member since
                        <strong>Feb 2019</strong>
                      </li>
                      <li className="content">
                        Avg. response time
                        <strong>1 hour</strong>
                      </li>
                      <li className="content">
                        Last delivery
                        <strong>about 1 hour</strong>
                      </li>
                      <li className="content">
                        Languages
                        <strong>English, Sinhala</strong>
                      </li>
                    </ul>
                  </div>
                  <hr className="devider" />
                  <div className="bottom">
                    <p>{user.desc}</p>
                  </div>
                </div>
              </section>
              <section className="reviews-wrap">
                <Review
                  userName="anthonybeierly"
                  country="United States"
                  ratings={5}
                  duration="3 weeks ago"
                  profileImgUrl="/download.jpg"
                />
                <Review
                  userName="JohnSmith400"
                  country="United States"
                  ratings={4}
                  duration="1 month ago"
                  profileImgUrl="/download.jpg"
                />
                <Review
                  userName="Andrew-James"
                  country="United States"
                  ratings={2}
                  duration="3 months ago"
                  profileImgUrl="/download.jpg"
                />
              </section>
            </div>
            <div className="right">
              <div className="titleAndPrice">
                <h2 className="title">{data.shortTitle}</h2>
                <h2 className="price">${data.price}</h2>
              </div>
              <p className="packageDesc">{data.shortDesc}</p>
              <div className="deliveryDetails">
                <span className="deliveryAndRevision">
                  <img
                    src="/img/icons/clock.png"
                    alt="delivery-time"
                    width={16}
                    height={16}
                  />
                  <p>{data.deliveryTime}Days Delivery</p>
                </span>
                <span className="deliveryAndRevision">
                  <img
                    src="/img/icons/recycle.png"
                    alt="revision"
                    width={16}
                    height={16}
                  />
                  <p> {data.revisionNum} Revisions</p>
                </span>
              </div>
              <ul className="services">
                {data.features.map((feature, id) => (
                  <li className="service" key={id}>
                    <img
                      src="/img/icons/greencheck.png"
                      alt="check"
                      width={16}
                      height={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="continueBtn">Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
