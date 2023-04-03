import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import uploadFile from "../../utils/uploadFile";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    phoneNumber: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await uploadFile(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="left">
              <h2>Create a new account</h2>
              <label htmlFor="userName" className="label">
                User Name
                <input
                  className="input"
                  type="text"
                  name="userName"
                  placeholder="John Smith"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email" className="label">
                Email
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="password" className="label">
                Password
                <input
                  className="input"
                  type="password"
                  name="password"
                  autoComplete="true"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="profileImg" className="label">
                Profile picture
                <input
                  className="input"
                  type="file"
                  name="profileImg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <label htmlFor="country" className="label">
                Country
                <input
                  className="input"
                  type="text"
                  name="country"
                  placeholder="USA"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="right">
              <h2>I want to become a seller</h2>
              <label htmlFor="isSeller" className="label check">
                <span>Activate the seller Account</span>
                <input
                  className="input"
                  type="checkbox"
                  name="isSeller"
                  onChange={handleSeller}
                />
              </label>
              <label htmlFor="phoneNumber" className="label">
                Phone Number
                <input
                  className="input"
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="desc" className="label">
                Description
                <textarea
                  className="input  desc"
                  type="text"
                  name="desc"
                  onChange={handleChange}
                />
              </label>
              <button className="btn">Register</button>
            </div>
          </form>
          <div className="bottom">
            <span>Already a member?</span>
            <Link className="link" to="/login">
              <span className="optionBtn">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
