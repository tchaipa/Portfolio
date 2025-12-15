import { Chip } from "@mui/material";
import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <div className="projects-section container-fluid">
      <Chip label="PROJECTS" variant="outlined" className="projects-chip" />
      <h3>Some of the noteworthy projects I have built:</h3>
    </div>
  );
}

export default ProjectsSection;
