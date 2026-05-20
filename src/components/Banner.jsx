import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Banner.css";
import AnimatedContent from "./AnimatedContent";
import banner from "../assets/hero.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import CobaSlider from "./CobaSlider";

export default function Banner() {
  return (
    <div className="banner-section container-fluid ">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <div className="home-banner-text container-fluid">
              <h3>Hi, I am Tafadzwa</h3>
              <span> I am a </span>
              <p>
                With a focus on creating (and occasionally designing)
                exceptional digital experiences that are fast, accessible,
                visually appealing, and responsive. Even though I have been
                creating web applications for over 7 years, I still love it as
                if it was something new.
              </p>
              <h3 className="banner-location">Harare, Zimbabwe 🌐</h3>
              <div id="container" className="home-location">
                <CobaSlider />
              </div>
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
              delay={0.1}
            >
              <div data-aos="zoom-in">
                <Image src={banner} alt="" className="banner-image" />
              </div>
            </AnimatedContent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
