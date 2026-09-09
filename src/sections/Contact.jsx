import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Let's build something — from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">Get in touch</span>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginTop: 14 }}>
          Let's build something great
        </h2>
        <p style={{ color: "var(--text-dim)", fontSize: 17, marginTop: 16, maxWidth: 480, marginInline: "auto" }}>
          Whether it's a new project, freelance work, or just a conversation — my inbox is open.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginTop: 28 }}>
          <a href={`mailto:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent-strong)", fontFamily: "var(--font-mono)", fontSize: 15 }}>
            <Mail size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-dim)", fontSize: 15 }}>
            <Phone size={16} /> {profile.phone}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 560,
            margin: "44px auto 0",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "left",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Your name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Your email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <Field label="Message" name="message" value={form.message} onChange={handleChange} textarea required />
          <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
            Send message
          </button>
          <p style={{ fontSize: 12.5, color: "var(--text-faint)", textAlign: "center" }}>
            Opens your email client with this pre-filled — nothing is sent from the site itself.
          </p>
        </form>

        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 40 }}>
          <a href={profile.socials.find((s) => s.label === "LinkedIn")?.href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "var(--text-dim)" }}>
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href={profile.socials.find((s) => s.label === "GitHub")?.href} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "var(--text-dim)" }}>
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", textarea = false, required = false }) {
  const inputStyle = {
    width: "100%",
    background: "var(--bg-raised)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    padding: "11px 12px",
    color: "var(--text)",
    fontSize: 14.5,
    fontFamily: "inherit",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 13.5, color: "var(--text-dim)" }}>
      {label}
      {textarea ? (
        <textarea name={name} value={value} onChange={onChange} rows={4} required={required} style={{ ...inputStyle, resize: "vertical" }} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} required={required} style={inputStyle} />
      )}
    </label>
  );
}
