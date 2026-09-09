import { Code2, Server, Wrench, Sparkles } from "lucide-react";
import { skillGroups } from "../data.js";

const iconFor = [Code2, Server, Wrench, Sparkles];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-index">03 / Expertise</span>
            <h2 className="section-title">Skills &amp; tools</h2>
          </div>
        </div>

        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {skillGroups.map((group, i) => {
            const Icon = iconFor[i % iconFor.length];
            return (
              <div
                key={group.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: 24,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${group.color}1f`,
                      color: group.color,
                    }}
                  >
                    <Icon size={17} />
                  </span>
                  <h3 style={{ fontSize: 16 }}>{group.label}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 13,
                        color: "var(--text-dim)",
                        border: "1px solid var(--border-soft)",
                        background: "var(--bg-raised)",
                        borderRadius: 6,
                        padding: "6px 11px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
