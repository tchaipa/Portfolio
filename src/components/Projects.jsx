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
      <h1>Projects</h1>
      <h3>Some of the noteworthy projects I have built:</h3>
      <div className="projects-content container ">
        <Row className="projects-row">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={port} fluid></Image>
              <Link className="projects-link">My Portfolio</Link>
              <div>
                <Chip className="projects-chip" label="React JS"></Chip>
                <Chip className="projects-chip" label="Node JS"></Chip>
                <Chip className="projects-chip" label="Javascript JS"></Chip>
                <Chip className="projects-chip" label="MySQL"></Chip>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <Link className="projects-link">Vostertech Consultancy</Link>
              <div>
                <Chip className="projects-chip" label="React JS"></Chip>
                <Chip className="projects-chip" label="Node JS"></Chip>
                <Chip className="projects-chip" label="Javascript JS"></Chip>
                <Chip className="projects-chip" label="MySQL"></Chip>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="projects-row ">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vox}></Image>
              <Link className="projects-link">VoxVoyager</Link>
              <div>
                <Chip className="projects-chip" label="React JS"></Chip>
                <Chip className="projects-chip" label="Node JS"></Chip>
                <Chip className="projects-chip" label="Javascript JS"></Chip>
                <Chip className="projects-chip" label="MySQL"></Chip>
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <Link className="projects-link">Website</Link>
              <div>
                <Chip className="projects-chip" label="Wordpress"></Chip>
                <Chip className="projects-chip" label="Elementor"></Chip>
                <Chip className="projects-chip" label="Shopify"></Chip>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
