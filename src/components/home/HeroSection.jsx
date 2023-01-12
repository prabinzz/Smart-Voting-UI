import React from "react";
import { Link } from "react-router-dom";
import voting from "../../assets/voting.png";
const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            IOT Smart Voting System
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            "Smart Voting System: Smart, Secure and Real-time - Using ESP32,
            RFID, Fingerprint authentication and Server Verification for small
            scale voting. Live Vote Count Updates make it convenient for any
            kind of election"
          </p>
          <Link
            to={"/VoteCount"}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View Vote Count
          </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={voting}></img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
