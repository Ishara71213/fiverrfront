import React from "react";
import "./Messages.scss";
import ProfileImg from "../../components/profileImg/ProfileImg";
import { Link } from "react-router-dom";
const Messages = () => {
  const message =
    "Hi, How must it would cost me to premium package of yours. Lokking forward for prompt responce, thank you";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <div className="gigList">
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last message</th>
              <th>Date</th>
              <th>Curent Order</th>
              <th>Action</th>
            </tr>
            <tr className="data active">
              <td>
                <div className="userDetails">
                  <ProfileImg url="/download.jpg" width={30} height={30} />
                  <h3>Ishara</h3>
                </div>
              </td>
              <td className="gigTitle">
                <div className="messageBody">
                  <Link to="/message/123" className="link">
                    <p>{message.substring(0, 62)}...</p>
                  </Link>
                </div>
              </td>
              <td>1 day ago</td>
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td>
                <button className="markASRead">Mark as read</button>
              </td>
            </tr>
            <tr className="data">
              <td>
                <div className="userDetails">
                  <ProfileImg url="/download.jpg" width={30} height={30} />
                  <h3>Ishara</h3>
                </div>
              </td>
              <td className="gigTitle">
                <div className="messageBody">
                  <Link to="/message/123" className="link">
                    <p>{message.substring(0, 62)}...</p>
                  </Link>
                </div>
              </td>
              <td>1 day ago</td>
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td>
                <button className="markASRead">Mark as read</button>
              </td>
            </tr>
            <tr className="data">
              <td>
                <div className="userDetails">
                  <ProfileImg url="/download.jpg" width={30} height={30} />
                  <h3>Ishara</h3>
                </div>
              </td>
              <td className="gigTitle">
                <div className="messageBody">
                  <Link to="/message/123" className="link">
                    <p>{message.substring(0, 62)}...</p>
                  </Link>
                </div>
              </td>
              <td>1 day ago</td>
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td>
                <button className="markASRead">Mark as read</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
