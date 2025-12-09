import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Banner.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import ProfileCard from "./ProfileCard";
// import hero from "../assets/hero.png";
import AnimatedContent from "./AnimatedContent";
import banner from "../assets/hero.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Button } from "@mui/material";

{
  /* <script>AOS.init();</script>; */
}

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
                <PlaceOutlinedIcon className="location-icon" />
                <span className="location-text">Harare, Zimbabwe</span>
              </div>
              <div className="inbox container-fluid">
                <div className="button">
                  <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                  </div>
                </div>
                <div className="button">
                  <div className="icon">
                    <i className="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                  </div>
                </div>
                <div className="button">
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                  </div>
                </div>
                <div className="button">
                  <div className="icon">
                    <i className="fa-brands fa-github"></i>
                    <span>Github</span>
                  </div>
                </div>
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
            <div data-aos="zoom-in">
              <Image src={banner} alt="" />
            </div>
            {/* <ProfileCard
              name="Tafadzwa I. Chaipa"
              title="Software Engineer"
              handle="zeus_codes"
              y
              status="Online"
              contactText="Contact Me"
              avatarUrl={hero}
              showUserInfo={false}
              showIconPattern={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
