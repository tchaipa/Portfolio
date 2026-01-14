import "./SkillsCard.css";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import { Col, Container, Row } from "react-bootstrap";
function SkillsCard() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={vite} alt="" />
                  <p>VITE</p>
                </div>
                <div class="flip-card-back">
                  <p>4 Years Experience</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={vite} alt="" />
                  <p>VITE</p>
                </div>
                <div class="flip-card-back">
                  <p>4 Years Experience</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={vite} alt="" />
                  <p>VITE</p>
                </div>
                <div class="flip-card-back">
                  <p>4 Years Experience</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>

              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={react} alt="" />
                  <p>REACT JS</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsCard;
