import React from "react";
import Chip from "@mui/material/Chip";
import "./Experience.css";
// import { Card, Col, Row } from "react-bootstrap";
// import { Grid } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SchoolIcon, WorkflowIcon } from "lucide-react";

function Experience() {
  return (
    <div className="experience-section container-fluid">
      <Chip label="EXPERIENCE" variant="outlined" />
      <h3>Here is a quick summary of my most recent experiences:</h3>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="May 2024 - present"
          iconStyle={{ color: "white ", background: "black" }}
          icon={<WorkflowIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Upwork</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - April 2024"
          iconStyle={{ color: "black ", background: "white" }}
          icon={<WorkflowIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            VosterTech Consultancy
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2021 - March 2023"
          iconStyle={{ color: "white ", background: "black" }}
          icon={<WorkflowIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chito Systems</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2019 - Dec 2020"
          iconStyle={{ color: "black ", background: "white" }}
          icon={<WorkflowIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Technician(Internship)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Seke Teachers' College
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
