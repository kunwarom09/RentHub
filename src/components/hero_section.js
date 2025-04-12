import React from 'react'
import { useState } from "react";
import './hero_section.css'
import NavBar from "../components/nav_bar";
import { pokharaLocations } from "../components/array_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
    const handleSelect = () => {
      setIsActive(!isActive);
    };
  return (
    <div className="home">
      <NavBar/>
      <div className="home_content">
    <h1 className="home_title">Welcome to Rent Hub</h1>
    <p className="home_description">
      your go-to platform for property rentals. Browse verified listings for
      homes, flats, and commercial spaces. Connect directly with landlords
      and renters, no middlemen needed. Fast, easy, and reliable – renting
      made effortless.
    </p>
    <div className="home_search_bar">
      <input type="text" placeholder="Search property" />
      <select id="type" name="type">
        <option value="">Type</option>
        <option value="Flat">Flat</option>
        <option value="Apartment">Apartment</option>
        <option value="Apartment">Single Room</option>
        <option value="Apartment">Single Room with Kitchen</option>
      </select>
      <div className="dropdown" onClick={handleSelect}>
        <div className="select">
          <div className="selected">{selected}</div>
          <div className={isActive ? "caret active" : "caret"}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <ul className={isActive ? "menu active" : "menu"}>
          {pokharaLocations.map((key) => {
            return (
              <li
                onClick={(e) => {
                  setSelected(key);
                }}
                value={key}
              >
                {key}
              </li>
            );
          })}
        </ul>
      </div>
      <button className="search_btn">
        <a href="">Search</a>
      </button>
    </div>
  </div>
    </div>
)
}
