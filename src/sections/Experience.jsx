import { Briefcase } from "lucide-react";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-index">01 / Experience</span>
            <h2 className="section-title">Here's a quick summary of my recent roles</h2>
          </div>
        </div>

        <div className="timeline" style={{ position: "relative" }}>
          <div
            className="timeline-spine"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border)",
              transform: "translateX(-50%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {experience.map((role, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="timeline-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 52px 1fr",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div style={{ textAlign: leftSide ? "right" : "left", order: leftSide ? 1 : 3 }}>
                    {leftSide ? <Card role={role} align="right" /> : <Meta role={role} align="left" />}
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", order: 2 }}>
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                        background: "var(--bg-raised)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: i === 0 ? "var(--accent)" : "var(--text-faint)",
                        flexShrink: 0,
                      }}
                    >
                      <Briefcase size={17} />
                    </span>
                  </div>

                  <div style={{ textAlign: leftSide ? "left" : "right", order: leftSide ? 3 : 1 }}>
                    {leftSide ? <Meta role={role} align="right" /> : <Card role={role} align="left" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .timeline-spine { left: 22px !important; }
          .timeline-row {
            grid-template-columns: 44px 1fr !important;
          }
          .timeline-row > div:first-child { display: none !important; }
          .timeline-row > div:nth-child(2) { order: 1 !important; justify-content: flex-start !important; }
          .timeline-row > div:last-child { order: 2 !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}

function Card({ role, align }) {
  return (
    <div
      style={{
        display: "inline-block",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "18px 20px",
        maxWidth: 380,
      }}
    >
      <h3 style={{ fontSize: 17 }}>{role.role}</h3>
      <p style={{ color: "var(--accent)", fontSize: 13.5, marginTop: 4 }}>{role.org}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginTop: 12,
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        {role.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11.5,
              color: "var(--text-dim)",
              border: "1px solid var(--border-soft)",
              borderRadius: 5,
              padding: "3px 8px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Meta({ role }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--text-faint)" }}>
      {role.period}
    </span>
  );
}
