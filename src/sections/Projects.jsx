import { ArrowUpRight } from "lucide-react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-index">02 / Projects</span>
            <h2 className="section-title">
              Some of the noteworthy projects I've built
            </h2>
          </div>
        </div>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target={project.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="project-card"
              style={{ display: "block" }}
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background:
                    "radial-gradient(120% 140% at 20% 0%, rgba(62,207,142,0.14), transparent 60%), var(--bg-raised)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 14,
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    color: "var(--accent-strong)",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                  }}
                >
                  {project.name}
                </h3>
                <ArrowUpRight size={15} style={{ color: "var(--accent)" }} />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 10,
                  flexWrap: "wrap",
                }}
              >
                {project.info.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text-faint)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .project-card { transition: transform 0.15s ease; }
        .project-card:hover { transform: translateY(-3px); }
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
