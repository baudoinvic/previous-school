import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
// import CoursesCard from "../allcourses/CoursesCard"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img
              src="https://pbs.twimg.com/media/F-ZOGvhWgAEm9J2?format=jpg&name=4096x4096"
              alt=""
            />
          </div>
          <div className="right row">
            <Heading subtitle="About Us" title="" />
            <div className="about-us">
              <span className="block text-lg leading-6 text-gray-800 mb-6">
                At Institut Technique Internationale Lepieux, we are committed
                to providing exceptional educational opportunities for students
                from diverse backgrounds. As we prepare to open our doors this
                year, we are excited to introduce our innovative approach to
                learning and our dedication to fostering excellence in
                education.
              </span>

              <span className="block text-lg leading-6 text-gray-800">
                Our goal is to empower students with the knowledge, skills, and
                competencies necessary to thrive in an ever-evolving global
                landscape. Through hands-on learning experiences, personalized
                support, and a collaborative learning environment, we aim to
                nurture the next generation of leaders, innovators, and problem
                solvers.
              </span>
            </div>

            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <CoursesCard /> */}
      <Awrapper />
    </>
  );
}

export default AboutCard
