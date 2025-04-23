import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 min-h-screen bg-base-100 dark:bg-slate-900 px-6 md:px-20 text-base-content dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-500 mb-6 border-b-2 border-orange-500 pb-2">
            About Us
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            <strong className="text-orange-500">MagazineStore</strong> is your go-to platform for exploring the latest and greatest digital magazines.
            We bring you a curated reading experience with a passion for quality content and modern design.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to provide a seamless and enjoyable way for readers to connect with magazines from every genre — fashion, technology, art, and more.
          </p>
          <p className="text-lg leading-relaxed">
            Join our journey as we continue to redefine the magazine reading experience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
