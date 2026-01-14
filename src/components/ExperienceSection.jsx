import React from "react";
import Chip from "@mui/material/Chip";
import "./ExperienceSection.css";
import ExperiencePaper from "./ExperiencePaper";
import AnimatedContent from "./AnimatedContent.jsx";
import { Col, Row, Container } from "react-bootstrap";

function ExperienceSection() {
  return (
    <div className="experience-section container-fluid">
      <Chip label="EXPERIENCE" variant="outlined" />
      <h3>Here is a quick summary of my most recent experiences:</h3>
      <ExperiencePaper />
    </div>
  );
}

export default ExperienceSection;
