import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Header />

      {/* HERO SECTION */}
      <section
        style={{
          marginTop: "3rem",
          padding: "3rem 2rem",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Move Through the World with Confidence
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "650px" }}>
          Skyframe blends secure access, clean design, and seamless experiences
          to help you navigate your digital and physical environments with clarity.
        </p>

        <button
          style={{
            marginTop: "2rem",
            padding: "0.9rem 1.6rem",
            fontSize: "1rem",
            fontWeight: 600,
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ marginTop: "4rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          Why Skyframe?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Secure by Design</h3>
            <p style={{ lineHeight: "1.5" }}>
              Built with modern authentication and encrypted workflows from the
              ground up.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Effortless Experience</h3>
            <p style={{ lineHeight: "1.5" }}>
              Clean, intuitive interfaces that help you move quickly and stay
              focused.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Modular & Scalable</h3>
            <p style={{ lineHeight: "1.5" }}>
              A flexible architecture that grows with your needs — from personal
              use to enterprise scale.
            </p>
          </div>
        </div>
      </section>

