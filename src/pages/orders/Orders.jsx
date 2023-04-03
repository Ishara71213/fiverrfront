import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    name: "john",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <div className="gigList">
          <table>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Prices</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            <tr className="data">
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td className="gigTitle">Ai Image Generation</td>
              <td>$59.99</td>
              <td>1759</td>
              <td>
                <img
                  className="messageIcon"
                  src="/img/icons/message.png"
                  alt="message-icon"
                  width={25}
                />
              </td>
            </tr>
            <tr className="data">
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td className="gigTitle">Ai Image Generation</td>
              <td>$59.99</td>
              <td>1759</td>
              <td>
                <img
                  className="messageIcon"
                  src="/img/icons/message.png"
                  alt="message-icon"
                  width={25}
                />
              </td>
            </tr>
            <tr className="data">
              <td>
                <img
                  className="gigImage"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/303435398/original/ed11a940da975ec21ffb6f72cc1c6da16e89401d/do-stunning-3d-ai-art-character-design-digital-art-using-mid-journey.jpg"
                  alt="gigImg"
                  height={50}
                />
              </td>
              <td className="gigTitle">Ai Image Generation</td>
              <td>$59.99</td>
              <td>1759</td>
              <td>
                <img
                  className="messageIcon"
                  src="/img/icons/message.png"
                  alt="message-icon"
                  width={25}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
