import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-row">
            <span className="section-index">04 / What I offer</span>
            <h2 className="section-title">Services</h2>
          </div>
        </div>

        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border-soft)" }}
        >
          {services.map((service) => (
            <div key={service.number} style={{ background: "var(--bg)", padding: "32px 26px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--text-faint)",
                }}
              >
                {service.number}
              </span>
              <h3 style={{ fontSize: 17, marginTop: 14 }}>{service.title}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: 14.5, lineHeight: 1.65, marginTop: 10 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
