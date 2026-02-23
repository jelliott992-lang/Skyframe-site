import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 0",
        borderBottom: "1px solid #ddd",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: 600 }}>Skyframe</div>

      <nav style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

