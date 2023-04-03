import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const LeftArrow = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    // padding: "8px 10px",
    // margin: "8px",
    backgroundColor: "white",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.15)",
    borderRadius: "200px",
    position: "absolute",
    top: "45%",
    left: "-20px",
    zIndex: "20",
  };

  return (
    <div className="leftClick ico-bg" style={style}>
      <FaChevronLeft color="#404145" width={20} style={{ paddingRight: 4 }} />
    </div>
  );
};

export default LeftArrow;
