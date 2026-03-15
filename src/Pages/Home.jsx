import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Books from "../components/Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
    
  return (
    <div>
      <HeroSection />
      <Books data={data} />
    </div>
  );
};

export default Home;
