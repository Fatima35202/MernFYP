import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 min-h-screen bg-base-100 dark:bg-slate-900 text-base-content dark:text-white">
        <div className="max-w-xl mx-auto p-6 shadow-xl rounded-lg bg-white dark:bg-slate-800 mt-10">
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Contact Us
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="5"
            ></textarea>
            <div className="flex justify-center">
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white px-10">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
