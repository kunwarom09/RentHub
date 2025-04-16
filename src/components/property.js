import React from "react";
import "./property.css";
import { Link } from "react-router-dom";

import { property } from "./array_list";
export const Property = () => {
  return (
    <div className="property">
      <div className="title">Property</div>
      <div className="container_upper">
      <div className="sub_title">
        Explore the properties that has been listed all over your area
      </div>
      <div className="property_link">
        <Link to="/properties">See More</Link>
      </div>
      </div>
      <div className="property_container">
        {property.slice(0, 5).map((property, index) => {
          return (
            <div className="property_card" key={index}>
              <div className="property_image">
                <img src={property.image} alt="property image" />
              </div>
              <div className="property_details">
                <div className="property_title">{property.name}</div>
                <div className="property_price">{property.price}</div>
                <div className="property_location">{property.location}</div>
                <div className="property_description">
                  {property.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
