import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, url, bg, size }) => (
  
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className="background"
    > </div>

    <div className="bg-gradient"></div>
    <div className="title">
      <div className="header">
        <h1>{title.toUpperCase()}</h1>
      </div>
    </div>

  </div>
);

export default MenuItem;
