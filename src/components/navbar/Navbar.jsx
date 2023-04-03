import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

const Navbar = () => {
  //make nav bar active
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log("err");
    }
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  // const currentUser = {
  //   id: 1,
  //   name: "john",
  //   isSeller: true,
  // };
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    window.addEventListener("scroll", isActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", isActive, { passive: true });
    };
  });

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span
              className={active || pathname !== "/" ? "text active" : "text"}
            >
              fiverr
            </span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <Link to="/login" className="link">
              <span>Sign In</span>
            </Link>
          )}
          {!currentUser && (
            <Link className="link" to="/register">
              <button>Join</button>
            </Link>
          )}
          {currentUser && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                src={currentUser.img || "img/icons/noavatar.jpg"}
                alt="profile-image"
              />
              <span>{currentUser?.userName}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="" className="link navLink">
              Graphics & Design
            </Link>
            <Link to="" className="link navLink">
              Digital Marketing
            </Link>
            <Link to="" className="link navLink">
              Writing & Translation
            </Link>
            <Link to="" className="link navLink">
              Video & Animation
            </Link>
            <Link to="" className="link navLink">
              Music & Audio
            </Link>
            <Link to="" className="link navLink">
              Programming & Tech
            </Link>
            <Link to="" className="link navLink">
              Photography
            </Link>
            <Link to="" className="link navLink">
              Business AI Services
            </Link>
            <Link to="" className="link navLink">
              AI Services
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
