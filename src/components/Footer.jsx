import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border-soft)", padding: "28px 0" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-faint)",
          }}
        >
          built by react + vite
        </span>
      </div>
    </footer>
  );
}
