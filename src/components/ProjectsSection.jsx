import { Chip } from "@mui/material";
import "./ProjectsSection.css";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Mobile Development",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Web Development",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  // {
  //   image: "https://i.pravatar.cc/300?img=2",
  //   title: "Mike Chen",
  //   subtitle: "Backend Engineer",
  //   handle: "@mikechen",
  //   borderColor: "#10B981",
  //   gradient: "linear-gradient(180deg, #10B981, #000)",
  //   url: "https://linkedin.com/in/mikechen",
  // },
  {
    image: "https://i.pravatar.cc/300?img=16",
    title: "Web App Development",
    subtitle: "Data Scientist",
    handle: "@caseypark",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "https://kaggle.com/",
  },
];

function ProjectsSection() {
  return (
    <div className="projects-section container-fluid">
      <Chip label="PROJECTS" variant="outlined" className="projects-chip" />
      <h3>Some of the noteworthy projects I have built:</h3>
      <div style={{ height: "600px", position: "relative" }}>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
}

export default ProjectsSection;
