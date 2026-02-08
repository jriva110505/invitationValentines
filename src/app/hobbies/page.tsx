"use client";

export default function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#e6b3f7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* HEART & ROSE FIREWORKS */}
      <style>{`
        @keyframes explode {
          0% {
            transform: scale(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(2.5) translateY(-120px);
            opacity: 0;
          }
        }

        .firework {
          position: absolute;
          font-size: 2.5rem;
          animation: explode 2.5s ease-out infinite;
          pointer-events: none;
        }

        .fw1 { top: 20%; left: 25%; animation-delay: 0s; }
        .fw2 { top: 40%; left: 70%; animation-delay: 0.6s; }
        .fw3 { top: 65%; left: 30%; animation-delay: 1.2s; }
        .fw4 { top: 30%; left: 55%; animation-delay: 1.8s; }
        .fw5 { top: 75%; left: 75%; animation-delay: 2.4s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .float-slow {
          animation: float 5s ease-in-out infinite;
        }

        .link {
          color: #7a003c;
          font-weight: bold;
          text-decoration: none;
        }

        .link:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* FIREWORK EMOJIS */}
      <div className="firework fw1">❤️</div>
      <div className="firework fw2">🌹</div>
      <div className="firework fw3">💖</div>
      <div className="firework fw4">🌹</div>
      <div className="firework fw5">❤️</div>

      {/* CONTENT CARD */}
      <div
        className="float"
        style={{
          backgroundColor: "rgba(230,179,247,0.9)",
          padding: "3rem",
          borderRadius: "20px",
          textAlign: "center",
          maxWidth: "900px",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "5rem",
            color: "#7a003c",
            letterSpacing: "4px",
            marginBottom: "2rem",
          }}
        >
          YEEHHHEEYYY!!!
        </h1>

        {/* CONTENT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* LEFT IMAGE */}
          <img
            src="/smiledog.jpg"
            alt="dog"
            className="float-slow"
            style={{
              width: "180px",
              borderRadius: "10px",
            }}
          />

          {/* INFO */}
          <div
            className="float"
            style={{
              fontSize: "1.1rem",
              color: "black",
              lineHeight: "2",
              letterSpacing: "1px",
            }}
          >
            <p>DATE: FEB 14 </p>

            <p>
              PLACE:{" "}
              <a
                href="https://www.google.com/maps/search/Don+Rodolfos+Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                DONRODOLFOS CAFE
              </a>
            </p>

            <p>DRESSCODE: RED OR BLACK</p>
            <p>TIME TO PICK UP: 10AM</p>

            <br />

            <strong>SEE YOU THAT DAY LOVIEEE! 💕</strong>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/smilecat.jpg"
            alt="cat"
            className="float-slow"
            style={{
              width: "180px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
