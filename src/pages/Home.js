import React, { useState } from "react";
import { Hero } from "../components/hero_section";
import Footer from "../components/footer";
import "./home.css";
import { Trending } from "../components/trending";
import { Call_to_action } from "../components/cta";
import { Service } from "../components/services";
import { Testimonial } from "../components/testimonal";
import { Property } from "../components/property";





export const Home = () => {
  return (
    <div className="home_container">
        <Hero/>
         <Trending/>
         <Property/>
         <Call_to_action/>
         <Service/>
         <Testimonial/>
         <Footer/>
    </div>
  );
};
