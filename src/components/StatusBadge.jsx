export default function StatusBadge({ label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px 6px 10px",
        borderRadius: 100,
        border: "1px solid var(--accent-line)",
        background: "var(--accent-soft)",
        fontSize: 13,
        fontFamily: "var(--font-mono)",
        color: "var(--accent-strong)",
      }}
    >
      <span style={{ position: "relative", width: 8, height: 8 }}>
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "var(--accent)",
          }}
        />
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "var(--accent)",
            animation: "pulse-ring 2s ease-out infinite",
          }}
        />
      </span>
      {label}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>
    </span>
  );
}
