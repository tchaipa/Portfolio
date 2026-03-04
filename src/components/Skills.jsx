import { Chip, Grid, ListItem } from "@mui/material";
import "./Skills.css";
import react from "../assets/icons/React.svg";
import { Button, Image } from "react-bootstrap";
import php from "../assets/icons/PHP.svg";
import javascript from "../assets/icons/JavaScript.svg";
import json from "../assets/icons/JSON.svg";
import bootstrap from "../assets/icons/Bootstrap.svg";
import vite from "../assets/icons/Vite.js.svg";
import node from "../assets/icons/Node.js.svg";
import tailwind from "../assets/icons/Tailwind CSS.svg";
import mongo from "../assets/icons/MongoDB.svg";
import mysql from "../assets/icons/MySQL.svg";
import wordpress from "../assets/icons/WordPress.svg";
import ionic from "../assets/icons/Ionic.svg";

function Skills() {
  return (
    <div className="skills-section container-fluid">
      <Chip label="SKILLS" variant="outlined" className="skills-chip" />
      <h3>The skills, tools and technologies I am really good at:</h3>
      <div className="skills-cards container">
        <div class="skills-card card">
          <Image className="flip-image" src={react}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={javascript}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={php}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={json}></Image>
        </div>
      </div>
      <br />
      <div className="skills-cards container">
        <div class="skills-card card">
          <Image className="flip-image" src={bootstrap}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={vite}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={node}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={tailwind}></Image>
        </div>
      </div>
      <br />
      <div className="skills-cards container">
        <div class="skills-card card">
          <Image className="flip-image" src={wordpress}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={mysql}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={ionic}></Image>
        </div>
        <div class="skills-card card">
          <Image className="flip-image" src={mongo}></Image>
        </div>
      </div>
      <Button className="skills-button">Read More</Button>
    </div>
  );
}

export default Skills;
