import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <Header />

      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#f5f5f5",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Welcome to Skyframe
        </h1>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.2rem",
            lineHeight: "1.6",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          A clean, modern platform built for secure access, seamless workflows,
          and a beautifully simple experience.
        </p>

        <button
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "none",
            background: "#0078d4",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Features</h2>

        <div
          style={{
            margin

