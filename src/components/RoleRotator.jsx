import { useEffect, useState } from "react";
import { profile } from "../data.js";

export default function RoleRotator() {
  const roles = profile.roleRotation;
  const [index, setIndex] = useState(0);
  const [reduceMotion] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [reduceMotion, roles.length]);

  return (
    <span
      style={{
        display: "inline-block",
        color: "var(--accent-strong)",
        transition: "opacity 0.3s ease",
      }}
      key={index}
    >
      {roles[index]}
    </span>
  );
}
