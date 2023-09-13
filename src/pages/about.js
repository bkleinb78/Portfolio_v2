import React from "react";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import "./About.css";
import { FiAward, FiUsers } from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";

export default function about() {
  return (
    <section className="container about_section" id="about">
      <div className="text-center">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div>
          <div className="about_me">
            <img className="about_me_image" src={Image1} alt="AboutPicture" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />

              <h5>Experience</h5>

              <small>1+ years Web Development</small>
            </article>

            <article className="about_card">
              <MdCastForEducation className="about_icon" />

              <h5>Education</h5>

              <small>BSC</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            tenetur commodi quas quisquam sint praesentium, veritatis natus
            corporis aliquam ipsum, veniam doloribus at beatae quod, a deleniti
            cumque eos eveniet!
            {/* An ambitious, enthusiastic front-end React developer with expertise in HTML, CSS, and JavaScript, along with libraries like React JS, Next JS, Bootstrap, Tailwind, and Material UI. <br /> <br /> I'm well-versed in Firebase, Node JS, Express JS, and MongoDB for server-side development. <br /> <br /> I'm passionate about crafting captivating and responsive web applications that deliver seamless user experiences */}
          </p>

          <a href="#contact" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </section>
  );
}
