import "./FlipCard.css";
import logo from "../assets/react.svg";
import javascript from "../assets/icons/JavaScript.svg";
import { Image } from "react-bootstrap";

function FlipCard() {
  return (
    <div className="flip-cards">
      <div class="flip-card card">
        <Image className="flip-image" src={logo}></Image>
      </div>
      <div class="flip-card card">
        <Image className="flip-image" src={javascript}></Image>
      </div>
      {/* <div class="flip-card card">
        <Image className="flip-image" src={logo}></Image>
      </div>
      <div class="flip-card card">
        <Image className="flip-image" src={logo}></Image>
      </div>
      <div class="flip-card card">
        <Image className="flip-image" src={logo}></Image>
      </div> */}
    </div>
  );
}

export default FlipCard;
