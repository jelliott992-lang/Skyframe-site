import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <NavBar />
      <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "2rem 1rem" }}>
        {children}
      </main>
      <footer style={{ padding: "2rem 1rem", borderTop: "1px solid #eee", marginTop: "3rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", fontSize: "0.9rem", color: "#666" }}>
          <div>© {new Date().getFullYear()} Skyframe / LibreLink</div>
        </div>
      </footer>
    </div>
  );
}

