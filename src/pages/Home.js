import React, { useState } from "react";
import NavBar from "../components/nav_bar";
import { Hero } from "../components/hero_section";
import Footer from "../components/footer";
import "./home.css";
import { Trending } from "../components/trending";


export const Home = () => {


  return (
    <div className="home_container">
        <Hero/>
         <Trending/>
    </div>
  );
};
