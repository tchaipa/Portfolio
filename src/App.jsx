import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
// import Footer from "./components/Footer.jsx";
// import BannerSection from "./components/BannerSection.jsx";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      {/* <BannerSection /> */}
      <Banner />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
