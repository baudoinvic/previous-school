import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments"></i>
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class="relative flex justify-center items-center">
        <div className="">
          <img
            src="https://sekolah.kenzap.com/wp-content/uploads/2016/11/events-bg.jpg"
            style={{
              width: "104rem",
              height: "300px ",
              opacity: "opacity: 0.7",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
            alt="Robot Factory Image"
            class="object-cover shadow-lg"
          />
          <div class="absolute inset-0 bg-black opacity-85"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-8">
            OUR STUDENTS ARE TALENTED
          </h1>
          <span className="text-white">
            passionate, hard-working and full of good ideas We encourage and
            <br />
            empower them to bring their ideas to life. Hands-on opportunities
            are what we're all about.
          </span>
        </div>
      </div>
    </>
  );
}

export default Hblog
