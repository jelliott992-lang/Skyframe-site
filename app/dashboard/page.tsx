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
          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <h2>Access Control</h2>
            <p style={{ marginTop: "0.5rem" }}>
              Manage secure access to your Skyframe environments.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <h2>Environment Insights</h2>
            <p style={{ marginTop: "0.5rem" }}>
              View system health, performance, and usage analytics.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <h2>Activity Logs</h2>
            <p style={{ marginTop: "0.5rem" }}>
              Track recent actions and system events.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

