import React, { useState } from "react";
import "./mobile_menu.css";
import { Link } from "react-router-dom";

const Mobile_menu = () => {
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
    setMenu(!menu);
  };
  return (
    <div className="mobile_menu_container">
      <div className="mobile_menu">
        <div
          className={menu ? "hamburger_menu active" : "hamburger_menu"}
          onClick={handleVisible}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={visible ? "mobile_menu_links active" : "mobile_menu_links"}
        >
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/rent_room">Rent Room</Link>
            </li>
            <li>
              <Link to="/contact_us">Contact Us</Link>
            </li>
            <li>
              <Link to="/sign_up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile_menu;
