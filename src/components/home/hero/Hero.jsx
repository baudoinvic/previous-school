import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container ml-10">
          <div className="row">
            <Heading
              subtitle="WELCOME TO LEPIEUX INSTITUTE"
              title="High School Education Excellence"
            />
            <p className="text-white">
              We're happy to connect with you in whatever way you're most
              comfortable
            </p>
            <div className="flex mt-5">
              <button className="primary-btn mr-4 py-4 px-4">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bg-white text-teal-500 border border-teal-500 py-4 px-4 rounded">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
