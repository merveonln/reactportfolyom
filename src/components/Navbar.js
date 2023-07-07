import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main background-image">
        <div className="menu">
          <div className="menu-item">
            <Link to="/">
              <div className="circle">
                <HomeIcon />
              </div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/about">
              <div className="circle">
                <PersonIcon />
              </div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/contact">
              <div className="circle">
                <EmailIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
