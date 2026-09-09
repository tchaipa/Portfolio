import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Services from "./sections/Services.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
