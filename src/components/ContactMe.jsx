import { Grid } from "@mui/material";
import "./ContactMe.css";
import { Col, Row } from "react-bootstrap";

function ContactMe() {
  return (
    <div className="contact-me container">
      <h1>Contact Me</h1>
      <Grid className="contact-me-grid">
        <Row className="contact-me-row">
          <Col>
            <h2>Contact Me On</h2>
          </Col>
          <Col>2</Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ContactMe;
