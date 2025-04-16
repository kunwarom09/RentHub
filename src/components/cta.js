import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";

export const Call_to_action = () => {
  return (
    <div className="cta">
      <div className="cta_container">
        <h1>List your property today and start earning effortlessly.</h1>
        <p>
          Turn your space into extra cash by renting it out — effortlessly! We
          verify every tenant to ensure your peace of mind, with 24/7 support
          and secure payments guaranteed. You stay in control by setting your
          own rules and price, while we handle the rest. With our trusted
          platform, listing your property is not only easy but also safe. Start
          earning with confidence — we’ve got your back!
        </p>
        <Link to='/rent_room'><button className="rent_now_btn">List Now</button></Link>
      </div>
    </div>
  );
};
