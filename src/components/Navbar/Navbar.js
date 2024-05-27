import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import wplogo from "../../images/logos/wordpress-logo.png";
import reactlogo from "../../images/logos/react-logo.png";
import homelogo from "../../images/logos/home-logo.png";
import phaserLogo from "../../images/logos/phaser-logo.png";

export const Navbar = () => {
  return (
    <nav>
      <div className="custom-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="navbar-btns">
                <Link to="/">
                  <img src={homelogo} alt="Home logo"></img>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="navbar-btns">
                <Link to="/wordpress">
                  <img src={wplogo} alt="Wordpress logo"></img>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="navbar-btns">
                <Link to="/react">
                  <img src={reactlogo} alt="React logo"></img>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="navbar-btns">
                <Link to="/phaser">
                  <img src={phaserLogo} alt="Phaser logo"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
