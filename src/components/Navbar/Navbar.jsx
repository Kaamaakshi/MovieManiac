import React from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <a href="#popular">
          Popular <img src={Fire} alt="Fire emoji" className="navbar_emoji" />
        </a>
        <a href="#toprated">
          Top Rated <img src={Star} alt="Star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming
          <img src={Party} alt="Part face emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
