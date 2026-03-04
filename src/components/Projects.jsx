import { Box, Chip, Grid, Link } from "@mui/material";
import "./Projects.css";
import { Card, Col, Image, Row } from "react-bootstrap";
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
      <div className="projects-content container-fluid">
        <Row className="projects-row container-fluid">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={port}></Image>
              <h4>My Portfolio</h4>
              <Link className="projects-link ">
                Live Demo <ArrowForward />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <h4>Vostertech Consultancy</h4>
              <Link className="projects-link ">
                Live Demo
                <ArrowForward />
              </Link>
            </Card>
          </Col>
        </Row>
        <Row className="projects-row container-fluid">
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vox}></Image>
              <h4>VoxVoyager</h4>
              <Link className="projects-link ">
                Live Demo
                <ArrowForward />
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Image className="projects-image" src={vost}></Image>
              <h4>Website</h4>
              <Link className="projects-link ">
                Live Demo
                <ArrowForward />
              </Link>
            </Card>
          </Col>
        </Row>

        {/* <Image src={port} height="120px" width="520px"></Image>
          <Image src={vost} height="120px" width="520px"></Image> */}
      </div>
    </div>
  );
}

export default Projects;
