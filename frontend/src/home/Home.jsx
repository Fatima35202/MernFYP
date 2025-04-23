import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freemagazine from "../components/Freemagazine";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freemagazine />
      <Footer />
    </>
  );
}

export default Home;
