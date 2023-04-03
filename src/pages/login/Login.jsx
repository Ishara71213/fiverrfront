import React, { useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const [errUserName, setErrUserName] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("auth/login", { userName, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      document.cookie =
        "accessToke=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjZjZjNlMjA0NDdkN2VkNmFkZTcxNCIsImlzU2VsbGVyIjp0cnVlLCJpYXQiOjE2ODA1MTIxMTl9.Gb-0j7mh2w-5U95tTbQ3HNWg19xfPrcb7NvQo8OEAx0; Path=/";
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="loginForm-wrapper">
          <div className="top">
            <h2>Sign In to Fiverr</h2>

            <button className="btn facebook">
              <div className="icon"></div>
              <p>Continue with Facebook</p>
            </button>
            <button className="btn google">
              <div className="icon"></div>
              <p>Continue with Google</p>
            </button>
            <button className="btn apple">
              <div className="icon"></div>
              <p>Continue with Apple</p>
            </button>
            <div className="divider">
              <p>OR</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="username">
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Email / Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <span className="error" style={{ display: "none" }}>
                  User name Error
                </span>
              </div>
              <div className="password">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="true"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="error" style={{ display: "none" }}>
                  password Error
                </span>
              </div>
              <button className="btn loginBtn" type="submit">
                Continue
              </button>
              <div className="recover-remember">
                <label className="rememberme">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="rememberMe"
                  />
                  Remember Me
                </label>
                <Link className="link" to="/">
                  <p className="forgotPw">Forgot Password?</p>
                </Link>
              </div>
            </form>
          </div>
          <div className="bottom">
            <span>Not a member yet?</span>
            <Link className="link" to="/register">
              <span className="optionBtn">Join now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
