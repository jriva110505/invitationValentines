import Image from "next/image";

export default function Contact() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Background Image */}
      <Image
        src="/qqq.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
        }}
      />

      {/* Back Button */}
      <a
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "white",
          fontSize: "1.1rem",
          textDecoration: "none",
          fontWeight: "bold",
          zIndex: 10,
          padding: "8px 14px",
          border: "2px solid white",
          borderRadius: "6px",
          backdropFilter: "blur(4px)",
          transition: "0.3s",
        }}
      >
        ← Back
      </a>

      {/* Main Content */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "700px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "1.5rem",
            fontWeight: "900",
            color: "white", // changed from gradient to white
          }}
        >
          Contact Me
        </h2>

        <p style={{ opacity: 0.95, marginBottom: "2rem", fontSize: "1.25rem" }}>
          Feel free to reach out through any of the methods below!
        </p>

        {/* Contact Card with Glass + Glow */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: "2.2rem",
            borderRadius: "14px",
            textAlign: "left",
            borderLeft: "8px solid #38bdf8",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 20px rgba(56,189,248,0.3)",
          }}
        >
          {/* Phone */}
          <div style={{ marginBottom: "1.6rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>Phone</h3>
            <p style={{ fontSize: "1.15rem", opacity: 0.9 }}>0912 345 6789</p>
          </div>

          <div
            style={{
              height: "1px",
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              marginBottom: "1.6rem",
            }}
          />

          {/* Email */}
          <div style={{ marginBottom: "1.6rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>Email</h3>
            <p style={{ fontSize: "1.15rem", opacity: 0.9 }}>
              rivejerome@example.com
            </p>
          </div>

          <div
            style={{
              height: "1px",
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              marginBottom: "1.6rem",
            }}
          />

          {/* Social Media */}
          <h3 style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>Social Media</h3>

          <div
            style={{
              display: "flex",
              gap: "1.2rem",
              flexWrap: "wrap",
              fontSize: "1.15rem",
            }}
          >
            {/* FB */}
            <a
              href="https://web.facebook.com/Jerome.Riva.009"
              target="_blank"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              Facebook
            </a>

            {/* IG */}
            <a
              href="https://www.instagram.com/jeromeeeeeer/"
              target="_blank"
              style={{
                color: "#f472b6",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              Instagram
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@jeromeriva4"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              TikTok
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/jriva110505"
              target="_blank"
              style={{
                color: "#10b981",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
