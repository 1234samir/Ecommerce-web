import React from "react";
import Album from "./Album";
import Footer from "./footer/Footer";
import MyCarousel from "./MyCarousel";
import Pricing from "./Pricing";

function Dashboard() {
  return (
    <div>
      <h1> Welcome to My Website</h1>
      <MyCarousel />
      <Pricing />
      {/* <Album /> */}
      <Footer />
    </div>
  );
}
export default Dashboard;
