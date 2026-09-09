import { ArrowUpRight, Download, Github, Linkedin, Facebook, Instagram, Globe2 } from "lucide-react";
import { profile } from "../data.js";
import StatusBadge from "../components/StatusBadge.jsx";
import RoleRotator from "../components/RoleRotator.jsx";

const iconFor = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
};

export default function Hero() {
  return (
    <section id="top" style={{ padding: "64px 0 100px" }}>
      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <span className="eyebrow">Hi, I am {profile.name}</span>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              marginTop: 16,
              maxWidth: 620,
            }}
          >
            I am a <RoleRotator />
          </h1>

          <p
            style={{
              color: "var(--text-dim)",
              fontSize: 17,
              lineHeight: 1.75,
              marginTop: 22,
              maxWidth: 520,
            }}
          >
            {profile.tagline}
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 22,
              color: "var(--accent-strong)",
              fontSize: 15,
            }}
          >
            <Globe2 size={16} /> {profile.location}
          </a>

          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a href={profile.resumeUrl} className="btn btn-primary" download>
              <Download size={16} /> Download CV
            </a>
            <a href="#projects" className="btn btn-ghost">
              View work <ArrowUpRight size={15} />
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
            {profile.socials.map((s) => {
              const Icon = iconFor[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    color: "var(--text-dim)",
                  }}
                >
                  {Icon ? <Icon size={17} /> : s.label[0]}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ position: "relative", justifySelf: "center" }}>
          <div
            style={{
              width: "min(340px, 80vw)",
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background:
                "radial-gradient(120% 120% at 30% 20%, rgba(62,207,142,0.16), transparent 60%), var(--bg-raised)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={profile.photo}
              alt={profile.fullName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              style={{
                display: "none",
                position: "absolute",
                inset: 0,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
                color: "var(--text-faint)",
                fontSize: 13,
                textAlign: "center",
                padding: 24,
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)" }}>/public/photo.jpg</span>

              <span ></span>
            </div>
          </div>

          <div style={{ position: "absolute", left: -16, bottom: -16 }}>
            <StatusBadge label={profile.availability} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { order: -1; margin-bottom: 12px; }
        }
      `}</style>
    </section>
  );
}
