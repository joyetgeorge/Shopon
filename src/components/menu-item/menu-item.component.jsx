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
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default MenuItem;
