import Image from "next/image";

export default function Hobbies() {
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

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
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
          fontSize: "1.05rem",
          textDecoration: "none",
          fontWeight: "700",
          zIndex: 10,
          padding: "8px 14px",
          border: "2px solid rgba(255,255,255,0.9)",
          borderRadius: "6px",
          backdropFilter: "blur(3px)",
        }}
      >
        ← Back
      </a>

      {/* Main Content */}
      <section
        id="hobbies"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "2rem",
            textAlign: "center",
            fontWeight: "800",
            color: "white", // changed to plain white
          }}
        >
          My Hobbies
        </h2>

        {/* Hobby Card - Cycling */}
        <div
          style={{
            position: "relative",
            padding: "1.5rem",
            borderRadius: "14px",
            marginBottom: "1.5rem",
            borderLeft: "8px solid #ff4fd8",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(255,79,216,0.3)",
            zIndex: 2,
          }}
        >
          {/* Card background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/bbike.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.28,
              zIndex: 0,
            }}
          />

          {/* Round icon */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid #ff4fd8",
              zIndex: 3,
            }}
          >
            <Image src="/bike.jpg" alt="Cycling" width={100} height={100} />
          </div>

          <div style={{ zIndex: 3 }}>
            <h3 style={{ fontSize: "1.7rem", marginBottom: "0.3rem" }}>Cycling</h3>
            <p style={{ opacity: 0.95 }}>I love biking around and exploring new places.</p>
          </div>
        </div>

        {/* Hobby Card - Photography */}
        <div
          style={{
            position: "relative",
            padding: "1.5rem",
            borderRadius: "14px",
            marginBottom: "1.5rem",
            borderLeft: "8px solid #ffd700",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(255,215,0,0.3)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/pics.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.28,
              zIndex: 0,
            }}
          />

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid #ffd700",
              zIndex: 3,
            }}
          >
            <Image src="/pic.jpg" alt="Photography" width={100} height={100} />
          </div>

          <div style={{ zIndex: 3 }}>
            <h3 style={{ fontSize: "1.7rem", marginBottom: "0.3rem" }}>Photography</h3>
            <p style={{ opacity: 0.95 }}>Capturing moments is one of my passions.</p>
          </div>
        </div>

        {/* Hobby Card - Music */}
        <div
          style={{
            position: "relative",
            padding: "1.5rem",
            borderRadius: "14px",
            marginBottom: "1.5rem",
            borderLeft: "8px solid #00e1ff",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(0,225,255,0.3)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/music.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.28,
              zIndex: 0,
            }}
          />

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid #00e1ff",
              zIndex: 3,
            }}
          >
            <Image src="/catsing.jpg" alt="Music" width={200} height={200} />
          </div>

          <div style={{ zIndex: 3 }}>
            <h3 style={{ fontSize: "1.7rem", marginBottom: "0.3rem" }}>
              Listening to Music
            </h3>
            <p style={{ opacity: 0.95 }}>Music keeps me inspired and energized.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
