import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../../components/profileImg/ProfileImg";
import "./Message.scss";

const Message = () => {
  const message =
    "Hi, How must it would cost me to premium package of yours. Lokking forward for prompt responce, thank you";

  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <p>
            <Link to="/messages" className="link">
              {" "}
              Messages
            </Link>{" "}
            &gt; Kaira Jane
          </p>
        </div>
        <div className="chat-wrapper">
          <div className="left">
            <h2>Inbox</h2>
            <hr />
            <div className="messages-wrapper">
              <div className="thread active">
                <ProfileImg url="/download.jpg" width={65} height={65} />
                <div className="content">
                  <div className="userNameAndTime">
                    <p className="userName">James Antony</p>
                    <p className="time">10.00 pm</p>
                  </div>
                  <p className="msgBody">{message.substring(0, 80)}...</p>
                </div>
              </div>
              <div className="thread">
                <ProfileImg url="/download.jpg" width={65} height={65} />
                <div className="content">
                  <div className="userNameAndTime">
                    <p className="userName">James Antony</p>
                    <p className="time">10.00 pm</p>
                  </div>
                  <p className="msgBody">{message.substring(0, 80)}...</p>
                </div>
              </div>
              <div className="thread">
                <ProfileImg url="/download.jpg" width={65} height={65} />
                <div className="content">
                  <div className="userNameAndTime">
                    <p className="userName">James Antony</p>
                    <p className="time">10.00 pm</p>
                  </div>
                  <p className="msgBody">{message.substring(0, 80)}...</p>
                </div>
              </div>
              <div className="thread">
                <ProfileImg url="/download.jpg" width={65} height={65} />
                <div className="content">
                  <div className="userNameAndTime">
                    <p className="userName">James Antony</p>
                    <p className="time">10.00 pm</p>
                  </div>
                  <p className="msgBody">{message.substring(0, 80)}...</p>
                </div>
              </div>
              <div className="thread">
                <ProfileImg url="/download.jpg" width={65} height={65} />
                <div className="content">
                  <div className="userNameAndTime">
                    <p className="userName">James Antony</p>
                    <p className="time">10.00 pm</p>
                  </div>
                  <p className="msgBody">{message.substring(0, 80)}...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="conversation">
              <div className="item-in">
                <ProfileImg url="/download.jpg" width={40} height={40} />
                <p className="messageContainer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda esse in exercitationem quas animi ratione magni ipsa
                  modi voluptates veritatis.
                </p>
              </div>
              <div className="item-out">
                <ProfileImg url="/download.jpg" width={40} height={40} />
                <p className="messageContainer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda esse in exercitationem quas animi ratione magni ipsa
                  modi voluptates veritatis.
                </p>
              </div>
            </div>
            <div className="write">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write a message"
              ></textarea>
              <button className="sendBtn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
