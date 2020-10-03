import React from "react";
import "./style.css";

// icons
import homeIcon from "../../assets/home.png";
import sendIcon from "../../assets/send.png";
import heartIcon from "../../assets/heart.png";
import compassIcon from "../../assets/compass.png";
import logo from "../../assets/logo.png";
import profile from "../../assets/tarun.jpg";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-item">
          <div className="logo">
            <img className="logo-img" src={logo} />
          </div>
          <div>
            <input type="search" placeholder="Search" />
          </div>
          <div className="icons">
            <img className="icon-img" src={homeIcon} />
            <img className="icon-img" src={sendIcon} />
            <img className="icon-img" src={compassIcon} />
            <img className="icon-img" src={heartIcon} />
            <button className="profile-button">
              <img src={profile} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
