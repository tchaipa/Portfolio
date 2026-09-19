import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data.js";

export default function Nav() {
  const [active, setActive] = useState(nav[0].id);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled ? "rgba(11,18,16,0.86)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-soft)"
          : "1px solid transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            fontSize: 15,
            color: "var(--text)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          {profile.name.toUpperCase()}
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </a>

        <nav
          style={{ display: "flex", alignItems: "center", gap: 4 }}
          className="nav-desktop"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                padding: "8px 14px",
                fontSize: 14,
                borderRadius: 6,
                color:
                  active === item.id
                    ? "var(--accent-strong)"
                    : "var(--text-dim)",
                position: "relative",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginLeft: 10 }}
          >
            Get in touch
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: 8,
            color: "var(--text)",
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingBottom: 16,
          }}
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 4px",
                fontSize: 15,
                borderBottom: "1px solid var(--border-soft)",
                color:
                  active === item.id ? "var(--accent-strong)" : "var(--text)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 780px) {
          .nav-desktop { 
            display: none !important; 
          }
          .nav-toggle { 
            display: inline-flex !important; 
            align-items: center; 
            justify-content: center; 
          }
        }
      `}</style>
    </header>
  );
}
