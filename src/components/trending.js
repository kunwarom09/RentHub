import React from "react";
import { Link } from "react-router-dom";
import "./trending.css";
import { properties } from "./array_list";

export const Trending = () => {
  return (
    <div className="trending_container">
      <div className="title">Trending Properties</div>
      <div className="trending_container_upper">
      <div className="sub_title">
        Explore the currently trending properties around
      </div>
      <div className="property_link">
        <Link to="/">See More</Link>
      </div>
      </div>
      <div className="trending_properties">
        {properties.map((key) => {
          return (<div className="property_card">
            <div className="property_image">
              <img src={key.image}
                alt="Property Image"
              />
            </div>
            <div className="property_details">
              <div className="property_price">{key.price}</div>
              <div className="property_name">{key.property_name}</div>
              <div className="property_location">{key.location}</div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};
