import "./Skills.css";
import { Box, Card, Chip, Grid, Link } from "@mui/material";
import "./Projects.css";
import { Col, Image, Row } from "react-bootstrap";

function Skills() {
  return (
    <div className="skills-section container-fluid">
      <section id="skills">
        <span class="section-tag">Expertise</span>
        <h2 class="section-title">Skills &amp; tools</h2>
        <p class="section-subtitle">
          Technologies I work with across frontend, backend, infrastructure, and
          design.
        </p>

        <div class="skills-grid fade-up">
          <div class="skill-category">
            <div class="skill-category-title">
              <div class="skill-icon green">⚡</div>
              Frontend Development
            </div>
            <div class="skills-list">
              <span class="skill-pill">HTML5</span>
              <span class="skill-pill">CSS3 / Sass</span>
              <span class="skill-pill">React</span>
              <span class="skill-pill">JavaScript</span>
              <span class="skill-pill">TypeScript</span>
              <span class="skill-pill">Flutter</span>
              <span class="skill-pill">Vite</span>
              <span class="skill-pill">Webpack</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">
              <div class="skill-icon blue">🛠</div>
              Backend Development
            </div>
            <div class="skills-list">
              <span class="skill-pill">Node.js</span>
              <span class="skill-pill">Express.js</span>
              <span class="skill-pill">Django</span>
              <span class="skill-pill">PHP</span>
              <span class="skill-pill">Python</span>
              <span class="skill-pill">RESTful APIs</span>
              <span class="skill-pill">MySQL</span>
              <span class="skill-pill">MongoDB</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">
              <div class="skill-icon amber">🎨</div>
              Tools &amp; Platforms
            </div>
            <div class="skills-list">
              <span class="skill-pill">Git / GitHub</span>
              <span class="skill-pill">VS Code</span>
              <span class="skill-pill">Figma</span>
              <span class="skill-pill">Canva</span>
              <span class="skill-pill">Wordpress</span>
              <span class="skill-pill">Elementor</span>
              <span class="skill-pill">Oracle Cloud</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">
              <div class="skill-icon purple">🧠</div>
              Soft Skills
            </div>
            <div class="skills-list">
              <span class="skill-pill">Problem Solving</span>
              <span class="skill-pill">Analytical Thinking</span>
              <span class="skill-pill">Adaptability</span>
              <span class="skill-pill">Communication</span>
              <span class="skill-pill">Team Collaboration</span>
              <span class="skill-pill">Creativity</span>
              <span class="skill-pill">Time Management</span>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>
    </div>
  );
}

export default Skills;
