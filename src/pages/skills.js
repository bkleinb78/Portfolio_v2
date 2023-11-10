import React from "react";
// import { FcSettings } from "react-icons/fc";
import {
  SiBootstrap,
  // SiCheckmarx,
  SiCss3,
  SiExpress,
  // SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  // SiReact,
  // SiReactrouter,
  // SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="mt-4">
      <div className="text-center">
        <h2 className="text-white">Skills</h2>
      </div>
      <div className="container skills_container">
        <div className="skills_frontend">
          {/* ==================================== Frontend ================================ */}

          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <SiHtml5 className="skills_details_icons" />

              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <SiCss3 className="skills_details_icons" />

              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <SiTailwindcss className="skills_details_icons" />

              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <SiJavascript className="skills_details_icons" />

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skills_details">
              <SiTypescript className="skills_details_icons" />

              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skills_details">
              <SiBootstrap className="skills_details_icons" />

              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* ==================================== BackEnd ================================ */}

        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <SiPhp className="skills_details_icons" />

              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="skills_details">
              <SiNodedotjs className="skills_details_icons" />

              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <SiExpress className="skills_details_icons" />

              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <SiMongodb className="skills_details_icons" />

              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
