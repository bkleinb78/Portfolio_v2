import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/navbar";

import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import "../App.css";
import { useMediaQuery } from 'react-responsive'

const Categories = [
  {
    title: "Capstone",
    image: Image3,
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg",
      "https://media.contra.com/image/upload/f_auto%2Cc_fill%2Cdpr_auto%2Cw_auto%2Cfl_lossy%2Ce_loop%2Cfl_awebp%2Cfl_animated/exiwfu9ihs2zzs8dqmv0",
    ],
    Sourceurl: "https://github.com/bkleinb78/Capstone",
    Liveurl: "https://google.com",
  },
  {
    title: "Youtube Clone",
    image: Image4,
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg",
      "https://media.contra.com/image/upload/f_auto%2Cc_fill%2Cdpr_auto%2Cw_auto%2Cfl_lossy%2Ce_loop%2Cfl_awebp%2Cfl_animated/exiwfu9ihs2zzs8dqmv0",
    ],
    Sourceurl: "https://github.com/bkleinb78/Youtube-clone",
    Liveurl: "https://google.com",
  },
  {
    title: "Wedding Tracker",
    image: Image5,
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU",
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/tailwindcss/tailwindcss-plain.svg",
    ],
    Sourceurl: "https://github.com/bkleinb78/wedding-tracker",
    Liveurl: "https://wedding-tracker-ebx5.vercel.app",
  },
  // {
  //   title: "React",
  //   image: Image1,
  //   icons: [
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECfdTqlVrG03aR41yIfxUuQb1IgLN-TzsQ&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU",
  //   ],
  // },
  // {
  //   title: "Mobile",
  //   image: Image1,
  //   icons: [
  //     "data:image/png;base64,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",
  //     "data:image/png;base64,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",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU",
  //   ],
  // },
  // {
  //   title: "Django",
  //   image: Image1,
  //   icons: [
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6oaetahMwwJUin2nl4wDVElSs38IHNqAjg&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw23uU_-274pzA_YDiNtyQbatvriONygI-Q&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU",
  //   ],
  // },
];

export default function Projects() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div id="#projects" className="App">
      <div className="main-div -mb-20">
        {/* <div className="navbar-top">
          <Navbar />
        </div> */}
        <div className="text center mt-4">
          <h1 className="text white">Projects</h1>
        </div>
        <div className="row inline-project">
          {Categories.map((category, index) => (
            <div className="col-md-3 project-layout">
              <img
                src={category.image}
                style={{
                  width: "100%",
                  height: "36vh",
                  borderRadius: "15px",
                  objectFit: index == 2? "cover": "fill",
                }}
              />
              <p className="project-title">{category.title}</p>
              <div className="icon-layout-project">
                {category.icons.map((icon) => (
                  <img src={icon} className="project-icon" />
                ))}
              </div>
              <div className="btn-container">
                <a href={category.Sourceurl}>
                  <Button variant="secondary" className="category-btn">
                    <a style={{ fontSize: isTabletOrMobile? 20: "1vw" }}>Source</a>
                  </Button>
                </a>
                <a href={category.Liveurl}>
                  <Button variant="secondary" className="category-btn">
                    <a style={{ fontSize: isTabletOrMobile? 20: "1vw" }}>View</a>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
