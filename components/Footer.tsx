export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        padding: "2rem 0",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#555",
      }}
    >
      © {new Date().getFullYear()} Skyframe. All rights reserved.
    </footer>
  );
}

