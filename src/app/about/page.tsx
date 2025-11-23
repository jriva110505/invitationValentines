import Image from "next/image";

export default function About() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Top Half Background */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image
          src="/as.jpg"
          alt="Top Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        />

        {/* About Me Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "white" }}>
            About Me
          </h2>

          {/* Two Images */}
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            {/* Personal Photo */}
            <div style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 15px rgba(255,255,255,0.4)",
                }}
              >
                <Image src="/1.jpg" alt="Your Photo" width={200} height={200} />
              </div>
              <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>Jerome Riva</p>
            </div>

            {/* NCF Logo */}
            <div style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 15px rgba(0,243,65,0.4)",
                }}
              >
                <Image src="/ncf.webp" alt="NCF Logo" width={200} height={200} />
              </div>
              <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>NCF - Present</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <a
        href="/"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          color: "white",
          fontSize: "1.1rem",
          textDecoration: "none",
          fontWeight: "bold",
          zIndex: 20,
          padding: "8px 14px",
          border: "2px solid white",
          borderRadius: "6px",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        ← Back
      </a>

      {/* Bottom Half */}
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "4rem 2rem",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "rgba(32, 29, 29, 0.7)",
            padding: "2rem",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* About Text */}
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            I am a dedicated Bachelor of Science in Information Technology student at Naga College Foundation (NCF),
            committed to developing strong technical and analytical skills in the field of computing. My academic journey
            has allowed me to explore core areas such as programming, web development, and system operations—strengthening my 
            ability to approach challenges with logic, creativity, and precision.
          </p>

          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Beyond my coursework, I actively participate in school activities and events that promote leadership, teamwork,
            and personal growth. I aim to continue building my technical expertise while contributing positively to every project and team I am part of.
          </p>

          {/* Achievements */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "3rem",
            }}
          >
            {[ 
              { src: "/ach1.jpg", title: "Best Coding Project", year: "2023" },
              { src: "/ach2.jpg", title: "Web Development Award", year: "2022" },
              { src: "/ach3.jpg", title: "IT Excellence", year: "2021" },
            ].map((ach, i) => (
              <div key={i} style={{ textAlign: "center", flex: "1 1 30%" }}>
                <div style={{ width: "100%", height: "150px", overflow: "hidden", borderRadius: "10px" }}>
                  <Image
                    src={ach.src}
                    alt={ach.title}
                    width={500}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>{ach.title}</h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{ach.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
