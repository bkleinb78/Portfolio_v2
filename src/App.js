import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
// import NotFound from "./pages/notfound";
import Skills from "./pages/skills";
import Footer from "./pages/footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Skills/>
      <Footer/>
      {/* <NotFound /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
