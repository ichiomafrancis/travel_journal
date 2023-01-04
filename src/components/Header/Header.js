import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header--img"
        src={require("../../Images/earth.png")}
        alt=""
      />
      <h4 className="header--title">my travel journal</h4>
    </div>
  );
}
