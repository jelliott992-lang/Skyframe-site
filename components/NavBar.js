import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
            Skyframe
          </Link>
          <nav style={{ display: "flex", gap: "1rem", fontSize: "0.95rem" }}>
            <Link href="/#solutions">Solutions</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#resources">Resources</Link>
            <Link href="/#about">About</Link>
          </nav>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {session ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={() => signOut()} style={{ fontSize: "0.9rem" }}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <button onClick={() => signIn()} style={{ fontSize: "0.9rem" }}>
                Sign in
              </button>
              <button
                onClick={() => signIn()}
                style={{
                  fontSize: "0.9rem",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "999px",
                  border: "none",
                  background: "#2563eb",
                  color: "white"
                }}
              >
                Get started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

