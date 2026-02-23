import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DashboardPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Header />

      <section style={{ marginTop: "3rem", maxWidth: "800px" }}>
        <h1>Dashboard</h1>

        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          Welcome to your Skyframe dashboard. This is where your secure,
          personalized experience will live — from access controls to
          environment insights and everything in between.
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div className="sf-card">
            <h3>Access Overview</h3>
            <p>Track your active sessions, devices, and secure connections.</p>
          </div>

          <div className="sf-card">
            <h3>Environment Status</h3>
            <p>Monitor system health, uptime, and performance metrics.</p>
          </div>

          <div className="sf-card">
            <h3>Activity Log</h3>
            <p>Review recent actions, authentication events, and alerts.</p>
          </div>
        </div>
      <section style={{ marginTop: "3rem", maxWidth: "800px" }}>
  <h1>Dashboard</h1>

  <p style={{ marginTop: "1rem", lineHeight: "1.6", color: "#b00" }}>
    You are not signed in. Please{" "}
    <a href="/login" style={{ color: "#111", fontWeight: 600 }}>
      sign in
    </a>{" "}
    to access your dashboard.
  </p>
</section>sh

      <Footer />
    </main>
  );
}

