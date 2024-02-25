import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"" '
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>kalemie 21th Street, Republic Democratic of Congo</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>lepieuxinternationalschool.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> + 250 783012138</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn px-4 py-2 mx-2 my-1">
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
