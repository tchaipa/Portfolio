import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ExperiencePaper.css";
import { Col, Container, Row } from "react-bootstrap";
// import upwork from "../assets/upwork.svg";
// import voster from "../assets/vostertech.svg";
// import stc from "../assets/stc.svg";
// import chito from "../assets/chito.png";

export default function ExperiencePaper() {
  return (
    <div className="experience-paper container-fluid">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            maxWidth: 700,
            height: "auto",
          },
        }}
      >
        <Paper elevation={3}>
          <Container fluid className="p-3">
            <Row className="flex-container">
              {/* <Col>
                <img src={upwork} alt="" className="upwork-logo" />
              </Col> */}
              <Col>
                <p> April 2023 - Present</p>
              </Col>
              <Col>
                <h3>Independent Freelancer</h3>
                <ul>
                  <li>
                    Developed and maintained web applications for clients.
                  </li>
                  <li>
                    Collaborated with clients to gather requirements and deliver
                    solutions.
                  </li>
                  <li>
                    Utilized technologies such as React.js, Node.js, and
                    databases to build robust applications.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Paper>
        <Paper elevation={3}>
          <Container fluid className="p-3">
            <Row className="flex-container">
              {/* <Col>
                <img src={voster} alt="" className="voster-logo" />
              </Col> */}
              <Col>
                <p>May 2023 - April 2024</p>
              </Col>
              <Col>
                <h3>Web Developer</h3>
                <ul>
                  <li>
                    Designed and developed a system which an consultancy ERP
                    system which resulted in reducing operational costs by 40%.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to develop and
                    implement the application system and website as per their
                    departmental requirements.
                  </li>
                  <li>
                    Spearheaded the automation and migration processes for the
                    business, decreasing manual workload by 60%.
                  </li>
                  <li>Offered helpdesk support for product end users.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Paper>
        <Paper elevation={3}>
          <Container fluid className="p-3">
            <Row className="flex-container">
              {/* <Col>
                <img src={stc} alt="" className="stc-logo" />
              </Col> */}
              <Col>
                <p>Aug 2019 - Dec 2020</p>
              </Col>
              <Col>
                <h3>IT Support</h3>
                <ul>
                  <li>
                    Troubleshooting and maintaining hardware and software
                    issues.
                  </li>
                  <li>
                    Carried out Operating systems installations and maintenance.
                  </li>
                  <li>System Administration duties.</li>
                  <li>Providing helpdesk support service.</li>
                  <li>Installation and configuration of networks.</li>
                  <li>Database management and Server administration.</li>
                  <li>Conducted ICT lessons and training.</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Paper>
        <Paper>
          <Container fluid className="p-3">
            <Row className="flex-container">
              {/* <Col>
                <img src={chito} alt="" className="chito-logo" />
              </Col> */}
              <Col>
                <p>Dec 2021 - Mar 2023</p>
              </Col>
              <Col>
                <h3>Software Developer</h3>
                <ul>
                  <li>
                    Built several personal projects using React.js, Node.js,
                    Express.js, and MongoDB.
                  </li>
                  <li>
                    Contributed to open-source projects on GitHub, enhancing
                    features and fixing bugs.
                  </li>
                  <li>
                    Participated in coding bootcamps and hackathons to improve
                    skills and collaborate with other developers.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Paper>
      </Box>
    </div>
  );
}
