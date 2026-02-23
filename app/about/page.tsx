import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Header />

      <section style={{ marginTop: "3rem", maxWidth: "800px" }}>
        <h1>About Skyframe</h1>

        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          Skyframe is built on a simple idea: empower people to move through the
          world with clarity, confidence, and secure access to the tools they
          need. Whether you're navigating digital systems or physical spaces,
          Skyframe provides a seamless, intuitive experience designed to keep you
          focused on what matters.
        </p>

        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          This platform is engineered with modern security, clean design, and a
          modular architecture that scales with your needs — from personal use to
          enterprise environments.
        </p>
      </section>

      <Footer />
    </main>
  );
}

