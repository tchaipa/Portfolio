import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Banner />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;
