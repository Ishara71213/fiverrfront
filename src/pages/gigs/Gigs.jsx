import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import { cards } from "../../data/data";
import GigCard from "../../components/gigCard/GigCard";
// import { gigData } from "../../data/gigData";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      return newRequest
        .get(
          `gigs${search}&priceMin=${minPriceRef.current || 0}&priceMax=${
            maxPriceRef.current || 500000
          }&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        });
    },
  });
  refetch();
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  useEffect(() => {
    refetch();
  }, [search]);

  const handleApply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        {cards.map((data) => {
          if (search.split("=")[1] === data.cat) {
            return (
              <div className="headSection" key={data.id}>
                <div className="breadcrumbs">
                  <p>Fiver &gt; {data.title || "Service"}</p>
                </div>
                <h1>{data.title || "Service"}</h1>
                <p className="title-description">
                  {data.gigPageDesc ||
                    "Explore the boundaries of services with Fiverr's freelancers"}
                </p>
              </div>
            );
          }
        })}
        <div className="sort">
          <div className="left">
            <p>Budget</p>
            <input
              className="budgetInput"
              placeholder="min"
              type="text"
              name="min"
              onChange={(e) => (minPriceRef.current = e.target.value)}
            />
            <input
              className="budgetInput"
              placeholder="max"
              type="text"
              name="max"
              onChange={(e) => (maxPriceRef.current = e.target.value)}
            />
            <button onClick={handleApply}>Apply</button>
          </div>
          <div className="right">
            Sort by
            <span>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img
              src="/img/icons/down.png"
              alt="downArrow"
              onClick={() => setOpen(true)}
            />
            <div className={`sortCat ${!open && "none"}`}>
              {sort === "sales" ? (
                <span onClick={() => reSort("createdAt")}>Newest</span>
              ) : (
                <span onClick={() => reSort("sales")}>Best Selling</span>
              )}
            </div>
          </div>
        </div>
        <div className="gigContainer">
          {isLoading
            ? "loading..."
            : error
            ? "Something went wrong!"
            : data?.map((data) => {
                // console.log(data.userId);
                return <GigCard item={data} key={data?._id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
