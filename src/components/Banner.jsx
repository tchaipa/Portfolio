import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Banner.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AnimatedContent from "./AnimatedContent";
import banner from "../assets/hero.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import CobaSlider from "./CobaSlider";

export default function Banner() {
  return (
    <div className="basic-grid container-fluid ">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <div className="home-banner-text container-fluid">
              <h1>Hi, I am Tafadzwa</h1>
              <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
              <div id="container" className="home-location">
                <CobaSlider />
              </div>
            </div>
            <div className="container">
              <Container>
                <Row>
                  <Col>
                    <Image src="../assets/github.svg" alt="" />
                  </Col>
                  <Col>
                    <img src="../assets/linkedin.svg" alt="" />
                  </Col>
                </Row>
              </Container>
            </div>
          </Grid>
          <Grid size={4}>
            <AnimatedContent
              distance={300}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div data-aos="zoom-in">
                <Image src={banner} alt="" />
              </div>
            </AnimatedContent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
