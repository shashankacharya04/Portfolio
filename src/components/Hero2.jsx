import React from "react";
import { ChevronDown, HandMetal } from "lucide-react";
const Hero2 = () => {
  return (
    <div className="hero min-h-screen bg-transparent">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="text-5xl font-bold flex justify-center gap-3">
            <span>Hello there</span>{" "}
            <span>
              <HandMetal className="mt-2" size={40} />
            </span>
          </div>

          <p className="py-6 text-lg">
            I'm a passionate web developer specializing in building dynamic and
            responsive websites using the{" "}
            <span className="text-gray-300">MERN</span> stack (MongoDB,
            Express.js, React, Node.js). As a fresher, I bring a fresh
            perspective and a strong desire to continuously learn and improve.
            Check out my projects below!
          </p>
          <a className="btn bg-transparent" href="#about">
            <ChevronDown size={40} color="#836363" className="w-28 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
