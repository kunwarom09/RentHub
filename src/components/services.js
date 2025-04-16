import React from "react";
import "./service.css";
import { service } from "./array_list";

export const Service = () => {
  return (
    <div className="service">
      <div className="title">Service</div>
      <div className="sub_title">Service we offer to our valuable clients</div>
      <div className="service_container">
        {service.map((key) => {
          return (
            <div className="service_card">
              <div className="service_card_img">
                <img src={require('../images/'+ key.image)} alt="" />
              </div>
              <div className="service_detail">
                <div className="service_title">{key.title}</div>
                <div className="service_description">{key.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
