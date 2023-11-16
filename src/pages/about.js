import React from "react";
import Image1 from "../assets/image.jpg";
// import Image2 from "../assets/image2.jpg";
import "./About.css";
import { FiAward } from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";

export default function about() {
  return (
    <section className="container about_section mt-2 pt-2" id="about">
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
            I'm a Software Developer currently living in chicago. Over the next
            few years, I plan to grow my skills and education in bringing
            digital products to life. I am looking to make an impact in the tech
            industry by transitioning from retail sales. In my spare time i love
            to play video games and surf the web on new technology coming out.
            {/* An ambitious, enthusiastic front-end React developer with expertise in HTML, CSS, and JavaScript, along with libraries like React JS, Next JS, Bootstrap, Tailwind, and Material UI. <br /> <br /> I'm well-versed in Firebase, Node JS, Express JS, and MongoDB for server-side development. <br /> <br /> I'm passionate about crafting captivating and responsive web applications that deliver seamless user experiences */}
          </p>
        </div>
      </div>
    </section>
  );
}
