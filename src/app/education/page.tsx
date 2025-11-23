import Image from "next/image";

export default function Education() {
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

      {/* BACK BUTTON */}
      <a
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: "bold",
          zIndex: 10,
          padding: "8px 14px",
          border: "2px solid white",
          borderRadius: "6px",
          backdropFilter: "blur(3px)",
          textDecoration: "none",
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
          maxWidth: "900px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "2.5rem",
            textAlign: "center",
            fontWeight: "800",
            color: "white", // changed from gradient to white
          }}
        >
          Education
        </h2>

        {/* College */}
        <div
          style={{
            position: "relative",
            padding: "2rem",
            borderRadius: "14px",
            marginBottom: "2rem",
            borderLeft: "8px solid #06ed44ff",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(6,237,68,0.3)",
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/ncf.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid #06ed44ff",
              zIndex: 1,
            }}
          >
            <Image src="/ncf.webp" alt="College Icon" width={110} height={110} />
          </div>

          {/* Text */}
          <div style={{ zIndex: 1 }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>
              Bachelor of Science in Information Technology
            </h3>
            <p style={{ fontSize: "1.2rem", margin: 0, opacity: 0.9 }}>
              Naga College Foundation (NCF)
            </p>
            <p style={{ marginTop: "0.5rem", opacity: 0.8 }}>Present</p>
          </div>
        </div>

        {/* High School */}
        <div
          style={{
            position: "relative",
            padding: "2rem",
            borderRadius: "14px",
            borderLeft: "8px solid #2900f6ff",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(41,0,246,0.3)",
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/camhi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid #2900f6ff",
              zIndex: 1,
            }}
          >
            <Image src="/camhi.png" alt="High School Icon" width={110} height={110} />
          </div>

          {/* Text */}
          <div style={{ zIndex: 1 }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.3rem" }}>
              High School - Senior High School
            </h3>
            <p style={{ fontSize: "1.2rem", margin: 0, opacity: 0.9 }}>
              Camarines Sur National High School (CSNHS)
            </p>
            <p style={{ marginTop: "0.5rem", opacity: 0.8 }}>Completed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
