import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
// import Footerr from "./components/Footer";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <ContactMe />
      {/* <Footerr /> */}
    </div>
  );
}

export default App;
