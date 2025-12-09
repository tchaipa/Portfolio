import { Chip, Grid, ListItem } from "@mui/material";
import "./SkillsSection.css";

function SkillsSection() {
  return (
    <div className="skills-section container-fluid">
      <Chip label="SKILLS" variant="outlined" className="skills-chip" />
      <h3>The skills, tools and technologies I am really good at:</h3>
    </div>
  );
}

export default SkillsSection;
