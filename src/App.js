import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <NotFound />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
