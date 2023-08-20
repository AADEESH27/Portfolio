import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.zoom = "100%";
  }, []);
  return (
    <div>
      <NavBar />

      <Home />

      <About />

      <Portfolio />

      <Experience />

      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
