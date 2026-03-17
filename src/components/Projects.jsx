import { Box, Card, Chip, Grid, Link } from "@mui/material";
import "./Projects.css";
import { Col, Image, Row } from "react-bootstrap";
import port from "../assets/port.png";
import vost from "../assets/vost.png";
import vox from "../assets/vox.png";
import { ArrowForward } from "@mui/icons-material";
// import { ArrowRight } from "lucide-react";

function Projects() {
  return (
    <div className="projects-section container-fluid">
      <Chip label="PROJECTS" variant="outlined" className="projects-chip" />
      <h3>Some of the noteworthy projects I have built:</h3>
      <div className="projects-content container ">
        <Row className="projects-row">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={port} fluid></Image>
              <h4>My Portfolio</h4>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <h4>Vostertech Consultancy</h4>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="projects-row ">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vox}></Image>
              <h4>VoxVoyager</h4>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <h4>Website</h4>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
