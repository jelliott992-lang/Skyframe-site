import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LoginPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Header />

      <section
        style={{
          marginTop: "3rem",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Sign In</h1>

        <p style={{ marginBottom: "1.5rem", color: "#555" }}>
          Access your Skyframe dashboard and secure tools.
        </p>

        <button
          style={{
            width: "100%",
            padding: "0.9rem",
            fontSize: "1rem",
            fontWeight: 600,
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign in with Microsoft
        </button>
      </section>

      <Footer />
    </main>
  );
}

