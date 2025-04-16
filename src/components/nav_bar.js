import "./nav_bar.css";
import Mobile_Menu from "./mobile_menu";
import { Link } from "react-router-dom";

const nav_bar = () => {
  return (
    <div className="nav_bar_container">
      <div className="nav_bar">
        <div className="logo">
          <a href="">Rent Hub</a>
        </div>
        <div className="nav_links">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/rent_room">Rent Room</Link></li>
            <li><Link to="/contact_us">Contact Us</Link></li>
            <li><Link to="/sign_up">Sign Up</Link></li>
          </ul>
        </div>
        <Mobile_Menu/>
      </div>
    </div>
  );
};
export default nav_bar;
